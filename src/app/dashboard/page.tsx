import AppShell from "@/components/app-shell"
import Link from "next/link"

const benefits = [
  {
    title: "Validate Real Skills",
    desc: "Prove your hands-on expertise with practical, lab-based certification exams - not just theory.",
    icon: "shield-check",
  },
  {
    title: "Advance Your Career",
    desc: "Stand out in the job market with industry-recognized certifications that employers trust.",
    icon: "trending-up",
  },
  {
    title: "Open New Doors",
    desc: "Unlock higher-paying roles and new career paths across diverse technology domains.",
    icon: "briefcase",
  },
  {
    title: "Focused Expertise",
    desc: "Master specific skill sets with targeted exams designed for real-world challenges.",
    icon: "target",
  },
]

const certifications = [
  {
    title: "GRC Fundamentals",
    abbr: null,
    level: "Beginner",
    gradient: "from-emerald-600 to-teal-700",
    levelBg: "bg-green-500",
    duration: "1 saat",
    tasks: "6 Tasks",
    points: "55 pts",
    free: true,
    price: null,
    originalPrice: null,
    discount: null,
    href: "/certificates/0f5b7716-cbc6-54b7-8200-f5c1af7eb5fa",
    ringColor: "hover:ring-emerald-400/40",
  },
  {
    title: "Certified Kubernetes Security Engineer",
    abbr: "CKSE",
    level: "Expert",
    gradient: "from-violet-600 to-purple-800",
    levelBg: "bg-purple-500",
    duration: "8 saat",
    tasks: "7 Tasks",
    points: "100 pts",
    free: false,
    price: "$349",
    originalPrice: "$449",
    discount: "22% OFF",
    href: "/certificates/a6465e91-f6ef-54b3-a81e-377113c60fc5",
    ringColor: "hover:ring-violet-400/40",
  },
  {
    title: "Wireless Network Penetration Testing",
    abbr: "WPT",
    level: "Expert",
    gradient: "from-violet-600 to-purple-800",
    levelBg: "bg-purple-500",
    duration: "3 saat",
    tasks: "14 Tasks",
    points: "49 pts",
    free: false,
    price: "$100",
    originalPrice: "$399",
    discount: "75% OFF",
    href: "/certificates/81e1d57c-2d17-5e89-9623-249fe986b162",
    ringColor: "hover:ring-violet-400/40",
  },
  {
    title: "Practical IoT Hacking",
    abbr: "PIH",
    level: "Expert",
    gradient: "from-violet-600 to-purple-800",
    levelBg: "bg-purple-500",
    duration: "5 saat",
    tasks: "10 Tasks",
    points: "69 pts",
    free: false,
    price: "$149",
    originalPrice: "$249",
    discount: "40% OFF",
    href: "/certificates/038b8c8e-4e36-5550-83b7-b2980b922175",
    ringColor: "hover:ring-violet-400/40",
  },
  {
    title: "Certified DevSecOps Manager",
    abbr: "CDSM",
    level: "Expert",
    gradient: "from-violet-600 to-purple-800",
    levelBg: "bg-purple-500",
    duration: "3s 30dk",
    tasks: "10 Tasks",
    points: "150 pts",
    free: false,
    price: "$199",
    originalPrice: "$349",
    discount: "43% OFF",
    href: "/certificates/a3ce8119-eef0-57dc-b4d3-2c93fc858c96",
    ringColor: "hover:ring-violet-400/40",
  },
  {
    title: "Certified Ethical Pentester",
    abbr: "CEP",
    level: "Beginner",
    gradient: "from-emerald-600 to-teal-700",
    levelBg: "bg-green-500",
    duration: "4 saat",
    tasks: "7 Tasks",
    points: "53 pts",
    free: false,
    price: "$99",
    originalPrice: "$149",
    discount: "34% OFF",
    href: "/certificates/b01cd9e5-7bca-5653-9085-de2646413ba7",
    ringColor: "hover:ring-emerald-400/40",
  },
  {
    title: "DevSecOps Engineer",
    abbr: "DSE",
    level: "Expert",
    gradient: "from-violet-600 to-purple-800",
    levelBg: "bg-purple-500",
    duration: "2s 30dk",
    tasks: "15 Tasks",
    points: "138 pts",
    free: false,
    price: "$249",
    originalPrice: "$399",
    discount: "38% OFF",
    href: "/certificates/e3f66706-73a0-51e1-a9d5-96507fb01041",
    ringColor: "hover:ring-violet-400/40",
  },
]



