import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { PawPrint, Calendar, Zap, BarChart2, MapPin, Clock, Heart, Shield, CheckCircle } from 'lucide-react'
import SessionPreview from '@/components/SessionPreview'

export const metadata: Metadata = {
  title: 'How It Works | Mobile Dog Gym Sessions | The Canine Gym',
  description: 'Book online, we drive to your home, your dog runs on a professional slatmill, and you track every stat in the app. Mobile dog fitness made simple in Hamilton County, IN.',
  alternates: {
    canonical: 'https://www.thecaninegym.com/how-it-works',
  },
  openGraph: {
    url: 'https://www.thecaninegym.com/how-it-works',
    title: 'How It Works | The Canine Gym',
  },
}

export default function HowItWorks() {
  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif", color: '#111', backgroundColor: 'white' }}>
      <Nav />

      {/* HERO */}
      <section style={{ background: 'linear-gradient(135deg, #2c5a9e 0%, #3d70c0 100%)', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <p style={{ color: '#f88124', fontWeight: '700', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 16px 0' }}>Simple Process</p>
          <h1 style={{ color: 'white', fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: '800', margin: '0 0 20px 0', letterSpacing: '-1px', lineHeight: 1.1 }}>How It Works</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '18px', lineHeight: 1.6, margin: 0 }}>From booking to post-session stats, here's exactly what to expect every time.</p>
        </div>
      </section>

      {/* STEPS */}
      <section style={{ padding: '80px 24px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          {[
            {
              step: '01',
              icon: <Calendar size={28} color="#2c5a9e" />,
              title: 'Book Online',
              desc: 'Create your account at app.thecaninegym.com, add your dog\'s profile, and pick a date and time that works for you. Our booking system shows real-time availability for your area so you always know exactly when we can come.',
              details: ['Choose your city and available time slot', 'Add one or more dogs to your session', 'Pick a membership plan or book a la carte', 'Receive instant confirmation by email'],
              color: '#eef2fb',
              accent: '#2c5a9e',
            },
            {
              step: '02',
              icon: <MapPin size={28} color="#f88124" />,
              title: 'We Come To You',
              desc: 'No loading up the car, no waiting rooms, no stress. Our van arrives at your home fully equipped with a professional slatmill. We set up right in your driveway, your dog never has to leave their comfort zone.',
              details: ['We arrive in a fully equipped van', 'Setup takes just a few minutes', 'No need to leave your home', 'A trained handler manages everything'],
              color: '#fff4e6',
              accent: '#f88124',
            },
            {
              step: '03',
              icon: <Zap size={28} color="#f88124" />,
              title: 'Your Dog Runs',
              desc: 'Your dog gets a 30-minute session on our slatmill, a non-motorized treadmill powered entirely by your dog. The belt only moves when they do, making it safe, natural, and incredibly effective for building fitness.',
              details: ['30-minute structured workout', 'Slatmill speed is dog-controlled, always safe', 'First-timers get an intro session to get comfortable', 'Our custom sensor tracks speed, distance, and all performance metrics live'],
              color: '#fff4e6',
              accent: '#f88124',
            },
            {
              step: '04',
              icon: <BarChart2 size={28} color="#2c5a9e" />,
              title: 'Stats Instantly Tracked',
              desc: 'The moment your session ends, all metrics sync to your dashboard. See distance, speed, calories, effort score, pace consistency, speed zones, acceleration, and more. Watch your dog improve session over session.',
              details: ['Distance, speed, calories, effort score & more', 'Stats appear in your dashboard instantly', 'Earn achievements and badges as you progress', 'Compete on the city-wide leaderboard'],
              color: '#eef2fb',
              accent: '#2c5a9e',
            },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '0', marginBottom: i < 3 ? '0' : '0' }}>
              {/* Timeline spine */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '28px', flexShrink: 0 }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '50%', backgroundColor: item.color, border: `2px solid ${item.accent}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, zIndex: 1 }}>
                  {item.icon}
                </div>
                {i < 3 && (
                  <div style={{ width: '2px', flex: 1, minHeight: '40px', backgroundColor: '#eee', margin: '8px 0' }} />
                )}
              </div>

              {/* Content */}
              <div style={{ paddingBottom: i < 3 ? '48px' : '0', flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                  <span style={{ fontSize: '13px', fontWeight: '800', color: item.accent, letterSpacing: '1px' }}>STEP {item.step}</span>
                </div>
                <h2 style={{ fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: '800', color: '#2c5a9e', margin: '0 0 12px 0', letterSpacing: '-0.5px' }}>{item.title}</h2>
                <p style={{ color: '#555', fontSize: '15px', lineHeight: 1.75, margin: '0 0 20px 0' }}>{item.desc}</p>
                <div style={{ backgroundColor: item.color, borderRadius: '12px', padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {item.details.map((d, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <CheckCircle size={15} color={item.accent} style={{ flexShrink: 0 }} />
                      <span style={{ fontSize: '14px', color: '#444' }}>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INTERACTIVE PREVIEW */}
      <section style={{ padding: '80px 24px', backgroundColor: '#f8f9fa' }}>
        <style>{`
          .preview-layout {
            max-width: 900px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 56px;
            align-items: center;
          }
          @media (max-width: 768px) {
            .preview-layout {
              grid-template-columns: 1fr;
              gap: 32px;
            }
          }
        `}</style>
        <div className="preview-layout">
          <div>
            <p style={{ color: '#f88124', fontWeight: '700', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 12px 0' }}>See It In Action</p>
            <h2 style={{ fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: '800', color: '#2c5a9e', margin: '0 0 20px 0', letterSpacing: '-0.5px' }}>Your Dog&apos;s Session Report</h2>
            <p style={{ color: '#555', fontSize: '16px', lineHeight: 1.7, margin: '0 0 24px 0' }}>
              After every session, you get a full performance breakdown in your dashboard. Scroll through the preview to see exactly what a real session report looks like — effort score, speed zones, pace analysis, and more.
            </p>
            {['Tap any stat card to switch the chart view', 'Tap the ⓘ icons for metric explanations', 'Scroll to see the full session breakdown', 'Every metric is automatically captured by our sensor'].map((point, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <CheckCircle size={16} color="#f88124" style={{ flexShrink: 0 }} />
                <span style={{ color: '#444', fontSize: '14px' }}>{point}</span>
              </div>
            ))}
            <a href="https://app.thecaninegym.com" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginTop: '20px', backgroundColor: '#f88124', color: 'white', padding: '14px 28px', borderRadius: '10px', textDecoration: 'none', fontWeight: 'bold', fontSize: '15px' }}>
              <PawPrint size={18} /> Start Tracking Your Dog
            </a>
          </div>
          <div style={{ textAlign: 'center' }}>
            <SessionPreview />
            <p style={{ color: '#aaa', fontSize: '12px', marginTop: '14px', fontWeight: '600' }}>↕ Scroll to explore · Tap stats to switch chart</p>
          </div>
        </div>
      </section>

      {/* WHAT IS A SLATMILL */}
      <section style={{ padding: '80px 24px', backgroundColor: '#2c5a9e' }}>
        <style>{`
          .slatmill-grid {
            max-width: 900px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 64px;
            align-items: center;
          }
          .slatmill-photo {
            height: 320px;
          }
          @media (max-width: 768px) {
            .slatmill-grid {
              grid-template-columns: 1fr;
              gap: 32px;
            }
            .slatmill-photo {
              height: 200px;
            }
          }
        `}</style>
        <div className="slatmill-grid">
          <div>
            <p style={{ color: '#f88124', fontWeight: '700', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 12px 0' }}>The Equipment</p>
            <h2 style={{ color: 'white', fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: '800', margin: '0 0 20px 0', letterSpacing: '-0.5px' }}>What Is a Slatmill?</h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '16px', lineHeight: 1.7, margin: '0 0 24px 0' }}>
              A slatmill is a non-motorized treadmill designed specifically for dogs. Unlike electric treadmills, the belt only moves when your dog walks or runs, they control the speed entirely.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '16px', lineHeight: 1.7, margin: '0 0 24px 0' }}>
              This makes it safer, more natural, and more effective than motorized alternatives. Dogs instinctively understand how to use it, and the workout builds real strength and cardiovascular endurance.
            </p>
            {['Dog-controlled speed, always safe', 'Builds strength, endurance, and muscle', 'Natural movement pattern mirrors running outdoors', 'Low-impact on joints compared to pavement running'].map((point, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <CheckCircle size={16} color="#f88124" style={{ flexShrink: 0 }} />
                <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px' }}>{point}</span>
              </div>
            ))}
          </div>
          <div className="slatmill-photo" style={{ backgroundColor: 'rgba(255,255,255,0.07)', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <PawPrint size={48} color="rgba(255,255,255,0.2)" />
            <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '13px', margin: 0 }}>Photo coming soon</p>
          </div>
        </div>
      </section>

      {/* QUICK FACTS */}
      <section style={{ padding: '80px 24px', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#f88124', fontWeight: '700', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 12px 0' }}>Good To Know</p>
          <h2 style={{ fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: '800', color: '#2c5a9e', margin: '0 0 48px 0', letterSpacing: '-0.5px' }}>Session Details</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            {[
              { icon: <Clock size={24} color="#2c5a9e" />, title: '30 Minutes', desc: 'Every session is a focused 30-minute workout' },
              { icon: <MapPin size={24} color="#2c5a9e" />, title: 'At Your Home', desc: 'We park right in your driveway, no travel needed' },
              { icon: <Heart size={24} color="#f88124" />, title: 'All Breeds', desc: 'We work with dogs of most breeds and sizes' },
              { icon: <Shield size={24} color="#2c5a9e" />, title: 'Always Safe', desc: 'Trained handlers supervise every single session' },
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: 'white', borderRadius: '16px', padding: '28px 20px', border: '1px solid #eee', textAlign: 'center' }}>
                <div style={{ marginBottom: '12px', display: 'flex', justifyContent: 'center' }}>{item.icon}</div>
                <h3 style={{ fontWeight: '700', fontSize: '17px', color: '#111', margin: '0 0 8px 0' }}>{item.title}</h3>
                <p style={{ color: '#666', fontSize: '14px', margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 24px', background: 'linear-gradient(135deg, #2c5a9e 0%, #3d70c0 100%)', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ color: 'white', fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: '800', margin: '0 0 16px 0' }}>Ready to Get Started?</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '17px', margin: '0 0 36px 0', lineHeight: 1.6 }}>Book your first session today and see the difference a proper workout makes.</p>
          <a href="https://app.thecaninegym.com" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: '#f88124', color: 'white', padding: '16px 36px', borderRadius: '10px', textDecoration: 'none', fontWeight: 'bold', fontSize: '17px' }}>
            <PawPrint size={20} /> Book a Session
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}