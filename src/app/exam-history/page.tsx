"use client"

import { useState } from "react"
import AppShell from "@/components/app-shell"

const history = [
  { id: 1, cert: "Bug Bounty Fundamentals", designation: "Certified Entry Level Bug Hunter", score: "91/100", tasks: "4/7", duration: "12 min", status: "Passed", date: "7/20/2026" },
  { id: 2, cert: "Junior Radio Hacker", designation: "Certified Entry Level Radio Hacker", score: "78/100", tasks: "5/7", duration: "23 min", status: "Passed", date: "7/18/2026" },
  { id: 3, cert: "SOC Analyst L1", designation: "Certified SOC Analyst L1", score: "45/100", tasks: "2/7", duration: "15 min", status: "Failed", date: "7/15/2026" },
  { id: 4, cert: "CTI Analyst", designation: "Certified Threat Intelligence Analyst", score: "88/100", tasks: "6/7", duration: "31 min", status: "Passed", date: "7/10/2026" },
  { id: 5, cert: "DevSecOps Fundamentals", designation: "Certified DevSecOps Practitioner", score: "62/100", tasks: "3/7", duration: "19 min", status: "Failed", date: "7/5/2026" },
]

function CertificateModal({ entry, onClose }: { entry: typeof history[number]; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[95vh] flex flex-col">
        <button onClick={onClose} className="no-print absolute top-3 right-3 p-2 rounded-lg hover:bg-gray-100 transition-colors z-20">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-500" aria-hidden="true"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
        </button>

        <div className="overflow-y-auto p-4">
          <div className="cert-root" style={{ width: "100%", aspectRatio: "297 / 210" }}>
            <div style={{ width: "100%", height: "100%", backgroundColor: "#f6f6f6", position: "relative" }}>
              <div style={{ position: "absolute", inset: 0, border: "2px solid #2E5FA4", zIndex: 2, pointerEvents: "none" }} />
              <div style={{ position: "absolute", top: 5, left: 5, right: 5, height: 14, backgroundImage: `url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2230%22%20height%3D%2218%22%20viewBox%3D%220%200%2030%2018%22%3E%3Cpath%20d%3D%22M0%2C9%20Q7.5%2C0%2015%2C9%20Q22.5%2C18%2030%2C9%22%20fill%3D%22none%22%20stroke%3D%22%232E5FA4%22%20stroke-width%3D%221.2%22%20opacity%3D%220.6%22%2F%3E%3Cpath%20d%3D%22M0%2C9%20Q7.5%2C18%2015%2C9%20Q22.5%2C0%2030%2C9%22%20fill%3D%22none%22%20stroke%3D%22%232E5FA4%22%20stroke-width%3D%221.2%22%20opacity%3D%220.6%22%2F%3E%3C%2Fsvg%3E")`, backgroundSize: "30px 18px", backgroundRepeat: "repeat-x", backgroundPosition: "left center", zIndex: 2, pointerEvents: "none" }} />
              <div style={{ position: "absolute", bottom: 5, left: 5, right: 5, height: 14, backgroundImage: `url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2230%22%20height%3D%2218%22%20viewBox%3D%220%200%2030%2018%22%3E%3Cpath%20d%3D%22M0%2C9%20Q7.5%2C0%2015%2C9%20Q22.5%2C18%2030%2C9%22%20fill%3D%22none%22%20stroke%3D%22%232E5FA4%22%20stroke-width%3D%221.2%22%20opacity%3D%220.6%22%2F%3E%3Cpath%20d%3D%22M0%2C9%20Q7.5%2C18%2015%2C9%20Q22.5%2C0%2030%2C9%22%20fill%3D%22none%22%20stroke%3D%22%232E5FA4%22%20stroke-width%3D%221.2%22%20opacity%3D%220.6%22%2F%3E%3C%2Fsvg%3E")`, backgroundSize: "30px 18px", backgroundRepeat: "repeat-x", backgroundPosition: "left center", zIndex: 2, pointerEvents: "none" }} />
              <div style={{ position: "absolute", top: 19, bottom: 19, left: 5, width: 14, backgroundImage: `url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214%22%20height%3D%2230%22%20viewBox%3D%220%200%2014%2030%22%3E%3Cpath%20d%3D%22M7%2C0%20Q0%2C7.5%207%2C15%20Q14%2C22.5%207%2C30%22%20fill%3D%22none%22%20stroke%3D%22%232E5FA4%22%20stroke-width%3D%221.2%22%20opacity%3D%220.6%22%2F%3E%3Cpath%20d%3D%22M7%2C0%20Q14%2C7.5%207%2C15%20Q0%2C22.5%207%2C30%22%20fill%3D%22none%22%20stroke%3D%22%232E5FA4%22%20stroke-width%3D%221.2%22%20opacity%3D%220.6%22%2F%3E%3C%2Fsvg%3E")`, backgroundSize: "14px 30px", backgroundRepeat: "repeat-y", backgroundPosition: "center top", zIndex: 2, pointerEvents: "none" }} />
              <div style={{ position: "absolute", top: 19, bottom: 19, right: 5, width: 14, backgroundImage: `url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214%22%20height%3D%2230%22%20viewBox%3D%220%200%2014%2030%22%3E%3Cpath%20d%3D%22M7%2C0%20Q0%2C7.5%207%2C15%20Q14%2C22.5%207%2C30%22%20fill%3D%22none%22%20stroke%3D%22%232E5FA4%22%20stroke-width%3D%221.2%22%20opacity%3D%220.6%22%2F%3E%3Cpath%20d%3D%22M7%2C0%20Q14%2C7.5%207%2C15%20Q0%2C22.5%207%2C30%22%20fill%3D%22none%22%20stroke%3D%22%232E5FA4%22%20stroke-width%3D%221.2%22%20opacity%3D%220.6%22%2F%3E%3C%2Fsvg%3E")`, backgroundSize: "14px 30px", backgroundRepeat: "repeat-y", backgroundPosition: "center top", zIndex: 2, pointerEvents: "none" }} />
              <div style={{ position: "absolute", inset: 22, border: "1.5px solid #2E5FA4", zIndex: 3, pointerEvents: "none" }} />
              <div style={{ position: "absolute", inset: 26, border: "1px solid #2E5FA4", zIndex: 3, pointerEvents: "none", opacity: 0.25 }} />
              <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "72%", height: "72%", opacity: 0.025, pointerEvents: "none", zIndex: 0, filter: "blur(1px)" }}>
                <svg viewBox="0 0 1000 500" width="100%" height="100%" preserveAspectRatio="xMidYMid meet"><g stroke="#7a9cc6" fill="none"><line x1="0" y1="250" x2="1000" y2="250" strokeWidth="0.8" /><line x1="500" y1="0" x2="500" y2="500" strokeWidth="0.8" /><line x1="0" y1="125" x2="1000" y2="125" strokeWidth="0.4" /><line x1="0" y1="375" x2="1000" y2="375" strokeWidth="0.4" /><line x1="0" y1="62" x2="1000" y2="62" strokeWidth="0.3" /><line x1="0" y1="188" x2="1000" y2="188" strokeWidth="0.3" /><line x1="0" y1="312" x2="1000" y2="312" strokeWidth="0.3" /><line x1="0" y1="438" x2="1000" y2="438" strokeWidth="0.3" /><line x1="125" y1="0" x2="125" y2="500" strokeWidth="0.3" /><line x1="250" y1="0" x2="250" y2="500" strokeWidth="0.4" /><line x1="375" y1="0" x2="375" y2="500" strokeWidth="0.3" /><line x1="625" y1="0" x2="625" y2="500" strokeWidth="0.3" /><line x1="750" y1="0" x2="750" y2="500" strokeWidth="0.4" /><line x1="875" y1="0" x2="875" y2="500" strokeWidth="0.3" /></g><g fill="#7a9cc6" opacity="0.5"><path d="M85,65 C110,45 185,35 225,50 C250,62 260,88 265,120 C268,155 258,185 240,205 C218,228 185,238 155,242 C125,244 98,230 82,210 C66,188 58,158 55,128 C54,98 62,80 85,65 Z" /><path d="M265,28 C285,22 310,25 320,38 C328,52 325,70 312,78 C298,84 280,80 270,68 C262,56 258,40 265,28 Z" /><path d="M195,268 C218,255 248,260 268,278 C285,298 290,330 285,362 C278,390 262,412 240,422 C218,428 196,418 180,400 C168,378 162,352 162,322 C164,292 175,278 195,268 Z" /><path d="M430,55 C455,42 492,42 515,55 C532,68 538,88 525,108 C512,122 492,128 472,122 C455,116 440,102 432,88 C425,75 425,65 430,55 Z" /><path d="M455,150 C478,138 512,138 535,155 C552,172 562,200 568,235 C572,272 562,310 545,340 C528,362 505,378 480,378 C458,372 440,355 428,330 C418,298 415,265 422,232 C430,198 442,168 455,150 Z" /><path d="M545,38 C600,25 665,25 725,42 C768,55 805,78 830,108 C850,138 858,172 848,200 C832,228 802,245 768,252 C725,260 678,255 638,240 C602,225 570,202 552,175 C535,148 528,118 530,90 C535,65 540,48 545,38 Z" /><path d="M858,82 C868,72 882,72 888,82 C895,95 892,112 882,120 C872,125 862,118 858,108 C855,98 855,88 858,82 Z" /><path d="M775,312 C800,298 835,298 860,312 C878,325 888,348 882,372 C872,392 852,402 828,402 C805,400 782,388 772,368 C762,348 762,328 775,312 Z" /><path d="M780,258 C795,252 812,255 818,265 C822,275 818,288 808,292 C798,295 785,290 780,280 C775,272 775,262 780,258 Z" /></g></svg>
              </div>
              <div style={{ position: "relative", zIndex: 10, height: "100%", display: "flex", flexDirection: "column", padding: "70px 70px 80px" }}>
                <div style={{ textAlign: "center", marginBottom: 16 }}>
                  <h1 style={{ fontSize: 48, fontWeight: 400, color: "#1a1a1a", margin: 0, fontFamily: "Georgia, 'Times New Roman', 'Palatino Linotype', serif", lineHeight: 1 }}>Certificate Of Completion</h1>
                </div>
                <div style={{ textAlign: "center", marginBottom: 12 }}>
                  <p style={{ fontSize: 20, fontWeight: 400, color: "#444", margin: 0, fontFamily: "Arial, Helvetica, 'Segoe UI', sans-serif", fontStyle: "italic", lineHeight: 1.2 }}>Kiwi Defence Professional Certification</p>
                </div>
                <div style={{ textAlign: "center", marginBottom: 24 }}>
                  <p style={{ fontSize: 16, color: "#555", margin: 0, fontFamily: "Arial, Helvetica, 'Segoe UI', sans-serif", lineHeight: 1.3 }}>July 20, 2026 · Online</p>
                </div>
                <div style={{ textAlign: "center", marginBottom: 3 }}>
                  <p style={{ fontSize: 16, color: "#333", margin: 0, fontFamily: "Arial, Helvetica, 'Segoe UI', sans-serif", lineHeight: 1.2 }}>This certifies that</p>
                </div>
                <div style={{ textAlign: "center", marginBottom: 16 }}>
                  <p style={{ fontSize: 36, fontWeight: 700, color: "#111", margin: 0, fontFamily: "Georgia, 'Times New Roman', 'Palatino Linotype', serif", textTransform: "uppercase", letterSpacing: 1, lineHeight: 1.1 }}>TEST USER</p>
                </div>
                <div style={{ textAlign: "center", marginBottom: 5 }}>
                  <p style={{ fontSize: 16, color: "#333", margin: 0, fontFamily: "Arial, Helvetica, 'Segoe UI', sans-serif", lineHeight: 1.2 }}>successfully passed the following certification exam:</p>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 24 }}>
                  <p style={{ fontSize: 26, fontWeight: 700, color: "#111", margin: 0, fontFamily: "Georgia, 'Times New Roman', 'Palatino Linotype', serif", lineHeight: 1.15 }}>{entry.cert}</p>
                </div>
                <div style={{ maxWidth: 580, margin: "0 auto", width: "100%" }}>
                  <Row label="Designation:" value={entry.designation} />
                  <Row label="Date completed:" value="July 20, 2026" />
                  <Row label="Field of study:" value="Specialized Knowledge and Applications" />
                  <Row label="Delivery Mode:" value="Online Proctored" />
                  <Row label="Final Score:" value={`${entry.score} (${Math.round(parseInt(entry.score.split("/")[0]) / parseInt(entry.score.split("/")[1]) * 100)}%)`} />
                  <Row label="Tasks completed:" value={entry.tasks} />
                </div>
                <div style={{ flex: 1, minHeight: 0 }} />
                <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: 13, fontWeight: 700, color: "#222", margin: 0, fontFamily: "Arial, Helvetica, 'Segoe UI', sans-serif", lineHeight: 1.5 }}>Kiwi Defence</p>
                    <p style={{ fontSize: 12, color: "#555", margin: "1px 0 0", fontFamily: "Arial, Helvetica, 'Segoe UI', sans-serif", lineHeight: 1.4 }}>Cybersecurity Certification Division</p>
                    <p style={{ fontSize: 10, color: "#888", margin: "2px 0 0", fontFamily: "Arial, Helvetica, 'Segoe UI', sans-serif", lineHeight: 1.3 }}>Serial No: CE-2026-{String(entry.id).padStart(6, "0")}</p>
                  </div>
                  <div style={{ flex: 1, textAlign: "center", paddingBottom: 2 }}>
                    <img alt="Kiwi Defence" style={{ height: 28, width: "auto", display: "inline-block" }} src="/kiwi-logo.svg" />
                  </div>
                  <div style={{ flex: 1, textAlign: "right" }}>
                    <svg width="280" height="34" viewBox="0 0 280 34" style={{ marginLeft: "auto", display: "block" }}>
                      <text x="140" y="26" textAnchor="middle" fontFamily="'Brush Script MT', 'Lucida Handwriting', 'Apple Chancery', 'Segoe Script', cursive" fontSize={26} fontStyle="italic" fontWeight={400} fill="#1A2A40" transform="rotate(-4, 140, 26)">Besim Altınok</text>
                    </svg>
                    <div style={{ borderBottom: "1px solid #999", marginBottom: 3, width: 280, marginLeft: "auto" }} />
                    <p style={{ fontSize: 12, fontWeight: 600, color: "#222", margin: 0, fontFamily: "Arial, Helvetica, 'Segoe UI', sans-serif", lineHeight: 1.3 }}>Besim Altınok · Founder</p>
                    <p style={{ fontSize: 10, color: "#777", margin: "1px 0 0", fontFamily: "Arial, Helvetica, 'Segoe UI', sans-serif", lineHeight: 1.2 }}>Authorized Signatory · July 20, 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="no-print px-6 pb-6 pt-4 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <button className="flex items-center gap-2 px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg text-sm font-medium transition-colors font-code">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true"><path d="M12 15V3" /><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><path d="m7 10 5 5 5-5" /></svg>
              Download PDF
            </button>
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="text-xs font-semibold text-neutral-500 mr-1 font-code">Share:</span>
              <button className="flex items-center gap-1.5 px-3.5 py-2 bg-[#0A66C2] hover:bg-[#004182] text-white rounded-lg text-xs font-medium transition-colors font-code">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                LinkedIn
              </button>
              <button className="flex items-center gap-1.5 px-3.5 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg text-xs font-medium transition-colors font-code">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" aria-hidden="true"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
                X
              </button>
              <button className="flex items-center gap-1.5 px-3.5 py-2 border border-neutral-700 hover:bg-neutral-800 text-neutral-300 rounded-lg text-xs font-medium transition-colors font-code">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" aria-hidden="true"><path d="M9 17H7A5 5 0 0 1 7 7h2" /><path d="M15 7h2a5 5 0 1 1 0 10h-2" /><line x1="8" x2="16" y1="12" y2="12" /></svg>
                Copy Link
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", marginBottom: 10, fontFamily: "Arial, Helvetica, 'Segoe UI', sans-serif", fontSize: 14, lineHeight: 1.45, color: "#333" }}>
      <span style={{ flexShrink: 0, width: 220 }}>{label}</span>
      <span style={{ fontWeight: 700, color: "#111" }}>{value}</span>
    </div>
  )
}

