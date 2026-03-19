import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Terms of Service | The Canine Gym',
  description: 'Terms of Service for The Canine Gym mobile dog fitness service.',
}

export default function Terms() {
  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif", color: '#111', backgroundColor: 'white' }}>
      <Nav />

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '64px 24px 80px' }}>
        <p style={{ fontSize: '13px', color: '#f88124', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px', margin: '0 0 12px' }}>Legal</p>
        <h1 style={{ fontSize: '36px', fontWeight: '800', color: '#001840', margin: '0 0 8px' }}>Terms of Service</h1>
        <p style={{ color: '#888', fontSize: '14px', margin: '0 0 48px' }}>Last updated: March 2026</p>

        <div style={{ borderLeft: '3px solid #f0f2f7', paddingLeft: '24px', marginBottom: '48px' }}>
          <p style={{ color: '#555', fontSize: '15px', lineHeight: 1.8, margin: 0 }}>
            Please read these Terms of Service carefully before using The Canine Gym website or client app. By accessing or using our services, you agree to be bound by these terms. If you do not agree, please do not use our services.
          </p>
        </div>

        {[
          {
            title: '1. Services',
            content: [
              'The Canine Gym provides mobile dog fitness sessions using a professional slatmill treadmill delivered to your location within our service area. Sessions are booked through our client app at app.thecaninegym.com.',
              'We reserve the right to modify, suspend, or discontinue any aspect of our services at any time with reasonable notice.',
            ]
          },
          {
            title: '2. Eligibility and Account',
            content: [
              'You must be at least 18 years old to create an account and purchase services.',
              'You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account.',
              'You agree to provide accurate and complete information when creating your account and to keep that information up to date.',
            ]
          },
          {
            title: '3. Bookings and Cancellations',
            content: [
              'Sessions must be booked in advance through our client app. Bookings are subject to availability.',
              'Cancellations must be made at least 24 hours before the scheduled session to avoid forfeiture of that session from your membership.',
              'We reserve the right to cancel or reschedule sessions due to weather, equipment issues, illness, or other circumstances beyond our control. In such cases, you will be notified as soon as possible and the session will be rescheduled at no additional cost.',
            ]
          },
          {
            title: '4. Payments and Memberships',
            content: [
              'Membership fees are billed on a recurring basis via Stripe. By purchasing a membership, you authorize us to charge your payment method on the applicable billing cycle.',
              'All sales are final. Refunds are issued at our discretion and only in cases of service failure on our part.',
              'We reserve the right to change pricing with reasonable advance notice to existing members.',
            ]
          },
          {
            title: '5. Health and Safety',
            content: [
              'You represent that your dog is in good health and fit for physical exercise. You agree to inform us of any health conditions, injuries, or behavioral concerns that may affect your dog\'s ability to participate in sessions.',
              'You agree to ensure your dog is current on all required vaccinations prior to their first session. We reserve the right to refuse service if vaccination records are not provided or are out of date.',
              'The Canine Gym is not a veterinary service. Nothing we provide should be construed as veterinary advice. Please consult a licensed veterinarian regarding your dog\'s health and fitness.',
            ]
          },
          {
            title: '6. Assumption of Risk and Liability',
            content: [
              'Physical exercise carries inherent risks. By using our services, you acknowledge and accept that your dog\'s participation in slatmill fitness sessions involves risk of injury.',
              'The Canine Gym is not liable for any injury, illness, or death of your dog arising from participation in our sessions, except in cases of gross negligence or willful misconduct on our part.',
              'You agree to indemnify and hold harmless The Canine Gym, its owners, employees, and agents from any claims, damages, or expenses arising out of your use of our services.',
            ]
          },
          {
            title: '7. Intellectual Property',
            content: [
              'All content on our website and app, including text, images, logos, and software, is the property of The Canine Gym and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our written permission.',
            ]
          },
          {
            title: '8. Privacy',
            content: [
              'Your use of our services is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy at www.thecaninegym.com/privacy-policy.',
            ]
          },
          {
            title: '9. Governing Law',
            content: [
              'These Terms are governed by the laws of the State of Indiana, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be resolved in the courts of Hamilton County, Indiana.',
            ]
          },
          {
            title: '10. Changes to These Terms',
            content: [
              'We may update these Terms of Service from time to time. We will notify you of significant changes by posting the updated terms on this page with a revised date. Your continued use of our services after any changes constitutes your acceptance of the new terms.',
            ]
          },
          {
            title: '11. Contact Us',
            content: [
              'If you have any questions about these Terms of Service, please contact us at info@thecaninegym.com or by phone at (317) 820-2541.',
            ]
          },
        ].map(section => (
          <div key={section.title} style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '18px', fontWeight: '800', color: '#001840', margin: '0 0 14px' }}>{section.title}</h2>
            {section.content.map((para, i) => (
              <p key={i} style={{ color: '#555', fontSize: '15px', lineHeight: 1.8, margin: '0 0 10px' }}>{para}</p>
            ))}
          </div>
        ))}

      </div>

      <Footer />
    </div>
  )
}
