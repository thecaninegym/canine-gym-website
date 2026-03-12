import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { Clock, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dog Health & Fitness Blog | The Canine Gym',
  description: 'Science-backed tips and research on canine fitness, exercise, and health. Learn how regular dog workouts can extend your dog\'s life and improve their wellbeing.',
  openGraph: {
    url: 'https://www.thecaninegym.com/blog',
    title: 'Dog Health & Fitness Blog | The Canine Gym',
  },
}

const posts = [
  {
    slug: 'why-regular-exercise-extends-your-dogs-life',
    title: "Why Regular Exercise Can Add Years to Your Dog's Life",
    excerpt: "Research from the Dog Aging Project shows that physically active dogs have better cognitive health, fewer medical diagnoses, and live significantly longer than sedentary dogs. Here's what the science says.",
    category: 'Dog Health',
    readTime: '5 min read',
    date: 'March 2025',
  },
  {
    slug: 'what-is-a-slatmill',
    title: 'What Is a Slatmill and Why Is It Better Than a Regular Treadmill?',
    excerpt: "Slatmills are non-motorized, dog-powered treadmills that move only when your dog does. We break down how they work, why vets love them, and how they compare to motorized alternatives.",
    category: 'Equipment',
    readTime: '4 min read',
    date: 'February 2025',
  },
  {
    slug: 'signs-your-dog-is-not-getting-enough-exercise',
    title: "7 Signs Your Dog Isn't Getting Enough Exercise",
    excerpt: "Destructive behavior, weight gain, restlessness, excessive barking - these are all signs that your dog needs more activity. Learn how to spot them and what to do about it.",
    category: 'Dog Health',
    readTime: '4 min read',
    date: 'February 2025',
  },
  {
    slug: 'dog-obesity-statistics',
    title: 'The Quiet Crisis: Over Half of US Dogs Are Overweight',
    excerpt: "More than 56% of dogs in the United States are overweight or obese, and most owners don't know it. We look at the data, the health consequences, and what you can do today.",
    category: 'Dog Health',
    readTime: '6 min read',
    date: 'January 2025',
  },
  {
    slug: 'how-much-exercise-does-my-dog-need',
    title: 'How Much Exercise Does My Dog Actually Need?',
    excerpt: "The answer varies by breed, age, and health - but the baseline is higher than most owners think. We break it down by dog type with practical guidelines you can start using today.",
    category: 'Training Tips',
    readTime: '5 min read',
    date: 'January 2025',
  },
  {
    slug: 'benefits-of-consistent-dog-exercise-routine',
    title: 'Why Consistency Matters More Than Intensity for Dog Fitness',
    excerpt: '"Weekend warrior" dogs who get intense bursts of exercise are actually at higher risk of injury than dogs with a steady routine. Here\'s why consistency is the most important fitness principle.',
    category: 'Training Tips',
    readTime: '4 min read',
    date: 'December 2024',
  },
]

const categoryColors: Record<string, { bg: string; color: string }> = {
  'Dog Health': { bg: '#eef2fb', color: '#2c5a9e' },
  'Equipment': { bg: '#fff4ea', color: '#c86800' },
  'Training Tips': { bg: '#eafbf0', color: '#1a7a45' },
}

export default function Blog() {
  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif", color: '#111', backgroundColor: 'white' }}>
      <Nav />

      {/* HERO */}
      <section style={{ background: 'linear-gradient(135deg, #2c5a9e 0%, #3d70c0 100%)', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <p style={{ color: '#f88124', fontWeight: '700', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 16px 0' }}>Resources</p>
          <h1 style={{ color: 'white', fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: '800', margin: '0 0 20px 0', letterSpacing: '-1px', lineHeight: 1.1 }}>Dog Health & Fitness Blog</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '18px', lineHeight: 1.6, margin: 0 }}>Research-backed articles to help you keep your dog healthy, active, and living their best life.</p>
        </div>
      </section>

      {/* FEATURED POST */}
      <section style={{ padding: '64px 24px 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <p style={{ color: '#f88124', fontWeight: '700', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 20px 0' }}>Featured</p>
          <a href={`/blog/${posts[0].slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
            <div style={{ backgroundColor: '#eef2fb', borderRadius: '20px', padding: '48px', marginBottom: '64px' }}>
              <span style={{ backgroundColor: '#2c5a9e', color: 'white', fontSize: '12px', fontWeight: '700', padding: '4px 12px', borderRadius: '20px', display: 'inline-block', marginBottom: '16px' }}>{posts[0].category}</span>
              <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: '800', color: '#2c5a9e', margin: '0 0 16px 0', lineHeight: 1.3 }}>{posts[0].title}</h2>
              <p style={{ color: '#555', fontSize: '16px', lineHeight: 1.7, margin: '0 0 24px 0', maxWidth: '680px' }}>{posts[0].excerpt}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
                <span style={{ color: '#999', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '4px' }}><Clock size={13} /> {posts[0].readTime}</span>
                <span style={{ color: '#999', fontSize: '13px' }}>{posts[0].date}</span>
                <span style={{ color: '#f88124', fontWeight: '700', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '5px' }}>Read article <ArrowRight size={14} /></span>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* ALL POSTS */}
      <section style={{ padding: '0 24px 80px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <p style={{ color: '#999', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 28px 0' }}>All Articles</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '24px' }}>
            {posts.slice(1).map((post) => {
              const cat = categoryColors[post.category] ?? { bg: '#eef2fb', color: '#2c5a9e' }
              return (
                <a key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit', backgroundColor: '#f8f9fa', borderRadius: '16px', border: '1px solid #eee', display: 'flex', flexDirection: 'column', padding: '28px' }}>
                  <span style={{ backgroundColor: cat.bg, color: cat.color, fontSize: '11px', fontWeight: '700', padding: '3px 10px', borderRadius: '20px', display: 'inline-block', marginBottom: '14px', width: 'fit-content' }}>{post.category}</span>
                  <h3 style={{ fontWeight: '700', fontSize: '16px', color: '#111', margin: '0 0 12px 0', lineHeight: 1.4, flex: 1 }}>{post.title}</h3>
                  <p style={{ color: '#666', fontSize: '13px', lineHeight: 1.65, margin: '0 0 20px 0' }}>{post.excerpt}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                    <span style={{ color: '#bbb', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '4px' }}><Clock size={12} /> {post.readTime}</span>
                    <span style={{ color: '#f88124', fontWeight: '700', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '4px' }}>Read <ArrowRight size={13} /></span>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section style={{ padding: '80px 24px', backgroundColor: '#f8f9fa', textAlign: 'center' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <p style={{ color: '#f88124', fontWeight: '700', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 12px 0' }}>Stay Updated</p>
          <h2 style={{ fontSize: '28px', fontWeight: '800', color: '#2c5a9e', margin: '0 0 12px 0' }}>Dog Health Tips, Monthly</h2>
          <p style={{ color: '#666', fontSize: '15px', margin: '0 0 28px 0', lineHeight: 1.6 }}>Get our latest articles and dog fitness tips delivered to your inbox. No spam, ever.</p>
          <div style={{ display: 'flex', gap: '10px', maxWidth: '440px', margin: '0 auto' }}>
            <input type="email" placeholder="Your email address" style={{ flex: 1, padding: '13px 16px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '15px', outline: 'none' }} />
            <button style={{ backgroundColor: '#f88124', color: 'white', padding: '13px 20px', borderRadius: '8px', border: 'none', fontWeight: 'bold', fontSize: '15px', cursor: 'pointer', whiteSpace: 'nowrap' }}>Subscribe</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
