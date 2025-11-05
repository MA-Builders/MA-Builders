import ConnectMongoose from "@/utilis/connectMongoose";
import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req) {
  try {
    await ConnectMongoose();
    const { name, email, password, confirmPassword } = await req.json();

    if (!name || !email || !password || !confirmPassword)
    {   
        console.log("❌ Missing fields");
        return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }
    if (password !== confirmPassword)
    {
      console.log("❌ Passwords do not match");
      return NextResponse.json(
        { message: "Passwords do not match" },
        { status: 400 }
      );
    }
    const existingUser = await User.findOne({ email });
    if (existingUser){
      console.log("❌ User already exists");
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    const newUser = new User({ name, email, password });
    await newUser.save();

    const token = jwt.sign(
      { id: newUser._id, email: newUser.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    return NextResponse.json(
      { message: "User registered successfully", token },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json({ err: "Internal server error" }, { status: 500 });
  }
}
