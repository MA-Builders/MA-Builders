import ConnectMongoose from "@/utilis/connectMongoose";
import Portfolio from "@/models/Portfolio";
import { NextResponse } from "next/server";
import cloudinary from "@/utilis/cloudinary";

export async function POST(req){
    try{
    await ConnectMongoose();
    const formData = await req.formData();
    const title = formData.get("title");
    const location = formData.get("location");
    const type = formData.get("type");
    const status = formData.get("status");
    const description = formData.get("description");

    const imageFiles = [
        formData.get("image1"),
        formData.get("image2"),
        formData.get("image3")
    ].filter(Boolean);

    const uploadedImages=[];

    for (const file of imageFiles) {
      if (!file || !file.name) continue;

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
    
    const portfolio = await Portfolio.create({
        title,
        location,
        type,
        status,
        description,
        images:uploadedImages
    });

    if(!portfolio){
        return NextResponse.json({message:"Portfolio not created"},{status:404});
    }
    return NextResponse.json(portfolio,{status:201});
    }
    catch(err)
    {
    return NextResponse.json({error:err.message},{status:500});
    }
}

export async function GET(){
    try{
    await ConnectMongoose();
    const portfolios = await Portfolio.find().sort({createdAt:-1});
    return NextResponse.json(portfolios,{status:200});
    }
    catch(err){
    return NextResponse.json({error:err.message},{status:500});
    }
}