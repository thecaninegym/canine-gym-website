'use client'
import { useState } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { PawPrint, ChevronDown } from 'lucide-react'

export default function FaqClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const categories = [
    {
      label: 'The Service',
      faqs: [
        { q: 'What is The Canine Gym?', a: 'The Canine Gym is a mobile dog fitness service. We bring a professional slatmill treadmill to your home in our van and give your dog a structured 30-minute workout, right in your house.' },
        { q: 'What is a slatmill?', a: 'A slatmill is a non-motorized treadmill designed specifically for dogs. Unlike electric treadmills, the belt only moves when your dog walks or runs, they control the speed entirely. This makes it safer, more natural, and more effective for building real fitness.' },
        { q: 'How long is each session?', a: 'Each session is 30 minutes. We arrive, set up, run your dog, and pack up, typically in about 45 minutes total from arrival to departure.' },
        { q: 'Do I need to be home during the session?', a: 'No you do not. Although we encourage you to be home in case you would like to watch the session or bring your dog to us. If you are not home, you can leave a note in booking with how you would like us to retrieve your dog.' },
        { q: 'What happens during the first session?', a: 'First-time dogs get an introductory session where we ease them onto the slatmill at their own pace. Some dogs jump right on, others take a few minutes to get comfortable. We never rush the process.' },
      ]
    },
    {
      label: 'Dogs & Breeds',
      faqs: [
        { q: 'What size dogs can use the slatmill?', a: 'Our slatmills accommodate most breeds and sizes, from medium to large dogs. We will assess your dog at the first session to make sure they are comfortable and safe on the equipment.' },
        { q: 'My dog is very high energy, is this right for them?', a: 'Absolutely. High-energy breeds tend to love the slatmill. It gives them a real outlet for their energy in a structured, controlled way.' },
        { q: 'Can older dogs use the slatmill?', a: 'Yes, with modifications. Senior dogs often benefit greatly from low-impact, consistent exercise. We tailor the pace and duration to your dog\'s fitness level and physical condition.' },
        { q: 'Can I bring multiple dogs?', a: 'Yes! If you have multiple dogs, they each get their own session time on the slatmill. We accommodate multi-dog households.' },
      ]
    },
    {
      label: 'Booking & Memberships',
      faqs: [
        { q: 'How do I book a session?', a: 'Create an account at app.thecaninegym.com, add your dog\'s profile, and pick an available time slot in your city. You\'ll receive instant confirmation by email.' },
        { q: 'How do memberships work?', a: 'Memberships give you a set number of sessions per month at a discounted rate. Sessions reset on the 1st of each month and do not roll over. You can also book a la carte sessions without a membership.' },
        { q: 'Can I cancel or reschedule?', a: 'Yes, you can manage your bookings through the app. Please give us as much notice as possible for cancellations or reschedules.' },
        { q: 'What is the a la carte option?', a: 'A la carte sessions are $55 each with no membership required. Book as many or as few as you like, whenever it works for you.' },
      ]
    },
    {
      label: 'Stats & Tracking',
      faqs: [
        { q: 'How does the stat tracking work?', a: 'Your dog wears our fitness tracker during each session. When the session ends, all data, distance, calories, heart rate, speed, duration, and more, is automatically synced to your dashboard in the app.' },
        { q: 'What stats are tracked?', a: 'We track distance (miles), calories burned, session duration, heart rate, top speed, average pace, body temperature, and exertion level. More metrics are coming soon.' },
        { q: 'What is the leaderboard?', a: 'The leaderboard ranks dogs in your city by total sessions, miles run, or calories burned for the current month. It resets monthly. You can choose to participate publicly, anonymously, or opt out entirely.' },
        { q: 'What are achievements?', a: 'Achievements are badges your dog earns by hitting milestones, like completing their first session, running 10 miles total, or booking 5 sessions in a month. They show up on your dashboard and leaderboard profile.' },
      ]
    },
    {
      label: 'Service Areas',
      faqs: [
        { q: 'What areas do you serve?', a: 'We currently serve Carmel, Zionsville, Fishers, Geist, Westfield, and Noblesville in Hamilton County, Indiana.' },
        { q: 'When do you come to my city?', a: 'Each city has specific days and times. Visit our home page and click your city to see the schedule. Availability varies by location.' },
        { q: 'Are you expanding to new areas?', a: 'Yes, expansion is planned. If you\'re outside our current service area, reach out via our contact page and we\'ll let you know when we\'re coming to your area.' },
      ]
    },
  ]

  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif", color: '#111', backgroundColor: 'white' }}>
      <style>{`
        .faq-item { transition: box-shadow 0.2s; }
        .faq-item:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.08); }
      `}</style>
      <Nav />

      {/* HERO */}
      <section style={{ background: 'linear-gradient(135deg, #2c5a9e 0%, #3d70c0 100%)', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <p style={{ color: '#f88124', fontWeight: '700', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 16px 0' }}>FAQ</p>
          <h1 style={{ color: 'white', fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: '800', margin: '0 0 20px 0', letterSpacing: '-1px', lineHeight: 1.1 }}>Common Questions</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '18px', lineHeight: 1.6, margin: 0 }}>Everything you need to know about The Canine Gym, our sessions, and how it all works.</p>
        </div>
      </section>

      {/* FAQS */}
      <section style={{ padding: '80px 24px', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          {categories.map((cat, ci) => (
            <div key={ci} style={{ marginBottom: '56px' }}>
              <h2 style={{ fontSize: '20px', fontWeight: '800', color: '#2c5a9e', margin: '0 0 20px 0', paddingBottom: '12px', borderBottom: '2px solid #e9ecef' }}>{cat.label}</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {cat.faqs.map((faq, fi) => {
                  const idx = ci * 100 + fi
                  return (
                    <div key={fi} className="faq-item" style={{ backgroundColor: 'white', borderRadius: '12px', border: '1px solid #eee', overflow: 'hidden' }}>
                      <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                        style={{ width: '100%', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: '16px' }}>
                        <span style={{ fontWeight: '600', fontSize: '15px', color: '#111' }}>{faq.q}</span>
                        <ChevronDown size={20} color="#666" style={{ flexShrink: 0, transform: openFaq === idx ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }} />
                      </button>
                      {openFaq === idx && (
                        <div style={{ padding: '0 24px 20px', color: '#555', lineHeight: 1.7, fontSize: '15px' }}>{faq.a}</div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STILL HAVE QUESTIONS */}
      <section style={{ padding: '60px 24px', backgroundColor: 'white', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '26px', fontWeight: '800', color: '#2c5a9e', margin: '0 0 12px 0' }}>Still Have Questions?</h2>
          <p style={{ color: '#666', fontSize: '16px', margin: '0 0 24px 0', lineHeight: 1.6 }}>We're happy to help. Reach out and we'll get back to you as soon as possible.</p>
          <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#f88124', color: 'white', padding: '14px 28px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', fontSize: '15px' }}>Contact Us</a>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 24px', background: 'linear-gradient(135deg, #2c5a9e 0%, #3d70c0 100%)', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ color: 'white', fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: '800', margin: '0 0 16px 0' }}>Ready to Book?</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '17px', margin: '0 0 36px 0', lineHeight: 1.6 }}>Sign up and book your first session in minutes.</p>
          <a href="https://app.thecaninegym.com" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: '#f88124', color: 'white', padding: '16px 36px', borderRadius: '10px', textDecoration: 'none', fontWeight: 'bold', fontSize: '17px' }}>
            <PawPrint size={20} /> Get Started
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}