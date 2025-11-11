import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import puppeteer from "puppeteer";

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
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"/>
          <style>
            body { font-family: "Roboto", sans-serif; background:#f5f5f5; padding:20px; color:#2f5966; }
            .card-header { background:#2f5966; color:#e1a73b; font-size:1.25rem; text-align:center; }
            .summary li { margin-bottom:8px; }
            .Total-cost { color:#2f5966; }
            .Total-cost-gold { color:#e1a73b; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-12">
                <div class="card shadow-sm">
                  <h3 class="card-header">Construction Cost Summary</h3>
                  <div class="card-body">
                    <img 
                      src="${process.env.NEXT_PUBLIC_SITE_URL}/img/ma-builders-logo.png"
                      style="width: 80px;" 
                      class="d-block mx-auto mb-3"
                    />
                    <h5>Personal Details</h5>
                    <ul class="list-unstyled">
                      <li><strong>Name:</strong> ${name}</li>
                      <li><strong>Location:</strong> ${location}</li>
                      <li><strong>Mobile:</strong> ${mobile}</li>
                      <li><strong>Email:</strong> ${email}</li>
                    </ul>

                    <h5>Construction Details</h5>
                    <ul class="list-unstyled summary">
                      <li><strong>Construction Area:</strong> ${constructionArea} sq.ft</li>
                      <li><strong>Package Type:</strong> ${packageType}</li>
                      <li><strong>Car Parking:</strong> ${carParking} sq.ft</li>
                      <li><strong>Underground Sump:</strong> ${sump} L</li>
                      <li><strong>Waste Tanks:</strong> ${wasteTank}</li>
                      <li><strong>Compound Wall:</strong> ${compoundWall} ft</li>
                      <li><strong>Solar Power:</strong> ${solarPower} kW</li>
                    </ul>

                    <h5 class="Total-cost-gold">Total Cost:</h5>
                    <p class="Total-cost fs-4">₹ ${Number(total).toLocaleString("en-IN")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    // ✅ Launch Puppeteer normally (Hostinger supports this)
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    // ✅ Generate PDF
    const page = await browser.newPage();
    await page.setContent(htmlContent, { waitUntil: "networkidle0" });

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
    });

    await browser.close();

    // ✅ Nodemailer
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
      subject: "Construction Cost Summary PDF",
      text: "Please find the attached summary PDF.",
      attachments: [
        {
          filename: "construction-summary.pdf",
          content: pdfBuffer,
        },
      ],
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "PDF generated & email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("SEND-SUMMARY ERROR:", error);
    return NextResponse.json(
      { message: "Failed to send email", error: error.message },
      { status: 500 }
    );
  }
}