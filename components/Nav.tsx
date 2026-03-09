'use client'
import { useState } from 'react'
import { PawPrint, Menu, X } from 'lucide-react'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav style={{ position: 'sticky', top: 0, zIndex: 100, backgroundColor: 'white', borderBottom: '1px solid #eee', padding: '0 24px' }}>
      <style>{`
        .nav-link { transition: color 0.2s; }
        .nav-link:hover { color: #FF6B35 !important; }
        .login-link { transition: color 0.2s; }
        .login-link:hover { color: #FF6B35 !important; }
        .btn-primary-nav { transition: transform 0.2s, box-shadow 0.2s, background-color 0.2s; }
        .btn-primary-nav:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(255,107,53,0.35); background-color: #e85d28 !important; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
          <PawPrint size={28} color="#003087" />
          <span style={{ fontWeight: 'bold', fontSize: '18px', color: '#003087' }}>The Canine Gym</span>
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }} className="desktop-nav">
          <a href="/how-it-works" className="nav-link" style={{ color: '#555', textDecoration: 'none', fontSize: '15px', fontWeight: '500' }}>How It Works</a>
          <a href="/pricing" className="nav-link" style={{ color: '#555', textDecoration: 'none', fontSize: '15px', fontWeight: '500' }}>Pricing</a>
          <a href="/about" className="nav-link" style={{ color: '#555', textDecoration: 'none', fontSize: '15px', fontWeight: '500' }}>About</a>
          <a href="/faq" className="nav-link" style={{ color: '#555', textDecoration: 'none', fontSize: '15px', fontWeight: '500' }}>FAQ</a>
          <a href="/contact" className="nav-link" style={{ color: '#555', textDecoration: 'none', fontSize: '15px', fontWeight: '500' }}>Contact</a>
          <a href="https://app.thecaninegym.com/login?mode=login" className="login-link" style={{ color: '#003087', textDecoration: 'none', fontSize: '15px', fontWeight: '600' }}>Log In</a>
          <a href="https://app.thecaninegym.com/login?mode=signup" className="btn-primary-nav" style={{ backgroundColor: '#FF6B35', color: 'white', padding: '10px 22px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', fontSize: '15px' }}>Get Started</a>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }} className="mobile-menu-btn">
          {menuOpen ? <X size={24} color="#003087" /> : <Menu size={24} color="#003087" />}
        </button>
      </div>
      {menuOpen && (
        <div style={{ borderTop: '1px solid #eee', padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <a href="/how-it-works" onClick={() => setMenuOpen(false)} style={{ color: '#333', textDecoration: 'none', fontWeight: '500', fontSize: '16px' }}>How It Works</a>
          <a href="/pricing" onClick={() => setMenuOpen(false)} style={{ color: '#333', textDecoration: 'none', fontWeight: '500', fontSize: '16px' }}>Pricing</a>
          <a href="/about" onClick={() => setMenuOpen(false)} style={{ color: '#333', textDecoration: 'none', fontWeight: '500', fontSize: '16px' }}>About</a>
          <a href="/faq" onClick={() => setMenuOpen(false)} style={{ color: '#333', textDecoration: 'none', fontWeight: '500', fontSize: '16px' }}>FAQ</a>
          <a href="/contact" onClick={() => setMenuOpen(false)} style={{ color: '#333', textDecoration: 'none', fontWeight: '500', fontSize: '16px' }}>Contact</a>
          <a href="https://app.thecaninegym.com/login?mode=login" style={{ color: '#003087', textDecoration: 'none', fontWeight: '600', fontSize: '16px' }}>Log In</a>
          <a href="https://app.thecaninegym.com/login?mode=signup" style={{ backgroundColor: '#FF6B35', color: 'white', padding: '12px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', fontSize: '16px', textAlign: 'center' }}>Get Started</a>
        </div>
      )}
    </nav>
  )
}