import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, mobileNumber, subject, message } = await req.json();
  if (!name || !email || !mobileNumber || !subject || !message) {
    return new Response(
      JSON.stringify({
        success: false,
        error: "All fields are required",
      }),
      { status: 400 }
    );
  }
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  try {
    await transporter.sendMail({
      from: `"Website Contact Form" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: subject || `New message from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Mobile: ${mobileNumber}

Message:
${message}
      `,
    });
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}
