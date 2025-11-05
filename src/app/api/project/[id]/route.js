import ConnectMongoose from "@/utilis/connectMongoose";
import Project from "@/models/Project";
import cloudinary from "@/utilis/cloudinary";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    await ConnectMongoose();
    const {id} = await params;
    const project = await Project.findById(id);
    if (!project) {
    return NextResponse.json({ error: "not found" },{ status: 404 });
    }
    return NextResponse.json(project,{ status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err.message },{ status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    await ConnectMongoose();
    const {id} = await params;
    const formData = await req.formData();

    const category = formData.get("category");
    const subCategory = formData.get("subCategory");
    const title = formData.get("title");
    const description = formData.get("description");
    const date = formData.get("date");
    const author = formData.get("author");
    const status = formData.get("status");
    const imageFile = formData.get("image");

    let updateData = {
      category,
      subCategory,
      title,
      description,
      date: date ? new Date(date) : undefined,
      author,
      status,
    };

    // ✅ Upload new image if provided
    if (imageFile && imageFile.name) {
      const arrayBuffer = await imageFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      const uploadedResponse = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: "projects" },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        );
        stream.end(buffer);
      });

      updateData.image = uploadedResponse.secure_url;
    }

    const updatedProject = await Project.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!updatedProject) {
      return NextResponse.json({ error: "not found" }, { status: 404 });
    }
    return NextResponse.json(updatedProject, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    await ConnectMongoose();
    const {id}=await params;
    const deleted = await Project.findByIdAndDelete(id);
    if (!deleted) {
      return NextResponse.json({ error: "not found" }, { status: 404 });
    }
    return NextResponse.json({message: "Project deleted successfully"}, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
