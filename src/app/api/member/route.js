import { NextResponse } from "next/server";
import ConnectMongoose from "@/utilis/connectMongoose";
import Member from "@/models/Member";
import cloudinary from "@/utilis/cloudinary";

export async function POST(req) {
  try {
    await ConnectMongoose();

    const formData = await req.formData();
    const name = formData.get("name");
    const role = formData.get("role");
    const facebook = formData.get("facebook");
    const twitter = formData.get("twitter");
    const instagram = formData.get("instagram");
    const linkedin = formData.get("linkedin");
    const file = formData.get("image");

    if (!file || !file.name) {
      return NextResponse.json(
        { error: "Image file is required" },
        { status: 400 }
      );
    }

    // ✅ Convert File → Buffer
    const buffer = Buffer.from(await file.arrayBuffer());

    // ✅ Upload to Cloudinary
    const uploadResult = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: "members" },
        (error, result) => (error ? reject(error) : resolve(result))
      );
      stream.end(buffer);
    });

    const member = await Member.create({
      name,
      role,
      facebook,
      twitter,
      instagram,
      linkedin,
      imageUrl: uploadResult.secure_url,
    });

    return NextResponse.json(
      { message: "Member added successfully!", member },
      { status: 201 }
    );
  } catch (err) {
    console.error("POST Error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    await ConnectMongoose();
    const members = await Member.find();
    return NextResponse.json(members, { status: 200 });
  } catch (err) {
    console.error("GET Error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
