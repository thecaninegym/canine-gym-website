'use client'
import { useState } from 'react'
import { PawPrint, Timer, MapPin, Flame, Zap, Gauge, TrendingUp, TrendingDown, Activity, Trophy } from 'lucide-react'

type Tab = 'duration' | 'distance' | 'avg_speed' | 'peak_speed' | 'calories' | 'weight'

const DOG = { name: 'Cooper', breed: 'Golden Retriever' }
const SESSION_NUMBER = 14
const SESSION_DATE = 'Wednesday, April 9, 2026'
const EFFORT_SCORE = 74

const SESSION = {
  duration_minutes: 28,
  distance_miles: 2.41,
  avg_speed_mph: 3.8,
  peak_speed_mph: 6.2,
  calories: 312,
  dog_weight_lbs: 72.4,
  pace_consistency: 0.42,
  active_seconds: 1480,
  avg_acceleration: 1.35,
  top_speed_duration: 14,
  low_zone_seconds: 420,
  moderate_zone_seconds: 680,
  high_zone_seconds: 380,
}

const PREV_SESSIONS = [
  { id: 'p6', date: 'Feb 12', duration_minutes: 22, distance_miles: 1.68, avg_speed_mph: 3.2, peak_speed_mph: 5.4, calories: 238, dog_weight_lbs: 74.1 },
  { id: 'p5', date: 'Feb 19', duration_minutes: 25, distance_miles: 1.95, avg_speed_mph: 3.4, peak_speed_mph: 5.6, calories: 261, dog_weight_lbs: 73.8 },
  { id: 'p4', date: 'Feb 26', duration_minutes: 25, distance_miles: 2.02, avg_speed_mph: 3.5, peak_speed_mph: 5.8, calories: 274, dog_weight_lbs: 73.5 },
  { id: 'p3', date: 'Mar 5', duration_minutes: 28, distance_miles: 2.18, avg_speed_mph: 3.6, peak_speed_mph: 5.9, calories: 289, dog_weight_lbs: 73.2 },
  { id: 'p2', date: 'Mar 19', duration_minutes: 28, distance_miles: 2.25, avg_speed_mph: 3.6, peak_speed_mph: 6.0, calories: 295, dog_weight_lbs: 72.8 },
  { id: 'p1', date: 'Apr 2', duration_minutes: 28, distance_miles: 2.32, avg_speed_mph: 3.7, peak_speed_mph: 6.1, calories: 304, dog_weight_lbs: 72.6 },
]

const CURRENT = { id: 'current', date: 'Today', ...SESSION }

