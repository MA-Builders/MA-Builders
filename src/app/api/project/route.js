import ConnectMongoose from "@/utilis/connectMongoose";
import Project from "@/models/Project";
import cloudinary from "@/utilis/cloudinary";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await ConnectMongoose();
    const formData = await req.formData();

    const category = formData.get("category");
    const subCategory = formData.get("subCategory");
    const title = formData.get("title");
    const description = formData.get("description");
    const date = formData.get("date");
    const author = formData.get("author");
    const status = formData.get("status");
    const imageFile = formData.get("image");

    let imageUrl = "";

    // ✅ Upload image to Cloudinary if provided
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

      imageUrl = uploadedResponse.secure_url;
    }

    const newProject = await Project.create({
      category,
      subCategory,
      title,
      description,
      date: date ? new Date(date) : new Date(),
      author,
      status,
      image: imageUrl,
    });
    return NextResponse.json(newProject, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function GET(req) {
  try {
    await ConnectMongoose();

    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");
    const subCategory = searchParams.get("subCategory");

    let filter = {};
    if (category) filter.category = category;
    if (subCategory) filter.subCategory = subCategory;

    const projects = await Project.find(filter).sort({ createdAt: -1 });
    return NextResponse.json(projects, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

