"use client"

import AppShell from "@/components/app-shell"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from "recharts"

const history = [
  { id: 1, cert: "Bug Bounty Fundamentals", designation: "Certified Entry Level Bug Hunter", score: 91, tasks: "4/7", duration: 12, status: "Passed", date: "7/20/2026" },
  { id: 2, cert: "Junior Radio Hacker", designation: "Certified Entry Level Radio Hacker", score: 78, tasks: "5/7", duration: 23, status: "Passed", date: "7/18/2026" },
  { id: 3, cert: "SOC Analyst L1", designation: "Certified SOC Analyst L1", score: 45, tasks: "2/7", duration: 15, status: "Failed", date: "7/15/2026" },
  { id: 4, cert: "CTI Analyst", designation: "Certified Threat Intelligence Analyst", score: 88, tasks: "6/7", duration: 31, status: "Passed", date: "7/10/2026" },
  { id: 5, cert: "DevSecOps Fundamentals", designation: "Certified DevSecOps Practitioner", score: 62, tasks: "3/7", duration: 19, status: "Failed", date: "7/5/2026" },
]

const passed = history.filter((e) => e.status === "Passed")
const totalExams = history.length
const passRate = Math.round((passed.length / totalExams) * 100)
const avgScore = Math.round(history.reduce((s, e) => s + e.score, 0) / totalExams)
const bestScore = Math.max(...history.map((e) => e.score))
const lowestScore = Math.min(...history.map((e) => e.score))
const avgDuration = Math.round(history.reduce((s, e) => s + e.duration, 0) / totalExams)
const fastest = history.reduce((a, b) => (a.duration < b.duration ? a : b))
const slowest = history.reduce((a, b) => (a.duration > b.duration ? a : b))
const totalTasksDone = history.reduce((s, e) => s + parseInt(e.tasks.split("/")[0]), 0)
const totalTasksAll = history.reduce((s, e) => s + parseInt(e.tasks.split("/")[1]), 0)
const avgTaskCompletion = Math.round((totalTasksDone / totalTasksAll) * 100)

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-[#0d0d0d] rounded-xl border border-neutral-800/80 p-6 transition-all ${className}`}>
      {children}
    </div>
  )
}

