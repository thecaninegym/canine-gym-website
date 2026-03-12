import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { PawPrint, Check, BarChart2, Trophy, Star, Shield, Clock, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pricing & Memberships | The Canine Gym | Hamilton County',
  description: 'Flexible a la carte sessions and monthly memberships for mobile dog fitness in Hamilton County, IN. We come to you in Carmel, Fishers, Westfield, Noblesville, Zionsville & Geist.',
  openGraph: {
    url: 'https://www.thecaninegym.com/pricing',
    title: 'Pricing & Memberships | The Canine Gym',
  },
}

export default function Pricing() {
  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif", color: '#111', backgroundColor: 'white' }}>
      <Nav />
      <style>{`
        .plans-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; max-width: 900px; margin: 0 auto; }
        .includes-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .alacarte { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px; }
        @media (max-width: 768px) {
          .plans-grid { grid-template-columns: 1fr; max-width: 420px; }
          .includes-grid { grid-template-columns: repeat(2, 1fr); }
          .alacarte { flex-direction: column; align-items: flex-start; }
        }
        @media (max-width: 480px) {
          .includes-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* HERO */}
      <section style={{ background: 'linear-gradient(135deg, #2c5a9e 0%, #3d70c0 100%)', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <p style={{ color: '#f88124', fontWeight: '700', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 16px 0' }}>Simple Pricing</p>
          <h1 style={{ color: 'white', fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: '800', margin: '0 0 20px 0', letterSpacing: '-1px', lineHeight: 1.1 }}>Plans For Every Pup</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '18px', lineHeight: 1.6, margin: 0 }}>All plans include real-time stat tracking, achievements, leaderboard access, and our full app experience.</p>
        </div>
      </section>

      {/* PLANS */}
      <section style={{ padding: '80px 24px', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div className="plans-grid">
            {[
              { name: 'Starter', sessions: 4, price: '$180', perSession: '$45', color: '#2c5a9e', popular: false, desc: 'Perfect for getting started and building a routine.' },
              { name: 'Active', sessions: 8, price: '$340', perSession: '$42.50', color: '#f88124', popular: true, desc: 'Our most popular plan for committed dog owners.' },
              { name: 'Athlete', sessions: 12, price: '$480', perSession: '$40', color: '#2c5a9e', popular: false, desc: 'Maximum results for serious fitness goals.' },
            ].map((plan) => (
              <div key={plan.name} style={{ backgroundColor: 'white', borderRadius: '16px', padding: '36px 28px', border: plan.popular ? '2px solid #f88124' : '1px solid #eee', position: 'relative', boxShadow: plan.popular ? '0 8px 30px rgba(255,107,53,0.15)' : '0 2px 8px rgba(0,0,0,0.06)' }}>
                {plan.popular && (
                  <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#f88124', color: 'white', padding: '4px 18px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', whiteSpace: 'nowrap' }}>MOST POPULAR</div>
                )}
                <h3 style={{ fontWeight: '800', fontSize: '24px', color: plan.color, margin: '0 0 6px 0' }}>{plan.name}</h3>
                <p style={{ color: '#999', fontSize: '14px', margin: '0 0 6px 0' }}>{plan.sessions} sessions per month</p>
                <p style={{ color: '#666', fontSize: '14px', margin: '0 0 24px 0', lineHeight: 1.5 }}>{plan.desc}</p>
                <div style={{ marginBottom: '28px' }}>
                  <span style={{ fontSize: '48px', fontWeight: '800', color: '#111', lineHeight: 1 }}>{plan.price}</span>
                  <span style={{ color: '#999', fontSize: '15px' }}>/month</span>
                  <p style={{ color: '#999', fontSize: '13px', margin: '6px 0 0 0' }}>{plan.perSession} per session</p>
                </div>
                {[
                  `${plan.sessions} sessions/month`,
                  'Real-time stat tracking',
                  'Session history & trends',
                  'Achievements & badges',
                  'City leaderboard access',
                  'Full app access',
                  'Email session summaries',
                ].map((feature) => (
                  <div key={feature} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                    <Check size={16} color="#22c55e" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: '14px', color: '#444' }}>{feature}</span>
                  </div>
                ))}
                <a href="https://app.thecaninegym.com" style={{ display: 'block', marginTop: '28px', backgroundColor: plan.popular ? '#f88124' : '#2c5a9e', color: 'white', padding: '14px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', fontSize: '15px', textAlign: 'center' }}>
                  Get Started
                </a>
              </div>
            ))}
          </div>

          {/* A LA CARTE */}
          <div className="alacarte" style={{ backgroundColor: 'white', borderRadius: '12px', padding: '28px 32px', border: '1px solid #eee', marginTop: '24px' }}>
            <div>
              <h4 style={{ margin: '0 0 4px 0', color: '#111', fontWeight: '700', fontSize: '20px' }}>A La Carte</h4>
              <p style={{ margin: 0, color: '#666', fontSize: '15px' }}>No commitment, book individual sessions whenever you need them</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
              <span style={{ fontSize: '32px', fontWeight: '800', color: '#111' }}>$55<span style={{ fontSize: '15px', color: '#999', fontWeight: '400' }}>/session</span></span>
              <a href="https://app.thecaninegym.com" style={{ backgroundColor: '#f0f2f5', color: '#2c5a9e', padding: '13px 28px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', fontSize: '15px' }}>Book Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* WHATS INCLUDED */}
      <section style={{ padding: '80px 24px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#f88124', fontWeight: '700', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 12px 0' }}>Every Plan Includes</p>
          <h2 style={{ fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: '800', color: '#2c5a9e', margin: '0 0 48px 0', letterSpacing: '-0.5px' }}>Everything You Need</h2>
          <div className="includes-grid">
            {[
              { icon: <BarChart2 size={24} color="#f88124" />, title: 'Real-Time Stats', desc: 'Distance, calories, heart rate, speed, all synced instantly after every session.' },
              { icon: <Trophy size={24} color="#f88124" />, title: 'Achievements', desc: 'Your dog earns badges as they hit milestones. A fun way to celebrate progress.' },
              { icon: <Star size={24} color="#f88124" />, title: 'Leaderboard', desc: 'Compete on a city-wide monthly leaderboard and see how your dog stacks up.' },
              { icon: <Shield size={24} color="#f88124" />, title: 'Professional Sessions', desc: 'Every session is supervised by a trained handler using professional equipment.' },
              { icon: <Clock size={24} color="#f88124" />, title: 'Easy Booking', desc: 'Book, reschedule, or cancel sessions anytime from the app.' },
              { icon: <Zap size={24} color="#f88124" />, title: 'Progress Tracking', desc: "View your dog's fitness trend over time and watch them improve." },
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: '#f8f9fa', borderRadius: '14px', padding: '28px', border: '1px solid #eee', textAlign: 'left' }}>
                <div style={{ marginBottom: '12px' }}>{item.icon}</div>
                <h3 style={{ fontWeight: '700', fontSize: '16px', color: '#111', margin: '0 0 8px 0' }}>{item.title}</h3>
                <p style={{ color: '#666', fontSize: '14px', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ TEASER */}
      <section style={{ padding: '60px 24px', backgroundColor: '#f8f9fa', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '26px', fontWeight: '800', color: '#2c5a9e', margin: '0 0 12px 0' }}>Have Questions?</h2>
          <p style={{ color: '#666', fontSize: '16px', margin: '0 0 24px 0', lineHeight: 1.6 }}>Check out our FAQ page for answers to the most common questions about sessions, memberships, and how everything works.</p>
          <a href="/faq" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#2c5a9e', color: 'white', padding: '14px 28px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', fontSize: '15px' }}>View FAQ</a>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 24px', background: 'linear-gradient(135deg, #2c5a9e 0%, #3d70c0 100%)', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ color: 'white', fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: '800', margin: '0 0 16px 0' }}>Ready to Get Running?</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '17px', margin: '0 0 36px 0', lineHeight: 1.6 }}>Sign up today and give your dog the workout they deserve.</p>
          <a href="https://app.thecaninegym.com" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: '#f88124', color: 'white', padding: '16px 36px', borderRadius: '10px', textDecoration: 'none', fontWeight: 'bold', fontSize: '17px' }}>
            <PawPrint size={20} /> Create Your Account
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}