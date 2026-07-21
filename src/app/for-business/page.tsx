import type { Metadata } from "next"
import AppShell from "@/components/app-shell"

export const metadata: Metadata = {
  title: "Kiwi Defence for Business — Certify your team, hands-on | Kiwi Defence",
  description:
    "5 to 50 seats. Hands-on cybersecurity certification exams for your team. One HR dashboard for who passed what. Verifiable individual credentials. From $2,500/year.",
}

export default function ForBusinessPage() {
  return (
    <AppShell>
      <div className="space-y-20 max-w-6xl mx-auto">
          {/* Hero */}
          <section className="grid grid-cols-1 gap-8 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-[#0a0a0a] px-3 py-1 text-xs font-semibold text-neutral-400 shadow-sm font-code">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" aria-hidden="true">
                  <path d="M10 12h4" /><path d="M10 8h4" /><path d="M14 21v-3a2 2 0 0 0-4 0v3" />
                  <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" />
                  <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
                </svg>
                Kiwi Defence for Business
              </div>
              <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl font-code">
                Certify your security team on <span className="text-neutral-400">real labs</span> &mdash; <span className="whitespace-nowrap">from $2,500 / year.</span>
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-neutral-500 font-code">
                5 to 50 seats. Hands-on exams that root live boxes, not multiple-choice quizzes. One HR dashboard for who passed what. Verifiable individual credentials your team can put on LinkedIn.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#pricing" className="inline-flex items-center gap-2 rounded-md bg-white px-8 py-3.5 text-sm font-semibold text-black font-code tracking-wide hover:bg-neutral-200 transition-colors">See plans &rarr;</a>
                <a href="#book-demo" className="inline-flex items-center gap-2 rounded-md bg-transparent border border-neutral-700 px-8 py-3.5 text-sm font-semibold text-white font-code tracking-wide hover:border-white hover:bg-white/[0.05] transition-colors">Talk to us</a>
              </div>

            </div>
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5 font-code text-[13px] leading-relaxed text-neutral-100 shadow-xl lg:col-span-2">
              <div className="mb-3 flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <span className="ml-3 text-[11px] text-neutral-500">team-dashboard</span>
              </div>
              <div>
                <span className="text-emerald-400">$</span> <span className="text-neutral-100">kiwidefence status --team acme</span>
              </div>
              <div className="mt-2 space-y-0.5 text-neutral-400">
                <div>seats: 15 &middot; plan: growth &middot; credits: 62 / 75</div>
                <div>certs passed this month: 4</div>
                <div className="pt-2 text-neutral-600">&mdash; top pass rate &mdash;</div>
                <div><span className="text-neutral-100">Ada Y.</span> <span className="text-emerald-400">CWAE &#x2713;</span> <span className="text-emerald-400">CIR &#x2713;</span> <span className="text-emerald-400">DSE &#x2713;</span></div>
                <div><span className="text-neutral-100">Kerem B.</span> <span className="text-emerald-400">CMP &#x2713;</span> <span className="text-amber-400">CBBH ~</span></div>
                <div className="pt-2 text-neutral-600">&mdash; weakest domain &mdash;</div>
                <div>web app auth &middot; 41% team avg</div>
              </div>
            </div>
          </section>

          {/* Why Teams Choose Us */}
          <section>
            <div className="mb-6 max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-white font-code">Why teams choose us</h2>
              <p className="mt-2 text-neutral-500 font-code">Four reasons CISOs, HR leads, and MSSP directors put their pentesters, responders, and DevSecOps engineers on Kiwi Defence.</p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-neutral-800 bg-[#0a0a0a] p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-800">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-neutral-400" aria-hidden="true">
                    <path d="M12 19h8" /><path d="m4 17 6-6-6-6" />
                  </svg>
                </div>
                <h3 className="mt-4 text-base font-bold text-white font-code">Real hands-on labs</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500 font-code">Not multiple choice. Every cert has a Kali attacker + live target. Your team roots the box — they don't watch a slide.</p>
              </div>
              <div className="rounded-2xl border border-neutral-800 bg-[#0a0a0a] p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-800">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-neutral-400" aria-hidden="true">
                    <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" /><circle cx="12" cy="8" r="6" />
                  </svg>
                </div>
                <h3 className="mt-4 text-base font-bold text-white font-code">The credential belongs to the person</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500 font-code">Each certificate is issued in the individual's name and lives on their LinkedIn. The company sees the reports; the person keeps the credential.</p>
              </div>
              <div className="rounded-2xl border border-neutral-800 bg-[#0a0a0a] p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-800">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-neutral-400" aria-hidden="true">
                    <path d="M3 3v16a2 2 0 0 0 2 2h16" /><path d="M18 17V9" /><path d="M13 17V5" /><path d="M8 17v-3" />
                  </svg>
                </div>
                <h3 className="mt-4 text-base font-bold text-white font-code">One dashboard for HR</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500 font-code">See who passed what, which skills are weak, when each seat was last active. Export CSV for compliance audits in one click.</p>
              </div>
              <div className="rounded-2xl border border-neutral-800 bg-[#0a0a0a] p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-800">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-neutral-400" aria-hidden="true">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><path d="M16 3.128a4 4 0 0 1 0 7.744" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><circle cx="9" cy="7" r="4" />
                  </svg>
                </div>
                <h3 className="mt-4 text-base font-bold text-white font-code">Reassignable seats</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500 font-code">Someone leaves? Reclaim their seat, invite the next hire. No wasted budget on churned engineers.</p>
              </div>
            </div>
          </section>

          {/* 35+ Certifications */}
          <section>
            <div className="mb-6 max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-white font-code">35+ certifications across four tracks</h2>
              <p className="mt-2 text-neutral-500 font-code">From junior fundamentals to expert red-team scenarios. Each cert has hands-on tasks against real infrastructure — no simulations.</p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-rose-900/50 bg-rose-950/30 p-5 shadow-sm">
                <h3 className="text-sm font-bold uppercase tracking-wide text-rose-400 font-code">Red Team</h3>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {["CNP","CBBH","CWAE","CMP","CEP","CRH","CTI-X","PIH"].map((c) => (
                    <span key={c} className="rounded-md border border-neutral-700 bg-neutral-900 px-2 py-1 text-[11px] font-semibold text-neutral-300 shadow-sm font-code">{c}</span>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-sky-900/50 bg-sky-950/30 p-5 shadow-sm">
                <h3 className="text-sm font-bold uppercase tracking-wide text-sky-400 font-code">Blue Team</h3>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {["CIR","CDFA","DEF","SOCF","FCD"].map((c) => (
                    <span key={c} className="rounded-md border border-neutral-700 bg-neutral-900 px-2 py-1 text-[11px] font-semibold text-neutral-300 shadow-sm font-code">{c}</span>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-emerald-900/50 bg-emerald-950/30 p-5 shadow-sm">
                <h3 className="text-sm font-bold uppercase tracking-wide text-emerald-400 font-code">DevSecOps</h3>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {["DSE","DSOF","CDSM"].map((c) => (
                    <span key={c} className="rounded-md border border-neutral-700 bg-neutral-900 px-2 py-1 text-[11px] font-semibold text-neutral-300 shadow-sm font-code">{c}</span>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-amber-900/50 bg-amber-950/30 p-5 shadow-sm">
                <h3 className="text-sm font-bold uppercase tracking-wide text-amber-400 font-code">Governance &amp; Fundamentals</h3>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {["GRC-A","ISM","AppSec-M","CPSF","CSF","GRC-F","OSINTF","SAFE","LLMF","PEC","BBF","JRH"].map((c) => (
                    <span key={c} className="rounded-md border border-neutral-700 bg-neutral-900 px-2 py-1 text-[11px] font-semibold text-neutral-300 shadow-sm font-code">{c}</span>
                  ))}
                </div>
              </div>
            </div>
            <p className="mt-4 text-xs text-neutral-600 font-code">
              Full catalog: <a className="font-semibold text-neutral-400 hover:text-white transition-colors" href="/certificates">see all 35+ certifications &rarr;</a>
            </p>
          </section>

          {/* Pricing */}
          <section id="pricing">
            <div className="mb-6 max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-white font-code">Simple annual pricing</h2>
              <p className="mt-2 text-neutral-500 font-code">One line item on your invoice. No per-seat surprise fees. Instant checkout via Paddle.</p>
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-start">
              {/* Starter */}
              <div className="relative rounded-2xl border p-6 shadow-sm transition-all border-neutral-800 bg-[#0a0a0a]">
                <h3 className="text-lg font-bold text-white font-code">Starter</h3>
                <p className="mt-1 text-xs text-neutral-500 font-code">Small teams getting started</p>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white font-code">$2,500</span>
                  <span className="text-sm text-neutral-500 font-code">/year</span>
                </div>
                <p className="mt-1 text-[11px] font-medium uppercase tracking-wide text-neutral-500 font-code">$500 / seat &middot; year</p>
                <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-wide">
                  <span className="rounded-md bg-neutral-800 px-2 py-1 text-neutral-300 font-code">5 seats</span>
                  <span className="rounded-md bg-neutral-800 px-2 py-1 text-neutral-300 font-code">25 lab credits</span>
                </div>
                <ul className="mt-5 space-y-2 text-sm text-neutral-400 font-code">
                  {["All Fundamentals & MC certs unlimited","5 lab credits per seat","Verifiable individual credentials","Team dashboard","Email support"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
                      <span>{item}</span>
                    </li>
                  ))}
                  <li className="flex items-start gap-2 text-neutral-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                    <span>Expert lab certs (CIR, CMP, CWAE, CBBH, DSE&hellip;)</span>
                  </li>
                </ul>
                <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors disabled:opacity-60 bg-white text-black hover:bg-neutral-200 font-code tracking-tight">Get Starter</button>
              </div>

              {/* Growth */}
              <div className="relative rounded-2xl border p-6 shadow-sm transition-all border-neutral-600 bg-[#0a0a0a] shadow-lg ring-1 ring-neutral-600 lg:-translate-y-2 lg:scale-[1.02]">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-black shadow font-code">Most popular</div>
                <h3 className="text-lg font-bold text-white font-code">Growth</h3>
                <p className="mt-1 text-xs text-neutral-500 font-code">Most popular for SMB security teams</p>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white font-code">$7,500</span>
                  <span className="text-sm text-neutral-500 font-code">/year</span>
                </div>
                <p className="mt-1 text-[11px] font-medium uppercase tracking-wide text-neutral-500 font-code">$500 / seat &middot; year</p>
                <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-wide">
                  <span className="rounded-md bg-neutral-800 px-2 py-1 text-neutral-300 font-code">15 seats</span>
                  <span className="rounded-md bg-neutral-800 px-2 py-1 text-neutral-300 font-code">75 lab credits</span>
                </div>
                <ul className="mt-5 space-y-2 text-sm text-neutral-400 font-code">
                  {["Everything in Starter","All expert lab certs (Red Team, IR, Forensics, DevSecOps&hellip;)","Priority support","Weak-skills analytics","HR assignment integration"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors disabled:opacity-60 bg-white text-black hover:bg-neutral-200 font-code tracking-tight">Get Growth</button>
              </div>

              {/* Scale */}
              <div className="relative rounded-2xl border p-6 shadow-sm transition-all border-neutral-800 bg-[#0a0a0a]">
                <h3 className="text-lg font-bold text-white font-code">Scale</h3>
                <p className="mt-1 text-xs text-neutral-500 font-code">50+ engineers &middot; enterprise ops</p>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white font-code">Custom</span>
                </div>
                <p className="mt-1 text-[11px] font-medium uppercase tracking-wide text-neutral-500 font-code">Volume pricing</p>
                <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-wide">
                  <span className="rounded-md bg-neutral-800 px-2 py-1 text-neutral-300 font-code">50+ seats</span>
                  <span className="rounded-md bg-neutral-800 px-2 py-1 text-neutral-300 font-code">Unlimited</span>
                </div>
                <ul className="mt-5 space-y-2 text-sm text-neutral-400 font-code">
                  {["Everything in Growth","SSO (SAML / OIDC)","Custom cert branding on PDF","Dedicated success manager","MSA + custom invoicing","Onboarding workshop"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a href="#book-demo" className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg border border-neutral-700 bg-transparent px-4 py-2.5 text-sm font-semibold text-neutral-300 transition-colors hover:border-neutral-500 hover:text-white font-code">Talk to sales</a>
              </div>
            </div>
            <p className="mt-4 text-[11px] text-neutral-600 font-code">Paddle is our merchant of record &mdash; tax, invoicing, and refunds handled globally. Prices in USD; local tax added at checkout where required.</p>
          </section>

          {/* How It Works */}
          <section>
            <div className="mb-6 max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-white font-code">How it works</h2>
              <p className="mt-2 text-neutral-500 font-code">From checkout to first cert in under an hour — no sales call required for Starter and Growth.</p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {[
                { num: "1", icon: "pen-tool", title: "Pick a plan", desc: "Starter (5 seats) or Growth (15 seats) — instant Paddle checkout. Need more? Talk to sales for Scale." },
                { num: "2", icon: "sparkles", title: "Auto-onboarding", desc: "Payment confirms → your Organization is created, you become owner, invite links go out (14-day valid)." },
                { num: "3", icon: "chart", title: "See who's learning what", desc: "Real-time team dashboard: active members, certificates passed, weak skill areas, credit usage. CSV export for HR." },
              ].map((step) => (
                <div key={step.num} className="relative rounded-2xl border border-neutral-800 bg-[#0a0a0a] p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 text-sm font-bold text-white font-code">{step.num}</div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-neutral-400" aria-hidden="true">
                      {step.icon === "pen-tool" ? (
                        <><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09" /><path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05" /></>
                      ) : step.icon === "sparkles" ? (
                        <><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" /><path d="M20 2v4" /><path d="M22 4h-4" /><circle cx="4" cy="20" r="2" /></>
                      ) : (
                        <><path d="M3 3v16a2 2 0 0 0 2 2h16" /><path d="M18 17V9" /><path d="M13 17V5" /><path d="M8 17v-3" /></>
                      )}
                    </svg>
                  </div>
                  <h3 className="mt-4 text-base font-bold text-white font-code">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-500 font-code">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Audit */}
          <section className="rounded-2xl border border-neutral-800 bg-gradient-to-br from-[#0a0a0a] to-neutral-900 p-8">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-center">
              <div className="lg:col-span-2">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-neutral-800 px-3 py-1 text-xs font-semibold text-neutral-400 font-code">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" aria-hidden="true">
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" />
                  </svg>
                  Audit-ready
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-white font-code">Training records for ISO 27001, KVKK, and DORA audits</h2>
                <p className="mt-2 text-neutral-500 font-code">ISO 27001 <strong className="text-neutral-300">A.7.2.2</strong> requires evidence of security awareness training. KVKK personnel-training obligations require recorded proof. Our HR dashboard exports CSV per employee — dates, certificate names, pass/fail, verifiable URLs — everything an auditor asks for.</p>
              </div>
              <div className="rounded-xl border border-neutral-800 bg-[#0a0a0a] p-5 shadow-sm">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-emerald-400" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
                  </svg>
                  <span className="text-xs font-semibold uppercase tracking-wide text-neutral-500 font-code">From your dashboard</span>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-neutral-400 font-code">
                  {["Per-employee training history CSV","Cert URLs are publicly verifiable at certs.kiwidefence.com/verify","Skills gap report per team member"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Talk to Us + FAQ */}
          <section id="book-demo" className="grid grid-cols-1 gap-8 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <form className="space-y-3 rounded-2xl border border-neutral-800 bg-[#0a0a0a] p-6 shadow-sm">
                <div>
                  <h3 className="text-lg font-bold text-white font-code">Talk to us</h3>
                  <p className="text-xs text-neutral-500 font-code">For Scale plans, custom needs, or a walkthrough — 30 min &bull; online &bull; no obligation.</p>
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <input required placeholder="Full name" className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-white outline-none placeholder:text-neutral-600 focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 font-code" type="text" />
                  <input required placeholder="Company" className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-white outline-none placeholder:text-neutral-600 focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 font-code" type="text" />
                </div>
                <input required placeholder="Work email" className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-white outline-none placeholder:text-neutral-600 focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 font-code" type="email" />
                <select className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-white outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 font-code">
                  <option value="1-4">1&ndash;4 people</option>
                  <option value="5-15">5&ndash;15 people</option>
                  <option value="16-50">16&ndash;50 people</option>
                  <option value="50+">50+ people</option>
                </select>
                <textarea placeholder="Anything specific? (optional)" rows={3} className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-white outline-none placeholder:text-neutral-600 focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 font-code" />
                <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-neutral-200 disabled:opacity-60 font-code tracking-tight">Send message</button>
                <p className="text-center text-[11px] text-neutral-600 font-code">We reply within 24 hours from <strong className="text-neutral-400">besim@kiwidefence.com</strong>.</p>
              </form>
            </div>
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-bold tracking-tight text-white font-code">Frequently asked</h2>
              <div className="mt-4 space-y-6">
                <div>
                  <h3 className="mb-2 text-xs font-bold uppercase tracking-wider text-neutral-500 font-code">Seats &amp; credentials</h3>
                  <div className="divide-y divide-neutral-800 rounded-2xl border border-neutral-800 bg-[#0a0a0a] shadow-sm">
                    {[
                      { q: "Who buys, who uses?", a: "The company buys, you allocate seats to team members. The certificate is ALWAYS issued in the individual's name and lives on their LinkedIn. The company sees usage reports — who passed, which skills are weak." },
                      { q: "What happens if an employee leaves?", a: "You reclaim the seat from the Members panel and invite someone new. The certificates they already earned stay with them — that's how a fair credential system works." },
                      { q: "Need more than 5 seats — is Starter enough?", a: "Go with Growth. 15 seats + all expert lab certs unlocked. In Starter, hands-on certs like CIR / CMP / CWAE are locked; only MC + Fundamentals are open." },
                    ].map((faq, i) => (
                      <details key={i} className="group px-5 py-4">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-neutral-200 font-code">
                          <span>{faq.q}</span>
                          <span className="text-lg leading-none text-neutral-600 transition-transform group-open:rotate-45">+</span>
                        </summary>
                        <p className="mt-2 text-sm leading-relaxed text-neutral-500 font-code">{faq.a}</p>
                      </details>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-xs font-bold uppercase tracking-wider text-neutral-500 font-code">Labs, billing, SSO</h3>
                  <div className="divide-y divide-neutral-800 rounded-2xl border border-neutral-800 bg-[#0a0a0a] shadow-sm">
                    {[
                      { q: "What is a lab credit and when is it consumed?", a: "One credit is debited from the seat owner when a hands-on cert exam is started. Re-entering the same exam within 24 hours counts as the same session — no new charge. Starter has 25/year, Growth 75/year. Top-ups available on request." },
                      { q: "How does billing work?", a: "Starter and Growth are annual, paid upfront via Paddle. Scale gets a custom MSA + invoicing. Paddle is the merchant of record — handles tax + invoicing in your country." },
                      { q: "Do you support SSO?", a: "Today: Google OAuth and email/password. SAML / OIDC is on the Scale roadmap — planned Q3 2026." },
                      { q: "Can I still book a demo before buying?", a: "Absolutely — send us the form; we reply within 24 hours with a 30-minute Zoom invite. If needed, we grant a test-org so you can walk through the platform live." },
                    ].map((faq, i) => (
                      <details key={i} className="group px-5 py-4">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-neutral-200 font-code">
                          <span>{faq.q}</span>
                          <span className="text-lg leading-none text-neutral-600 transition-transform group-open:rotate-45">+</span>
                        </summary>
                        <p className="mt-2 text-sm leading-relaxed text-neutral-500 font-code">{faq.a}</p>
                      </details>
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-6 text-sm text-neutral-500 font-code">
                Prefer email? <a href="mailto:besim@kiwidefence.com" className="font-semibold text-neutral-400 hover:text-white transition-colors">besim@kiwidefence.com</a> &middot; <a className="font-semibold text-neutral-400 hover:text-white transition-colors" href="/certificates">See the full cert catalog &rarr;</a>
              </p>
            </div>
          </section>
        </div>
    </AppShell>
  )
}
