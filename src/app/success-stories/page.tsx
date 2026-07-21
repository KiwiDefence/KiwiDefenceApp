import type { Metadata } from "next"
import AppShell from "@/components/app-shell"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Success Stories | Kiwi Defence",
  description:
    "See how cybersecurity professionals achieved their goals with Kiwi Defence certifications.",
}

const stories = [
  {
    initials: "YE",
    name: "Yiğit Erbil",
    role: "Senior Cyber Threat Intelligence R&D Analyst",
    company: "ThreatMon",
    quote:
      "Kiwi Defence gave my focus a shape — and my career the traction I needed to get here.",
    title: "From Kiwi Defence to Senior CTI at ThreatMon",
    body: "Yiğit built his cybersecurity foundation with Kiwi Defence. The Cyber Threat Intelligence certification gave him a structured way to demonstrate his focus, articulate his skills, and stand apart in a competitive field.\n\nToday he serves as Senior Cyber Threat Intelligence R&D Analyst at ThreatMon — leading dark-web tracking, threat-actor attribution, and threat-feed R&D. Alongside his role he runs his own research blog at quadsec.hashnode.dev, contributing back to the community that shaped him.\n\nKiwi Defence did not just add a line to Yiğit's resume — it accelerated the trajectory that took him from learner to senior researcher on a leading CTI platform.",
    cert: "Cyber Threat Intelligence",
    certPct: null,
  },
  {
    initials: "US",
    name: "Umut Sağlam",
    role: "Cyber Threat Intelligence Analyst",
    company: "ThreatMon",
    quote:
      "Kiwi Defence SOC L1 and CTI Analyst paths build the skills and confidence needed to start a strong cybersecurity career.",
    title: "New Job",
    body: "The SOC Analyst L1 and CTI Analyst career paths is a well-structured journey that builds a strong cybersecurity foundation through hands-on labs and real-world scenarios. It covers essential topics like incident response and log analysis while using industry-standard tools. I highly recommend it to anyone looking to start a career in SOC or CTI and develop practical security skills.",
    cert: "SOC Analyst L1",
    certPct: "100%",
  },
  {
    initials: "SK",
    name: "Samet KAYA",
    role: "Threat Monitoring Assistant Specialist",
    company: "KoçSistem",
    quote:
      "Kiwi Defence SOC L1 certification is a strong step in my cybersecurity career journey.",
    title: "New Job",
    body: "Completing the Kiwi Defence SOC L1 Analyst training strengthened both my technical knowledge and practical skills through hands-on experience. As I begin my journey at Secure Future Information Technologies, I'm excited to apply what I've learned and continue growing in cybersecurity.\n\n\"Learning by doing is the strongest foundation for a cybersecurity career.\"",
    cert: "SOC Analyst L1",
    certPct: "100%",
  },
  {
    initials: "SÜ",
    name: "Serger ÜRGEN",
    role: "SOC Analyst",
    company: "Türk Telekom",
    quote:
      "Proud to complete the Kiwi Defence SOC Analyst L1 certification and start my journey as a SOC Analyst at Türk Telekom!",
    title: "New Job",
    body: "I'm excited to share that I've completed the Kiwi Defence SOC Analyst L1 certification! The hands-on labs and real-world SOC exercises helped me strengthen my practical cybersecurity skills as I begin my journey as a SOC Analyst at Türk Telekom.",
    cert: "SOC Analyst",
    certPct: "100%",
  },
  {
    initials: "GŞ",
    name: "Gökhan Şensökür",
    role: "Kurucu",
    company: "Sibereum",
    quote:
      "CV'lere değil, gerçekten yaptığı işe bakmak istedik. Adayın hangi zafiyet zincirini kurabildiğini platformda gördük. Bugün ekibimizin kıdemli mühendislerinden biri, o platform üzerinden bize katıldı.",
    title: "Sibereum sızma testi ekibine Kiwi Defence üzerinden katıldı, bugün kıdemli",
    body: "Sibereum, sızma testi ekibine katılacak uzmanı Kiwi Defence HR modülüyle uygulamalı pentest sınavları (web exploit, Active Directory, network) + psikometrik test + soft skill değerlendirmesi ile ölçtü. Engin Aydoğan pentest kariyerinde ilk şansını platformdaki kurumsal ağ üzerinden yakaladı, sahada biriktirdiği deneyimle bugün Kıdemli Siber Güvenlik Uzmanı olarak görev yapıyor.",
    cert: null,
    certPct: null,
    blogHref: "/blog/sibereum-hr-modulu-vaka-analizi",
    blogLabel: "Vaka analizini okuyun",
  },
]

