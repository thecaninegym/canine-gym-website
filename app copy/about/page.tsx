import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { PawPrint, Heart, MapPin, Trophy, Star, Users, Zap } from 'lucide-react'

export default function About() {
  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif", color: '#111', backgroundColor: 'white' }}>
      <Nav />
      <style>{`
        .founder-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; max-width: 1000px; margin: 0 auto; }
        .why-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .stats-row { display: flex; gap: 16px; flex-wrap: wrap; }
        @media (max-width: 768px) {
          .founder-grid { grid-template-columns: 1fr; gap: 40px; }
          .why-grid { grid-template-columns: repeat(2, 1fr); }
          .founder-photo { order: 2; }
          .founder-text { order: 1; }
        }
        @media (max-width: 480px) {
          .why-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* HERO */}
      <section style={{ background: 'linear-gradient(135deg, #2c5a9e 0%, #3d70c0 100%)', padding: '100px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '500px', height: '500px', backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', bottom: '-100px', left: '-100px', width: '600px', height: '600px', backgroundColor: 'rgba(255,107,53,0.06)', borderRadius: '50%' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
          <p style={{ color: '#f88124', fontWeight: '700', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 16px 0' }}>Our Story</p>
          <h1 style={{ color: 'white', fontSize: 'clamp(36px, 5vw, 58px)', fontWeight: '800', margin: '0 0 24px 0', letterSpacing: '-1px', lineHeight: 1.1 }}>
            Born From a Love<br /><span style={{ color: '#f88124' }}>of Dogs.</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '18px', lineHeight: 1.7, margin: 0, maxWidth: '560px', marginLeft: 'auto', marginRight: 'auto' }}>
            The Canine Gym was founded by Mia — a lifelong dog lover with over 6 years of hands-on experience working with dogs of all breeds and sizes.
          </p>
        </div>
      </section>

      {/* FOUNDER */}
      <section style={{ padding: '100px 24px', backgroundColor: 'white' }}>
        <div className="founder-grid">
          <div className="founder-photo">
            <div style={{ position: 'relative' }}>
              <div style={{ backgroundColor: '#eef2fb', borderRadius: '24px', height: '480px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '12px' }}>
                <PawPrint size={56} color="#2c5a9e" style={{ opacity: 0.2 }} />
                <p style={{ color: '#aaa', fontSize: '13px', margin: 0 }}>Photo of Mia coming soon</p>
              </div>
              <div style={{ position: 'absolute', bottom: '24px', right: '-20px', backgroundColor: '#f88124', borderRadius: '16px', padding: '16px 20px', boxShadow: '0 8px 32px rgba(255,107,53,0.35)' }}>
                <p style={{ color: 'white', fontWeight: '800', fontSize: '22px', margin: 0, lineHeight: 1 }}>6+</p>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '12px', margin: '4px 0 0 0' }}>Years with Dogs</p>
              </div>
            </div>
          </div>
          <div className="founder-text">
            <p style={{ color: '#f88124', fontWeight: '700', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 12px 0' }}>Meet the Founder</p>
            <h2 style={{ fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: '800', color: '#2c5a9e', margin: '0 0 24px 0', letterSpacing: '-0.5px' }}>Hi, I'm Mia.</h2>
            <p style={{ color: '#555', fontSize: '16px', lineHeight: 1.8, margin: '0 0 20px 0' }}>
              I've spent the last 6 years working closely with dogs — and one thing became crystal clear: most dogs aren't getting nearly enough real exercise. Not because their owners don't care, but because life gets in the way.
            </p>
            <p style={{ color: '#555', fontSize: '16px', lineHeight: 1.8, margin: '0 0 20px 0' }}>
              I started The Canine Gym to solve that problem. By bringing professional fitness sessions directly to your door, I wanted to make consistent, structured exercise something every dog owner could actually stick to.
            </p>
            <p style={{ color: '#555', fontSize: '16px', lineHeight: 1.8, margin: '0 0 32px 0' }}>
              Every dog I've worked with has a different personality, energy level, and set of needs. That's why we take a personalized approach — because cookie-cutter fitness doesn't work for dogs any more than it works for people.
            </p>
            <div className="stats-row">
              {[
                { value: '6+', label: 'Years Experience' },
                { value: '100+', label: 'Dogs Worked With' },
                { value: '★★★★★', label: 'Client Rated' },
              ].map((stat, i) => (
                <div key={i} style={{ backgroundColor: '#f8f9fa', borderRadius: '12px', padding: '16px 20px', textAlign: 'center', border: '1px solid #eee', minWidth: '100px' }}>
                  <p style={{ fontSize: '20px', fontWeight: '900', color: '#2c5a9e', margin: '0 0 4px 0' }}>{stat.value}</p>
                  <p style={{ fontSize: '12px', color: '#888', margin: 0, fontWeight: '600' }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY WE EXIST */}
      <section style={{ padding: '100px 24px', background: 'linear-gradient(135deg, #001840 0%, #2c5a9e 100%)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p style={{ color: '#f88124', fontWeight: '700', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 12px 0' }}>Why We Exist</p>
            <h2 style={{ color: 'white', fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: '800', margin: '0 0 20px 0', letterSpacing: '-0.5px' }}>The Problem We're Solving</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '17px', maxWidth: '580px', margin: '0 auto', lineHeight: 1.7 }}>
              Over 56% of dogs in the US are overweight. Most aren't getting the daily exercise they need. We're here to change that — one session at a time.
            </p>
          </div>
          <div className="why-grid">
            {[
              { icon: <Heart size={28} color="#f88124" />, title: 'Dog-First Always', desc: 'Every decision we make starts with one question: is this good for the dog? Safety, comfort, and wellbeing are never compromised.' },
              { icon: <Zap size={28} color="#f88124" />, title: 'Real Results', desc: 'We track every metric so you can see your dog actually improving — not just trust that they had a good time.' },
              { icon: <MapPin size={28} color="#f88124" />, title: 'Built for Hamilton County', desc: "We're a local business built for this community. We know these neighborhoods, and we're invested in the dogs that live here." },
              { icon: <Users size={28} color="#f88124" />, title: 'Personal Relationships', desc: "We get to know every dog we work with. Your dog isn't a number — they're a client with a name, a personality, and a fitness journey." },
              { icon: <Trophy size={28} color="#f88124" />, title: 'Raising the Bar', desc: 'Dog fitness deserves the same technology and professionalism as human fitness. We built the app, the tracking, and the experience to match.' },
              { icon: <Star size={28} color="#f88124" />, title: 'Convenient by Design', desc: "Convenience isn't a nice-to-have — it's the whole point. If it's not easy, it won't happen consistently. We come to you so it always does." },
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: 'rgba(255,255,255,0.07)', borderRadius: '16px', padding: '28px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ marginBottom: '14px' }}>{item.icon}</div>
                <h3 style={{ color: 'white', fontWeight: '700', fontSize: '16px', margin: '0 0 10px 0' }}>{item.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', margin: 0, lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section style={{ padding: '100px 24px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p style={{ color: '#f88124', fontWeight: '700', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 12px 0' }}>The Journey</p>
            <h2 style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: '800', color: '#2c5a9e', margin: 0, letterSpacing: '-0.5px' }}>How We Got Here</h2>
          </div>
          {[
            { year: '2018', title: 'It All Started With Dogs', desc: 'Mia began her career working professionally with dogs — training, boarding, and learning everything she could about canine health and behavior.' },
            { year: '2022', title: 'Discovering the Slatmill', desc: 'After seeing the transformative impact structured, consistent exercise had on the dogs she worked with, Mia became obsessed with making it more accessible.' },
            { year: '2026', title: 'The Canine Gym is Founded', desc: 'With a van, a slatmill, and a vision, The Canine Gym launched in Hamilton County. The response from local dog owners was immediate and overwhelming.' },
            { year: '2026', title: 'Growing Across Hamilton County', desc: 'Now serving 6 cities with a full booking platform, real-time fitness tracking, and a growing community of dogs living healthier lives.' },
          ].map((item, i, arr) => (
            <div key={i} style={{ display: 'flex', gap: '28px', marginBottom: i < arr.length - 1 ? '0' : '0' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: i % 2 === 0 ? '#eef2fb' : '#fff4e6', border: `2px solid ${i % 2 === 0 ? '#2c5a9e' : '#f88124'}30`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '11px', fontWeight: '800', color: i % 2 === 0 ? '#2c5a9e' : '#f88124' }}>{item.year}</span>
                </div>
                {i < arr.length - 1 && <div style={{ width: '2px', flex: 1, minHeight: '40px', backgroundColor: '#eee', margin: '8px 0' }} />}
              </div>
              <div style={{ paddingBottom: i < arr.length - 1 ? '40px' : '0' }}>
                <h3 style={{ fontWeight: '700', fontSize: '18px', color: '#111', margin: '8px 0 10px 0' }}>{item.title}</h3>
                <p style={{ color: '#666', fontSize: '15px', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICE AREA */}
      <section style={{ padding: '80px 24px', backgroundColor: '#f8f9fa', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <p style={{ color: '#f88124', fontWeight: '700', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 12px 0' }}>Where We Operate</p>
          <h2 style={{ fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: '800', color: '#2c5a9e', margin: '0 0 16px 0', letterSpacing: '-0.5px' }}>Proudly Serving Hamilton County</h2>
          <p style={{ color: '#666', fontSize: '16px', lineHeight: 1.7, margin: '0 0 36px 0' }}>We currently serve six cities across Hamilton County, Indiana, with plans to expand. If your city isn't listed yet, get in touch — we'd love to hear from you.</p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {['Carmel', 'Zionsville', 'Fishers', 'Geist', 'Westfield', 'Noblesville'].map(city => (
              <div key={city} style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: 'white', border: '1px solid #c8d4f0', borderRadius: '30px', padding: '10px 20px' }}>
                <MapPin size={14} color="#2c5a9e" />
                <span style={{ fontWeight: '600', color: '#2c5a9e', fontSize: '14px' }}>{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '100px 24px', background: 'linear-gradient(135deg, #2c5a9e 0%, #3d70c0 100%)', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <PawPrint size={48} color="rgba(255,255,255,0.2)" style={{ marginBottom: '24px' }} />
          <h2 style={{ color: 'white', fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: '800', margin: '0 0 16px 0', letterSpacing: '-0.5px' }}>Come Run With Us</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '17px', margin: '0 0 40px 0', lineHeight: 1.7 }}>Join the growing community of Hamilton County dogs living healthier, happier lives.</p>
          <a href="https://app.thecaninegym.com" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: '#f88124', color: 'white', padding: '18px 40px', borderRadius: '10px', textDecoration: 'none', fontWeight: 'bold', fontSize: '17px' }}>
            <PawPrint size={20} /> Get Started Today
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}