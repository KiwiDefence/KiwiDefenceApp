'use client'

import { useState, useEffect, useCallback } from "react"
import AppShell from "@/components/app-shell"
import ExamDetails from "@/components/exam-details"
import CertificateCard from "@/components/certificate-card"
import Link from "next/link"
import { useAuth } from "@/lib/auth-context"

const taskDefs = [
  { id: 1, title: "RF Fundamentals — Frequency, Bandwidth, Modulation", questions: 6, points: 10 },
  { id: 2, title: "SDR Toolchain — Hardware, Software, Gain", questions: 6, points: 10 },
  { id: 3, title: "Modulation Schemes — AM, FM, FSK, PSK, QAM", questions: 6, points: 16 },
  { id: 4, title: "Antennas & Propagation — Gain, Polarization, Path Loss", questions: 6, points: 16 },
  { id: 5, title: "Attack Primitives — Replay, Jamming, Spoofing", questions: 5, points: 16 },
  { id: 6, title: "Legal & Regulatory — ISM Bands, FCC, ETSI", questions: 5, points: 16 },
  { id: 7, title: "Capture & Decode — Common IoT Protocols", questions: 5, points: 16 },
]

const totalQuestions = taskDefs.reduce((sum, t) => sum + t.questions, 0)

function formatTime(seconds: number) {
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  const s = seconds % 60
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`
}

export default function JuniorRadioHackerPage() {
  const { user } = useAuth()
  const [enrolled, setEnrolled] = useState(false)
  const [showExamModal, setShowExamModal] = useState(false)
  const [examStarted, setExamStarted] = useState(false)
  const [activeTask, setActiveTask] = useState(1)
  const [answeredTasks, setAnsweredTasks] = useState<Set<number>>(new Set())
  const [timeLeft, setTimeLeft] = useState(90 * 60)
  const [showFinishModal, setShowFinishModal] = useState(false)
  const [answers, setAnswers] = useState<Record<string, string>>({})

  useEffect(() => {
    if (!examStarted || showFinishModal) return
    const interval = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(interval)
          setShowFinishModal(true)
          return 0
        }
        return t - 1
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [examStarted, showFinishModal])

  const answeredCount = Object.keys(answers).length
  const progressPct = totalQuestions > 0 ? Math.round((answeredCount / totalQuestions) * 100) : 0

  const handleStartExam = useCallback(() => {
    setShowExamModal(false)
    setExamStarted(true)
    setTimeLeft(90 * 60)
  }, [])

  if (examStarted) {
    const circumference = 2 * Math.PI * 54
    const offset = circumference - (progressPct / 100) * circumference

    return (
      <AppShell>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-[#0a0a0a] rounded-xl border border-neutral-800 p-4 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-red-400" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                <span className="font-bold text-lg font-mono text-red-400">{formatTime(timeLeft)}</span>
              </div>
              <div className="flex-1" />
              <button onClick={() => setShowFinishModal(true)} className="px-4 py-2 bg-white hover:bg-neutral-200 text-black rounded-lg font-semibold text-sm transition-colors font-code">
                Finish Exam
              </button>
            </div>

            <div className="bg-emerald-600 text-white rounded-xl px-6 py-4 flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 shrink-0" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
              <p className="text-sm font-medium font-code"><span className="font-bold">Exam started!</span> Complete the tasks to successfully pass the practical exam.</p>
            </div>

            <div className="space-y-4">
              {taskDefs.map((task) => {
                const isOpen = activeTask === task.id
                const isAnswered = answeredTasks.has(task.id)
                return (
                  <div key={task.id} className="bg-[#0a0a0a] rounded-xl border border-neutral-800 overflow-hidden">
                    <button
                      onClick={() => setActiveTask(isOpen ? -1 : task.id)}
                      className="bg-neutral-900 text-white px-6 py-4 flex items-center justify-between w-full text-left font-code"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        {isAnswered ? (
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-neutral-500 shrink-0" aria-hidden="true"><circle cx="12" cy="12" r="10" /></svg>
                        )}
                        <span className="font-bold text-sm truncate"># TASK {task.id}: {task.title}</span>
                      </div>
                      <div className="flex items-center gap-3 shrink-0 ml-3">
                        <span className="text-sm font-semibold text-neutral-400">{task.points} Points</span>
                        {isOpen ? (
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-neutral-400" aria-hidden="true"><path d="m18 15-6-6-6 6" /></svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-neutral-400" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
                        )}
                      </div>
                    </button>
                    {isOpen && (
                      <div className="p-6 space-y-5">
                        <div className="flex items-start gap-2 px-3 py-2 bg-amber-900/30 border border-amber-700/50 rounded-lg text-xs text-amber-300 font-code">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
                          <div><span className="font-semibold">Heads up: </span>Multiple-choice and matching answers are <strong>final</strong> once you submit them. You cannot return to a question after submission.</div>
                        </div>
                        {Array.from({ length: task.questions }, (_, i) => {
                          const qId = `${task.id}-${i + 1}`
                          const locked = isAnswered
                          return (
                            <div key={qId} className={`border rounded-lg p-4 ${locked ? "border-neutral-700/50 bg-neutral-900/50" : "border-neutral-800"}`}>
                              <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-2">
                                  {locked && (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-neutral-500" aria-hidden="true"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                                  )}
                                  <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider font-code">Question {i + 1} / {task.questions}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span className="text-xs font-semibold text-red-400 font-code">1 Points</span>
                                  <button disabled className="inline-flex items-center gap-1 px-2 py-0.5 text-[11px] font-semibold rounded border border-neutral-700 text-neutral-500 opacity-40 cursor-not-allowed font-code">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3" aria-hidden="true"><path d="M9 3h6v5l4 4-4 4v5H9v-5l-4 4 4-4z" /></svg>
                                    Check Answer
                                  </button>
                                </div>
                              </div>
                              <p className={`text-sm mb-3 font-code whitespace-pre-wrap leading-relaxed ${locked ? "text-neutral-500" : "text-neutral-200"}`}>Sample question text for task {task.id}, question {i + 1}.</p>
                              <div className="space-y-2">
                                {["A) Option one", "B) Option two", "C) Option three", "D) Option four"].map((opt, oi) => (
                                  <label key={oi} className={`flex items-center gap-3 p-3 rounded-lg border ${locked ? "border-neutral-700/30 cursor-not-allowed" : "border-neutral-800 hover:bg-neutral-900 cursor-pointer"}`}>
                                    <input
                                      type="radio"
                                      name={`q-${qId}`}
                                      value={String.fromCharCode(65 + oi)}
                                      checked={answers[qId] === String.fromCharCode(65 + oi)}
                                      onChange={() => setAnswers((prev) => ({ ...prev, [qId]: String.fromCharCode(65 + oi) }))}
                                      disabled={locked}
                                      className="w-4 h-4 text-neutral-300 accent-white"
                                    />
                                    <span className={`text-sm font-code ${locked ? "text-neutral-500" : "text-neutral-300"}`}>{opt}</span>
                                  </label>
                                ))}
                              </div>
                            </div>
                          )
                        })}
                        <div className="flex justify-end">
                          <button
                            onClick={() => setAnsweredTasks((prev) => new Set(prev).add(task.id))}
                            disabled={answeredTasks.has(task.id)}
                            className="px-5 py-2.5 bg-white hover:bg-neutral-200 text-black rounded-lg font-semibold text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-code"
                          >
                            {answeredTasks.has(task.id) ? "Submitted" : "Submit Answers"}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              <div className="bg-[#0a0a0a] rounded-xl border border-neutral-800 p-6 flex flex-col items-center">
                <div className="relative">
                  <svg width="140" height="140" className="-rotate-90" viewBox="0 0 128 128">
                    <circle cx="64" cy="64" r="54" fill="none" stroke="#262626" strokeWidth="8" />
                    <circle cx="64" cy="64" r="54" fill="none" stroke="#22c55e" strokeWidth="8" strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={offset} />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-bold text-emerald-400 font-code">{progressPct}%</span>
                  </div>
                </div>
                <p className="mt-3 text-sm text-neutral-500 font-code">
                  <span className="font-bold text-neutral-200">{answeredCount}</span> / <span className="font-bold text-neutral-200">{totalQuestions}</span> questions answered
                </p>
              </div>

              <div className="bg-[#0a0a0a] rounded-xl border border-neutral-800 p-5">
                <h3 className="font-bold text-white mb-4 font-code">Tasks</h3>
                <div className="space-y-3">
                  {taskDefs.map((task) => {
                    const isAnswered = answeredTasks.has(task.id)
                    return (
                      <div key={task.id} className={`flex items-center gap-3 p-3 rounded-lg border text-sm ${isAnswered ? "border-emerald-800 bg-emerald-900/20" : "border-neutral-800 bg-neutral-900"}`}>
                        {isAnswered ? (
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-neutral-500 shrink-0" aria-hidden="true"><circle cx="12" cy="12" r="10" /></svg>
                        )}
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-neutral-300 text-xs font-code">TASK {task.id}</p>
                          <p className="text-neutral-500 text-xs truncate font-code">{task.title}</p>
                        </div>
                        <span className="font-bold text-neutral-400 text-sm font-code">{task.points}</span>
                      </div>
                    )
                  })}
                  <div className="mt-4 pt-4 border-t border-neutral-800 flex items-center gap-2 text-sm font-code">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-yellow-500" aria-hidden="true"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5C7 4 6 6 4 9m10-2.5V2m3 6v4m3-2a7 7 0 1 1-14 0 7 7 0 0 1 14 0" /></svg>
                    <span className="font-bold text-neutral-300">Earn +100 Points</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {showFinishModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowFinishModal(false)} />
            <div className="relative w-full max-w-md bg-[#0a0a0a] rounded-2xl border border-neutral-800 shadow-2xl overflow-hidden">
              <div className="relative px-6 pt-8 pb-12 text-center bg-gradient-to-br from-emerald-600 to-emerald-700">
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/10" />
                <div className="absolute -bottom-3 -left-4 w-16 h-16 rounded-full bg-white/10" />
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white" aria-hidden="true"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5C7 4 6 6 4 9m10-2.5V2m3 6v4m3-2a7 7 0 1 1-14 0 7 7 0 0 1 14 0" /></svg>
                </div>
                <h2 className="text-2xl font-bold text-white font-code">Congratulations!</h2>
                <p className="text-sm text-white/80 mt-1 max-w-xs mx-auto font-code">You have successfully completed the exam. Excellent performance!</p>
              </div>
              <div className="flex justify-center -mt-10 relative z-10">
                <div className="relative w-[128px] h-[128px] bg-[#0a0a0a] rounded-full shadow-lg flex items-center justify-center border border-neutral-800">
                  <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 128 128">
                    <circle cx="64" cy="64" r="54" fill="none" stroke="#262626" strokeWidth="8" />
                    <circle cx="64" cy="64" r="54" fill="none" stroke="#10b981" strokeWidth="8" strokeLinecap="round" strokeDasharray="339.29" strokeDashoffset="30.54" />
                  </svg>
                  <div className="text-center relative z-10">
                    <p className="text-2xl font-bold text-white font-code">91%</p>
                    <p className="text-[10px] text-neutral-400 uppercase tracking-wider font-medium font-code">Success Rate</p>
                  </div>
                </div>
              </div>
              <div className="px-6 pt-5 pb-6">
                <p className="text-center text-sm font-semibold text-neutral-200 mb-4 font-code">Junior Radio Hacker</p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-neutral-900 rounded-xl p-3 text-center">
                    <p className="text-lg font-bold text-white font-code">91<span className="text-sm font-normal text-neutral-400">/100</span></p>
                    <p className="text-[11px] text-neutral-500 mt-0.5 font-code">Score</p>
                  </div>
                  <div className="bg-neutral-900 rounded-xl p-3 text-center">
                    <p className="text-lg font-bold text-white font-code">{answeredTasks.size}<span className="text-sm font-normal text-neutral-400">/{taskDefs.length}</span></p>
                    <p className="text-[11px] text-neutral-500 mt-0.5 font-code">Tasks</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Link href="/exam-history" className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 flex-1 transition-colors font-code">
                    Go to Exam History
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </AppShell>
    )
  }

  return (
    <AppShell>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <h1 className="text-2xl font-bold text-white font-code">Junior Radio Hacker</h1>

          <div className="bg-[#0a0a0a] rounded-xl border border-neutral-800 p-4 flex flex-wrap items-center gap-4">
            <button className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors font-code">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true"><path d="M12 15V3" /><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><path d="m7 10 5 5 5-5" /></svg>
              <span>Download Content</span>
            </button>
            <div className="w-px h-8 bg-neutral-800" />
            <div className="flex items-center gap-2 text-sm text-neutral-400 font-code">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
              <span className="font-semibold text-white">01:30:00</span>
            </div>
            <div className="w-px h-8 bg-neutral-800" />
            <div className="flex items-center gap-2 text-sm font-code">
              <span className="text-neutral-400">Level</span>
              <span className="inline-flex items-center rounded-md font-semibold text-white bg-emerald-600 px-3 py-1 text-sm">Beginner</span>
            </div>
            <div className="w-px h-8 bg-neutral-800" />
            <div className="flex items-center gap-2 text-sm font-bold text-white font-code">
              <span className="text-emerald-400">Free</span>
            </div>
          </div>

          {!user && (
            <div className="space-y-3">
              <Link href="/login?returnTo=/certificates/junior-radio-hacker" className="w-full bg-white hover:bg-neutral-200 text-black py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-3 font-code">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true"><path d="m10 17 5-5-5-5" /><path d="M15 12H3" /><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" /></svg>
                Sign In to Enroll Free
              </Link>
              <p className="text-center text-sm text-neutral-500 font-code">
                Don&apos;t have an account?{" "}
                <Link href="/register" className="text-white hover:underline font-semibold">Register now</Link>
              </p>
            </div>
          )}

          {user && !enrolled && (
            <div className="space-y-3">
              <button onClick={() => setEnrolled(true)} className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-3 font-code">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
                Enroll Free
              </button>
            </div>
          )}

          {enrolled && !examStarted && (
            <>
              <button onClick={() => setShowExamModal(true)} className="w-full bg-white hover:bg-neutral-200 text-black py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-3 font-code">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                Start Exam
              </button>
              <div className="bg-[#0a0a0a] rounded-xl border border-neutral-800 p-5">
                <div className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
                  <p className="text-sm text-neutral-300 font-code">You own this certificate. Start the exam when you&apos;re ready.</p>
                </div>
              </div>
              <div className="space-y-3">
                {taskDefs.map((task) => (
                  <div key={task.id} className="flex items-center gap-4 bg-[#0a0a0a] rounded-xl border border-neutral-800 overflow-hidden">
                    <div className="bg-neutral-800 text-neutral-400 px-5 py-4 flex items-center gap-3 min-w-[140px]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                      <span className="font-bold text-sm font-code"># TASK {task.id}</span>
                    </div>
                    <div className="flex-1 py-3 flex items-center gap-2 flex-wrap">
                      <span className="text-sm text-neutral-400 font-code"><span className="font-semibold text-neutral-200">Start the Exam to</span> Begin the Task</span>
                    </div>
                    <div className="flex items-center gap-1.5 pr-5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-blue-400" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" /></svg>
                      <span className="text-xs font-medium text-blue-300 bg-blue-900/40 px-2 py-0.5 rounded-full font-code">{task.questions} questions</span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {!examStarted && (
            <div className="space-y-5">
              <div className="bg-[#0a0a0a] rounded-xl border border-neutral-800 p-6">
                <h2 className="text-lg font-bold text-white mb-3 font-code">About</h2>
                <p className="text-sm text-neutral-400 leading-relaxed whitespace-pre-line font-code">
                  Junior Radio Hacker (JRH) is the theory-only entry tier for wireless signal hacking. You&apos;ll learn
                  what RF is doing under the antenna, how SDR toolchains fit together, which modulations power the
                  wireless world around you, and the attack primitives (replay, jamming, downgrade, side-channel) that
                  make radio interesting to security teams. No lab, no custom decoders — pure fundamentals. When you
                  finish JRH you&apos;ll be ready to attempt the Certified Radio Hacker (CRH) hands-on cert without
                  staring at unfamiliar terminology.
                </p>
              </div>
              <div className="bg-[#0a0a0a] rounded-xl border border-neutral-800 p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2 font-code">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-amber-400" aria-hidden="true"><circle cx="12" cy="12" r="10" /><line x1="12" x2="12" y1="8" y2="12" /><line x1="12" x2="12.01" y1="16" y2="16" /></svg>
                      Requirements
                    </h2>
                    <p className="text-sm text-neutral-500 italic font-code">No prerequisites required for this certificate.</p>
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2 font-code">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-purple-400" aria-hidden="true"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" /><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" /><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" /></svg>
                      Categories
                    </h2>
                    <p className="text-sm text-neutral-500 italic font-code">&mdash;</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#0a0a0a] rounded-xl border border-neutral-800 p-6">
                <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2 font-code">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-neutral-400" aria-hidden="true"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg>
                  Exam Details
                </h2>
                <ExamDetails />
              </div>
            </div>
          )}
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-6">
            <CertificateCard />
          </div>
        </div>
      </div>

      {showExamModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowExamModal(false)} />
          <div className="relative w-full max-w-lg bg-[#0a0a0a] rounded-2xl border border-neutral-800 shadow-2xl overflow-hidden">
            <div className="bg-neutral-900 px-6 py-5 flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-white" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></svg>
              <h3 className="text-lg font-bold text-white font-code">Before You Begin</h3>
            </div>
            <div className="px-6 py-5 space-y-4">
              <p className="text-neutral-400 text-sm leading-relaxed font-code">This is a professional certification exam. Your integrity matters — the value of your certificate depends on it.</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3"><span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-900/50 text-red-400 text-xs font-bold">✕</span><span className="text-sm text-neutral-400 font-code">Do not cheat or use unauthorized resources during the exam.</span></li>
                <li className="flex items-start gap-3"><span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-900/50 text-red-400 text-xs font-bold">✕</span><span className="text-sm text-neutral-400 font-code">Do not share exam questions or answers with anyone.</span></li>
                <li className="flex items-start gap-3"><span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-900/50 text-emerald-400 text-xs font-bold">✓</span><span className="text-sm text-neutral-400 font-code">Trust your knowledge — you&apos;ve prepared for this.</span></li>
                <li className="flex items-start gap-3"><span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-900/50 text-emerald-400 text-xs font-bold">✓</span><span className="text-sm text-neutral-400 font-code">Put in your best effort so your certificate truly means something.</span></li>
              </ul>
              <p className="text-xs text-neutral-600 italic font-code">By starting the exam you agree to uphold academic integrity.</p>
            </div>
            <div className="px-6 pb-5 flex gap-3">
              <button onClick={() => setShowExamModal(false)} className="flex-1 py-3 rounded-xl border border-neutral-700 text-neutral-300 font-semibold text-sm hover:bg-neutral-800 transition-colors font-code">Go Back</button>
              <button onClick={handleStartExam} className="flex-1 py-3 rounded-xl bg-white hover:bg-neutral-200 text-black font-semibold text-sm transition-colors font-code">I Understand, Start Exam</button>
            </div>
          </div>
        </div>
      )}
    </AppShell>
  )
}
