import ConnectMongoose from "@/utilis/connectMongoose";
import Portfolio from "@/models/Portfolio";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    await ConnectMongoose();
    const { id } = await params;
    const portfolio = await Portfolio.findById(id);
    if (!portfolio) {
      return NextResponse.json({ error: "not found" }, { status: 404 });
    }
    return NextResponse.json(portfolio, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    await ConnectMongoose();
    const { id } = await params;
    const formData = await req.formData();

    const title = formData.get("title");
    const location = formData.get("location");
    const type = formData.get("type");
    const status = formData.get("status");
    const description = formData.get("description");

    const imageFiles = [
      formData.get("image1"),
      formData.get("image2"),
      formData.get("image3"),
    ].filter((f) => f && f.name);

    const uploadedImages = [];
    for (const file of imageFiles) {
      const buffer = Buffer.from(await file.arrayBuffer());
      const uploadResult = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: "portfolio_uploads" },
          (error, result) => (error ? reject(error) : resolve(result))
        );
        stream.end(buffer);
      });
      uploadedImages.push(uploadResult.secure_url);
    }
    const updateData = {
      title,
      location,
      type,
      status,
      description,
    };
    if (uploadedImages.length > 0) {
      updateData.images = uploadedImages;
    }
    const updatedPortfolio = await Portfolio.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!updatedPortfolio) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    return NextResponse.json(
      {
        message: "Portfolio updated successfully!",
        portfolio: updatedPortfolio,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("PUT Error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    await ConnectMongoose();
    const { id } = await params;
    const deleted = await Portfolio.findByIdAndDelete(id);
    if (!deleted) {
      return NextResponse.json({ message: "could not found" }, { status: 404 });
    }
    return NextResponse.json(
      { message: "Deleted successfully" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