export default function SuccessStoriesPage() {
  return (
    <AppShell>
      <div className="space-y-8">
          {/* Hero */}
          <section className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-gradient-to-r from-black via-[#0a0a0a] to-[#141414] py-14 px-6">
            <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`, backgroundSize: '128px 128px', opacity: 0.2 }} />
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
              <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-white rounded-full blur-2xl translate-y-1/2" />
            </div>
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/[0.05] backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-yellow-400" aria-hidden="true">
                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                </svg>
                <span className="text-sm text-white/90 font-medium font-code">Real stories from real professionals</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3 font-code">Success Stories</h1>
              <p className="text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto font-code">
                See how cybersecurity professionals achieved their goals with Kiwi Defence certifications.
              </p>
            </div>
          </section>

          {/* Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {stories.map((s) => (
              <article key={s.initials} className="bg-[#0a0a0a] rounded-2xl border border-neutral-800 hover:border-neutral-700 transition-colors overflow-hidden flex flex-col">
                {/* Author */}
                <div className="p-6 pb-4 flex items-center gap-4">
                  <div className="w-14 h-14 shrink-0 rounded-full bg-neutral-800 text-neutral-300 flex items-center justify-center font-bold text-lg ring-2 ring-neutral-700 font-code">
                    {s.initials}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-white truncate font-code">{s.name}</h3>
                    <p className="text-sm text-neutral-500 truncate font-code">{s.role}</p>
                    <p className="text-xs text-neutral-600 flex items-center gap-1 mt-0.5 font-code">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3" aria-hidden="true">
                        <path d="M10 12h4" />
                        <path d="M10 8h4" />
                        <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
                        <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" />
                        <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
                      </svg>
                      {s.company}
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <div className="px-6 pb-3">
                  <div className="flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-neutral-600 flex-shrink-0 mt-0.5" aria-hidden="true">
                      <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                      <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                    </svg>
                    <p className="italic text-neutral-500 text-sm line-clamp-2 font-code">&ldquo;{s.quote}&rdquo;</p>
                  </div>
                </div>

                {/* Body */}
                <div className="px-6 pb-4 flex-1">
                  <h4 className="font-bold text-white mb-2 font-code">{s.title}</h4>
                  <p className="text-sm text-neutral-400 leading-relaxed whitespace-pre-line font-code">{s.body}</p>
                </div>

                {/* Cert Badge or Blog Link */}
                <div className="px-6 pb-4">
                  {s.cert ? (
                    <div className="inline-flex items-center gap-2 bg-white/[0.05] text-neutral-300 rounded-lg px-3 py-2 text-sm font-medium">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                        <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
                        <circle cx="12" cy="8" r="6" />
                      </svg>
                      <span>{s.cert}</span>
                      {s.certPct && (
                        <span className="ml-1 bg-white/[0.08] rounded px-1.5 py-0.5 text-xs font-semibold">{s.certPct}</span>
                      )}
                    </div>
                  ) : s.blogHref ? (
                    <Link
                      href={s.blogHref}
                      className="inline-flex items-center gap-2 bg-white hover:bg-neutral-200 text-black text-sm font-medium px-4 py-2.5 rounded-lg transition-colors font-code"
                    >
                      {s.blogLabel}
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </Link>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
    </AppShell>
  )
}
