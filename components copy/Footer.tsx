

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#001840', padding: '40px 24px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '32px', marginBottom: '40px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <img src="/logo.png" alt="The Canine Gym" style={{ height: '36px', width: 'auto' }} />
            </div>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '13px', lineHeight: 1.7, margin: 0 }}>Professional dog fitness sessions delivered to your door. Hamilton County, Indiana.</p>
          </div>
          <div>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontWeight: '700', fontSize: '12px', letterSpacing: '1.5px', textTransform: 'uppercase', margin: '0 0 14px 0' }}>Pages</p>
            {[['How It Works', '/how-it-works'], ['Pricing', '/pricing'], ['About', '/about'], ['FAQ', '/faq'], ['Contact', '/contact']].map(([label, href]) => (
              <a key={href} href={href} style={{ display: 'block', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '14px', marginBottom: '8px' }}>{label}</a>
            ))}
          </div>
          <div>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontWeight: '700', fontSize: '12px', letterSpacing: '1.5px', textTransform: 'uppercase', margin: '0 0 14px 0' }}>Account</p>
            {[['Log In', 'https://app.thecaninegym.com'], ['Get Started', 'https://app.thecaninegym.com'], ['Book a Session', 'https://app.thecaninegym.com']].map(([label, href]) => (
              <a key={label} href={href} style={{ display: 'block', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '14px', marginBottom: '8px' }}>{label}</a>
            ))}
          </div>
          <div>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontWeight: '700', fontSize: '12px', letterSpacing: '1.5px', textTransform: 'uppercase', margin: '0 0 14px 0' }}>Service Areas</p>
            {['Carmel', 'Zionsville', 'Fishers', 'Geist', 'Westfield', 'Noblesville'].map(city => (
              <p key={city} style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', margin: '0 0 8px 0' }}>{city}</p>
            ))}
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '13px', margin: 0 }}>© {new Date().getFullYear()} The Canine Gym · Hamilton County, IN</p>
          <a href="https://app.thecaninegym.com" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '13px' }}>Client Login →</a>
        </div>
      </div>
    </footer>
  )
}