'use client'
import { PawPrint } from 'lucide-react'

export default function MaintenancePage() {
  return (
    <div style={{ minHeight: '100vh', background: 'white', fontFamily: "'Montserrat', system-ui, sans-serif", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px', textAlign: 'center' }}>
      <style>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes run { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
      `}</style>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '480px', margin: '0 auto' }}>

        {/* Logo */}
        <div style={{ animation: 'fadeUp 0.5s ease', marginBottom: '40px' }}>
          <img src="/logo.png" alt="The Canine Gym" style={{ height: '72px', width: 'auto', display: 'block' }} />
        </div>

        {/* Orange accent line */}
        <div style={{ width: '100%', height: '3px', background: '#f88124', borderRadius: '2px', marginBottom: '40px' }} />

        {/* Animated paw */}
        <div style={{ animation: 'run 1.4s ease-in-out infinite', marginBottom: '28px' }}>
          <PawPrint size={48} color="#f88124" />
        </div>

        {/* Heading */}
        <div style={{ animation: 'fadeUp 0.5s ease 0.1s both', marginBottom: '16px' }}>
          <h1 style={{ color: '#001840', fontSize: '34px', fontWeight: '800', margin: 0, letterSpacing: '-0.5px' }}>
            Something Exciting Is Coming.
          </h1>
        </div>

        <div style={{ animation: 'fadeUp 0.5s ease 0.15s both', marginBottom: '28px' }}>
          <p style={{ color: '#666', fontSize: '16px', margin: 0, lineHeight: '1.7' }}>
            The Canine Gym and our proprietary app are almost here! We're putting the finishing touches on Hamilton County's premier mobile dog fitness experience. Stay tuned, your pup's fitness journey is about to begin!
          </p>
        </div>

        {/* Orange divider */}
        <div style={{ animation: 'fadeUp 0.5s ease 0.2s both', width: '56px', height: '4px', background: '#f88124', borderRadius: '2px', marginBottom: '28px' }} />

        {/* Contact */}
        <div style={{ animation: 'fadeUp 0.5s ease 0.25s both' }}>
          <p style={{ color: '#aaa', fontSize: '14px', margin: 0 }}>
            Questions? Reach us at{' '}
            <a href="mailto:info@thecaninegym.com" style={{ color: '#f88124', textDecoration: 'none', fontWeight: '600' }}>
              info@thecaninegym.com
            </a>
          </p>
        </div>

      </div>

      {/* Bottom paw prints */}
      <div style={{ position: 'fixed', bottom: '24px', display: 'flex', gap: '12px', opacity: 0.12 }}>
        {[0,1,2,3,4].map(i => (
          <PawPrint key={i} size={18} color="#001840" style={{ transform: i % 2 === 0 ? 'rotate(-15deg)' : 'rotate(15deg)' }} />
        ))}
      </div>
    </div>
  )
}