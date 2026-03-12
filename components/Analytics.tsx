'use client'
import { useEffect } from 'react'

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
  }
}

export function trackEvent(eventName: string, params?: Record<string, string>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params)
  }
}

export default function Analytics() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a')
      if (!target) return
      const href = target.getAttribute('href') || ''
      if (href.includes('app.thecaninegym.com')) {
        const label = target.textContent?.trim() || 'unknown'
        trackEvent('app_link_click', {
          link_text: label,
          link_url: href,
        })
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return null
}