function CardIcon({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${className || ""}`}>
      {children}
    </div>
  )
}

function ProgressBar({ pct, color = "bg-blue-500", bg = "bg-neutral-800", h = "h-2.5" }: { pct: number; color?: string; bg?: string; h?: string }) {
  return (
    <div className={`w-full ${bg} rounded-full overflow-hidden ${h}`}>
      <div className={`h-full rounded-full transition-all duration-500 ${color}`} style={{ width: `${Math.min(pct, 100)}%` }} />
    </div>
  )
}

function ActivityHeatmap() {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]
  const days = ["Mon", "", "Wed", "", "Fri", ""]
  const rects: { x: number; y: number; fill: string }[] = []
  for (let c = 0; c < 26; c++) {
    for (let r = 0; r < 7; r++) {
      rects.push({ x: 30 + c * 16, y: 18 + r * 16, fill: "#1f1f1f" })
    }
  }
  rects[rects.length - 4].fill = "#22c55e"
  return (
    <div className="overflow-x-auto pb-1">
      <svg width="446" height="130" className="block mx-auto">
        {months.map((m, i) => (
          <text key={m} x={30 + i * 64} y={12} className="fill-neutral-500" fontSize={10} fontFamily="ui-monospace, monospace">{m}</text>
        ))}
        {days.map((d, i) => (
          <text key={d + i} x={0} y={32 + i * 16} className="fill-neutral-600" fontSize={9} fontFamily="ui-monospace, monospace">{d}</text>
        ))}
        {rects.map((r, i) => (
          <rect key={i} x={r.x} y={r.y} width={12} height={12} rx={2} fill={r.fill} className="cursor-pointer hover:opacity-80 transition-opacity" />
        ))}
        <text x={30} y={128} className="fill-neutral-500" fontSize={9} fontFamily="ui-monospace, monospace">Less</text>
        <rect x={396} y={116} width={12} height={12} rx={2} fill="#1f1f1f" />
        <rect x={410} y={116} width={12} height={12} rx={2} fill="#2b2b2b" />
        <rect x={424} y={116} width={12} height={12} rx={2} fill="#3a3a3a" />
        <rect x={438} y={116} width={12} height={12} rx={2} fill="#22c55e" />
        <text x={452} y={128} className="fill-neutral-500" fontSize={9} fontFamily="ui-monospace, monospace">More</text>
      </svg>
    </div>
  )
}

function ScoreBars() {
  const data = history.map((e) => ({
    name: e.cert.length > 14 ? e.cert.slice(0, 12) + ".." : e.cert,
    fullName: e.cert,
    score: e.score,
    fill: e.score >= 90 ? "#22c55e" : e.score >= 70 ? "#3b82f6" : e.score >= 50 ? "#f59e0b" : "#ef4444",
  }))
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 4, right: 8, bottom: 4, left: -24 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#262626" vertical={false} />
        <XAxis dataKey="name" tick={{ fill: "#a3a3a3", fontSize: 11, fontFamily: "ui-monospace, monospace" }} axisLine={{ stroke: "#333" }} tickLine={false} interval={0} />
        <YAxis tick={{ fill: "#a3a3a3", fontSize: 11, fontFamily: "ui-monospace, monospace" }} axisLine={false} tickLine={false} domain={[0, 100]} ticks={[0, 25, 50, 75, 100]} tickFormatter={(v: number) => `${v}%`} />
        <Tooltip
          content={({ active, payload, label }) => {
            if (!active || !payload?.length) return null
            return (
              <div style={{ backgroundColor: "#1a1a1a", border: "1px solid #333", borderRadius: 8, padding: "8px 12px", fontSize: 12, fontFamily: "ui-monospace, monospace" }}>
                <p style={{ color: "#f5f5f5", fontWeight: 600, margin: 0, whiteSpace: "nowrap" }}>{payload[0]?.payload?.fullName || label}</p>
                <p style={{ color: "#a3a3a3", margin: "4px 0 0" }}>Score: <span style={{ color: "#f5f5f5", fontWeight: 700 }}>{payload[0].value}%</span></p>
              </div>
            )
          }}
          cursor={{ fill: "rgba(255,255,255,0.04)" }}
        />
        <Bar dataKey="score" radius={[4, 4, 0, 0]} maxBarSize={48}>
          {data.map((entry, i) => (
            <Cell key={i} fill={entry.fill} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}

function DonutChart() {
  const excellent = passed.filter((e) => e.score >= 90).length
  const good = passed.filter((e) => e.score >= 70 && e.score < 90).length
  const average = passed.filter((e) => e.score >= 50 && e.score < 70).length
  const low = passed.filter((e) => e.score < 50).length
  const data = [
    { name: "Excellent", value: excellent, color: "#22c55e" },
    { name: "Good", value: good, color: "#3b82f6" },
    { name: "Average", value: average, color: "#f59e0b" },
    { name: "Low", value: low, color: "#ef4444" },
  ].filter((d) => d.value > 0)
  return (
    <div className="flex items-center gap-8">
      <div className="relative w-40 h-40 shrink-0">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} cx="50%" cy="50%" innerRadius={50} outerRadius={75} dataKey="value" stroke="none">
              {data.map((entry, i) => (
                <Cell key={i} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 rounded-full flex flex-col items-center justify-center pointer-events-none">
          <span className="text-2xl font-extrabold text-white font-code">{totalExams}</span>
          <span className="text-[10px] text-neutral-400 uppercase tracking-wider font-code">exams</span>
        </div>
      </div>
      <div className="flex-1 space-y-2.5 min-w-0">
        {[
          { color: "#22c55e", label: "Excellent", range: "(90-100%)", count: excellent },
          { color: "#3b82f6", label: "Good", range: "(70-89%)", count: good },
          { color: "#f59e0b", label: "Average", range: "(50-69%)", count: average },
          { color: "#ef4444", label: "Low", range: "(0-49%)", count: low },
        ].map((s) => (
          <div key={s.label} className="flex items-center justify-between">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: s.color }} />
              <span className="text-sm text-neutral-300 font-code">{s.label}</span>
              <span className="text-xs text-neutral-500 font-code hidden sm:inline">{s.range}</span>
            </div>
            <span className="text-sm font-bold text-white font-code">{s.count}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function AchievementCard({ emoji, title, desc, progress, earned, current, total }: { emoji: string; title: string; desc: string; progress: number; earned: boolean; current: number; total: number }) {
  return (
    <div className={`relative rounded-xl border p-4 transition-all duration-200 ${earned ? "bg-[#0d0d0d] border-amber-500/30 shadow-sm shadow-amber-500/5" : "bg-[#0d0d0d] border-neutral-800"}`}>
      <div className="flex items-center gap-3 mb-2">
        <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl ${earned ? "bg-amber-500/15" : "bg-neutral-900"}`}>
          {emoji}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold truncate text-white font-code">{title}</p>
          <p className="text-xs text-neutral-400 line-clamp-1 font-code">{desc}</p>
        </div>
      </div>
      <ProgressBar pct={progress} color={earned ? "bg-amber-500" : "bg-neutral-700"} bg="bg-neutral-800/80" h="h-2" />
      <div className="flex items-center justify-between mt-1.5">
        <span className="text-xs text-neutral-500 font-code">{current} / {total}</span>
        <span className="text-xs text-neutral-500 font-code">{Math.round(progress)}%</span>
      </div>
    </div>
  )
}

