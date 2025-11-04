import { NextResponse } from "next/server";
import ConnectMongoose from "@/utilis/connectMongoose";
import Member from "@/models/Member";
import cloudinary from "@/utilis/cloudinary";

export async function GET(req, { params }) {
  try {
    const { id } = await params;
    await ConnectMongoose();

    const member = await Member.findById(id);
    if (!member)
      return NextResponse.json({ error: "Member not found" }, { status: 404 });

    return NextResponse.json(member, { status: 200 });
  } catch (error) {
    console.error("GET /member/:id Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    const { id } = await params;
    await ConnectMongoose();

    const formData = await req.formData();
    const updates = Object.fromEntries(formData.entries());

    const existingMember = await Member.findById(id);
    if (!existingMember)
      return NextResponse.json({ error: "Member not found" }, { status: 404 });

    let imageUrl = existingMember.imageUrl;

    // ✅ Check for changes (excluding image)
    const hasChanges = Object.keys(updates).some(
      (key) => updates[key] !== existingMember[key]?.toString()
    );

    const file = formData.get("image");

    // ✅ If no changes and no new image, skip update
    if (!hasChanges && !file) {
      return NextResponse.json(
        { message: "No changes made", member: existingMember },
        { status: 200 }
      );
    }

    // ✅ Handle new image upload if present
    if (file && file.name) {
      // Delete old image from Cloudinary
      if (imageUrl) {
        const publicId = imageUrl.split("/").pop().split(".")[0];
        await cloudinary.uploader.destroy(`members/${publicId}`);
      }

      // Upload new image to Cloudinary
      const buffer = Buffer.from(await file.arrayBuffer());
      const upload = await new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream({ folder: "members" }, (err, result) =>
            err ? reject(err) : resolve(result)
          )
          .end(buffer);
      });

      imageUrl = upload.secure_url;
    }

    // ✅ Update MongoDB document
    const updatedMember = await Member.findByIdAndUpdate(
      id,
      { ...updates, imageUrl },
      { new: true }
    );

    return NextResponse.json({
      message: "Member updated successfully",
      member: updatedMember,
    });
  } catch (error) {
    console.error("PUT /member/:id Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = await params;
    await ConnectMongoose();

    const member = await Member.findById(id);
    if (!member)
      return NextResponse.json({ error: "Member not found" }, { status: 404 });

    // Delete image from Cloudinary if it exists
    if (member.imageUrl) {
      const publicId = member.imageUrl.split("/").pop().split(".")[0];
      await cloudinary.uploader.destroy(`members/${publicId}`);
    }

    await Member.findByIdAndDelete(id);

    return NextResponse.json({ message: "Member deleted successfully" });
  } catch (error) {
    console.error("DELETE /member/:id Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
