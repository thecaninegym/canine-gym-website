import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { PawPrint, MapPin, Calendar, Clock, Check, Shield, BarChart2, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dog Fitness in Carmel, IN | Mobile Slatmill Sessions | The Canine Gym',
  description: 'The Canine Gym brings professional dog slatmill workouts to your Carmel driveway. 30-minute mobile dog gym sessions serving Carmel, Indiana. Book online today.',
}

export default function Carmel() {
  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif", color: '#111', backgroundColor: 'white' }}>
      <style>{`
        .btn-primary { transition: transform 0.2s, box-shadow 0.2s, background-color 0.2s; }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(248,129,36,0.35); background-color: #e07010 !important; }
        .card-hover { transition: transform 0.2s, box-shadow 0.2s; }
        .card-hover:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,0.1) !important; }
      `}</style>
      <Nav />

      {/* HERO */}
      <section style={{ background: 'linear-gradient(135deg, #2c5a9e 0%, #3d70c0 100%)', padding: '80px 24px 100px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '400px', height: '400px', backgroundColor: 'rgba(255,255,255,0.04)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: '500px', height: '500px', backgroundColor: 'rgba(248,129,36,0.08)', borderRadius: '50%' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '720px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(248,129,36,0.2)', border: '1px solid rgba(248,129,36,0.4)', borderRadius: '20px', padding: '6px 16px', marginBottom: '28px' }}>
            <MapPin size={14} color="#f88124" />
            <span style={{ color: '#f88124', fontSize: '13px', fontWeight: '600' }}>Now serving Carmel, Indiana</span>
          </div>
          <h1 style={{ color: 'white', fontSize: 'clamp(34px, 5.5vw, 60px)', fontWeight: '800', margin: '0 0 20px 0', lineHeight: 1.1, letterSpacing: '-1px' }}>
            Dog Fitness, Delivered to<br /><span style={{ color: '#f88124' }}>Carmel.</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 'clamp(16px, 2.5vw, 19px)', lineHeight: 1.6, margin: '0 0 40px 0', maxWidth: '560px', marginLeft: 'auto', marginRight: 'auto' }}>
            We park our professional slatmill van right in your Carmel driveway. Your dog gets a structured 30-minute workout while you stay home and relax.
          </p>
          <a href="https://app.thecaninegym.com" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: '#f88124', color: 'white', padding: '16px 36px', borderRadius: '10px', textDecoration: 'none', fontWeight: 'bold', fontSize: '17px' }}>
            <PawPrint size={20} /> Book a Session in Carmel
          </a>
        </div>
      </section>

      {/* SCHEDULE */}
      <section style={{ padding: '72px 24px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#f88124', fontWeight: '700', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 12px 0' }}>Schedule</p>
          <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: '800', color: '#2c5a9e', margin: '0 0 16px 0', letterSpacing: '-0.5px' }}>When We're in Carmel</h2>
          <p style={{ color: '#666', fontSize: '16px', margin: '0 0 40px 0', lineHeight: 1.6 }}>The Canine Gym visits Carmel twice a week. Morning and afternoon slots available.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', maxWidth: '440px', margin: '0 auto 36px' }}>
            {[
              { day: 'Monday', time: '6:00 AM – 12:00 PM' },
              { day: 'Thursday', time: '1:00 PM – 7:00 PM' },
            ].map((slot, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f8f9fa', border: '1px solid #e9ecef', borderRadius: '12px', padding: '18px 24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Calendar size={18} color="#f88124" />
                  <span style={{ fontWeight: '700', color: '#111', fontSize: '16px' }}>{slot.day}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Clock size={15} color="#666" />
                  <span style={{ color: '#555', fontSize: '15px', fontWeight: '500' }}>{slot.time}</span>
                </div>
              </div>
            ))}
          </div>
          <a href="https://app.thecaninegym.com" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#f88124', color: 'white', padding: '14px 28px', borderRadius: '10px', textDecoration: 'none', fontWeight: 'bold', fontSize: '15px' }}>
            <PawPrint size={18} /> View Available Slots
          </a>
        </div>
      </section>

      {/* ABOUT THE SERVICE */}
      <section style={{ padding: '72px 24px', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p style={{ color: '#f88124', fontWeight: '700', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 12px 0' }}>The Service</p>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: '800', color: '#2c5a9e', margin: '0 0 16px 0', letterSpacing: '-0.5px' }}>Professional Dog Exercise, At Your Door</h2>
            <p style={{ color: '#666', fontSize: '16px', maxWidth: '580px', margin: '0 auto', lineHeight: 1.6 }}>
              Carmel dogs deserve world-class fitness. Our mobile gym brings everything needed for a real workout, no driving, no drop-offs, no waiting.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
            {[
              { icon: <Shield size={24} color="#f88124" />, title: 'Safe & Supervised', desc: 'Every session is run by a trained handler on a purpose-built dog slatmill.' },
              { icon: <Clock size={24} color="#f88124" />, title: '30-Minute Sessions', desc: 'A focused workout timed perfectly for your dog\'s endurance and health.' },
              { icon: <BarChart2 size={24} color="#f88124" />, title: 'Track Every Run', desc: 'Distance, calories, heart rate, and more synced to your dashboard instantly.' },
              { icon: <Zap size={24} color="#f88124" />, title: 'Any Breed, Any Level', desc: 'From puppies building stamina to senior dogs staying mobile, we tailor every session.' },
            ].map((item, i) => (
              <div key={i} className="card-hover" style={{ backgroundColor: 'white', borderRadius: '14px', padding: '28px 24px', border: '1px solid #eee' }}>
                <div style={{ marginBottom: '14px' }}>{item.icon}</div>
                <h3 style={{ fontWeight: '700', fontSize: '16px', color: '#111', margin: '0 0 8px 0' }}>{item.title}</h3>
                <p style={{ color: '#666', margin: 0, lineHeight: 1.6, fontSize: '14px' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING SNAPSHOT */}
      <section style={{ padding: '72px 24px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#f88124', fontWeight: '700', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 12px 0' }}>Pricing</p>
          <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: '800', color: '#2c5a9e', margin: '0 0 16px 0', letterSpacing: '-0.5px' }}>Simple, Transparent Pricing</h2>
          <p style={{ color: '#666', fontSize: '16px', margin: '0 0 40px 0' }}>Monthly memberships or pay-per-session, whatever works for you.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', marginBottom: '32px' }}>
            {[
              { name: 'A La Carte', price: '$55', detail: 'per session', note: 'No commitment' },
              { name: 'Starter', price: '$45', detail: 'per session', note: '4 sessions/mo' },
              { name: 'Active', price: '$42.50', detail: 'per session', note: '8 sessions/mo', popular: true },
              { name: 'Athlete', price: '$40', detail: 'per session', note: '12 sessions/mo' },
            ].map((plan, i) => (
              <div key={i} style={{ backgroundColor: plan.popular ? '#2c5a9e' : '#f8f9fa', borderRadius: '14px', padding: '24px 16px', textAlign: 'center', border: plan.popular ? '2px solid #f88124' : '1px solid #eee', position: 'relative' }}>
                {plan.popular && <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#f88124', color: 'white', padding: '3px 14px', borderRadius: '20px', fontSize: '11px', fontWeight: 'bold', whiteSpace: 'nowrap' }}>POPULAR</div>}
                <p style={{ fontWeight: '700', fontSize: '13px', color: plan.popular ? 'rgba(255,255,255,0.7)' : '#999', margin: '0 0 8px 0' }}>{plan.name}</p>
                <p style={{ fontSize: '28px', fontWeight: '800', color: plan.popular ? 'white' : '#111', margin: '0 0 2px 0', lineHeight: 1 }}>{plan.price}</p>
                <p style={{ fontSize: '12px', color: plan.popular ? 'rgba(255,255,255,0.6)' : '#999', margin: '0 0 6px 0' }}>{plan.detail}</p>
                <p style={{ fontSize: '12px', color: plan.popular ? 'rgba(255,255,255,0.8)' : '#666', margin: 0, fontWeight: '600' }}>{plan.note}</p>
              </div>
            ))}
          </div>
          <a href="/pricing" style={{ color: '#2c5a9e', fontWeight: '700', fontSize: '14px', textDecoration: 'none' }}>View full pricing details →</a>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 24px', background: 'linear-gradient(135deg, #2c5a9e 0%, #3d70c0 100%)', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <PawPrint size={48} color="rgba(255,255,255,0.3)" style={{ marginBottom: '24px' }} />
          <h2 style={{ color: 'white', fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: '800', margin: '0 0 16px 0', letterSpacing: '-0.5px' }}>Ready to Get Your Carmel Dog Running?</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '17px', margin: '0 0 36px 0', lineHeight: 1.6 }}>Sign up and book your first session. We'll be in your driveway before you know it.</p>
          <a href="https://app.thecaninegym.com" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: '#f88124', color: 'white', padding: '16px 36px', borderRadius: '10px', textDecoration: 'none', fontWeight: 'bold', fontSize: '17px' }}>
            <PawPrint size={20} /> Book in Carmel
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
