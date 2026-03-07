import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { PawPrint, Calendar, Zap, BarChart2, MapPin, Clock, Heart, Shield, CheckCircle } from 'lucide-react'

export default function HowItWorks() {
  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", color: '#111', backgroundColor: 'white' }}>
      <Nav />

      {/* HERO */}
      <section style={{ background: 'linear-gradient(135deg, #003087 0%, #004db3 100%)', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <p style={{ color: '#FF6B35', fontWeight: '700', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 16px 0' }}>Simple Process</p>
          <h1 style={{ color: 'white', fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: '800', margin: '0 0 20px 0', letterSpacing: '-1px', lineHeight: 1.1 }}>How It Works</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '18px', lineHeight: 1.6, margin: 0 }}>From booking to post-session stats — here's exactly what to expect every time.</p>
        </div>
      </section>

      {/* STEPS */}
      <section style={{ padding: '80px 24px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {[
            {
              step: '01',
              icon: <Calendar size={36} color="#003087" />,
              title: 'Book Online',
              desc: 'Create your account at app.thecaninegym.com, add your dog\'s profile, and pick a date and time that works for you. Our booking system shows real-time availability for your area so you always know exactly when we can come.',
              details: ['Choose your city and available time slot', 'Add one or more dogs to your session', 'Pick a membership plan or book a la carte', 'Receive instant confirmation by email'],
            },
            {
              step: '02',
              icon: <MapPin size={36} color="#FF6B35" />,
              title: 'We Come To You',
              desc: 'No loading up the car, no waiting rooms, no stress. Our van arrives at your home fully equipped with a professional slatmill. We set up right in your driveway — your dog never has to leave their comfort zone.',
              details: ['We arrive in a fully equipped van', 'Setup takes just a few minutes', 'No need to leave your home', 'A trained handler manages everything'],
            },
            {
              step: '03',
              icon: <Zap size={36} color="#FF6B35" />,
              title: 'Your Dog Runs',
              desc: 'Your dog gets a 30-minute session on our slatmill — a non-motorized treadmill powered entirely by your dog. The belt only moves when they do, making it safe, natural, and incredibly effective for building fitness.',
              details: ['30-minute structured workout', 'Slatmill speed is dog-controlled — always safe', 'First-timers get an intro session to get comfortable', 'Your dog wears our fitness tracker throughout'],
            },
            {
              step: '04',
              icon: <BarChart2 size={36} color="#003087" />,
              title: 'Stats Instantly Tracked',
              desc: 'The moment your session ends, all metrics sync to your dashboard. See exactly how far your dog ran, how many calories they burned, their heart rate, speed, and more. Watch them improve session over session.',
              details: ['Distance, calories, heart rate, speed and more', 'Stats appear in your dashboard instantly', 'Earn achievements and badges as you progress', 'Compete on the city-wide leaderboard'],
            },
          ].map((item, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center', marginBottom: '80px', direction: i % 2 === 1 ? 'rtl' : 'ltr' }}>
              <div style={{ direction: 'ltr' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '72px', height: '72px', backgroundColor: i % 2 === 0 ? '#f0f4ff' : '#fff5f0', borderRadius: '20px', marginBottom: '20px' }}>
                  {item.icon}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <span style={{ fontSize: '48px', fontWeight: '900', color: '#eee', lineHeight: 1 }}>{item.step}</span>
                  <h2 style={{ fontSize: '28px', fontWeight: '800', color: '#003087', margin: 0 }}>{item.title}</h2>
                </div>
                <p style={{ color: '#555', fontSize: '16px', lineHeight: 1.7, margin: '0 0 24px 0' }}>{item.desc}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {item.details.map((d, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <CheckCircle size={16} color="#22c55e" style={{ flexShrink: 0 }} />
                      <span style={{ fontSize: '14px', color: '#444' }}>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ direction: 'ltr', backgroundColor: i % 2 === 0 ? '#f0f4ff' : '#fff5f0', borderRadius: '24px', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '12px' }}>
                {item.icon}
                <p style={{ color: '#aaa', fontSize: '13px', margin: 0 }}>Photo coming soon</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT IS A SLATMILL */}
      <section style={{ padding: '80px 24px', backgroundColor: '#003087' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
          <div>
            <p style={{ color: '#FF6B35', fontWeight: '700', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 12px 0' }}>The Equipment</p>
            <h2 style={{ color: 'white', fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: '800', margin: '0 0 20px 0', letterSpacing: '-0.5px' }}>What Is a Slatmill?</h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '16px', lineHeight: 1.7, margin: '0 0 24px 0' }}>
              A slatmill is a non-motorized treadmill designed specifically for dogs. Unlike electric treadmills, the belt only moves when your dog walks or runs — they control the speed entirely.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '16px', lineHeight: 1.7, margin: '0 0 24px 0' }}>
              This makes it safer, more natural, and more effective than motorized alternatives. Dogs instinctively understand how to use it, and the workout builds real strength and cardiovascular endurance.
            </p>
            {['Dog-controlled speed — always safe', 'Builds strength, endurance, and muscle', 'Natural movement pattern mirrors running outdoors', 'Low-impact on joints compared to pavement running'].map((point, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <CheckCircle size={16} color="#FF6B35" style={{ flexShrink: 0 }} />
                <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px' }}>{point}</span>
              </div>
            ))}
          </div>
          <div style={{ backgroundColor: 'rgba(255,255,255,0.07)', borderRadius: '24px', height: '320px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <PawPrint size={48} color="rgba(255,255,255,0.2)" />
            <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '13px', margin: 0 }}>Photo coming soon</p>
          </div>
        </div>
      </section>

      {/* QUICK FACTS */}
      <section style={{ padding: '80px 24px', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#FF6B35', fontWeight: '700', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 12px 0' }}>Good To Know</p>
          <h2 style={{ fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: '800', color: '#003087', margin: '0 0 48px 0', letterSpacing: '-0.5px' }}>Session Details</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            {[
              { icon: <Clock size={24} color="#003087" />, title: '30 Minutes', desc: 'Every session is a focused 30-minute workout' },
              { icon: <MapPin size={24} color="#003087" />, title: 'At Your Home', desc: 'We park right in your driveway — no travel needed' },
              { icon: <Heart size={24} color="#FF6B35" />, title: 'All Breeds', desc: 'We work with dogs of most breeds and sizes' },
              { icon: <Shield size={24} color="#003087" />, title: 'Always Safe', desc: 'Trained handlers supervise every single session' },
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: 'white', borderRadius: '16px', padding: '28px 20px', border: '1px solid #eee', textAlign: 'center' }}>
                <div style={{ marginBottom: '12px' }}>{item.icon}</div>
                <h3 style={{ fontWeight: '700', fontSize: '17px', color: '#111', margin: '0 0 8px 0' }}>{item.title}</h3>
                <p style={{ color: '#666', fontSize: '14px', margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 24px', background: 'linear-gradient(135deg, #003087 0%, #004db3 100%)', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ color: 'white', fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: '800', margin: '0 0 16px 0' }}>Ready to Get Started?</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '17px', margin: '0 0 36px 0', lineHeight: 1.6 }}>Book your first session today and see the difference a proper workout makes.</p>
          <a href="https://app.thecaninegym.com" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: '#FF6B35', color: 'white', padding: '16px 36px', borderRadius: '10px', textDecoration: 'none', fontWeight: 'bold', fontSize: '17px' }}>
            <PawPrint size={20} /> Book a Session
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}