import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | The Canine Gym',
  description: 'Privacy Policy for The Canine Gym mobile dog fitness service.',
}

export default function PrivacyPolicy() {
  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif", color: '#111', backgroundColor: 'white' }}>
      <Nav />

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '64px 24px 80px' }}>
        <p style={{ fontSize: '13px', color: '#f88124', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px', margin: '0 0 12px' }}>Legal</p>
        <h1 style={{ fontSize: '36px', fontWeight: '800', color: '#001840', margin: '0 0 8px' }}>Privacy Policy</h1>
        <p style={{ color: '#888', fontSize: '14px', margin: '0 0 48px' }}>Last updated: March 2026</p>

        <div style={{ borderLeft: '3px solid #f0f2f7', paddingLeft: '24px', marginBottom: '48px' }}>
          <p style={{ color: '#555', fontSize: '15px', lineHeight: 1.8, margin: 0 }}>
            This Privacy Policy describes how The Canine Gym ("we," "us," or "our") collects, uses, and shares information about you when you use our website at www.thecaninegym.com and our client app at app.thecaninegym.com. By using our services, you agree to the collection and use of information in accordance with this policy.
          </p>
        </div>

        {[
          {
            title: '1. Information We Collect',
            content: [
              'Account Information: When you create an account, we collect your name, email address, phone number, and billing information.',
              'Dog Information: We collect information about your dog including name, breed, age, weight, and health records such as vaccination history.',
              'Session Data: We collect data from each fitness session including duration, distance, speed, and calories burned, measured by our custom slatmill sensor.',
              'Payment Information: Payments are processed by Stripe. We do not store your full credit card number on our servers.',
              'Communications: We may retain records of communications you send us including emails and SMS messages.',
              'Usage Data: We collect information about how you interact with our website and app, including pages visited and features used.',
            ]
          },
          {
            title: '2. How We Use Your Information',
            content: [
              'To provide, operate, and improve our services.',
              'To process bookings and payments.',
              'To send session reports, booking confirmations, and reminders via email and SMS.',
              'To track your dog\'s fitness progress over time.',
              'To respond to your inquiries and provide customer support.',
              'To comply with legal obligations.',
            ]
          },
          {
            title: '3. SMS Communications',
            content: [
              'With your consent, we may send SMS messages for booking confirmations, session reminders, and cancellation notices. Message and data rates may apply. You can opt out at any time by replying STOP to any SMS message or by updating your preferences in your account settings.',
            ]
          },
          {
            title: '4. How We Share Your Information',
            content: [
              'We do not sell your personal information. We may share your information with third-party service providers who help us operate our business, including Stripe (payment processing), Supabase (database), Resend (email delivery), and Vercel (hosting). These providers are bound by their own privacy policies.',
              'We may disclose your information if required by law or if we believe disclosure is necessary to protect our rights or the safety of others.',
            ]
          },
          {
            title: '5. Data Retention',
            content: [
              'We retain your personal information for as long as your account is active or as needed to provide services. You may request deletion of your account and associated data at any time by contacting us at info@thecaninegym.com.',
            ]
          },
          {
            title: '6. Security',
            content: [
              'We take reasonable measures to protect your information from unauthorized access, loss, or misuse. However, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security.',
            ]
          },
          {
            title: '7. Children\'s Privacy',
            content: [
              'Our services are not directed to children under the age of 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us and we will promptly delete it.',
            ]
          },
          {
            title: '8. Changes to This Policy',
            content: [
              'We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page with an updated date. Your continued use of our services after any changes constitutes your acceptance of the new policy.',
            ]
          },
          {
            title: '9. Contact Us',
            content: [
              'If you have any questions about this Privacy Policy, please contact us at info@thecaninegym.com or by phone at (317) 820-2541.',
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

        <div style={{ background: '#f0f2f7', borderRadius: '12px', padding: '24px', marginTop: '48px' }}>
          <p style={{ margin: 0, fontSize: '13px', color: '#888', lineHeight: 1.7 }}>
            <strong style={{ color: '#001840' }}>Disclaimer:</strong> This Privacy Policy is provided for informational purposes and may not cover all legal requirements applicable to your jurisdiction. We recommend consulting a qualified attorney to ensure full compliance with applicable privacy laws.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  )
}
