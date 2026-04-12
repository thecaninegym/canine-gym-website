'use client'
import { useState } from 'react'
import { PawPrint, MapPin, Calendar, BarChart2, Trophy, ChevronDown, Menu, X, Check, Star, Zap, Shield, Clock, Flame, Navigation, Gauge, Timer, Activity } from 'lucide-react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import SessionPreview from '@/components/SessionPreview'

export default function HomeClient() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [selectedCity, setSelectedCity] = useState<string | null>(null)

  const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

  const SCHEDULE: Record<string, { day: number, start: number, end: number }[]> = {
    Carmel:     [{ day: 1, start: 6, end: 12 }, { day: 4, start: 13, end: 19 }],
    Zionsville: [{ day: 1, start: 13, end: 19 }, { day: 4, start: 6, end: 12 }],
    Fishers:    [{ day: 2, start: 6, end: 12 }, { day: 5, start: 13, end: 19 }],
    Geist:      [{ day: 2, start: 13, end: 19 }, { day: 5, start: 6, end: 12 }],
    Westfield:  [{ day: 3, start: 6, end: 12 }, { day: 6, start: 13, end: 19 }],
    Noblesville:[{ day: 3, start: 13, end: 19 }, { day: 6, start: 6, end: 12 }],
  }

  const formatHour = (h: number) => {
    const ampm = h >= 12 ? 'PM' : 'AM'
    const hour = h > 12 ? h - 12 : h === 0 ? 12 : h
    return `${hour}:00 ${ampm}`
  }

  const faqs = [
    { q: 'What is a slatmill?', a: 'A slatmill is a non-motorized dog treadmill powered entirely by your dog. Unlike electric treadmills, the belt only moves when your dog walks or runs, making it safer, more natural, and more effective for building strength and endurance.' },
    { q: 'What areas do you serve?', a: 'We currently serve Carmel, Zionsville, Fishers, Geist, Westfield, and Noblesville in Hamilton County, Indiana.' },
    { q: 'How long is each session?', a: 'Each session is 30 minutes. We come to your home, set up in our van, and your dog gets a full workout while you relax inside.' },
    { q: 'What size dogs can use the slatmill?', a: 'Our slatmills accommodate most breeds and sizes. We will assess your dog on the first session to make sure they are comfortable and safe on the equipment.' },
    { q: 'Do I need to be home during the session?', a: 'No you do not. Although we encourage you to be home in case you would like to watch the session or bring your dog to us. If you are not home, you can leave a note in booking with how you would like us to retrieve your dog.' },
    { q: 'How do memberships work?', a: 'Memberships give you a set number of sessions per month at a discounted rate. Sessions reset on the 1st of each month. You can also book individual a la carte sessions without a membership.' },
  ]

  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif", color: '#111', backgroundColor: 'white' }}>
      <style>{`
        .btn-primary { transition: transform 0.2s, box-shadow 0.2s, background-color 0.2s; }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(255,107,53,0.35); background-color: #e85d28 !important; }
        .btn-secondary { transition: transform 0.2s, background-color 0.2s; }
        .btn-secondary:hover { transform: translateY(-2px); background-color: rgba(255,255,255,0.25) !important; }
        .btn-light { transition: background-color 0.2s, color 0.2s; }
        .btn-light:hover { background-color: #2c5a9e !important; color: white !important; }
        .card-hover { transition: transform 0.2s, box-shadow 0.2s; }
        .card-hover:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,0.1) !important; }
        .card-dark-hover { transition: transform 0.2s, background-color 0.2s, border-color 0.2s; }
        .card-dark-hover:hover { transform: translateY(-4px); background-color: rgba(255,255,255,0.12) !important; border-color: rgba(255,107,53,0.4) !important; }
        .faq-item { transition: box-shadow 0.2s; }
        .faq-item:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.08); }
        .pricing-card { transition: transform 0.2s, box-shadow 0.2s; }
        .pricing-card:hover { transform: translateY(-6px); box-shadow: 0 16px 40px rgba(0,0,0,0.12) !important; }
        .alacarte-card { transition: box-shadow 0.2s; }
        .alacarte-card:hover { box-shadow: 0 8px 24px rgba(0,0,0,0.08) !important; }
        .stat-card { transition: transform 0.2s, box-shadow 0.2s; }
        .stat-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,0.12) !important; }
      `}</style>

      {/* NAV */}
      <Nav />

      {/* HERO */}
      <section style={{ background: 'linear-gradient(135deg, #2c5a9e 0%, #3d70c0 100%)', padding: '80px 24px 100px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '400px', height: '400px', backgroundColor: 'rgba(255,255,255,0.04)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: '500px', height: '500px', backgroundColor: 'rgba(255,107,53,0.08)', borderRadius: '50%' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '750px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(255,107,53,0.2)', border: '1px solid rgba(255,107,53,0.4)', borderRadius: '20px', padding: '6px 16px', marginBottom: '28px' }}>
            <MapPin size={14} color="#f88124" />
            <span style={{ color: '#f88124', fontSize: '13px', fontWeight: '600' }}>Now serving Hamilton County, IN</span>
          </div>
          <h1 style={{ color: 'white', fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: '800', margin: '0 0 20px 0', lineHeight: 1.1, letterSpacing: '-1px' }}>
            The Run Comes<br /><span style={{ color: '#f88124' }}>To You.</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 'clamp(16px, 2.5vw, 20px)', lineHeight: 1.6, margin: '0 0 40px 0', maxWidth: '560px', marginLeft: 'auto', marginRight: 'auto' }}>
            Professional dog fitness sessions delivered to your door. Your dog runs on our slatmill, right from our van, parked in your driveway.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://app.thecaninegym.com" className="btn-primary" style={{ backgroundColor: '#f88124', color: 'white', padding: '16px 36px', borderRadius: '10px', textDecoration: 'none', fontWeight: 'bold', fontSize: '17px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <PawPrint size={20} /> Book a Session
            </a>
            <a href="#how-it-works" className="btn-secondary" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: 'white', padding: '16px 36px', borderRadius: '10px', textDecoration: 'none', fontWeight: 'bold', fontSize: '17px', border: '1px solid rgba(255,255,255,0.3)' }}>
              See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* PLACEHOLDER IMAGE STRIP */}
      {/* TEMPORARILY HIDDEN - uncomment wehn photos are ready}
      <div style={{ backgroundColor: '#f8f9fa', padding: '48px 0', borderBottom: '1px solid #eee' }}>
        <style>{`
          .image-strip {
            display: flex;
            gap: 16px;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            padding-left: 40px;
            padding-right: 40px;
            scrollbar-width: none;
            justify-content: center;
          }
          .image-strip-hint { display: none; }
          @media (max-width: 768px) {
            .image-strip {
              justify-content: flex-start;
              padding-left: 20px;
              padding-right: 20px;
            }
            .image-strip-hint { display: block; }
          }
        `}</style>
        <div className="image-strip">
          {['Your dog. Our van. At your home.', 'Professional slatmill equipment', 'Track every run, every mile'].map((caption, i) => (
            <div key={i} style={{
              backgroundColor: '#e9ecef',
              borderRadius: '16px',
              height: '220px',
              minWidth: 'min(80vw, 340px)',
              flex: '0 0 auto',
              scrollSnapAlign: 'start',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
            }}>
              <PawPrint size={36} color="#adb5bd" />
              <p style={{ color: '#adb5bd', margin: 0, fontSize: '14px', fontWeight: '500' }}>{caption}</p>
            </div>
          ))}
        </div>
        <p className="image-strip-hint" style={{ textAlign: 'center', color: '#adb5bd', fontSize: '12px', marginTop: '12px', letterSpacing: '0.5px' }}>← swipe to see more →</p>
      </div>
      */}

      {/* HOW IT WORKS */}
      <section id="how-it-works" style={{ padding: '80px 24px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p style={{ color: '#f88124', fontWeight: '700', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 12px 0' }}>Simple Process</p>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: '800', color: '#2c5a9e', margin: '0 0 16px 0', letterSpacing: '-0.5px' }}>How It Works</h2>
            <p style={{ color: '#666', fontSize: '17px', maxWidth: '500px', margin: '0 auto', lineHeight: 1.6 }}>Four simple steps to a fitter, happier dog</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '32px' }}>
            {[
              { step: '01', icon: <Calendar size={28} color="#2c5a9e" />, title: 'Book Online', desc: 'Sign up and pick a date and time that works for you.' },
              { step: '02', icon: <PawPrint size={28} color="#2c5a9e" />, title: 'We Come To You', desc: 'Our van arrives at your home with professional slatmill equipment.' },
              { step: '03', icon: <Zap size={28} color="#f88124" />, title: 'Your Dog Runs', desc: 'A 30-minute session tailored to your dog\'s pace and fitness level.' },
              { step: '04', icon: <BarChart2 size={28} color="#2c5a9e" />, title: 'Track Progress', desc: 'View stats, earn achievements, and compete on the leaderboard.' },
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

      {/* TECHNOLOGY */}
      <section style={{ padding: '80px 24px', background: 'linear-gradient(135deg, #001840 0%, #2c5a9e 100%)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p style={{ color: '#f88124', fontWeight: '700', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 12px 0' }}>Real-Time Tracking</p>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: '800', color: 'white', margin: '0 0 16px 0', letterSpacing: '-0.5px' }}>Technology That Sets Us Apart</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '17px', maxWidth: '580px', margin: '0 auto', lineHeight: 1.6 }}>
              Our custom-built slatmill sensor tracks your dog's performance in real time. The moment your session ends, all stats are automatically synced to your dashboard. No waiting, no guessing.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', alignItems: 'center' }}>
            <div>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '20px' }}>Metrics Tracked Per Session</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {[
                  { icon: <Navigation size={14} />, label: 'Distance (Miles)' },
                  { icon: <Flame size={14} />, label: 'Calories Burned' },
                  { icon: <Timer size={14} />, label: 'Session Duration' },
                  { icon: <Zap size={14} />, label: 'Peak Speed (mph)' },
                  { icon: <Gauge size={14} />, label: 'Avg. Speed (mph)' },
                  { icon: <Clock size={14} />, label: 'Active vs Rest Time' },
                  { icon: <BarChart2 size={14} />, label: 'Pace Consistency' },
                  { icon: <BarChart2 size={14} />, label: 'Speed Zones' },
                  { icon: <Zap size={14} />, label: 'Acceleration' },
                  { icon: <Timer size={14} />, label: 'Top Speed Duration' },
                  { icon: <Trophy size={14} />, label: 'Effort Score' },
                  { icon: <PawPrint size={14} />, label: 'Dog Weight' },
                ].map((metric, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '30px', padding: '8px 12px', color: 'white', width: 'calc(33.333% - 7px)', boxSizing: 'border-box' as const }}>
                    <span style={{ flexShrink: 0 }}>{metric.icon}</span>
                    <span style={{ fontSize: '12px', fontWeight: '600', lineHeight: 1.2 }}>{metric.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
              <div style={{ textAlign: 'center' }}>
                <SessionPreview />
                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px', marginTop: '14px', fontWeight: '600' }}>↕ Scroll to explore · Tap stats to switch chart</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HEALTH SCIENCE */}
      <section style={{ padding: '80px 24px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p style={{ color: '#f88124', fontWeight: '700', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 12px 0' }}>Backed By Science</p>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: '800', color: '#2c5a9e', margin: '0 0 16px 0', letterSpacing: '-0.5px' }}>Your Dog's Health Depends On It</h2>
            <p style={{ color: '#666', fontSize: '17px', maxWidth: '580px', margin: '0 auto', lineHeight: 1.6 }}>
              The research is clear. Regular, consistent exercise is one of the most powerful things you can do for your dog's quality and length of life.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '40px' }}>
            {[
              { stat: '2.5', unit: 'years', label: 'Lifespan lost to obesity', color: '#dc3545', cite: '1' },
              { stat: '50%', unit: '', label: 'Reduction in obesity risk with regular exercise', color: '#22c55e', cite: '2' },
              { stat: '56%', unit: '', label: 'Of US dogs are overweight or obese', color: '#f59e0b', cite: '3' },
              { stat: '30+', unit: 'min', label: 'Of aerobic activity recommended daily', color: '#2c5a9e', cite: '4' },
            ].map((item, i) => (
              <div key={i} className="stat-card" style={{ backgroundColor: '#f8f9fa', borderRadius: '16px', padding: '28px 24px', textAlign: 'center', border: '1px solid #eee', position: 'relative' }}>
                <div style={{ fontSize: '42px', fontWeight: '900', color: item.color, lineHeight: 1, marginBottom: '6px' }}>
                  {item.stat}<span style={{ fontSize: '22px' }}>{item.unit}</span>
                  <sup style={{ fontSize: '14px', fontWeight: '700', color: '#aaa', marginLeft: '2px' }}>[{item.cite}]</sup>
                </div>
                <p style={{ color: '#555', fontSize: '14px', margin: 0, lineHeight: 1.5 }}>{item.label}</p>
              </div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '48px' }}>
            {[
              { icon: '❤️', title: 'Cardiovascular Health', desc: 'Regular aerobic exercise strengthens your dog\'s heart, improves circulation, and builds endurance. The AAHA notes that cardiorespiratory fitness is a key marker of longevity in dogs.', cite: '4' },
              { icon: '🦴', title: 'Joint & Muscle Strength', desc: 'Consistent movement keeps joints flexible and muscles strong, reducing the risk of arthritis and mobility issues as your dog ages.', cite: null },
              { icon: '🧠', title: 'Mental & Cognitive Health', desc: 'Physical activity is directly linked to better cognitive health and reduced anxiety and destructive behaviors, according to research published in Applied Animal Behaviour Science.', cite: '5' },
              { icon: '⚖️', title: 'Weight Management', desc: 'Obesity is associated with diabetes, orthopedic disease, heart disease, and a shorter lifespan. Regular exercise is the most effective tool for keeping your dog at a healthy weight.', cite: '1' },
              { icon: '🛡️', title: 'Immune System Boost', desc: 'Moderate exercise improves circulation and reduces chronic inflammation and stress hormones, all of which contribute to a stronger immune response in dogs.', cite: null },
              { icon: '📈', title: 'Longer, Healthier Life', desc: 'A landmark 14-year Purina study found that lean dogs lived an average of 1.8 years longer than their overweight counterparts. Exercise is the foundation of a long, healthy life.', cite: '1' },
            ].map((item, i) => (
              <div key={i} className="card-hover" style={{ backgroundColor: '#f8f9fa', borderRadius: '14px', padding: '28px', border: '1px solid #eee', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ flexShrink: 0, marginTop: '2px', fontSize: '28px' }}>{item.icon}</div>
                <div>
                  <h3 style={{ fontWeight: '700', fontSize: '17px', color: '#111', margin: '0 0 8px 0' }}>{item.title}</h3>
                  <p style={{ color: '#666', margin: 0, lineHeight: 1.6, fontSize: '14px' }}>
                    {item.desc}
                    {item.cite && <sup style={{ color: '#aaa', fontWeight: '700', marginLeft: '2px' }}>[{item.cite}]</sup>}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* CITATIONS */}
          <div style={{ borderTop: '1px solid #eee', paddingTop: '28px' }}>
            <p style={{ color: '#aaa', fontSize: '12px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', margin: '0 0 12px 0' }}>Sources</p>
            <ol style={{ margin: 0, padding: '0 0 0 18px', listStyle: 'decimal' }}>
              {[
                { num: 1, text: 'Lawler DF, et al. (2008). Diet restriction and ageing in the dog: major observations over two decades of a life-span study.', url: 'https://pubmed.ncbi.nlm.nih.gov/18194558/', journal: 'British Journal of Nutrition' },
                { num: 2, text: 'Flanagan J, et al. (2017). Determination of body weight changes associated with weight loss in obese pet dogs.', url: 'https://pubmed.ncbi.nlm.nih.gov/28588481/', journal: 'Journal of Nutritional Science' },
                { num: 3, text: 'Association for Pet Obesity Prevention (APOP). (2022). U.S. Pet Obesity Prevalence Survey.', url: 'https://petobesityprevention.org/', journal: 'petobesityprevention.org' },
                { num: 4, text: 'American Animal Hospital Association (AAHA). (2019). AAHA Canine Life Stage Guidelines.', url: 'https://www.aaha.org/aaha-guidelines/life-stage-canine-2019/life-stage-canine-2019/', journal: 'aaha.org' },
                { num: 5, text: 'Arhant C, et al. (2010). Behaviour of smaller and larger dogs: Effects of training methods, inconsistency of owner behaviour and level of engagement in activities with the dog.', url: 'https://pubmed.ncbi.nlm.nih.gov/20965609/', journal: 'Applied Animal Behaviour Science' },
              ].map((ref) => (
                <li key={ref.num} style={{ color: '#999', fontSize: '12px', lineHeight: 1.6, marginBottom: '6px' }}>
                  {ref.text} <em>{ref.journal}.</em>{' '}
                  <a href={ref.url} target="_blank" rel="noopener noreferrer" style={{ color: '#2c5a9e', textDecoration: 'underline' }}>View source</a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ padding: '80px 24px', backgroundColor: '#2c5a9e' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p style={{ color: '#f88124', fontWeight: '700', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 12px 0' }}>Why Choose Us</p>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: '800', color: 'white', margin: 0, letterSpacing: '-0.5px' }}>Everything Your Dog Needs</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {[
              { icon: <Shield size={24} color="#f88124" />, title: 'Safe & Professional', desc: 'Our slatmills are designed specifically for dogs. Every session is supervised by trained staff.' },
              { icon: <Clock size={24} color="#f88124" />, title: 'Convenient', desc: 'No driving, no waiting rooms. We park in your driveway and handle everything.' },
              { icon: <BarChart2 size={24} color="#f88124" />, title: 'Track Every Run', desc: 'Miles, calories, and sessions are all logged. Watch your dog improve over time.' },
              { icon: <Trophy size={24} color="#f88124" />, title: 'Achievements & Leaderboard', desc: 'Your dog earns badges and can compete on a city-wide leaderboard.' },
              { icon: <Star size={24} color="#f88124" />, title: 'Flexible Memberships', desc: 'Choose from monthly membership plans or pay per session, whatever works for you.' },
              { icon: <PawPrint size={24} color="#f88124" />, title: 'Multi-Dog Households', desc: 'Have multiple dogs? No problem. We accommodate households with more than one pup.' },
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

          {/* Intro package callout */}
          <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '28px 24px', border: '2px solid #2c5a9e', marginBottom: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <div style={{ width: '44px', height: '44px', backgroundColor: '#2c5a9e', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <PawPrint size={22} color="white" />
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px', flexWrap: 'wrap' }}>
                  <h3 style={{ margin: 0, fontWeight: '800', fontSize: '18px', color: '#111' }}>New here? Start with our Intro Package</h3>
                  <span style={{ backgroundColor: '#eef2fb', color: '#2c5a9e', fontSize: '11px', fontWeight: '700', padding: '3px 10px', borderRadius: '20px' }}>First-time dogs only</span>
                </div>
                <p style={{ margin: 0, color: '#666', fontSize: '14px', lineHeight: 1.65, maxWidth: '540px' }}>
                  All new dogs start with 2 sessions for $85. It gives your pup time to get comfortable on the slatmill before committing to a membership. We recommend one session per week over two weeks, or both sessions in the same week since we are in your area twice.
                </p>
              </div>
            </div>
            <div style={{ marginTop: '20px', paddingLeft: '60px' }}>
              <div style={{ fontSize: '32px', fontWeight: '900', color: '#111', marginBottom: '10px' }}>$85<span style={{ fontSize: '14px', color: '#999', fontWeight: '400' }}> / 2 sessions</span></div>
              <a href="https://app.thecaninegym.com" style={{ display: 'inline-block', backgroundColor: '#2c5a9e', color: 'white', padding: '11px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '14px' }}>Get Started</a>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p style={{ color: '#f88124', fontWeight: '700', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 12px 0' }}>Simple Pricing</p>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: '800', color: '#2c5a9e', margin: '0 0 16px 0', letterSpacing: '-0.5px' }}>Plans For Every Pup</h2>
            <p style={{ color: '#666', fontSize: '17px', margin: 0 }}>All plans include stat tracking, achievements, and leaderboard access</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginBottom: '24px' }}>
            {[
              { name: 'Standard', sessions: 4, price: '$180', perSession: '$45', color: '#2c5a9e', popular: false },
              { name: 'Pro', sessions: 8, price: '$340', perSession: '$42.50', color: '#f88124', popular: true },
              { name: 'Elite', sessions: 12, price: '$480', perSession: '$40', color: '#2c5a9e', popular: false },
            ].map((plan) => (
              <div key={plan.name} className="pricing-card" style={{ backgroundColor: 'white', borderRadius: '16px', padding: '32px 28px', border: plan.popular ? '2px solid #f88124' : '1px solid #eee', position: 'relative', boxShadow: plan.popular ? '0 8px 30px rgba(255,107,53,0.15)' : '0 2px 8px rgba(0,0,0,0.06)' }}>
                {plan.popular && (
                  <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#f88124', color: 'white', padding: '4px 18px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', whiteSpace: 'nowrap' }}>MOST POPULAR</div>
                )}
                <h3 style={{ fontWeight: '800', fontSize: '22px', color: plan.color, margin: '0 0 6px 0' }}>{plan.name}</h3>
                <p style={{ color: '#999', fontSize: '14px', margin: '0 0 20px 0' }}>{plan.sessions} sessions per month</p>
                <div style={{ marginBottom: '24px' }}>
                  <span style={{ fontSize: '40px', fontWeight: '800', color: '#111', lineHeight: 1 }}>{plan.price}</span>
                  <span style={{ color: '#999', fontSize: '14px' }}>/month</span>
                  <p style={{ color: '#999', fontSize: '13px', margin: '4px 0 0 0' }}>{plan.perSession} per session</p>
                </div>
                {[`${plan.sessions} sessions/month`, 'Stat tracking & history', 'Achievements & badges', 'Leaderboard access', 'Booking app access'].map((feature) => (
                  <div key={feature} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <Check size={16} color="#22c55e" />
                    <span style={{ fontSize: '14px', color: '#444' }}>{feature}</span>
                  </div>
                ))}
                <a href="https://app.thecaninegym.com" className="btn-primary" style={{ display: 'block', marginTop: '24px', backgroundColor: plan.popular ? '#f88124' : '#2c5a9e', color: 'white', padding: '13px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', fontSize: '15px', textAlign: 'center' }}>Get Started</a>
              </div>
            ))}
          </div>
          <div className="alacarte-card" style={{ backgroundColor: 'white', borderRadius: '12px', padding: '24px 28px', border: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <h4 style={{ margin: '0 0 4px 0', color: '#111', fontWeight: '700' }}>A La Carte</h4>
              <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>No commitment, book individual sessions as needed</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <span style={{ fontSize: '28px', fontWeight: '800', color: '#111' }}>$55<span style={{ fontSize: '14px', color: '#999', fontWeight: '400' }}>/session</span></span>
              <a href="https://app.thecaninegym.com" className="btn-light" style={{ backgroundColor: '#f0f2f5', color: '#2c5a9e', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px' }}>Book Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section style={{ padding: '80px 24px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#f88124', fontWeight: '700', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 12px 0' }}>Service Area</p>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: '800', color: '#2c5a9e', margin: '0 0 16px 0', letterSpacing: '-0.5px' }}>We Come To You</h2>
          <p style={{ color: '#666', fontSize: '17px', margin: '0 0 48px 0' }}>Currently serving Hamilton County, Indiana, click your city to see our schedule</p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '32px' }}>
            {['Carmel', 'Zionsville', 'Fishers', 'Geist', 'Westfield', 'Noblesville'].map(city => (
              <button key={city} onClick={() => setSelectedCity(selectedCity === city ? null : city)}
                style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: selectedCity === city ? '#2c5a9e' : '#eef2fb', border: `1px solid ${selectedCity === city ? '#2c5a9e' : '#c8d4f0'}`, borderRadius: '30px', padding: '10px 20px', cursor: 'pointer', transition: 'all 0.2s' }}>
                <MapPin size={15} color={selectedCity === city ? 'white' : '#2c5a9e'} />
                <span style={{ fontWeight: '600', color: selectedCity === city ? 'white' : '#2c5a9e', fontSize: '15px' }}>{city}</span>
              </button>
            ))}
          </div>
          {selectedCity && (
            <div style={{ backgroundColor: '#f8f9fa', border: '1px solid #e0e7ff', borderRadius: '16px', padding: '32px', maxWidth: '500px', margin: '0 auto', textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <MapPin size={20} color="#2c5a9e" />
                <h3 style={{ color: '#2c5a9e', margin: 0, fontSize: '20px', fontWeight: '800' }}>{selectedCity}</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {SCHEDULE[selectedCity].map((slot, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', border: '1px solid #eee', borderRadius: '10px', padding: '14px 18px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Calendar size={16} color="#f88124" />
                      <span style={{ fontWeight: '700', color: '#111', fontSize: '15px' }}>{DAYS[slot.day]}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Clock size={14} color="#666" />
                      <span style={{ color: '#555', fontSize: '14px', fontWeight: '500' }}>{formatHour(slot.start)} – {formatHour(slot.end)}</span>
                    </div>
                  </div>
                ))}
              </div>
              <a href="https://app.thecaninegym.com" className="btn-primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '20px', backgroundColor: '#f88124', color: 'white', padding: '13px', borderRadius: '10px', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px' }}>
                <PawPrint size={16} /> Book a Session in {selectedCity}
              </a>
            </div>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ padding: '80px 24px', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p style={{ color: '#f88124', fontWeight: '700', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 12px 0' }}>FAQ</p>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: '800', color: '#2c5a9e', margin: 0, letterSpacing: '-0.5px' }}>Common Questions</h2>
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
      <section style={{ padding: '80px 24px', background: 'linear-gradient(135deg, #2c5a9e 0%, #3d70c0 100%)', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <PawPrint size={48} color="rgba(255,255,255,0.3)" style={{ marginBottom: '24px' }} />
          <h2 style={{ color: 'white', fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: '800', margin: '0 0 16px 0', letterSpacing: '-0.5px' }}>Ready to Get Running?</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '18px', margin: '0 0 40px 0', lineHeight: 1.6 }}>Sign up today and give your dog the workout they deserve, without leaving your driveway.</p>
          <a href="https://app.thecaninegym.com" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: '#f88124', color: 'white', padding: '18px 40px', borderRadius: '10px', textDecoration: 'none', fontWeight: 'bold', fontSize: '18px' }}>
            <PawPrint size={22} /> Create Your Account
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />

    </div>
  )
}