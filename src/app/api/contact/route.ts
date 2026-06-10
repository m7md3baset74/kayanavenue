import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  
  try {
    const { name, phone, email, type, message } = await req.json();

    const typeLabel: Record<string, string> = {
      buy: "Buy Property",
      sell: "Sell Property",
      invest: "Investment Consultation",
      rent: "Exclusive Opportunities",
    };

    const result = await resend.emails.send({
      from: "Kayan Avenue <info@kayanavenue.ae>",
      to: "info@kayanavenue.ae",
      replyTo: email,
      subject: `New Inquiry — ${typeLabel[type] ?? type}`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:32px;background:#f9f9f9;border-radius:12px;">
          <h2 style="color:#1a1a2e;margin-bottom:4px;">New Contact Form Submission</h2>
          <p style="color:#888;font-size:13px;margin-bottom:24px;">Kayan Avenue Properties Website</p>
          <table style="width:100%;border-collapse:collapse;font-size:14px;">
            <tr><td style="padding:10px 0;color:#888;width:140px;">Name</td><td style="padding:10px 0;color:#1a1a2e;font-weight:600;">${name}</td></tr>
            <tr style="border-top:1px solid #eee;"><td style="padding:10px 0;color:#888;">Phone</td><td style="padding:10px 0;color:#1a1a2e;">${phone || "—"}</td></tr>
            <tr style="border-top:1px solid #eee;"><td style="padding:10px 0;color:#888;">Email</td><td style="padding:10px 0;color:#1a1a2e;">${email}</td></tr>
            <tr style="border-top:1px solid #eee;"><td style="padding:10px 0;color:#888;">Request Type</td><td style="padding:10px 0;color:#1a1a2e;">${typeLabel[type] ?? type}</td></tr>
            <tr style="border-top:1px solid #eee;"><td style="padding:10px 0;color:#888;vertical-align:top;">Message</td><td style="padding:10px 0;color:#1a1a2e;">${message || "—"}</td></tr>
          </table>
          <p style="margin-top:24px;font-size:12px;color:#bbb;">Sent from kayanavenue.com contact form</p>
        </div>
      `,
    });

    if (result.error) {
  return NextResponse.json(
    { success: false, error: result.error.message },
    { status: 400 }
  );
}

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}