export default function SessionPreview() {
  const [activeTab, setActiveTab] = useState<Tab>('distance')
  const [openTip, setOpenTip] = useState<string | null>(null)

  const chartSessions = [...PREV_SESSIONS, CURRENT]

  const tabs: { key: Tab; label: string; unit: string; color: string; getValue: (s: any) => number | null }[] = [
    { key: 'duration', label: 'Duration', unit: 'min', color: '#2c5a9e', getValue: s => s.duration_minutes },
    { key: 'distance', label: 'Distance', unit: 'mi', color: '#2c5a9e', getValue: s => s.distance_miles },
    { key: 'avg_speed', label: 'Avg Speed', unit: 'mph', color: '#2c5a9e', getValue: s => s.avg_speed_mph },
    { key: 'peak_speed', label: 'Peak Speed', unit: 'mph', color: '#f88124', getValue: s => s.peak_speed_mph },
    { key: 'calories', label: 'Calories', unit: 'cal', color: '#f88124', getValue: s => s.calories },
    { key: 'weight', label: 'Weight', unit: 'lbs', color: '#2c5a9e', getValue: s => s.dog_weight_lbs },
  ]

  const activeTabDef = tabs.find(t => t.key === activeTab)!
  const chartValues = chartSessions.map(s => ({ session: s, value: activeTabDef.getValue(s) }))
  const maxVal = Math.max(...chartValues.map(c => c.value || 0), 0.01)
  const prevValues = PREV_SESSIONS.map(s => activeTabDef.getValue(s)).filter((v): v is number => v !== null)
  const prevAvg = prevValues.length ? prevValues.reduce((a, b) => a + b, 0) / prevValues.length : null
  const currentVal = activeTabDef.getValue(SESSION)
  const pctChange = currentVal && prevAvg ? ((currentVal - prevAvg) / prevAvg * 100) : null

  const CHART_H = 100
  const BAR_W = 48
  const GAP = 8
  const CHART_TOTAL_W = chartSessions.length * (BAR_W + GAP)

  const formatVal = (val: number | null, unit: string) => {
    if (val === null) return '—'
    if (unit === 'cal') return Math.round(val).toString()
    if (unit === 'min') return val % 1 === 0 ? val.toString() : val.toFixed(1)
    return val.toFixed(2)
  }

  const TipIcon = ({ id: tipId, text }: { id: string; text: string }) => (
    <span style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
      <span
        onClick={(e) => { e.stopPropagation(); setOpenTip(openTip === tipId ? null : tipId) }}
        style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '14px', height: '14px', borderRadius: '50%', background: '#e5e8f0', color: '#888', fontSize: '9px', fontWeight: '800', cursor: 'pointer', marginLeft: '4px', flexShrink: 0, userSelect: 'none' }}>
        i
      </span>
      {openTip === tipId && (
        <span style={{ position: 'absolute', top: '20px', left: '50%', transform: 'translateX(-50%)', background: '#1a1a2e', color: 'white', fontSize: '11px', fontWeight: '500', lineHeight: 1.5, padding: '6px 10px', borderRadius: '6px', width: '180px', zIndex: 50, boxShadow: '0 4px 16px rgba(0,0,0,0.2)', pointerEvents: 'none' }}>
          {text}
          <span style={{ position: 'absolute', top: '-4px', left: '50%', transform: 'translateX(-50%)', width: '8px', height: '8px', background: '#1a1a2e', borderRadius: '1px', rotate: '45deg' }} />
        </span>
      )}
    </span>
  )

  const totalSeconds = SESSION.duration_minutes * 60
  const activeRatio = (SESSION.active_seconds / totalSeconds) * 100
  const restSeconds = totalSeconds - SESSION.active_seconds

  const formatSeconds = (secs: number) => {
    const m = Math.floor(secs / 60)
    const s = secs % 60
    return m > 0 ? `${m}m ${s}s` : `${s}s`
  }

  const lowTotal = SESSION.low_zone_seconds + SESSION.moderate_zone_seconds + SESSION.high_zone_seconds
  const lowPct = Math.round((SESSION.low_zone_seconds / lowTotal) * 100)
  const modPct = Math.round((SESSION.moderate_zone_seconds / lowTotal) * 100)
  const highPct = 100 - lowPct - modPct

  const consistencyPct = Math.max(0, Math.min(100, (1 - SESSION.pace_consistency / 2.0) * 100))

  const statCards = [
    { icon: <Timer size={16} color="#2c5a9e" />, label: 'Duration', value: String(SESSION.duration_minutes), unit: 'min', bg: '#eef2fb', accent: '#2c5a9e', tab: 'duration' as Tab, isPB: false },
    { icon: <MapPin size={16} color="#2c5a9e" />, label: 'Distance', value: SESSION.distance_miles.toFixed(2), unit: 'mi', bg: '#eef2fb', accent: '#2c5a9e', tab: 'distance' as Tab, isPB: true },
    { icon: <Gauge size={16} color="#2c5a9e" />, label: 'Avg Speed', value: SESSION.avg_speed_mph.toFixed(1), unit: 'mph', bg: '#eef2fb', accent: '#2c5a9e', tab: 'avg_speed' as Tab, isPB: true },
    { icon: <Zap size={16} color="#f88124" />, label: 'Peak Speed', value: SESSION.peak_speed_mph.toFixed(1), unit: 'mph', bg: '#fff5e6', accent: '#f88124', tab: 'peak_speed' as Tab, isPB: true },
    { icon: <Flame size={16} color="#f88124" />, label: 'Calories', value: String(SESSION.calories), unit: 'cal', bg: '#fff5e6', accent: '#f88124', tab: 'calories' as Tab, isPB: true },
    { icon: <PawPrint size={16} color="#2c5a9e" />, label: 'Weight', value: SESSION.dog_weight_lbs.toFixed(1), unit: 'lbs', bg: '#eef2fb', accent: '#2c5a9e', tab: 'weight' as Tab, isPB: false },
  ]

  return (
    <div onClick={() => setOpenTip(null)}>
      <style>{`
        .sp-device {
          width: 580px;
          height: 520px;
          border-radius: 12px;
          border: 2px solid #333;
          background: #f0f2f7;
          overflow: hidden;
          position: relative;
          box-shadow: 0 20px 60px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.1);
          flex-shrink: 0;
        }
        .sp-device::after {
          content: '';
          position: absolute;
          bottom: -28px;
          left: 50%;
          transform: translateX(-50%);
          width: 650px;
          height: 28px;
          background: linear-gradient(180deg, #333 0%, #555 100%);
          border-radius: 0 0 10px 10px;
        }
        .sp-device-wrapper {
          margin-bottom: 36px;
        }
        .sp-notch { display: none; }
        .sp-camera {
          position: absolute;
          top: 8px;
          left: 50%;
          transform: translateX(-50%);
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #555;
          z-index: 10;
        }
        .sp-scroll {
          height: 100%;
          overflow-y: auto;
          overflow-x: hidden;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }
        .sp-scroll::-webkit-scrollbar { display: none; }
        .sp-stat-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
          margin-bottom: 14px;
        }
        .sp-hint-text::after { content: '↕ Scroll to explore · Tap stats to switch chart'; }
        @media (max-width: 768px) {
          .sp-device {
            width: 100%;
            max-width: 380px;
            height: 580px;
            border-radius: 24px;
            border-width: 4px;
            margin: 0 auto;
            border-color: #1a1a2e;
          }
          .sp-device::after { display: none; }
          .sp-device-wrapper { margin-bottom: 0; }
          .sp-notch {
            display: block;
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 120px;
            height: 22px;
            background: #1a1a2e;
            border-radius: 0 0 14px 14px;
            z-index: 10;
          }
          .sp-camera { display: none; }
          .sp-hint-text::after { content: '↕ Scroll to explore · Tap stats to switch chart'; }
        }
      `}</style>

      <div className="sp-device-wrapper">
      <div className="sp-device">
        {/* Phone notch - mobile only */}
        <div className="sp-notch" />
        {/* Laptop camera - desktop only */}
        <div className="sp-camera" />

        <div className="sp-scroll">
          {/* Mini Nav */}
          <div style={{ background: 'white', padding: '28px 14px 8px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '2px solid #f88124' }}>
            <img src="/logo.png" alt="The Canine Gym" style={{ height: '28px', width: 'auto' }} />
          </div>

          <div style={{ padding: '14px 12px', fontFamily: "'Montserrat', system-ui, sans-serif" }}>

            {/* Hero */}
            <div style={{ background: 'linear-gradient(135deg, #001840 0%, #2c5a9e 100%)', borderRadius: '14px', padding: '16px 14px', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <PawPrint size={24} color="rgba(255,255,255,0.5)" />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
                  <span style={{ fontSize: '17px', fontWeight: '800', color: 'white' }}>{DOG.name}</span>
                  <span style={{ fontSize: '9px', fontWeight: '700', color: 'rgba(255,255,255,0.6)', background: 'rgba(255,255,255,0.12)', padding: '1px 6px', borderRadius: '8px' }}>
                    Session #{SESSION_NUMBER}
                  </span>
                </div>
                <p style={{ margin: '0 0 2px', color: 'rgba(255,255,255,0.7)', fontSize: '10px' }}>{SESSION_DATE}</p>
                <p style={{ margin: 0, color: 'rgba(255,255,255,0.5)', fontSize: '10px', fontStyle: 'italic' }}>
                  {DOG.name} had a strong session today!
                </p>
              </div>
            </div>

            {/* Effort Score */}
            <div style={{ background: 'white', borderRadius: '10px', padding: '10px 12px', marginBottom: '10px', boxShadow: '0 1px 6px rgba(0,0,0,0.06)', border: '1px solid #eef0f5', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#eef2fb', border: '2px solid #2c5a9e', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontSize: '13px', fontWeight: '800', color: '#001840', lineHeight: 1 }}>{EFFORT_SCORE}</span>
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span style={{ fontSize: '11px', fontWeight: '800', color: '#1a1a2e' }}>Effort Score</span>
                    <TipIcon id="effort" text="A 0–100 score combining activity, pace consistency, and speed ratio." />
                  </div>
                  <span style={{ fontSize: '10px', fontWeight: '700', color: '#2c5a9e' }}>Strong</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '3px' }}>
                {[20, 40, 60, 80, 100].map(threshold => (
                  <div key={threshold} style={{ width: '14px', height: '6px', borderRadius: '3px', background: EFFORT_SCORE >= threshold ? '#2c5a9e' : '#f0f2f7' }} />
                ))}
              </div>
            </div>

            {/* Weight trend */}
            <div style={{ background: 'white', borderRadius: '10px', padding: '8px 12px', marginBottom: '10px', boxShadow: '0 1px 6px rgba(0,0,0,0.06)', border: '1px solid #eef0f5', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '14px' }}>📉</span>
              <p style={{ margin: 0, fontSize: '10px', color: '#555', fontWeight: '600' }}>
                <strong style={{ color: '#22c55e' }}>1.7 lbs lighter</strong> since first recorded session
              </p>
            </div>

            {/* Stat cards */}
            <div className="sp-stat-grid">
              {statCards.map(stat => {
                const isActive = activeTab === stat.tab
                return (
                  <div key={stat.label} onClick={(e) => { e.stopPropagation(); setActiveTab(stat.tab) }} style={{ background: isActive ? 'linear-gradient(135deg, #001840, #2c5a9e)' : 'white', padding: '10px 6px', borderRadius: '10px', boxShadow: '0 1px 6px rgba(0,0,0,0.06)', border: isActive ? '1px solid #2c5a9e' : stat.isPB ? '1px solid #f88124' : '1px solid #eef0f5', textAlign: 'center', cursor: 'pointer', transition: 'all 0.15s', position: 'relative' }}>
                    {stat.isPB && (
                      <div style={{ position: 'absolute', top: '-6px', right: '-2px', background: '#f88124', color: 'white', fontSize: '7px', fontWeight: '800', padding: '1px 4px', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '1px' }}>
                        <Trophy size={6} /> BEST
                      </div>
                    )}
                    <div style={{ width: '28px', height: '28px', background: isActive ? 'rgba(255,255,255,0.2)' : stat.bg, borderRadius: '7px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 6px' }}>
                      {isActive ? <div style={{ filter: 'brightness(0) invert(1)' }}>{stat.icon}</div> : stat.icon}
                    </div>
                    <div style={{ fontSize: '16px', fontWeight: '800', color: isActive ? 'white' : '#1a1a2e', lineHeight: 1 }}>{stat.value}</div>
                    <div style={{ fontSize: '8px', color: isActive ? 'rgba(255,255,255,0.7)' : stat.accent, fontWeight: '700', marginTop: '1px' }}>{stat.unit}</div>
                    <div style={{ fontSize: '8px', color: isActive ? 'rgba(255,255,255,0.6)' : '#aaa', marginTop: '2px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.3px' }}>{stat.label}</div>
                  </div>
                )
              })}
            </div>

            {/* Chart */}
            <div style={{ background: 'white', borderRadius: '12px', padding: '14px', boxShadow: '0 1px 6px rgba(0,0,0,0.06)', border: '1px solid #eef0f5', marginBottom: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', flexWrap: 'wrap', gap: '6px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <div style={{ width: '24px', height: '24px', background: '#eef2fb', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <TrendingUp size={12} color="#2c5a9e" />
                  </div>
                  <span style={{ fontWeight: '800', color: '#1a1a2e', fontSize: '11px' }}>{activeTabDef.label} Over Time</span>
                </div>
                {pctChange !== null && (
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px', fontSize: '9px', fontWeight: '700', color: pctChange >= 0 ? '#22c55e' : '#dc3545', background: pctChange >= 0 ? '#f0fdf4' : '#ffeaea', padding: '2px 6px', borderRadius: '12px' }}>
                    {pctChange >= 0 ? <TrendingUp size={8} /> : <TrendingDown size={8} />}
                    {Math.abs(pctChange).toFixed(0)}% vs avg
                  </span>
                )}
              </div>

              {/* Tab pills */}
              <div style={{ display: 'flex', gap: '4px', marginBottom: '14px', overflowX: 'auto', paddingBottom: '2px' }}>
                {tabs.map(tab => (
                  <button key={tab.key} onClick={(e) => { e.stopPropagation(); setActiveTab(tab.key) }}
                    style={{ padding: '4px 8px', borderRadius: '12px', border: 'none', fontSize: '9px', fontWeight: '700', fontFamily: 'inherit', background: activeTab === tab.key ? '#2c5a9e' : '#f0f2f7', color: activeTab === tab.key ? 'white' : '#888', flexShrink: 0, cursor: 'pointer' }}>
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* SVG chart */}
              <div style={{ overflowX: 'auto' }}>
                <svg width={Math.max(300, CHART_TOTAL_W)} viewBox={`0 0 ${Math.max(300, CHART_TOTAL_W)} ${CHART_H + 30}`} style={{ display: 'block', width: '100%' }}>
                  {[0.25, 0.5, 0.75, 1].map(pct => (
                    <line key={pct} x1="0" y1={CHART_H - pct * CHART_H} x2={Math.max(300, CHART_TOTAL_W)} y2={CHART_H - pct * CHART_H} stroke="#f0f2f7" strokeWidth="1" />
                  ))}
                  {chartValues.map((c, i) => {
                    const isCurrent = c.session.id === 'current'
                    const barH = c.value ? (c.value / maxVal) * CHART_H : 0
                    const x = i * (BAR_W + GAP)
                    return (
                      <g key={c.session.id}>
                        <rect x={x} y={CHART_H - barH} width={BAR_W} height={barH} rx="3"
                          fill={isCurrent ? activeTabDef.color : activeTabDef.color === '#f88124' ? '#fdd9b5' : '#c8d4f0'} />
                        {c.value !== null && barH > 12 && (
                          <text x={x + BAR_W / 2} y={CHART_H - barH + 10} textAnchor="middle"
                            style={{ fontSize: '7px', fill: 'white', fontWeight: '800', fontFamily: 'inherit' }}>
                            {formatVal(c.value, activeTabDef.unit)}
                          </text>
                        )}
                        <text x={x + BAR_W / 2} y={CHART_H + 12} textAnchor="middle"
                          style={{ fontSize: '7px', fill: isCurrent ? '#1a1a2e' : '#aaa', fontWeight: isCurrent ? '800' : '600', fontFamily: 'inherit' }}>
                          {isCurrent ? 'Today' : c.session.date}
                        </text>
                      </g>
                    )
                  })}
                  <line x1="0" y1={CHART_H} x2={Math.max(300, CHART_TOTAL_W)} y2={CHART_H} stroke="#e5e8f0" strokeWidth="1" />
                  {prevAvg && (
                    <>
                      <line x1="0" y1={CHART_H - (prevAvg / maxVal) * CHART_H} x2={Math.max(300, CHART_TOTAL_W)} y2={CHART_H - (prevAvg / maxVal) * CHART_H} stroke="#f88124" strokeWidth="1" strokeDasharray="3 2" />
                      <text x="4" y={CHART_H - (prevAvg / maxVal) * CHART_H - 3} style={{ fontSize: '7px', fill: '#f88124', fontWeight: '700', fontFamily: 'inherit' }}>avg</text>
                    </>
                  )}
                </svg>
              </div>
            </div>

            {/* Performance Analysis */}
            <div style={{ background: 'white', borderRadius: '12px', padding: '14px', boxShadow: '0 1px 6px rgba(0,0,0,0.06)', border: '1px solid #eef0f5', marginBottom: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                <div style={{ width: '24px', height: '24px', background: '#eef2fb', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Activity size={12} color="#2c5a9e" />
                </div>
                <span style={{ fontWeight: '800', color: '#1a1a2e', fontSize: '11px' }}>Performance Analysis</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {/* Pace Consistency */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <span style={{ fontSize: '10px', fontWeight: '700', color: '#555', display: 'inline-flex', alignItems: 'center' }}>
                      Pace Consistency<TipIcon id="pace" text="How steady the speed was throughout the session." />
                      <span style={{ marginLeft: '6px', fontSize: '9px', fontWeight: '700', color: '#2c5a9e', background: '#2c5a9e18', padding: '1px 6px', borderRadius: '8px' }}>Consistent</span>
                    </span>
                    <span style={{ fontSize: '10px', fontWeight: '800', color: '#1a1a2e' }}>±{SESSION.pace_consistency.toFixed(2)} mph</span>
                  </div>
                  <div style={{ height: '7px', background: '#f0f2f7', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${consistencyPct}%`, background: '#2c5a9e', borderRadius: '4px' }} />
                  </div>
                </div>

                {/* Active vs Rest */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <span style={{ fontSize: '10px', fontWeight: '700', color: '#555', display: 'inline-flex', alignItems: 'center' }}>
                      Active vs Rest<TipIcon id="active" text="Time the belt was moving vs stopped." />
                    </span>
                    <span style={{ fontSize: '10px', fontWeight: '800', color: '#2c5a9e' }}>{activeRatio.toFixed(0)}% active</span>
                  </div>
                  <div style={{ height: '7px', background: '#f0f2f7', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${activeRatio}%`, background: '#2c5a9e', borderRadius: '4px 0 0 4px' }} />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4px' }}>
                    <span style={{ fontSize: '9px', color: '#2c5a9e', fontWeight: '700' }}>Active: {formatSeconds(SESSION.active_seconds)}</span>
                    <span style={{ fontSize: '9px', color: '#aaa', fontWeight: '700' }}>Rest: {formatSeconds(restSeconds)}</span>
                  </div>
                </div>

                {/* Speed Zones */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <span style={{ fontSize: '10px', fontWeight: '700', color: '#555', display: 'inline-flex', alignItems: 'center' }}>
                      Speed Zones<TipIcon id="zones" text="Time at low, moderate, and high intensity relative to peak speed." />
                    </span>
                  </div>
                  <div style={{ height: '8px', borderRadius: '4px', overflow: 'hidden', display: 'flex', marginBottom: '6px' }}>
                    <div style={{ width: `${lowPct}%`, background: '#94a3b8' }} />
                    <div style={{ width: `${modPct}%`, background: '#f59e0b' }} />
                    <div style={{ width: `${highPct}%`, background: '#f88124' }} />
                  </div>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {[
                      { label: 'Low', pct: lowPct, color: '#94a3b8' },
                      { label: 'Mod', pct: modPct, color: '#f59e0b' },
                      { label: 'High', pct: highPct, color: '#f88124' },
                    ].map(z => (
                      <div key={z.label} style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                        <span style={{ width: '7px', height: '7px', borderRadius: '2px', background: z.color, display: 'inline-block' }} />
                        <span style={{ fontSize: '8px', fontWeight: '700', color: '#555' }}>{z.label}</span>
                        <span style={{ fontSize: '8px', color: '#aaa', fontWeight: '600' }}>{z.pct}%</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Acceleration */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <span style={{ fontSize: '10px', fontWeight: '700', color: '#555', display: 'inline-flex', alignItems: 'center' }}>
                      Avg Acceleration<TipIcon id="accel" text="How quickly your dog gets up to speed during running bursts." />
                    </span>
                    <span style={{ fontSize: '10px', fontWeight: '800', color: '#2c5a9e' }}>{SESSION.avg_acceleration.toFixed(2)} mph/s</span>
                  </div>
                  <div style={{ height: '7px', background: '#f0f2f7', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${Math.min((SESSION.avg_acceleration / 3.0) * 100, 100)}%`, background: '#2c5a9e', borderRadius: '4px' }} />
                  </div>
                  <p style={{ margin: '4px 0 0', fontSize: '9px', color: '#aaa', fontWeight: '600' }}>Good acceleration</p>
                </div>

                {/* Top Speed Duration */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <span style={{ fontSize: '10px', fontWeight: '700', color: '#555', display: 'inline-flex', alignItems: 'center' }}>
                      Top Speed Duration<TipIcon id="topspeed" text="Consecutive seconds near peak speed." />
                    </span>
                    <span style={{ fontSize: '10px', fontWeight: '800', color: '#f88124' }}>{SESSION.top_speed_duration}s</span>
                  </div>
                  <div style={{ height: '7px', background: '#f0f2f7', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${Math.min((SESSION.top_speed_duration / 30) * 100, 100)}%`, background: '#f88124', borderRadius: '4px' }} />
                  </div>
                  <p style={{ margin: '4px 0 0', fontSize: '9px', color: '#aaa', fontWeight: '600' }}>Good sustained effort</p>
                </div>
              </div>
            </div>

            {/* Speed Breakdown */}
            <div style={{ background: 'white', borderRadius: '12px', padding: '14px', boxShadow: '0 1px 6px rgba(0,0,0,0.06)', border: '1px solid #eef0f5', marginBottom: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                <div style={{ width: '24px', height: '24px', background: '#eef2fb', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Gauge size={12} color="#2c5a9e" />
                </div>
                <span style={{ fontWeight: '800', color: '#1a1a2e', fontSize: '11px' }}>Speed Breakdown</span>
              </div>
              {[
                { label: 'Average Speed', value: SESSION.avg_speed_mph, max: SESSION.peak_speed_mph * 1.1, color: '#2c5a9e' },
                { label: 'Peak Speed', value: SESSION.peak_speed_mph, max: SESSION.peak_speed_mph * 1.1, color: '#f88124' },
              ].map(({ label, value, max, color }) => (
                <div key={label} style={{ marginBottom: '10px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ fontSize: '10px', fontWeight: '700', color: '#555' }}>{label}</span>
                    <span style={{ fontSize: '11px', fontWeight: '800', color }}>{value.toFixed(1)} mph</span>
                  </div>
                  <div style={{ height: '7px', background: '#f0f2f7', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${(value / max) * 100}%`, background: color, borderRadius: '4px' }} />
                  </div>
                </div>
              ))}
              <p style={{ margin: '2px 0 0', fontSize: '9px', color: '#aaa', fontWeight: '600' }}>
                Running at {((SESSION.avg_speed_mph / SESSION.peak_speed_mph) * 100).toFixed(0)}% of peak speed on average
              </p>
            </div>

            {/* Trainer Notes */}
            <div style={{ background: 'white', borderRadius: '12px', padding: '14px', boxShadow: '0 1px 6px rgba(0,0,0,0.06)', border: '1px solid #eef0f5', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <div style={{ width: '24px', height: '24px', background: '#eef2fb', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <PawPrint size={12} color="#2c5a9e" />
                </div>
                <span style={{ fontWeight: '800', color: '#1a1a2e', fontSize: '11px' }}>Trainer Notes</span>
              </div>
              <p style={{ margin: 0, color: '#555', fontStyle: 'italic', fontSize: '10px', lineHeight: 1.6, borderLeft: '2px solid #e5e8f0', paddingLeft: '10px' }}>
                &quot;Cooper did great today! He found his groove about 5 minutes in and kept a really nice steady pace. Definitely getting more confident on the slatmill.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}