function BenefitIcon({ name }: { name: string }) {
  const paths: Record<string, React.ReactNode> = {
    "shield-check": (
      <>
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    "trending-up": (
      <>
        <path d="M16 7h6v6" />
        <path d="m22 7-8.5 8.5-5-5L2 17" />
      </>
    ),
    briefcase: (
      <>
        <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        <rect width="20" height="14" x="2" y="6" rx="2" />
      </>
    ),
    target: (
      <>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </>
    ),
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-neutral-400 group-hover:text-white transition-colors duration-300" aria-hidden="true">
      {paths[name]}
    </svg>
  )
}

export default function DashboardPage() {
  return (
    <AppShell>
      <div className="space-y-12">
          {/* Hero */}
          <div className="relative bg-gradient-to-r from-black via-[#0a0a0a] to-[#141414] rounded-2xl overflow-hidden border border-neutral-800">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
              <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-white rounded-full blur-2xl translate-y-1/2" />
            </div>
            <div className="relative flex items-center justify-between px-6 sm:px-10 py-8 sm:py-12 overflow-hidden">
              <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`, backgroundSize: '128px 128px', opacity: 0.2 }} />
              <div className="max-w-lg">
                <h1 className="text-2xl sm:text-4xl font-extrabold text-white mb-3 tracking-tight font-code">Prove your skills</h1>
                <p className="text-neutral-400 text-base sm:text-lg mb-1 font-code">Skip the training. Take the exam.</p>
                <p className="text-neutral-400 text-base sm:text-lg mb-6 font-code">Show what you can do.</p>
                <Link
                  href="/certificates"
                  className="inline-flex items-center gap-2 bg-white text-black hover:bg-neutral-200 px-6 py-3 rounded-lg font-bold text-sm transition-colors font-code tracking-tight"
                >
                  EXPLORE TOP CERTIFICATES
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="hidden lg:block">
                <div className="relative bg-white/[0.03] rounded-xl p-6 border border-neutral-800 overflow-hidden">
                  <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`, backgroundSize: '128px 128px', opacity: 0.2 }} />
                  <div className="relative z-10 bg-neutral-900 rounded-lg p-4 w-56">
                    <p className="text-xs font-bold text-neutral-500 uppercase tracking-wider text-center font-code">Certificate</p>
                    <p className="text-sm font-bold text-neutral-300 text-center font-code">OF COMPLETION</p>
                    <div className="mt-3 w-16 h-0.5 bg-neutral-700 mx-auto" />
                    <div className="mt-2 w-12 h-0.5 bg-neutral-700 mx-auto" />
                    <div className="h-3 mx-auto mt-3 text-center text-[8px] font-bold text-neutral-500 uppercase tracking-wider font-code">Kiwi Defence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div>
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight font-code">
                What&apos;s the Benefit of{" "}
                <span className="line-through decoration-2 decoration-neutral-600 text-neutral-500">Cyber Security</span> Certifications?
              </h2>
              <p className="mt-3 text-neutral-500 max-w-2xl mx-auto text-base font-code">
                Our certification exams go beyond a single domain. Validate your expertise across diverse technology fields with practical, hands-on assessments.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="group bg-[#0a0a0a] rounded-xl border border-neutral-800 p-6 hover:border-neutral-600 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center mb-4 group-hover:bg-neutral-700 group-hover:scale-110 transition-all duration-300">
                    <BenefitIcon name={b.icon} />
                  </div>
                  <h3 className="font-bold text-white mb-2 font-code">{b.title}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed font-code">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>



          {/* Popular Certificate Exams */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white tracking-tight font-code">Popular Certificate Exams</h2>
              <Link
                href="/certificates"
                className="text-sm font-semibold text-neutral-400 hover:text-white transition-colors flex items-center gap-1 font-code"
              >
                View All
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert) => (
                <Link
                  key={cert.href}
                  href={cert.href}
                  className={`group relative bg-[#0a0a0a] rounded-xl shadow-sm border border-neutral-800 overflow-hidden flex flex-col hover:shadow-lg hover:ring-2 ${cert.ringColor} hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer`}
                >
                  <div className={`relative h-36 bg-gradient-to-br ${cert.gradient} overflow-hidden`}>
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/g%3E%3C/svg%3E")` }} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white" aria-hidden="true">
                          <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
                          <circle cx="12" cy="8" r="6" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className={`inline-flex items-center rounded-md font-semibold text-white ${cert.levelBg} px-2.5 py-0.5 text-xs font-code`}>{cert.level}</span>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-yellow-400 text-yellow-900 text-[10px] font-bold rounded-md uppercase tracking-wide font-code">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 fill-current" aria-hidden="true">
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                        </svg>
                        Popular
                      </span>
                    </div>
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <div className="flex items-start gap-2 mb-1">
                      <h3 className="font-bold text-white text-base leading-tight group-hover:text-neutral-300 transition-colors line-clamp-1 flex-1 font-code">{cert.title}</h3>
                      {cert.abbr && (
                        <span className="shrink-0 px-1.5 py-0.5 bg-neutral-800 text-neutral-400 text-[10px] font-bold rounded tracking-wide font-code">{cert.abbr}</span>
                      )}
                    </div>
                    <p className="text-sm text-neutral-500 line-clamp-2 mb-3 leading-relaxed flex-1 font-code">Hands-on certification exam in {cert.title.toLowerCase()}.</p>
                    <div className="flex items-center gap-3 text-xs text-neutral-600 mb-4 font-code">
                      <span className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" aria-hidden="true">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 6v6l4 2" />
                        </svg>
                        {cert.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" aria-hidden="true">
                          <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
                          <path d="M14 2v5a1 1 0 0 0 1 1h5" />
                          <path d="M10 9H8" />
                          <path d="M16 13H8" />
                          <path d="M16 17H8" />
                        </svg>
                        {cert.tasks}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" aria-hidden="true">
                          <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
                        </svg>
                        {cert.points}
                      </span>
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t border-neutral-800">
                      {cert.free ? (
                        <span className="text-sm font-semibold text-emerald-400 px-2 py-0.5 rounded font-code">Free</span>
                      ) : (
                        <span className="flex items-baseline gap-2">
                          <span className="text-lg font-bold text-white font-code">{cert.price}</span>
                          <span className="text-sm text-neutral-600 line-through font-code">{cert.originalPrice}</span>
                          <span className="text-[10px] font-semibold text-neutral-300 bg-neutral-800 px-1.5 py-0.5 rounded font-code">{cert.discount}</span>
                        </span>
                      )}
                      <span className="text-sm font-semibold text-neutral-300 border border-neutral-700 hover:bg-white hover:text-black hover:border-white px-3 py-1.5 rounded-lg transition-all duration-200 font-code">
                        Explore &rarr;
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
    </AppShell>
  )
}
