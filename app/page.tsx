'use client'
import { useState } from 'react'
import { PawPrint, MapPin, Calendar, BarChart2, Trophy, ChevronDown, Menu, X, Check, Star, Zap, Shield, Clock } from 'lucide-react'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [
    { q: 'What is a slatmill?', a: 'A slatmill is a non-motorized dog treadmill powered entirely by your dog. Unlike electric treadmills, the belt only moves when your dog walks or runs — making it safer, more natural, and more effective for building strength and endurance.' },
    { q: 'What areas do you serve?', a: 'We currently serve Carmel, Zionsville, Fishers, Geist, Westfield, and Noblesville in Hamilton County, Indiana.' },
    { q: 'How long is each session?', a: 'Each session is 30 minutes. We come to your home, set up in our van, and your dog gets a full workout while you relax inside.' },
    { q: 'What size dogs can use the slatmill?', a: 'Our slatmills accommodate most breeds and sizes. We will assess your dog on the first session to make sure they are comfortable and safe on the equipment.' },
    { q: 'Do I need to be home during the session?', a: 'Yes, a responsible adult must be present at the time of the session.' },
    { q: 'How do memberships work?', a: 'Memberships give you a set number of sessions per month at a discounted rate. Sessions reset on the 1st of each month. You can also book individual a la carte sessions without a membership.' },
  ]

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", color: '#111', backgroundColor: 'white' }}>
      <style>{`
        .nav-link { transition: color 0.2s; }
        .nav-link:hover { color: #003087 !important; }

        .btn-primary { transition: transform 0.2s, box-shadow 0.2s, background-color 0.2s; }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(255,107,53,0.35); background-color: #e85d28 !important; }

        .btn-secondary { transition: transform 0.2s, background-color 0.2s; }
        .btn-secondary:hover { transform: translateY(-2px); background-color: rgba(255,255,255,0.25) !important; }

        .btn-dark { transition: transform 0.2s, box-shadow 0.2s; }
        .btn-dark:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,48,135,0.3); }

        .btn-light { transition: background-color 0.2s, color 0.2s; }
        .btn-light:hover { background-color: #003087 !important; color: white !important; }

        .card-hover { transition: transform 0.2s, box-shadow 0.2s; }
        .card-hover:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,0.1) !important; }

        .card-dark-hover { transition: transform 0.2s, background-color 0.2s, border-color 0.2s; }
        .card-dark-hover:hover { transform: translateY(-4px); background-color: rgba(255,255,255,0.12) !important; border-color: rgba(255,107,53,0.4) !important; }

        .city-pill { transition: transform 0.2s, background-color 0.2s, border-color 0.2s; cursor: default; }
        .city-pill:hover { transform: translateY(-2px); background-color: #003087 !important; border-color: #003087 !important; }
        .city-pill:hover span { color: white !important; }
        .city-pill:hover svg { color: white !important; stroke: white !important; }

        .faq-item { transition: box-shadow 0.2s; }
        .faq-item:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.08); }

        .login-link { transition: color 0.2s; }
        .login-link:hover { color: #FF6B35 !important; }

        .pricing-card { transition: transform 0.2s, box-shadow 0.2s; }
        .pricing-card:hover { transform: translateY(-6px); box-shadow: 0 16px 40px rgba(0,0,0,0.12) !important; }

        .alacarte-card { transition: box-shadow 0.2s; }
        .alacarte-card:hover { box-shadow: 0 8px 24px rgba(0,0,0,0.08) !important; }

        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 100, backgroundColor: 'white', borderBottom: '1px solid #eee', padding: '0 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
            <PawPrint size={28} color="#003087" />
            <span style={{ fontWeight: 'bold', fontSize: '18px', color: '#003087' }}>The Canine Gym</span>
          </a>
          {/* Desktop nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-nav">
            <a href="#how-it-works" className="nav-link" style={{ color: '#555', textDecoration: 'none', fontSize: '15px', fontWeight: '500' }}>How It Works</a>
            <a href="#pricing" className="nav-link" style={{ color: '#555', textDecoration: 'none', fontSize: '15px', fontWeight: '500' }}>Pricing</a>
            <a href="#faq" className="nav-link" style={{ color: '#555', textDecoration: 'none', fontSize: '15px', fontWeight: '500' }}>FAQ</a>
            <a href="https://app.thecaninegym.com" className="login-link" style={{ color: '#003087', textDecoration: 'none', fontSize: '15px', fontWeight: '600' }}>Log In</a>
            <a href="https://app.thecaninegym.com" className="btn-primary" style={{ backgroundColor: '#FF6B35', color: 'white', padding: '10px 22px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', fontSize: '15px' }}>
              Get Started
            </a>
          </div>
          {/* Mobile menu button */}
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }} className="mobile-menu-btn">
            {menuOpen ? <X size={24} color="#003087" /> : <Menu size={24} color="#003087" />}
          </button>
        </div>
        {/* Mobile menu */}
        {menuOpen && (
          <div style={{ borderTop: '1px solid #eee', padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <a href="#how-it-works" onClick={() => setMenuOpen(false)} style={{ color: '#333', textDecoration: 'none', fontWeight: '500', fontSize: '16px' }}>How It Works</a>
            <a href="#pricing" onClick={() => setMenuOpen(false)} style={{ color: '#333', textDecoration: 'none', fontWeight: '500', fontSize: '16px' }}>Pricing</a>
            <a href="#faq" onClick={() => setMenuOpen(false)} style={{ color: '#333', textDecoration: 'none', fontWeight: '500', fontSize: '16px' }}>FAQ</a>
            <a href="https://app.thecaninegym.com" style={{ color: '#003087', textDecoration: 'none', fontWeight: '600', fontSize: '16px' }}>Log In</a>
            <a href="https://app.thecaninegym.com" style={{ backgroundColor: '#FF6B35', color: 'white', padding: '12px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', fontSize: '16px', textAlign: 'center' }}>
              Get Started
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section style={{ background: 'linear-gradient(135deg, #003087 0%, #004db3 100%)', padding: '80px 24px 100px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '400px', height: '400px', backgroundColor: 'rgba(255,255,255,0.04)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: '500px', height: '500px', backgroundColor: 'rgba(255,107,53,0.08)', borderRadius: '50%' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '750px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(255,107,53,0.2)', border: '1px solid rgba(255,107,53,0.4)', borderRadius: '20px', padding: '6px 16px', marginBottom: '28px' }}>
            <MapPin size={14} color="#FF6B35" />
            <span style={{ color: '#FF6B35', fontSize: '13px', fontWeight: '600' }}>Now serving Hamilton County, IN</span>
          </div>
          <h1 style={{ color: 'white', fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: '800', margin: '0 0 20px 0', lineHeight: 1.1, letterSpacing: '-1px' }}>
            The Run Comes<br />
            <span style={{ color: '#FF6B35' }}>To You.</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 'clamp(16px, 2.5vw, 20px)', lineHeight: 1.6, margin: '0 0 40px 0', maxWidth: '560px', marginLeft: 'auto', marginRight: 'auto' }}>
            Professional dog fitness sessions delivered to your door. Your dog runs on our slatmill — right from our van, parked in your driveway.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://app.thecaninegym.com" className="btn-primary" style={{ backgroundColor: '#FF6B35', color: 'white', padding: '16px 36px', borderRadius: '10px', textDecoration: 'none', fontWeight: 'bold', fontSize: '17px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <PawPrint size={20} /> Book a Session
            </a>
            <a href="#how-it-works" className="btn-secondary" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: 'white', padding: '16px 36px', borderRadius: '10px', textDecoration: 'none', fontWeight: 'bold', fontSize: '17px', border: '1px solid rgba(255,255,255,0.3)' }}>
              See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* PLACEHOLDER IMAGE STRIP */}
      <div style={{ backgroundColor: '#f8f9fa', padding: '48px 24px', textAlign: 'center', borderBottom: '1px solid #eee' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          {['Your dog. Our van. At your door.', 'Professional slatmill equipment', 'Track every run, every mile'].map((caption, i) => (
            <div key={i} style={{ backgroundColor: '#e9ecef', borderRadius: '16px', height: '220px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
              <PawPrint size={36} color="#adb5bd" />
              <p style={{ color: '#adb5bd', margin: 0, fontSize: '14px', fontWeight: '500' }}>{caption}</p>
            </div>
          ))}
        </div>
      </div>

      {/* HOW IT WORKS */}
      <section id="how-it-works" style={{ padding: '80px 24px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p style={{ color: '#FF6B35', fontWeight: '700', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 12px 0' }}>Simple Process</p>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: '800', color: '#003087', margin: '0 0 16px 0', letterSpacing: '-0.5px' }}>How It Works</h2>
            <p style={{ color: '#666', fontSize: '17px', maxWidth: '500px', margin: '0 auto', lineHeight: 1.6 }}>Four simple steps to a fitter, happier dog</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '32px' }}>
            {[
              { step: '01', icon: <Calendar size={28} color="#003087" />, title: 'Book Online', desc: 'Sign up and pick a date and time that works for you.' },
              { step: '02', icon: <PawPrint size={28} color="#003087" />, title: 'We Come To You', desc: 'Our van arrives at your home with professional slatmill equipment.' },
              { step: '03', icon: <Zap size={28} color="#FF6B35" />, title: 'Your Dog Runs', desc: 'A 30-minute session tailored to your dog\'s pace and fitness level.' },
              { step: '04', icon: <BarChart2 size={28} color="#003087" />, title: 'Track Progress', desc: 'View stats, earn achievements, and compete on the leaderboard.' },
            ].map((item, i) => (
              <div key={i} className="card-hover" style={{ position: 'relative', backgroundColor: '#f8f9fa', borderRadius: '16px', padding: '32px 24px' }}>
                <div style={{ position: 'absolute', top: '20px', right: '20px', fontSize: '36px', fontWeight: '900', color: '#e9ecef', lineHeight: 1 }}>{item.step}</div>
                <div style={{ backgroundColor: 'white', width: '56px', height: '56px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                  {item.icon}
                </div>
                <h3 style={{ fontWeight: '700', fontSize: '18px', color: '#111', margin: '0 0 10px 0' }}>{item.title}</h3>
                <p style={{ color: '#666', margin: 0, lineHeight: 1.6, fontSize: '15px' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ padding: '80px 24px', backgroundColor: '#003087' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p style={{ color: '#FF6B35', fontWeight: '700', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 12px 0' }}>Why Choose Us</p>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: '800', color: 'white', margin: 0, letterSpacing: '-0.5px' }}>Everything Your Dog Needs</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {[
              { icon: <Shield size={24} color="#FF6B35" />, title: 'Safe & Professional', desc: 'Our slatmills are designed specifically for dogs. Every session is supervised by trained staff.' },
              { icon: <Clock size={24} color="#FF6B35" />, title: 'Convenient', desc: 'No driving, no waiting rooms. We park in your driveway and handle everything.' },
              { icon: <BarChart2 size={24} color="#FF6B35" />, title: 'Track Every Run', desc: 'Miles, calories, and sessions are all logged. Watch your dog improve over time.' },
              { icon: <Trophy size={24} color="#FF6B35" />, title: 'Achievements & Leaderboard', desc: 'Your dog earns badges and can compete on a city-wide leaderboard.' },
              { icon: <Star size={24} color="#FF6B35" />, title: 'Flexible Memberships', desc: 'Choose from monthly membership plans or pay per session — whatever works for you.' },
              { icon: <PawPrint size={24} color="#FF6B35" />, title: 'Multi-Dog Households', desc: 'Have multiple dogs? No problem. We accommodate households with more than one pup.' },
            ].map((item, i) => (
              <div key={i} className="card-dark-hover" style={{ backgroundColor: 'rgba(255,255,255,0.07)', borderRadius: '14px', padding: '28px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ marginBottom: '14px' }}>{item.icon}</div>
                <h3 style={{ color: 'white', fontWeight: '700', fontSize: '17px', margin: '0 0 8px 0' }}>{item.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.65)', margin: 0, lineHeight: 1.6, fontSize: '14px' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{ padding: '80px 24px', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p style={{ color: '#FF6B35', fontWeight: '700', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 12px 0' }}>Simple Pricing</p>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: '800', color: '#003087', margin: '0 0 16px 0', letterSpacing: '-0.5px' }}>Plans For Every Pup</h2>
            <p style={{ color: '#666', fontSize: '17px', margin: 0 }}>All plans include stat tracking, achievements, and leaderboard access</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginBottom: '24px' }}>
            {[
              { name: 'Starter', sessions: 4, price: '$180', perSession: '$45', color: '#003087', popular: false },
              { name: 'Active', sessions: 8, price: '$340', perSession: '$42.50', color: '#FF6B35', popular: true },
              { name: 'Athlete', sessions: 12, price: '$480', perSession: '$40', color: '#003087', popular: false },
            ].map((plan) => (
              <div key={plan.name} className="pricing-card" style={{ backgroundColor: 'white', borderRadius: '16px', padding: '32px 28px', border: plan.popular ? '2px solid #FF6B35' : '1px solid #eee', position: 'relative', boxShadow: plan.popular ? '0 8px 30px rgba(255,107,53,0.15)' : '0 2px 8px rgba(0,0,0,0.06)' }}>
                {plan.popular && (
                  <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#FF6B35', color: 'white', padding: '4px 18px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', whiteSpace: 'nowrap' }}>
                    MOST POPULAR
                  </div>
                )}
                <h3 style={{ fontWeight: '800', fontSize: '22px', color: plan.color, margin: '0 0 6px 0' }}>{plan.name}</h3>
                <p style={{ color: '#999', fontSize: '14px', margin: '0 0 20px 0' }}>{plan.sessions} sessions per month</p>
                <div style={{ marginBottom: '24px' }}>
                  <span style={{ fontSize: '40px', fontWeight: '800', color: '#111', lineHeight: 1 }}>{plan.price}</span>
                  <span style={{ color: '#999', fontSize: '14px' }}>/month</span>
                  <p style={{ color: '#999', fontSize: '13px', margin: '4px 0 0 0' }}>{plan.perSession} per session</p>
                </div>
                {[
                  `${plan.sessions} sessions/month`,
                  'Stat tracking & history',
                  'Achievements & badges',
                  'Leaderboard access',
                  'Booking app access',
                ].map((feature) => (
                  <div key={feature} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <Check size={16} color="#22c55e" />
                    <span style={{ fontSize: '14px', color: '#444' }}>{feature}</span>
                  </div>
                ))}
                <a href="https://app.thecaninegym.com" className="btn-primary" style={{ display: 'block', marginTop: '24px', backgroundColor: plan.popular ? '#FF6B35' : '#003087', color: 'white', padding: '13px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', fontSize: '15px', textAlign: 'center' }}>
                  Get Started
                </a>
              </div>
            ))}
          </div>
          <div className="alacarte-card" style={{ backgroundColor: 'white', borderRadius: '12px', padding: '24px 28px', border: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <h4 style={{ margin: '0 0 4px 0', color: '#111', fontWeight: '700' }}>A La Carte</h4>
              <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>No commitment — book individual sessions as needed</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <span style={{ fontSize: '28px', fontWeight: '800', color: '#111' }}>$55<span style={{ fontSize: '14px', color: '#999', fontWeight: '400' }}>/session</span></span>
              <a href="https://app.thecaninegym.com" className="btn-light" style={{ backgroundColor: '#f0f2f5', color: '#003087', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px' }}>
                Book Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section style={{ padding: '80px 24px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#FF6B35', fontWeight: '700', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 12px 0' }}>Service Area</p>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: '800', color: '#003087', margin: '0 0 16px 0', letterSpacing: '-0.5px' }}>We Come To You</h2>
          <p style={{ color: '#666', fontSize: '17px', margin: '0 0 48px 0' }}>Currently serving Hamilton County, Indiana</p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {['Carmel', 'Zionsville', 'Fishers', 'Geist', 'Westfield', 'Noblesville'].map(city => (
              <div key={city} className="city-pill" style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: '#f0f4ff', border: '1px solid #d0daf5', borderRadius: '30px', padding: '10px 20px' }}>
                <MapPin size={15} color="#003087" />
                <span style={{ fontWeight: '600', color: '#003087', fontSize: '15px' }}>{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ padding: '80px 24px', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p style={{ color: '#FF6B35', fontWeight: '700', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 12px 0' }}>FAQ</p>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: '800', color: '#003087', margin: 0, letterSpacing: '-0.5px' }}>Common Questions</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item" style={{ backgroundColor: 'white', borderRadius: '12px', border: '1px solid #eee', overflow: 'hidden' }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: '100%', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: '16px' }}>
                  <span style={{ fontWeight: '600', fontSize: '16px', color: '#111' }}>{faq.q}</span>
                  <ChevronDown size={20} color="#666" style={{ flexShrink: 0, transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }} />
                </button>
                {openFaq === i && (
                  <div style={{ padding: '0 24px 20px', color: '#555', lineHeight: 1.7, fontSize: '15px' }}>{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ padding: '80px 24px', background: 'linear-gradient(135deg, #003087 0%, #004db3 100%)', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <PawPrint size={48} color="rgba(255,255,255,0.3)" style={{ marginBottom: '24px' }} />
          <h2 style={{ color: 'white', fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: '800', margin: '0 0 16px 0', letterSpacing: '-0.5px' }}>Ready to Get Running?</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '18px', margin: '0 0 40px 0', lineHeight: 1.6 }}>Sign up today and give your dog the workout they deserve — without leaving your driveway.</p>
          <a href="https://app.thecaninegym.com" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: '#FF6B35', color: 'white', padding: '18px 40px', borderRadius: '10px', textDecoration: 'none', fontWeight: 'bold', fontSize: '18px' }}>
            <PawPrint size={22} /> Create Your Account
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: '#001a4d', padding: '40px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <PawPrint size={22} color="rgba(255,255,255,0.6)" />
            <span style={{ color: 'rgba(255,255,255,0.6)', fontWeight: '600', fontSize: '15px' }}>The Canine Gym</span>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px', margin: 0 }}>© {new Date().getFullYear()} The Canine Gym · Hamilton County, IN</p>
          <a href="https://app.thecaninegym.com" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>
            Client Login →
          </a>
        </div>
      </footer>

    </div>
  )
}