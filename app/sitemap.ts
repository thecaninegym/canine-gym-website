import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.thecaninegym.com'

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${base}/how-it-works`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${base}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${base}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${base}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${base}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${base}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${base}/carmel`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${base}/fishers`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${base}/westfield`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${base}/noblesville`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${base}/zionsville`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${base}/geist`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${base}/blog/why-regular-exercise-extends-your-dogs-life`,
      lastModified: new Date('2026-03-01'),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${base}/blog/what-is-a-slatmill`,
      lastModified: new Date('2026-02-01'),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${base}/blog/signs-your-dog-is-not-getting-enough-exercise`,
      lastModified: new Date('2026-02-15'),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${base}/blog/dog-obesity-statistics`,
      lastModified: new Date('2026-01-15'),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${base}/blog/how-much-exercise-does-my-dog-need`,
      lastModified: new Date('2026-01-01'),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${base}/blog/benefits-of-consistent-dog-exercise-routine`,
      lastModified: new Date('2025-12-01'),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
  ]
}
