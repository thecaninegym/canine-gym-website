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
      html: `<div style="font-family:sans-serif;max-width:600px;margin:0 auto"><h2 style="color:#2c5a9e">New Contact Form Submission</h2><table style="width:100%;border-collapse:collapse"><tr style="border-bottom:1px solid #eee"><td style="padding:12px 0;font-weight:bold;color:#555;width:120px">Name</td><td style="padding:12px 0;color:#111">${name}</td></tr><tr style="border-bottom:1px solid #eee"><td style="padding:12px 0;font-weight:bold;color:#555">Email</td><td style="padding:12px 0;color:#111">${email}</td></tr><tr style="border-bottom:1px solid #eee"><td style="padding:12px 0;font-weight:bold;color:#555">City</td><td style="padding:12px 0;color:#111">${city}</td></tr><tr><td style="padding:12px 0;font-weight:bold;color:#555;vertical-align:top">Message</td><td style="padding:12px 0;color:#111;line-height:1.6">${message.replace(/\n/g, '<br/>')}</td></tr></table></div>`,
    })

    await resend.emails.send({
      from: 'The Canine Gym <info@thecaninegym.com>',
      to: email,
      subject: `We received your message, ${name}!`,
      html: `<div style="font-family:sans-serif;max-width:600px;margin:0 auto"><div style="background:linear-gradient(135deg,#2c5a9e,#3d70c0);padding:40px 32px;border-radius:12px 12px 0 0;text-align:center"><h1 style="color:white;margin:0;font-size:24px">Thanks for reaching out, ${name}!</h1></div><div style="padding:32px;border:1px solid #eee;border-top:none;border-radius:0 0 12px 12px"><p style="color:#555;font-size:16px;line-height:1.7;margin:0 0 20px 0">We received your message and will get back to you within <strong>1 business day</strong>.</p><p style="color:#555;font-size:15px;line-height:1.7;margin:0 0 12px 0">Here's a copy of what you sent:</p><div style="background:#f8f9fa;border-radius:10px;padding:20px 24px;margin-bottom:28px"><p style="color:#999;font-size:12px;font-weight:bold;text-transform:uppercase;letter-spacing:1px;margin:0 0 8px 0">Your Message</p><p style="color:#333;font-size:15px;line-height:1.7;margin:0">${message.replace(/\n/g, '<br/>')}</p></div><a href="https://app.thecaninegym.com" style="display:inline-block;background:#f88124;color:white;padding:14px 28px;border-radius:8px;text-decoration:none;font-weight:bold;font-size:15px">Visit The Canine Gym App</a><hr style="border:none;border-top:1px solid #eee;margin:32px 0"/><p style="color:#aaa;font-size:13px;margin:0">The Canine Gym · Hamilton County, Indiana · thecaninegym.com</p></div></div>`,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}