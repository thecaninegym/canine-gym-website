'use client'
import { useState } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { PawPrint, MapPin, Mail, Clock } from 'lucide-react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', city: '', message: '' })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(false)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", color: '#111', backgroundColor: 'white' }}>
      <Nav />

      {/* HERO */}
      <section style={{ background: 'linear-gradient(135deg, #003087 0%, #004db3 100%)', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <p style={{ color: '#FF6B35', fontWeight: '700', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 16px 0' }}>Get In Touch</p>
          <h1 style={{ color: 'white', fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: '800', margin: '0 0 20px 0', letterSpacing: '-1px', lineHeight: 1.1 }}>Contact Us</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '18px', lineHeight: 1.6, margin: 0 }}>Questions, feedback, or just want to know more? We'd love to hear from you.</p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section style={{ padding: '80px 24px', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '56px', alignItems: 'start' }}>

          {/* Left: Info */}
          <div>
            <h2 style={{ fontSize: '26px', fontWeight: '800', color: '#003087', margin: '0 0 8px 0' }}>We're Here to Help</h2>
            <p style={{ color: '#666', fontSize: '15px', lineHeight: 1.7, margin: '0 0 36px 0' }}>Whether you have a question about our service, need help with your account, or want to find out when we're coming to your area — just reach out.</p>

            {[
              { icon: <Mail size={20} color="#FF6B35" />, label: 'Email', value: 'info@thecaninegym.com', href: 'mailto:info@thecaninegym.com' },
              { icon: <MapPin size={20} color="#FF6B35" />, label: 'Service Area', value: 'Hamilton County, Indiana', href: null },
              { icon: <Clock size={20} color="#FF6B35" />, label: 'Response Time', value: 'Within 1 business day', href: null },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '14px', marginBottom: '24px', alignItems: 'flex-start' }}>
                <div style={{ width: '40px', height: '40px', backgroundColor: '#fff5f0', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {item.icon}
                </div>
                <div>
                  <p style={{ color: '#999', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 4px 0' }}>{item.label}</p>
                  {item.href ? (
                    <a href={item.href} style={{ color: '#003087', fontWeight: '600', fontSize: '15px', textDecoration: 'none' }}>{item.value}</a>
                  ) : (
                    <p style={{ color: '#111', fontWeight: '600', fontSize: '15px', margin: 0 }}>{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div style={{ backgroundColor: '#f0f4ff', borderRadius: '14px', padding: '20px', marginTop: '32px', border: '1px solid #d0daf5' }}>
              <p style={{ fontWeight: '700', color: '#003087', margin: '0 0 6px 0', fontSize: '14px' }}>Already a customer?</p>
              <p style={{ color: '#555', fontSize: '13px', margin: '0 0 12px 0', lineHeight: 1.6 }}>For booking, account, or session questions, log into the app directly.</p>
              <a href="https://app.thecaninegym.com" style={{ color: '#FF6B35', fontWeight: '700', fontSize: '14px', textDecoration: 'none' }}>Go to App →</a>
            </div>
          </div>

          {/* Right: Form */}
          <div style={{ backgroundColor: 'white', borderRadius: '20px', padding: '40px', border: '1px solid #eee', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <PawPrint size={48} color="#FF6B35" style={{ marginBottom: '16px' }} />
                <h3 style={{ fontWeight: '800', fontSize: '22px', color: '#003087', margin: '0 0 12px 0' }}>Message Sent!</h3>
                <p style={{ color: '#666', fontSize: '15px', lineHeight: 1.6 }}>Thanks for reaching out. We'll get back to you within one business day.</p>
              </div>
            ) : (
              <>
                <h3 style={{ fontWeight: '800', fontSize: '20px', color: '#003087', margin: '0 0 28px 0' }}>Send Us a Message</h3>
                <form onSubmit={handleSubmit}>
                  {[
                    { label: 'Your Name', key: 'name', type: 'text', placeholder: 'Jane Smith' },
                    { label: 'Email Address', key: 'email', type: 'email', placeholder: 'jane@example.com' },
                    { label: 'Your City', key: 'city', type: 'text', placeholder: 'Carmel, Fishers, etc.' },
                  ].map((field) => (
                    <div key={field.key} style={{ marginBottom: '20px' }}>
                      <label style={{ display: 'block', fontWeight: '600', fontSize: '13px', color: '#333', marginBottom: '6px' }}>{field.label}</label>
                      <input
                        type={field.type}
                        required
                        placeholder={field.placeholder}
                        value={form[field.key as keyof typeof form]}
                        onChange={e => setForm({ ...form, [field.key]: e.target.value })}
                        style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '15px', outline: 'none', boxSizing: 'border-box' }}
                      />
                    </div>
                  ))}
                  <div style={{ marginBottom: '24px' }}>
                    <label style={{ display: 'block', fontWeight: '600', fontSize: '13px', color: '#333', marginBottom: '6px' }}>Message</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="How can we help?"
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '15px', outline: 'none', resize: 'vertical', boxSizing: 'border-box' }}
                    />
                  </div>
                  {error && (
                    <p style={{ color: '#dc3545', fontSize: '14px', margin: '0 0 12px 0' }}>Something went wrong. Please try again or email us directly at info@thecaninegym.com</p>
                  )}
                  <button type="submit" disabled={loading} style={{ width: '100%', backgroundColor: loading ? '#ccc' : '#FF6B35', color: 'white', padding: '14px', borderRadius: '8px', border: 'none', fontWeight: 'bold', fontSize: '16px', cursor: loading ? 'not-allowed' : 'pointer' }}>
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}