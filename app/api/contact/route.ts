import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, city, message } = await req.json()

    await resend.emails.send({
      from: 'The Canine Gym <info@thecaninegym.com>',
      to: 'info@thecaninegym.com',
      replyTo: email,
      subject: `New Contact Form Message from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #003087;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 12px 0; font-weight: bold; color: #555; width: 120px;">Name</td>
              <td style="padding: 12px 0; color: #111;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 12px 0; font-weight: bold; color: #555;">Email</td>
              <td style="padding: 12px 0; color: #111;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 12px 0; font-weight: bold; color: #555;">City</td>
              <td style="padding: 12px 0; color: #111;">${city}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; font-weight: bold; color: #555; vertical-align: top;">Message</td>
              <td style="padding: 12px 0; color: #111; line-height: 1.6;">${message.replace(/\n/g, '<br/>')}</td>
            </tr>
          </table>
          <div style="margin-top: 32px; padding: 16px; background: #f8f9fa; border-radius: 8px;">
            <p style="margin: 0; color: #999; font-size: 13px;">Sent from thecaninegym.com contact form</p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}