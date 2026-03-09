'use client'
import { PawPrint } from 'lucide-react'

export default function MaintenancePage() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #001840 0%, #2c5a9e 100%)', fontFamily: "'Montserrat', system-ui, sans-serif", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px', textAlign: 'center' }}>
      <style>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes run { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
      `}</style>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '480px', margin: '0 auto' }}>

        {/* Logo */}
        <div style={{ animation: 'fadeUp 0.5s ease', marginBottom: '40px', background: 'white', borderRadius: '16px', padding: '16px 28px', display: 'inline-block' }}>
          <img src="/logo.png" alt="The Canine Gym" style={{ height: '64px', width: 'auto', display: 'block' }} />
        </div>

        {/* Animated paw */}
        <div style={{ animation: 'run 1.4s ease-in-out infinite', marginBottom: '28px' }}>
          <PawPrint size={48} color="#f88124" />
        </div>

        {/* Heading */}
        <div style={{ animation: 'fadeUp 0.5s ease 0.1s both', marginBottom: '16px' }}>
          <h1 style={{ color: 'white', fontSize: '34px', fontWeight: '800', margin: 0, letterSpacing: '-0.5px' }}>
            We're Getting Ready to Run.
          </h1>
        </div>

        <div style={{ animation: 'fadeUp 0.5s ease 0.15s both', marginBottom: '28px' }}>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '16px', margin: 0, lineHeight: '1.7' }}>
            The Canine Gym app is currently undergoing maintenance. We'll be back up shortly — your pup's fitness journey continues soon!
          </p>
        </div>

        {/* Orange divider */}
        <div style={{ animation: 'fadeUp 0.5s ease 0.2s both', width: '56px', height: '4px', background: '#f88124', borderRadius: '2px', marginBottom: '28px' }} />

        {/* Contact */}
        <div style={{ animation: 'fadeUp 0.5s ease 0.25s both' }}>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '14px', margin: 0 }}>
            Questions? Reach us at{' '}
            <a href="mailto:hello@thecaninegym.com" style={{ color: '#f88124', textDecoration: 'none', fontWeight: '600' }}>
              hello@thecaninegym.com
            </a>
          </p>
        </div>

      </div>

      {/* Bottom paw prints */}
      <div style={{ position: 'fixed', bottom: '24px', display: 'flex', gap: '12px', opacity: 0.15 }}>
        {[0,1,2,3,4].map(i => (
          <PawPrint key={i} size={18} color="white" style={{ transform: i % 2 === 0 ? 'rotate(-15deg)' : 'rotate(15deg)' }} />
        ))}
      </div>
    </div>
  )
}