export default function ExamHistoryPage() {
  const [selectedEntry, setSelectedEntry] = useState<typeof history[number] | null>(null)

  return (
    <AppShell>
      <h1 className="text-2xl font-bold text-white mb-6 font-code">Exam History</h1>

      <div className="bg-[#0a0a0a] rounded-xl border border-neutral-800 overflow-hidden">
        <table className="w-full text-sm font-code">
          <thead>
            <tr className="border-b border-neutral-800 bg-neutral-900">
              <th className="px-6 py-3 font-semibold text-neutral-300 text-left">Certificate</th>
              <th className="px-6 py-3 font-semibold text-neutral-300 text-center">Score</th>
              <th className="px-6 py-3 font-semibold text-neutral-300 text-center">Tasks</th>
              <th className="px-6 py-3 font-semibold text-neutral-300 text-center">Duration</th>
              <th className="px-6 py-3 font-semibold text-neutral-300 text-center">Status</th>
              <th className="px-6 py-3 font-semibold text-neutral-300 text-center">Date</th>
              <th className="px-6 py-3 font-semibold text-neutral-300 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {history.map((entry, i) => (
              <tr key={i} className="border-b border-neutral-800/50 hover:bg-neutral-900/50 transition-colors">
                <td className="px-6 py-4 font-medium text-neutral-200">{entry.cert}</td>
                <td className="px-6 py-4 text-center text-neutral-200">{entry.score}</td>
                <td className="px-6 py-4 text-center text-neutral-400">{entry.tasks}</td>
                <td className="px-6 py-4 text-center text-neutral-400">{entry.duration}</td>
                <td className="px-6 py-4 text-center">
                  {entry.status === "Passed" ? (
                    <span className="inline-flex items-center gap-1 text-emerald-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
                      Passed
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-red-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>
                      Failed
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 text-center text-neutral-500">{entry.date}</td>
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => setSelectedEntry(entry)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-neutral-200 text-black text-xs font-semibold rounded-lg transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" aria-hidden="true"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7" /><circle cx="12" cy="12" r="3" /></svg>
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedEntry && (
        <CertificateModal entry={selectedEntry} onClose={() => setSelectedEntry(null)} />
      )}
    </AppShell>
  )
}
