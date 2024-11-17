import * as SibApiV3Sdk from '@sendinblue/client';
import { NextResponse } from 'next/server';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
    
    // Configure API key authorization
    apiInstance.setApiKey(
      SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey,
      process.env.BREVO_API_KEY
    );

    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
    
    // Configure email
    sendSmtpEmail.subject = "New Contact Form Submission";
    sendSmtpEmail.htmlContent = `
      <h1>New Contact Request</h1>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Service:</strong> ${data.service}</p>
      <p><strong>Meeting Date:</strong> ${data.date}</p>
      <p><strong>Message:</strong> ${data.message}</p>
    `;
    sendSmtpEmail.sender = { 
      name: "AI Automation Agency",
      email: "noreply@aiautomationagency.com"
    };
    sendSmtpEmail.to = [{ email: process.env.ADMIN_EMAIL }];

    await apiInstance.sendTransacEmail(sendSmtpEmail);
    
    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}