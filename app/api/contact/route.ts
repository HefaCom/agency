import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': process.env.BREVO_API_KEY!,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        sender: {
          name: 'AI Automation Agency',
          email: 'noreply@aiautomationagency.com'
        },
        to: [{
          email: process.env.ADMIN_EMAIL,
          name: 'Admin'
        }],
        subject: 'New Contact Form Submission',
        htmlContent: `
          <h1>New Contact Request</h1>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Service:</strong> ${data.service}</p>
          <p><strong>Meeting Date:</strong> ${data.date}</p>
          <p><strong>Message:</strong> ${data.message}</p>
        `
      })
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }
    
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