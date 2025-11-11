import { NextResponse } from "next/server";
import puppeteer from "puppeteer";
import nodemailer from "nodemailer";

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
    <!-- Bootstrap CSS -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <!-- Google Fonts -->
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
      rel="stylesheet"
    />
    <style>
      body {
        font-family: "Roboto", sans-serif;
        background-color: #f5f5f5;
        padding: 20px;
        color: #2f5966;
      }
      .card-header {
        background-color: #2f5966;
        color: #e1a73b;
        font-size: 1.25rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .card-body {
        background-color: #f5f5f5;
      }
      h5 {
        color: #e1a73b;
        margin-top: 15px;
      }
      .summary li {
        margin-bottom: 8px;
      }
      .list-unstyled {
        color: #2f5966;
      }
      .Total-cost {
        color: #2f5966;
      }
      .Total-cost-gold {
        color: #e1a73b;
      }
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
                alt="Logo"
                class="d-block mx-auto mb-3"
                style="width: 80px;"
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
              <p class="Total-cost fs-4">₹ ${total.toLocaleString("en-IN")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>`;
    const browser = await puppeteer.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();
    await page.setContent(htmlContent, { waitUntil: "networkidle0" });
    const pdfBuffer = await page.pdf({ format: "A4", printBackground: true });
    await browser.close();

    // ✅ Email Setup
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ✅ Email Options
    const mailOptions = {
      from: `"Construction Calculator" <${process.env.MAIL_USER}>`,
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

    // ✅ Send Email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "PDF generated & email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to send email", error: error.message },
      { status: 500 }
    );
  }
}
