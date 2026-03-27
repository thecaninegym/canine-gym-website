import type { Metadata } from 'next'
import ContactClient from '@/components/ContactClient'

export const metadata: Metadata = {
  title: 'Contact Us | The Canine Gym | Hamilton County Dog Fitness',
  description: 'Get in touch with The Canine Gym. We serve Carmel, Fishers, Westfield, Noblesville, Zionsville, and Geist in Hamilton County, Indiana.',
  alternates: {
    canonical: 'https://www.thecaninegym.com/contact',
  },
  openGraph: {
    url: 'https://www.thecaninegym.com/contact',
    title: 'Contact Us | The Canine Gym',
  },
}

export default function Contact() {
  return <ContactClient />
}
