import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";
export async function POST(req) {
  try {
    const {
      name,
      location,
      mobile,
      email,
      constructionArea,
      packageType,
      carParking,
      sump,
      wasteTank,
      compoundWall,
      solarPower,
      total,
    } = await req.json();

    const htmlContent = `
      <html>
  <head>
    <style>
      body {
        font-family: Arial, sans-serif;
        background: #f5f5f5;
        padding: 20px;
      }
      h2 {
        color: #2f5966;
        text-align: center;
      }
      h3{
        color: #e1a73b;
      }
      .section {
        margin-bottom: 20px;
      }
      ul {
        list-style: none;
        padding: 0;
      }
      li {
        margin-bottom: 8px;
        color: #2f5966;
      }
      .total {
        font-size: 1.2rem;
        color: #e1a73b;
      }
      span{
        color: #2f5966;
      }
    </style>
  </head>
  <body>
    <h2>Construction Cost Summary</h2>
    <div class="section">
      <h3>Personal Details</h3>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Location:</strong> ${location}</li>
        <li><strong>Mobile:</strong> ${mobile}</li>
        <li><strong>Email:</strong> ${email}</li>
      </ul>
    </div>

    <div class="section">
      <h3>Construction Details</h3>
      <ul>
        <li><strong>Construction Area:</strong> ${constructionArea} sq.ft</li>
        <li><strong>Package Type:</strong> ${packageType}</li>
        <li><strong>Car Parking:</strong> ${carParking} sq.ft</li>
        <li><strong>Underground Sump:</strong> ${sump} L</li>
        <li><strong>Waste Tanks:</strong> ${wasteTank}</li>
        <li><strong>Compound Wall:</strong> ${compoundWall} ft</li>
        <li><strong>Solar Power:</strong> ${solarPower} kW</li>
      </ul>
      <p class="total">
        <strong>Total Cost:</strong>
        <span>₹ ${Number(total).toLocaleString("en-IN")}</span>
      </p>
    </div>
  </body>
</html>`;
    // ✅ Configure Nodemailer (Gmail example)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    const mailOptions = {
      from: `"Construction Calculator" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your Construction Cost Summary",
      html: htmlContent,
    };
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("EMAIL ERROR:", error);
    return NextResponse.json(
      { message: "Failed to send email", error: error.message },
      { status: 500 }
    );
  }
}