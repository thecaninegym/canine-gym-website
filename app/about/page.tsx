import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { PawPrint, Heart, MapPin, Trophy } from 'lucide-react'

export default function About() {
  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", color: '#111', backgroundColor: 'white' }}>
      <Nav />

      {/* HERO */}
      <section style={{ background: 'linear-gradient(135deg, #003087 0%, #004db3 100%)', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <p style={{ color: '#FF6B35', fontWeight: '700', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 16px 0' }}>Our Story</p>
          <h1 style={{ color: 'white', fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: '800', margin: '0 0 20px 0', letterSpacing: '-1px', lineHeight: 1.1 }}>Built by Dog Lovers,<br />For Dog Lovers</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '18px', lineHeight: 1.6, margin: 0 }}>The Canine Gym was founded on a simple belief — that every dog deserves real, consistent exercise. And that it should be easy for owners to provide it.</p>
        </div>
      </section>

      {/* STORY */}
      <section style={{ padding: '80px 24px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'center', marginBottom: '72px' }}>
            <div>
              <p style={{ color: '#FF6B35', fontWeight: '700', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 12px 0' }}>How It Started</p>
              <h2 style={{ fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: '800', color: '#003087', margin: '0 0 20px 0', letterSpacing: '-0.5px' }}>The Problem We Saw</h2>
              <p style={{ color: '#555', fontSize: '16px', lineHeight: 1.8, margin: '0 0 16px 0' }}>
                As dog owners ourselves, we kept running into the same problem. Life gets busy. Walks get skipped. And dogs — especially high-energy breeds — end up under-exercised, restless, and unhealthy.
              </p>
              <p style={{ color: '#555', fontSize: '16px', lineHeight: 1.8, margin: 0 }}>
                We knew there had to be a better way. Not a dog park where you hope your dog runs around. Not a daycare where exercise is an afterthought. A real, structured, professional fitness service — delivered to your door.
              </p>
            </div>
            <div style={{ backgroundColor: '#f0f4ff', borderRadius: '24px', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '12px' }}>
              <PawPrint size={48} color="#003087" style={{ opacity: 0.3 }} />
              <p style={{ color: '#aaa', fontSize: '13px', margin: 0 }}>Photo coming soon</p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'center', marginBottom: '72px' }}>
            <div style={{ backgroundColor: '#fff5f0', borderRadius: '24px', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '12px' }}>
              <PawPrint size={48} color="#FF6B35" style={{ opacity: 0.3 }} />
              <p style={{ color: '#aaa', fontSize: '13px', margin: 0 }}>Photo coming soon</p>
            </div>
            <div>
              <p style={{ color: '#FF6B35', fontWeight: '700', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 12px 0' }}>The Solution</p>
              <h2 style={{ fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: '800', color: '#003087', margin: '0 0 20px 0', letterSpacing: '-0.5px' }}>The Canine Gym Is Born</h2>
              <p style={{ color: '#555', fontSize: '16px', lineHeight: 1.8, margin: '0 0 16px 0' }}>
                We invested in professional slatmill equipment, built a custom van setup, and created a booking and tracking system so owners could see exactly what their dog accomplished each session.
              </p>
              <p style={{ color: '#555', fontSize: '16px', lineHeight: 1.8, margin: 0 }}>
                We started in Hamilton County, Indiana — and the response from dog owners has been incredible. Dogs are happier, healthier, and owners love the convenience. This is just the beginning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section style={{ padding: '80px 24px', backgroundColor: '#003087' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#FF6B35', fontWeight: '700', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 12px 0' }}>Our Mission</p>
          <h2 style={{ color: 'white', fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: '800', margin: '0 0 24px 0', letterSpacing: '-0.5px' }}>"Every dog deserves to run."</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '17px', lineHeight: 1.8, maxWidth: '600px', margin: '0 auto 48px' }}>
            We believe regular exercise is one of the most important things you can do for your dog's health, longevity, and happiness. Our mission is to make that easy — no matter how busy life gets.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {[
              { icon: <Heart size={28} color="#FF6B35" />, label: 'Dog-First', desc: 'Everything we do is designed with your dog\'s safety and wellbeing as the top priority.' },
              { icon: <MapPin size={28} color="#FF6B35" />, label: 'Community-Rooted', desc: 'We\'re a local business serving local families. Hamilton County is our home too.' },
              { icon: <Trophy size={28} color="#FF6B35" />, label: 'Results-Driven', desc: 'We track every metric so you can see real progress — not just take our word for it.' },
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: 'rgba(255,255,255,0.07)', borderRadius: '16px', padding: '28px 20px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ marginBottom: '12px' }}>{item.icon}</div>
                <h3 style={{ color: 'white', fontWeight: '700', fontSize: '16px', margin: '0 0 8px 0' }}>{item.label}</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section style={{ padding: '80px 24px', backgroundColor: '#f8f9fa', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <p style={{ color: '#FF6B35', fontWeight: '700', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 12px 0' }}>Where We Operate</p>
          <h2 style={{ fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: '800', color: '#003087', margin: '0 0 16px 0', letterSpacing: '-0.5px' }}>Proudly Serving Hamilton County</h2>
          <p style={{ color: '#666', fontSize: '16px', lineHeight: 1.7, margin: '0 0 36px 0' }}>We currently serve six cities across Hamilton County, Indiana, with plans to expand. If your city isn't listed yet, get in touch — we'd love to hear from you.</p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {['Carmel', 'Zionsville', 'Fishers', 'Geist', 'Westfield', 'Noblesville'].map(city => (
              <div key={city} style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: 'white', border: '1px solid #d0daf5', borderRadius: '30px', padding: '10px 20px' }}>
                <MapPin size={14} color="#003087" />
                <span style={{ fontWeight: '600', color: '#003087', fontSize: '14px' }}>{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 24px', background: 'linear-gradient(135deg, #003087 0%, #004db3 100%)', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ color: 'white', fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: '800', margin: '0 0 16px 0' }}>Come Run With Us</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '17px', margin: '0 0 36px 0', lineHeight: 1.6 }}>Join the growing community of Hamilton County dogs living healthier, happier lives.</p>
          <a href="https://app.thecaninegym.com" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: '#FF6B35', color: 'white', padding: '16px 36px', borderRadius: '10px', textDecoration: 'none', fontWeight: 'bold', fontSize: '17px' }}>
            <PawPrint size={20} /> Get Started Today
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}