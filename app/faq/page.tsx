import type { Metadata } from 'next'
import FaqClient from '@/components/FaqClient'

export const metadata: Metadata = {
  title: 'FAQ | Dog Slatmill & Mobile Fitness Questions | The Canine Gym',
  description: 'Common questions about dog slatmill sessions, memberships, safety, and how The Canine Gym mobile dog fitness service works in Hamilton County, IN.',
  openGraph: {
    url: 'https://www.thecaninegym.com/faq',
    title: 'FAQ | The Canine Gym',
  },
}

export default function FAQ() {
  return <FaqClient />
}
