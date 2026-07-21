"use client"

import { useState, type FormEvent } from "react"
import { useAuth } from "@/lib/auth-context"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const { login } = useAuth()
  const router = useRouter()

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError("")
    setSubmitting(true)

    const result = await login(email, password)

    if (result.success) {
      router.push("/dashboard")
    } else {
      setError(result.message || "Login failed")
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-black">
      {/* Left Panel */}
      <div className="hidden lg:flex bg-gradient-to-br from-black via-[#0a0a0a] to-[#141414] items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/[0.03] rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/[0.02] rounded-full blur-3xl animate-pulse [animation-delay:2s]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/[0.04] rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/[0.04] rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border border-white/[0.04] rounded-full" />
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        </div>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`, backgroundSize: '128px 128px', opacity: 0.2 }} />
        <div className="relative z-10 flex flex-col items-center text-center px-12 max-w-lg">
          <div className="w-20 h-20 mb-8 flex items-center justify-center">
            <img alt="Kiwi Defence" className="w-full h-full invert brightness-0" src="/kiwi-logo.svg" />
          </div>
          <h2 className="text-white text-3xl font-bold mb-3 leading-tight tracking-tight">Prove Your Skills</h2>
          <p className="text-neutral-500 text-base leading-relaxed mb-10 font-code">Test your cybersecurity expertise with hands-on exams, earn certifications, and stand out in your career.</p>
          <div className="grid grid-cols-3 gap-6 w-full mb-10">
            <div className="bg-white/[0.03] rounded-xl p-4 border border-neutral-800">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-neutral-400 mx-auto mb-2" aria-hidden="true"><path d="M12 19h8" /><path d="m4 17 6-6-6-6" /></svg>
              <p className="text-white text-xl font-bold tracking-tight">500+</p>
              <p className="text-neutral-500 text-xs mt-0.5 font-code">Lab Environments</p>
            </div>
            <div className="bg-white/[0.03] rounded-xl p-4 border border-neutral-800">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-neutral-400 mx-auto mb-2" aria-hidden="true"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" /><circle cx="12" cy="8" r="6" /></svg>
              <p className="text-white text-xl font-bold tracking-tight">50+</p>
              <p className="text-neutral-500 text-xs mt-0.5 font-code">Certifications</p>
            </div>
            <div className="bg-white/[0.03] rounded-xl p-4 border border-neutral-800">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-neutral-400 mx-auto mb-2" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><path d="M16 3.128a4 4 0 0 1 0 7.744" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><circle cx="9" cy="7" r="4" /></svg>
              <p className="text-white text-xl font-bold tracking-tight">10K+</p>
              <p className="text-neutral-500 text-xs mt-0.5 font-code">Users</p>
            </div>
          </div>
          <div className="w-full mb-8">
            <div className="relative bg-white/[0.03] rounded-xl p-5 border border-neutral-800 min-h-[120px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-neutral-600 absolute top-3 left-4" aria-hidden="true"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" /><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" /></svg>
              <div className="pl-2">
                <p className="text-neutral-300 text-sm italic leading-relaxed line-clamp-3 mb-3 font-code">&ldquo;Kiwi Defence SOC L1 and CTI Analyst paths build the skills and confidence needed to start a strong cybersecurity career.&rdquo;</p>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-neutral-700 flex items-center justify-center text-white text-[10px] font-bold font-code">U</div>
                  <div>
                    <p className="text-white text-xs font-semibold font-code">Umut Sa&#x11F;lam</p>
                    <p className="text-neutral-500 text-[10px] font-code">Cyber Threat Intelligence Analyst &middot; ThreatMon</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center gap-1.5 mt-3">
                <button type="button" className="w-1.5 h-1.5 rounded-full transition-all bg-neutral-700" />
                <button type="button" className="w-1.5 h-1.5 rounded-full transition-all bg-white w-4" />
                <button type="button" className="w-1.5 h-1.5 rounded-full transition-all bg-neutral-700" />
                <button type="button" className="w-1.5 h-1.5 rounded-full transition-all bg-neutral-700" />
                <button type="button" className="w-1.5 h-1.5 rounded-full transition-all bg-neutral-700" />
              </div>
            </div>
            <Link className="block text-center mt-2 text-[10px] text-neutral-600 hover:text-neutral-400 transition-colors font-code" href="/success-stories">View all success stories &rarr;</Link>
          </div>
          <div className="flex items-center gap-2 bg-white/[0.03] border border-neutral-800 rounded-full px-5 py-2.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-neutral-500" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /></svg>
            <span className="text-neutral-500 text-xs font-medium font-code">Secure encrypted connection for your login</span>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="grid place-items-start px-8 py-8 bg-[#050505] overflow-y-auto">
        <div className="w-full max-w-md pb-8">
          <div className="flex items-center justify-center mb-2">
            <div className="w-12 h-12 flex items-center justify-center">
              <img alt="Kiwi Defence" className="w-full h-full invert" src="/kiwi-logo.svg" />
            </div>
          </div>
          <h1 className="text-center text-xl font-bold text-white mt-4 mb-8 tracking-tight">Sign In to Your Account</h1>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-600" aria-hidden="true"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /><rect x="2" y="4" width="20" height="16" rx="2" /></svg>
              <input
                required
                placeholder="email@example.com"
                className="w-full pl-12 pr-4 py-3.5 bg-neutral-900 border border-neutral-700 rounded-lg text-sm text-white placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-neutral-500 focus:border-neutral-500 font-code"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-600" aria-hidden="true"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" /><circle cx="16.5" cy="7.5" r=".5" fill="currentColor" /></svg>
              <input
                required
                placeholder="Enter your password"
                className="w-full pl-12 pr-4 py-3.5 bg-neutral-900 border border-neutral-700 rounded-lg text-sm text-white placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-neutral-500 focus:border-neutral-500 font-code"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="text-right">
              <Link className="text-sm text-neutral-400 hover:text-white transition-colors font-code" href="/forgot-password">Forgot your password?</Link>
            </div>
            {error && (
              <p className="text-sm text-red-400 text-center font-code">{error}</p>
            )}
            <button type="submit" disabled={submitting} className="w-full bg-white text-black py-3.5 rounded-lg font-semibold hover:bg-neutral-200 disabled:opacity-50 transition-colors tracking-tight font-code">
              {submitting ? "Signing in..." : "Sign In"}
            </button>
          </form>
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-neutral-800" />
            <span className="text-xs text-neutral-600 font-medium font-code">or</span>
            <div className="flex-1 h-px bg-neutral-800" />
          </div>
          <button type="button" disabled className="w-full flex items-center justify-center gap-3 border border-neutral-700 py-3.5 rounded-lg text-sm font-semibold text-neutral-300 opacity-50 cursor-not-allowed font-code">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            Sign in with Google
          </button>
          <p className="mt-6 text-center text-sm text-neutral-500 font-code">
            Don&apos;t have an account yet?{" "}
            <Link className="text-white font-semibold hover:text-neutral-300 transition-colors" href="/register">Sign Up</Link>
          </p>
          <div className="mt-8 pt-4 border-t border-neutral-800 flex items-center justify-center gap-4 text-[11px] text-neutral-600 font-code">
            <Link className="hover:text-neutral-400 transition-colors" href="/terms">Terms of Use</Link>
            <span>&middot;</span>
            <Link className="hover:text-neutral-400 transition-colors" href="/privacy">Privacy</Link>
            <span>&middot;</span>
            <Link className="hover:text-neutral-400 transition-colors" href="/refund-policy">Refund Policy</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
