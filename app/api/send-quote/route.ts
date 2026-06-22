import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Force Node.js runtime so nodemailer works (no Edge runtime)
export const runtime = 'nodejs';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, product, message } = body;

    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: 'First name, last name, and email are required.' },
        { status: 400 }
      );
    }

    const fullName = `${firstName} ${lastName}`;
    const productLabel = product || 'Not specified';
    const phoneLabel = phone || 'Not provided';
    const messageLabel = message || 'No details provided';

    // ─── Email to Admin ────────────────────────────────────────────────
    await transporter.sendMail({
      from: `"Star Sourcing Website" <${process.env.GMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `📋 New Quote Request from ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9fafb; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%); padding: 32px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px; font-weight: 700;">New Quote Request</h1>
            <p style="color: rgba(255,255,255,0.85); margin: 8px 0 0; font-size: 14px;">Received from your website</p>
          </div>
          <div style="padding: 32px; background: white; margin: 16px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.08);">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 13px; width: 40%;">Full Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827; font-weight: 600;">${fullName}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 13px;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827; font-weight: 600;">
                  <a href="mailto:${email}" style="color: #dc2626; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 13px;">Phone</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827; font-weight: 600;">${phoneLabel}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 13px;">Product</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827; font-weight: 600;">${productLabel}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #6b7280; font-size: 13px; vertical-align: top; padding-top: 16px;">Project Details</td>
                <td style="padding: 12px 0; color: #111827; padding-top: 16px;">${messageLabel}</td>
              </tr>
            </table>
          </div>
          <div style="padding: 16px 32px; text-align: center;">
            <p style="color: #9ca3af; font-size: 12px; margin: 0;">This email was sent automatically by the Star Sourcing website.</p>
          </div>
        </div>
      `,
    });

    // ─── Confirmation Email to User ────────────────────────────────────
    await transporter.sendMail({
      from: `"Star Sourcing" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: `✅ We received your quote request, ${firstName}!`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9fafb; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%); padding: 32px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px; font-weight: 700;">Thank You, ${firstName}! 🎉</h1>
            <p style="color: rgba(255,255,255,0.85); margin: 8px 0 0; font-size: 14px;">Your quote request has been received</p>
          </div>
          <div style="padding: 32px; background: white; margin: 16px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.08);">
            <p style="color: #374151; font-size: 15px; line-height: 1.7; margin: 0 0 20px;">
              Hi <strong>${firstName}</strong>, thanks for reaching out to <strong>Star Sourcing</strong>! 
              We've received your quote request and our team is already reviewing it.
            </p>
            <div style="background: #fef2f2; border-left: 4px solid #dc2626; border-radius: 4px; padding: 16px; margin: 20px 0;">
              <p style="margin: 0; color: #991b1b; font-weight: 600; font-size: 14px;">⚡ What happens next?</p>
              <p style="margin: 8px 0 0; color: #7f1d1d; font-size: 14px; line-height: 1.6;">
                One of our printing consultants will prepare a tailored quote for your project and get back to you within <strong>2 business hours</strong>.
              </p>
            </div>
            <p style="color: #6b7280; font-size: 13px; margin: 20px 0 0;">
              In the meantime, if you have any urgent questions, feel free to call us at 
              <a href="tel:+923214091144" style="color: #dc2626; font-weight: 600; text-decoration: none;">+92 321 409 1144</a>.
            </p>
          </div>
          <div style="padding: 16px 32px; text-align: center; border-top: 1px solid #e5e7eb; margin: 0 16px;">
            <p style="color: #9ca3af; font-size: 12px; margin: 0;">
              © ${new Date().getFullYear()} Star Sourcing. All rights reserved.<br/>
              <span style="font-size: 11px;">You're receiving this email because you submitted a quote request on our website.</span>
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, message: 'Emails sent successfully.' });
  } catch (error: unknown) {
    console.error('Email send error:', error);
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: `Failed to send email: ${message}` }, { status: 500 });
  }
}