export default function MyStatisticsPage() {
  return (
    <AppShell>
      <div className="space-y-8">
        <h1 className="text-2xl font-bold text-white font-code">My Statistics</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <div className="flex items-center gap-4">
              <CardIcon className="bg-blue-500/15">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-blue-400" aria-hidden="true"><rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><path d="M12 11h4" /><path d="M12 16h4" /><path d="M8 11h.01" /><path d="M8 16h.01" /></svg>
              </CardIcon>
              <div>
                <p className="text-sm text-neutral-400 font-code">Total Exams</p>
                <p className="text-2xl font-bold text-white font-code">{totalExams}</p>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex items-center gap-4">
              <CardIcon className="bg-emerald-500/15">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-emerald-400" aria-hidden="true"><path d="M16 7h6v6" /><path d="m22 7-8.5 8.5-5-5L2 17" /></svg>
              </CardIcon>
              <div>
                <p className="text-sm text-neutral-400 font-code">Pass Rate</p>
                <p className="text-2xl font-bold text-white font-code">{passRate}%</p>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex items-center gap-4">
              <CardIcon className="bg-purple-500/15">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-purple-400" aria-hidden="true"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
              </CardIcon>
              <div>
                <p className="text-sm text-neutral-400 font-code">Average Score</p>
                <p className="text-2xl font-bold text-white font-code">{avgScore}%</p>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex items-center gap-4">
              <CardIcon className="bg-amber-500/15">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-amber-400" aria-hidden="true"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" /><circle cx="12" cy="8" r="6" /></svg>
              </CardIcon>
              <div>
                <p className="text-sm text-neutral-400 font-code">Certificates Earned</p>
                <p className="text-2xl font-bold text-white font-code">{passed.length}</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Study Streak + Score Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <div className="flex items-center gap-3 mb-6">
              <CardIcon className="bg-orange-500/15">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-orange-400" aria-hidden="true"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4" /></svg>
              </CardIcon>
              <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-400 font-code">Study Streak</h3>
            </div>
            <div className="flex flex-col items-center mb-6">
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-orange-400" aria-hidden="true"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4" /></svg>
                <span className="text-4xl font-black text-white font-code">1 week</span>
              </div>
              <p className="text-sm text-neutral-400 mt-1.5 font-code">Current Streak</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-amber-500/10 rounded-lg p-3.5 flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-amber-400 shrink-0" aria-hidden="true"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" /></svg>
                <div>
                  <p className="text-xs text-neutral-400 font-code">Longest Streak</p>
                  <p className="text-sm font-bold text-white font-code">1 week</p>
                </div>
              </div>
              <div className="bg-neutral-800/60 rounded-lg p-3.5 flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-neutral-400 shrink-0" aria-hidden="true"><path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" /></svg>
                <div>
                  <p className="text-xs text-neutral-400 font-code">Last Activity</p>
                  <p className="text-sm font-bold text-white font-code">today</p>
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-center gap-3 mb-6">
              <CardIcon className="bg-purple-500/15">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-purple-400" aria-hidden="true"><path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z" /><path d="M21.21 15.89A10 10 0 1 1 8 2.83" /></svg>
              </CardIcon>
              <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-400 font-code">Score Distribution</h3>
            </div>
            <DonutChart />
          </Card>
        </div>

        {/* Score Trend + Duration Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <div className="flex items-center gap-3 mb-6">
              <CardIcon className="bg-purple-500/15">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-purple-400" aria-hidden="true"><path d="M16 7h6v6" /><path d="m22 7-8.5 8.5-5-5L2 17" /></svg>
              </CardIcon>
              <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-400 font-code">Score Trend</h3>
            </div>
            <ScoreBars />
          </Card>

          <Card>
            <div className="flex items-center gap-3 mb-6">
              <CardIcon className="bg-blue-500/15">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-blue-400" aria-hidden="true"><line x1="10" x2="14" y1="2" y2="2" /><line x1="12" x2="15" y1="14" y2="11" /><circle cx="12" cy="14" r="8" /></svg>
              </CardIcon>
              <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-400 font-code">Duration Analysis</h3>
            </div>
            <div className="h-[200px] flex items-center justify-center text-sm text-neutral-500 font-code">
              You haven't completed any exams yet.
            </div>
            <div className="grid grid-cols-3 gap-3 mt-4">
              <div className="bg-emerald-500/10 rounded-lg p-3.5 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-emerald-400 mx-auto mb-1.5" aria-hidden="true"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" /></svg>
                <p className="text-xs text-neutral-400 font-code">Fastest</p>
                <p className="text-xl font-bold text-white font-code">{fastest.duration}m</p>
                <p className="text-[10px] text-neutral-500 truncate font-code">{fastest.cert}</p>
              </div>
              <div className="bg-red-500/10 rounded-lg p-3.5 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-red-400 mx-auto mb-1.5" aria-hidden="true"><path d="m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z" /><path d="M4.82 7.9 8 10" /><path d="M15.18 7.9 12 10" /><path d="M16.93 10H20a2 2 0 0 1 0 4H2" /></svg>
                <p className="text-xs text-neutral-400 font-code">Slowest</p>
                <p className="text-xl font-bold text-white font-code">{slowest.duration}m</p>
                <p className="text-[10px] text-neutral-500 truncate font-code">{slowest.cert}</p>
              </div>
              <div className="bg-blue-500/10 rounded-lg p-3.5 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-blue-400 mx-auto mb-1.5" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                <p className="text-xs text-neutral-400 font-code">Average</p>
                <p className="text-xl font-bold text-white font-code">{avgDuration}m</p>
                <p className="text-[10px] text-neutral-500 font-code">Avg. Duration</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Exam Activity */}
        <Card>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <CardIcon className="bg-green-500/15">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-green-400" aria-hidden="true"><path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" /></svg>
              </CardIcon>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-400 font-code">Exam Activity</h3>
                <p className="text-xs text-neutral-500 mt-0.5 font-code">Last 6 months</p>
              </div>
            </div>
            <div className="text-right text-xs text-neutral-400 font-code">
              <span className="font-semibold text-white">{totalExams}</span> exams, <span className="font-semibold text-white">{new Set(history.map((e) => e.date)).size}</span> unique days
            </div>
          </div>
          <ActivityHeatmap />
        </Card>

        {/* Task Completion + Quick Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <CardIcon className="bg-emerald-500/15">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-emerald-400" aria-hidden="true"><path d="M9 12l2 2 4-4" /><path d="M21.2 8.4l.1.1a2 2 0 0 1 0 3l-8.23 8.23a2 2 0 0 1-1.41.59H5a2 2 0 0 1-2-2v-6.69a2 2 0 0 1 .59-1.41L11.6 2.7a2 2 0 0 1 2.82 0l2.17 2.17" /></svg>
                </CardIcon>
                <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-400 font-code">Task Completion</h3>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-white font-code">{avgTaskCompletion}%</span>
                <p className="text-xs text-neutral-400 font-code">Avg. task completion</p>
              </div>
            </div>
            <div className="space-y-4">
              {history.map((e) => {
                const [done, total] = e.tasks.split("/").map(Number)
                const pct = Math.round((done / total) * 100)
                return (
                  <div key={e.id}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-medium text-neutral-300 truncate font-code" style={{ maxWidth: "60%" }}>{e.cert}</span>
                      <span className="text-xs text-neutral-400 font-code">{e.tasks} ({pct}%)</span>
                    </div>
                    <ProgressBar pct={pct} color={pct >= 80 ? "bg-emerald-500" : pct >= 50 ? "bg-amber-500" : "bg-red-500"} h="h-2.5" />
                  </div>
                )
              })}
            </div>
          </Card>

          <Card>
            <div className="flex items-center gap-3 mb-6">
              <CardIcon className="bg-emerald-500/15">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-emerald-400" aria-hidden="true"><path d="M6 20h12" /><path d="M12 16v4" /><path d="M4 8h16" /><path d="M8 4v4" /><path d="M16 4v4" /></svg>
              </CardIcon>
              <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-400 font-code">Quick Summary</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative mb-6">
                <svg width="150" height="150" viewBox="0 0 150 150">
                  <circle cx="75" cy="75" r="62" fill="none" stroke="#262626" strokeWidth="10" />
                  <circle cx="75" cy="75" r="62" fill="none" stroke="#22c55e" strokeWidth="10" strokeDasharray={`${(passRate / 100) * 389.36}, 389.36`} strokeLinecap="round" transform="rotate(-90, 75, 75)" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-black text-emerald-400 font-code">{passRate}%</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-2 w-full max-w-xs">
                <div className="bg-neutral-900 rounded-xl p-4 flex flex-col items-center gap-2 border border-neutral-800/50">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-neutral-400" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                  <div className="text-center">
                    <p className="text-xs text-neutral-400 font-code">Total Time</p>
                    <p className="text-base font-bold text-white font-code">{history.reduce((s, e) => s + e.duration, 0)}min</p>
                  </div>
                </div>
                <div className="bg-neutral-900 rounded-xl p-4 flex flex-col items-center gap-2 border border-neutral-800/50">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-neutral-400" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" /></svg>
                  <div className="text-center">
                    <p className="text-xs text-neutral-400 font-code">Passed / Total</p>
                    <p className="text-base font-bold text-white font-code">{passed.length} / {totalExams}</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Performance by Certificate */}
        <Card className="!p-0 overflow-hidden">
          <div className="flex items-center gap-3 p-6 pb-4">
            <CardIcon className="bg-amber-500/15">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-amber-400" aria-hidden="true"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
            </CardIcon>
            <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-400 font-code">Performance by Certificate</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm font-code">
              <thead>
                <tr className="border-t border-neutral-800 bg-neutral-900/50">
                  <th className="text-left px-6 py-3 font-semibold text-neutral-400 text-xs uppercase tracking-wider">Certificate</th>
                  <th className="text-center px-6 py-3 font-semibold text-neutral-400 text-xs uppercase tracking-wider">Attempts</th>
                  <th className="text-center px-6 py-3 font-semibold text-neutral-400 text-xs uppercase tracking-wider">Best Score</th>
                  <th className="text-center px-6 py-3 font-semibold text-neutral-400 text-xs uppercase tracking-wider">Status</th>
                  <th className="text-center px-6 py-3 font-semibold text-neutral-400 text-xs uppercase tracking-wider">Avg. Duration</th>
                  <th className="text-center px-6 py-3 font-semibold text-neutral-400 text-xs uppercase tracking-wider">First</th>
                  <th className="text-center px-6 py-3 font-semibold text-neutral-400 text-xs uppercase tracking-wider">Last</th>
                  <th className="text-center px-6 py-3 font-semibold text-neutral-400 text-xs uppercase tracking-wider">Progress</th>
                </tr>
              </thead>
              <tbody>
                {history.map((e, i) => {
                  const [done, total] = e.tasks.split("/").map(Number)
                  const taskPct = Math.round((done / total) * 100)
                  return (
                    <tr key={e.id} className={`border-b border-neutral-800/40 hover:bg-neutral-900/40 transition-colors ${i % 2 === 0 ? "bg-transparent" : "bg-neutral-900/10"}`}>
                      <td className="px-6 py-4 font-medium text-neutral-200">{e.cert}</td>
                      <td className="px-6 py-4 text-center text-neutral-400">1</td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-20 bg-neutral-800 rounded-full h-2">
                            <div className="h-full rounded-full" style={{ width: `${e.score}%`, backgroundColor: e.score >= 70 ? "#22c55e" : "#ef4444" }} />
                          </div>
                          <span className="text-sm font-bold text-white">{e.score}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        {e.status === "Passed" ? (
                          <span className="inline-flex items-center gap-1 text-emerald-400 text-xs font-semibold">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
                            Passed
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-red-400 text-xs font-semibold">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>
                            Failed
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center text-neutral-400">{e.duration} min</td>
                      <td className="px-6 py-4 text-center text-neutral-500">{e.date.split("/").slice(0, 2).join("/")}</td>
                      <td className="px-6 py-4 text-center text-neutral-500">{e.date.split("/").slice(0, 2).join("/")}</td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-20 bg-neutral-800 rounded-full h-2">
                            <div className="h-full rounded-full" style={{ width: `${taskPct}%`, backgroundColor: taskPct >= 80 ? "#22c55e" : taskPct >= 50 ? "#f59e0b" : "#ef4444" }} />
                          </div>
                          <span className="text-xs text-neutral-400">{taskPct}%</span>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Achievements */}
        <Card>
          <div className="flex items-center gap-3 mb-6">
            <CardIcon className="bg-amber-500/15">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-amber-400" aria-hidden="true"><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" /></svg>
            </CardIcon>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-400 font-code">Achievements</h3>
              <p className="text-xs text-neutral-500 mt-0.5 font-code">{[
                passed.length >= 1,
                bestScore >= 90,
                fastest.duration < 15,
              ].filter(Boolean).length} / 11 earned</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <AchievementCard emoji="🏅" title="First Exam Passed" desc="Pass your first certification exam" progress={passed.length >= 1 ? 100 : 0} earned={passed.length >= 1} current={passed.length >= 1 ? 1 : 0} total={1} />
            <AchievementCard emoji="⭐" title="High Scorer" desc="Score 90% or above on any exam" progress={bestScore >= 90 ? 100 : 0} earned={bestScore >= 90} current={bestScore >= 90 ? 1 : 0} total={1} />
            <AchievementCard emoji="⚡" title="Speed Demon" desc="Complete an exam in under 15 minutes" progress={fastest.duration < 15 ? 100 : 0} earned={fastest.duration < 15} current={fastest.duration < 15 ? 1 : 0} total={1} />
            <AchievementCard emoji="🎖️" title="Triple Certified" desc="Earn 3 different certificates" progress={Math.round((passed.length / 3) * 100)} earned={passed.length >= 3} current={passed.length} total={3} />
            <AchievementCard emoji="🔥" title="On Fire" desc="Take exams 3 weeks in a row" progress={33} earned={false} current={1} total={3} />
            <AchievementCard emoji="🏆" title="Exam Veteran" desc="Complete 5 exams" progress={Math.round((totalExams / 5) * 100)} earned={totalExams >= 5} current={totalExams} total={5} />
            <AchievementCard emoji="📚" title="Diverse Learner" desc="Attempt 5 different certificates" progress={Math.round((history.length / 5) * 100)} earned={history.length >= 5} current={history.length} total={5} />
            <AchievementCard emoji="💯" title="Perfect Record" desc="100% pass rate with 3+ exams" progress={passRate === 100 && totalExams >= 3 ? 100 : Math.round((totalExams / 3) * 17)} earned={passRate === 100 && totalExams >= 3} current={Math.round((passRate * totalExams) / 100)} total={3} />
            <AchievementCard emoji="⏱️" title="Marathon Runner" desc="Spend 10+ hours in exams total" progress={Math.round((history.reduce((s, e) => s + e.duration, 0) / 600) * 100)} earned={history.reduce((s, e) => s + e.duration, 0) >= 600} current={history.reduce((s, e) => s + e.duration, 0)} total={600} />
            <AchievementCard emoji="🔄" title="Comeback King" desc="Pass a certificate after failing it" progress={0} earned={false} current={0} total={1} />
            <AchievementCard emoji="✅" title="Task Master" desc="Complete all tasks in any exam" progress={history.some((e) => e.tasks.split("/")[0] === e.tasks.split("/")[1]) ? 100 : 0} earned={history.some((e) => e.tasks.split("/")[0] === e.tasks.split("/")[1])} current={history.filter((e) => e.tasks.split("/")[0] === e.tasks.split("/")[1]).length} total={1} />
          </div>
        </Card>
      </div>
    </AppShell>
  )
}
