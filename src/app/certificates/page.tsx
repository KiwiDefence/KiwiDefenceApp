import AppShell from "@/components/app-shell"
import Link from "next/link"

const bundles = [
  { title: "Pentester Master", certCount: 5, originalPrice: 796, price: 349, savePercent: 56, saveAmount: 447, href: "/bundles/pentester-master" },
  { title: "Blue Team Starter", certCount: 2, originalPrice: 78, price: 49, savePercent: 37, saveAmount: 29, href: "/bundles/blue-team-starter" },
  { title: "Blue Team Master", certCount: 3, originalPrice: 283, price: 179, savePercent: 37, saveAmount: 104, href: "/bundles/blue-team-master" },
]

const levelColors: Record<string, string> = {
  Expert: "bg-purple-500", Foundational: "bg-neutral-500", Advanced: "bg-orange-500",
  Beginner: "bg-green-500", Intermediate: "bg-blue-500",
}

interface Certificate {
  title: string; code: string | null; level: string; duration: string
  tasks: number; points: number; price: number | null; originalPrice: number | null
  free: boolean; comingSoon: boolean; popular: boolean
  fromGrad: string; toGrad: string; ringColor: string; href: string
}

const certificates: Certificate[] = [
  { title: "Application Security Manager", code: "APPSEC-M", level: "Expert", duration: "1s 55dk", tasks: 11, points: 98, price: 199, originalPrice: 299, free: false, comingSoon: false, popular: false, fromGrad: "from-violet-600", toGrad: "to-purple-800", ringColor: "hover:ring-violet-400/40", href: "/certificates/application-security-manager" },
  { title: "Bug Bounty Fundamentals", code: null, level: "Foundational", duration: "1s 30dk", tasks: 7, points: 100, price: 0, originalPrice: null, free: true, comingSoon: false, popular: false, fromGrad: "from-neutral-700", toGrad: "to-neutral-900", ringColor: "hover:ring-neutral-400/40", href: "/certificates/bug-bounty-fundamentals" },
  { title: "Certified Bug Bounty Hunter", code: "CBBH", level: "Advanced", duration: "4 saat", tasks: 7, points: 121, price: 249, originalPrice: 349, free: false, comingSoon: true, popular: false, fromGrad: "from-neutral-700", toGrad: "to-neutral-900", ringColor: "hover:ring-neutral-400/40", href: "" },
  { title: "Certified Container Native Pentester", code: "CCNP", level: "Expert", duration: "8 saat", tasks: 7, points: 100, price: 349, originalPrice: 449, free: false, comingSoon: false, popular: false, fromGrad: "from-violet-600", toGrad: "to-purple-800", ringColor: "hover:ring-violet-400/40", href: "/certificates/certified-container-native-pentester" },
  { title: "Certified DevSecOps Manager", code: "CDSM", level: "Expert", duration: "3s 30dk", tasks: 10, points: 150, price: 199, originalPrice: 349, free: false, comingSoon: false, popular: true, fromGrad: "from-violet-600", toGrad: "to-purple-800", ringColor: "hover:ring-violet-400/40", href: "/certificates/certified-devsecops-manager" },
  { title: "Certified Digital Forensics Analyst", code: "CDFA", level: "Intermediate", duration: "4 saat", tasks: 7, points: 101, price: 85, originalPrice: 249, free: false, comingSoon: true, popular: false, fromGrad: "from-amber-600", toGrad: "to-orange-700", ringColor: "hover:ring-amber-400/40", href: "" },
  { title: "Certified Docker Foundations", code: "CDF", level: "Beginner", duration: "1s 30dk", tasks: 8, points: 100, price: 59, originalPrice: 99, free: false, comingSoon: true, popular: false, fromGrad: "from-neutral-700", toGrad: "to-neutral-900", ringColor: "hover:ring-neutral-400/40", href: "" },
  { title: "Certified Docker Security Engineer", code: "CDSE", level: "Expert", duration: "8 saat", tasks: 7, points: 100, price: 299, originalPrice: 399, free: false, comingSoon: true, popular: false, fromGrad: "from-violet-600", toGrad: "to-purple-800", ringColor: "hover:ring-violet-400/40", href: "" },
  { title: "Certified Ethical Pentester", code: "CEP", level: "Beginner", duration: "4 saat", tasks: 7, points: 53, price: 99, originalPrice: 149, free: false, comingSoon: false, popular: true, fromGrad: "from-emerald-600", toGrad: "to-teal-700", ringColor: "hover:ring-emerald-400/40", href: "/certificates/certified-ethical-pentester" },
  { title: "Certified Incident Responder", code: "CIR", level: "Intermediate", duration: "4 saat", tasks: 7, points: 101, price: 99, originalPrice: 249, free: false, comingSoon: false, popular: false, fromGrad: "from-amber-600", toGrad: "to-orange-700", ringColor: "hover:ring-amber-400/40", href: "/certificates/certified-incident-responder" },
  { title: "Certified Junior Web Pentester", code: "CJWP", level: "Beginner", duration: "3 saat", tasks: 6, points: 58, price: 49, originalPrice: 146, free: false, comingSoon: false, popular: false, fromGrad: "from-emerald-600", toGrad: "to-teal-700", ringColor: "hover:ring-emerald-400/40", href: "/certificates/certified-junior-web-pentester" },
  { title: "Certified Kubernetes Security Engineer", code: "CKSE", level: "Expert", duration: "8 saat", tasks: 7, points: 100, price: 349, originalPrice: 449, free: false, comingSoon: false, popular: true, fromGrad: "from-violet-600", toGrad: "to-purple-800", ringColor: "hover:ring-violet-400/40", href: "/certificates/certified-kubernetes-security-engineer" },
  { title: "Certified Mobile Application Pentester", code: "CMP", level: "Advanced", duration: "4 saat", tasks: 10, points: 133, price: 249, originalPrice: 450, free: false, comingSoon: false, popular: false, fromGrad: "from-neutral-700", toGrad: "to-neutral-900", ringColor: "hover:ring-neutral-400/40", href: "/certificates/certified-mobile-application-pentester" },
  { title: "Certified Mobile Security Analyst", code: "CMSA", level: "Intermediate", duration: "2 saat", tasks: 0, points: 0, price: 99, originalPrice: 199, free: false, comingSoon: false, popular: false, fromGrad: "from-neutral-700", toGrad: "to-neutral-900", ringColor: "hover:ring-neutral-400/40", href: "/certificates/certified-mobile-security-analyst" },
  { title: "Certified Network Pentester", code: "CNP", level: "Intermediate", duration: "4 saat", tasks: 7, points: 101, price: 99, originalPrice: 249, free: false, comingSoon: true, popular: false, fromGrad: "from-neutral-700", toGrad: "to-neutral-900", ringColor: "hover:ring-neutral-400/40", href: "" },
  { title: "Certified Radio Hacker", code: "CRH", level: "Advanced", duration: "4 saat", tasks: 7, points: 90, price: 249, originalPrice: 349, free: false, comingSoon: false, popular: false, fromGrad: "from-neutral-700", toGrad: "to-neutral-900", ringColor: "hover:ring-neutral-400/40", href: "/certificates/certified-radio-hacker" },
  { title: "Certified SCADA Pentester", code: "CSPT", level: "Expert", duration: "72 saat", tasks: 7, points: 150, price: 699, originalPrice: 999, free: false, comingSoon: true, popular: false, fromGrad: "from-violet-600", toGrad: "to-purple-800", ringColor: "hover:ring-violet-400/40", href: "" },
  { title: "Certified Threat Intelligence Expert", code: "CTI-X", level: "Advanced", duration: "5 saat", tasks: 7, points: 101, price: 99, originalPrice: 249, free: false, comingSoon: false, popular: false, fromGrad: "from-neutral-700", toGrad: "to-neutral-900", ringColor: "hover:ring-neutral-400/40", href: "/certificates/certified-threat-intelligence-expert" },
  { title: "Certified Web Application Exploiter", code: "CWAE", level: "Advanced", duration: "5 saat", tasks: 7, points: 101, price: 249, originalPrice: 549, free: false, comingSoon: false, popular: false, fromGrad: "from-rose-600", toGrad: "to-red-800", ringColor: "hover:ring-rose-400/40", href: "/certificates/certified-web-application-exploiter" },
  { title: "Cyber Pre-Sales Fundamentals", code: "CPSF", level: "Beginner", duration: "1 saat", tasks: 9, points: 120, price: 9, originalPrice: 29, free: false, comingSoon: false, popular: false, fromGrad: "from-emerald-600", toGrad: "to-teal-700", ringColor: "hover:ring-emerald-400/40", href: "/certificates/cyber-pre-sales-fundamentals" },
  { title: "Cyber Threat Intelligence Analyst", code: "CTI", level: "Expert", duration: "1s 30dk", tasks: 11, points: 63, price: 29, originalPrice: 49, free: false, comingSoon: false, popular: false, fromGrad: "from-violet-600", toGrad: "to-purple-800", ringColor: "hover:ring-violet-400/40", href: "/certificates/cyber-threat-intelligence-analyst" },
  { title: "Cybersecurity Fundamentals", code: "CSF", level: "Beginner", duration: "1s 30dk", tasks: 11, points: 80, price: 0, originalPrice: null, free: true, comingSoon: false, popular: false, fromGrad: "from-emerald-600", toGrad: "to-teal-700", ringColor: "hover:ring-emerald-400/40", href: "/certificates/cybersecurity-fundamentals" },
  { title: "Detection Engineering Fundamentals", code: "DEF", level: "Intermediate", duration: "2 saat", tasks: 8, points: 98, price: 0, originalPrice: null, free: true, comingSoon: false, popular: false, fromGrad: "from-amber-600", toGrad: "to-orange-700", ringColor: "hover:ring-amber-400/40", href: "/certificates/detection-engineering-fundamentals" },
  { title: "DevSecOps Engineer", code: "DSE", level: "Expert", duration: "2s 30dk", tasks: 15, points: 138, price: 249, originalPrice: 399, free: false, comingSoon: false, popular: true, fromGrad: "from-violet-600", toGrad: "to-purple-800", ringColor: "hover:ring-violet-400/40", href: "/certificates/devsecops-engineer" },
  { title: "DevSecOps Fundamentals", code: "DSOF", level: "Beginner", duration: "1s 30dk", tasks: 7, points: 100, price: 0, originalPrice: null, free: true, comingSoon: false, popular: false, fromGrad: "from-emerald-600", toGrad: "to-teal-700", ringColor: "hover:ring-emerald-400/40", href: "/certificates/devsecops-fundamentals" },
  { title: "Frontline Cyber Defender", code: "FCD", level: "Beginner", duration: "45 dk", tasks: 6, points: 35, price: 0, originalPrice: null, free: true, comingSoon: false, popular: false, fromGrad: "from-neutral-700", toGrad: "to-neutral-900", ringColor: "hover:ring-neutral-400/40", href: "/certificates/frontline-cyber-defender" },
  { title: "GRC Auditor", code: "GRCA", level: "Intermediate", duration: "1s 30dk", tasks: 13, points: 120, price: 99, originalPrice: 199, free: false, comingSoon: false, popular: false, fromGrad: "from-amber-600", toGrad: "to-orange-700", ringColor: "hover:ring-amber-400/40", href: "/certificates/grc-auditor" },
  { title: "GRC Fundamentals", code: null, level: "Beginner", duration: "1 saat", tasks: 6, points: 55, price: 0, originalPrice: null, free: true, comingSoon: false, popular: true, fromGrad: "from-emerald-600", toGrad: "to-teal-700", ringColor: "hover:ring-emerald-400/40", href: "/certificates/grc-fundamentals" },
  { title: "Information Security Manager", code: "ISM", level: "Expert", duration: "1s 30dk", tasks: 11, points: 83, price: 0, originalPrice: null, free: true, comingSoon: false, popular: false, fromGrad: "from-violet-600", toGrad: "to-purple-800", ringColor: "hover:ring-violet-400/40", href: "/certificates/information-security-manager" },
  { title: "Junior Fraud Analyst", code: "JFA", level: "Beginner", duration: "1s 30dk", tasks: 11, points: 63, price: 0, originalPrice: null, free: true, comingSoon: true, popular: false, fromGrad: "from-emerald-600", toGrad: "to-teal-700", ringColor: "hover:ring-emerald-400/40", href: "" },
  { title: "Junior Radio Hacker", code: "JRH", level: "Beginner", duration: "1s 30dk", tasks: 6, points: 100, price: 0, originalPrice: null, free: true, comingSoon: false, popular: false, fromGrad: "from-emerald-600", toGrad: "to-teal-700", ringColor: "hover:ring-emerald-400/40", href: "/certificates/junior-radio-hacker" },
  { title: "Junior SOC Analyst", code: "JSA", level: "Beginner", duration: "4s 5dk", tasks: 4, points: 85, price: 49, originalPrice: 149, free: false, comingSoon: false, popular: false, fromGrad: "from-neutral-700", toGrad: "to-neutral-900", ringColor: "hover:ring-neutral-400/40", href: "/certificates/junior-soc-analyst" },
  { title: "LLM Hacking Fundamentals", code: "LLMF", level: "Beginner", duration: "1 saat", tasks: 8, points: 55, price: 0, originalPrice: null, free: true, comingSoon: false, popular: false, fromGrad: "from-emerald-600", toGrad: "to-teal-700", ringColor: "hover:ring-emerald-400/40", href: "/certificates/llm-hacking-fundamentals" },
  { title: "OSINT Fundamentals", code: "OSINTF", level: "Beginner", duration: "1s 15dk", tasks: 9, points: 65, price: 0, originalPrice: null, free: true, comingSoon: false, popular: false, fromGrad: "from-emerald-600", toGrad: "to-teal-700", ringColor: "hover:ring-emerald-400/40", href: "/certificates/osint-fundamentals" },
  { title: "Practical IoT Hacking", code: "PIH", level: "Expert", duration: "5 saat", tasks: 10, points: 69, price: 149, originalPrice: 249, free: false, comingSoon: false, popular: true, fromGrad: "from-violet-600", toGrad: "to-purple-800", ringColor: "hover:ring-violet-400/40", href: "/certificates/practical-iot-hacking" },
  { title: "Professional English for Cybersecurity", code: "PEC", level: "Intermediate", duration: "1 saat", tasks: 6, points: 40, price: 0, originalPrice: null, free: true, comingSoon: false, popular: false, fromGrad: "from-amber-600", toGrad: "to-orange-700", ringColor: "hover:ring-amber-400/40", href: "/certificates/professional-english-for-cybersecurity" },
  { title: "SCADA/ICS Fundamentals", code: "CSCF", level: "Beginner", duration: "1s 30dk", tasks: 7, points: 100, price: 0, originalPrice: null, free: true, comingSoon: false, popular: false, fromGrad: "from-emerald-600", toGrad: "to-teal-700", ringColor: "hover:ring-emerald-400/40", href: "/certificates/scada-ics-fundamentals" },
  { title: "Secure Code Development", code: "SCD", level: "Intermediate", duration: "1s 30dk", tasks: 11, points: 63, price: 0, originalPrice: null, free: true, comingSoon: false, popular: false, fromGrad: "from-amber-600", toGrad: "to-orange-700", ringColor: "hover:ring-amber-400/40", href: "/certificates/secure-code-development" },
  { title: "Security Awareness for Everyone", code: "SAFE", level: "Beginner", duration: "1 saat", tasks: 6, points: 55, price: 0, originalPrice: null, free: true, comingSoon: false, popular: false, fromGrad: "from-emerald-600", toGrad: "to-teal-700", ringColor: "hover:ring-emerald-400/40", href: "/certificates/security-awareness-for-everyone" },
  { title: "SOC Fundamentals", code: "SOCF", level: "Beginner", duration: "1 saat", tasks: 9, points: 100, price: 0, originalPrice: null, free: true, comingSoon: false, popular: false, fromGrad: "from-emerald-600", toGrad: "to-teal-700", ringColor: "hover:ring-emerald-400/40", href: "/certificates/soc-fundamentals" },
  { title: "Wireless Network Penetration Testing", code: "WPT", level: "Expert", duration: "3 saat", tasks: 14, points: 49, price: 100, originalPrice: 399, free: false, comingSoon: false, popular: true, fromGrad: "from-violet-600", toGrad: "to-purple-800", ringColor: "hover:ring-violet-400/40", href: "/certificates/wireless-network-penetration-testing" },
]

function CertCard({ cert }: { cert: Certificate }) {
  const discPct = cert.originalPrice ? Math.round(((cert.originalPrice - cert.price!) / cert.originalPrice) * 100) : 0

  const cardBody = (
    <>
      <div className={`relative h-36 bg-gradient-to-br ${cert.fromGrad} ${cert.toGrad} overflow-hidden`}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/g%3E%3C/svg%3E")` }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award w-8 h-8 text-white" aria-hidden="true">
              <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" /><circle cx="12" cy="8" r="6" />
            </svg>
          </div>
        </div>
        <div className="absolute top-3 right-3">
          <span className={`inline-flex items-center rounded-md font-semibold text-white ${levelColors[cert.level]} px-2.5 py-0.5 text-xs font-code`}>{cert.level}</span>
        </div>
        {cert.popular && (
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-yellow-400 text-yellow-900 text-[10px] font-bold rounded-md uppercase tracking-wide font-code">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-3 h-3 fill-current" aria-hidden="true">
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
              </svg>
              Popular
            </span>
          </div>
        )}
        {cert.comingSoon && (
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-amber-400 text-amber-900 text-[10px] font-bold rounded-md uppercase tracking-wide font-code">Coming Soon</span>
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-start gap-2 mb-1">
          <h3 className="font-bold text-white text-base leading-tight group-hover:text-neutral-300 transition-colors line-clamp-1 flex-1 font-code">{cert.title}</h3>
          {cert.code && <span className="shrink-0 px-1.5 py-0.5 bg-neutral-800 text-neutral-400 text-[10px] font-bold rounded tracking-wide font-code">{cert.code}</span>}
        </div>
        <div className="flex items-center gap-3 text-xs text-neutral-600 mb-4 font-code">
          <div className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock w-3.5 h-3.5" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
            <span>{cert.duration}</span>
          </div>
          {cert.tasks > 0 && (
            <div className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text w-3.5 h-3.5" aria-hidden="true"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" /><path d="M14 2v5a1 1 0 0 0 1 1h5" /><path d="M10 9H8" /><path d="M16 13H8" /><path d="M16 17H8" /></svg>
              <span>{cert.tasks} Tasks</span>
            </div>
          )}
          {cert.points > 0 && (
            <div className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap w-3.5 h-3.5" aria-hidden="true"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" /></svg>
              <span>{cert.points} pts</span>
            </div>
          )}
        </div>
        <div className="flex items-center justify-between pt-3 border-t border-neutral-800 mt-auto">
          {cert.free ? (
            <span className="text-sm font-semibold text-emerald-400 px-2 py-0.5 rounded font-code">{cert.comingSoon ? "N/A" : "Free"}</span>
          ) : cert.price ? (
            <span className="flex items-baseline gap-2">
              <span className="text-lg font-bold text-white font-code">${cert.price}</span>
              {cert.originalPrice && <><span className="text-sm text-neutral-600 line-through font-code">${cert.originalPrice}</span><span className="text-[10px] font-semibold text-neutral-300 bg-neutral-800 px-1.5 py-0.5 rounded font-code">{discPct}% OFF</span></>}
            </span>
          ) : null}
          <span className={`text-sm font-semibold px-3 py-1.5 rounded-lg transition-all duration-200 border font-code ${!cert.comingSoon ? "text-neutral-300 border-neutral-700 hover:bg-white hover:text-black hover:border-white" : "text-neutral-600 border-neutral-800"}`}>
            {cert.comingSoon ? "Coming Soon" : "Explore \u2192"}
          </span>
        </div>
      </div>
    </>
  )

  if (cert.comingSoon) {
    return (
      <div className="group relative bg-[#0a0a0a] rounded-xl border border-neutral-800 overflow-hidden flex flex-col transition-all duration-300 ease-out opacity-60">
        {cardBody}
      </div>
    )
  }

  return (
    <Link href={cert.href} className={`group relative bg-[#0a0a0a] rounded-xl border border-neutral-800 overflow-hidden flex flex-col hover:shadow-lg hover:ring-2 ${cert.ringColor} hover:-translate-y-1 cursor-pointer transition-all duration-300 ease-out`}>
      {cardBody}
    </Link>
  )
}

const tracks = ["Blue Team", "Red Team", "AppSec", "DevSecOps", "Governance", "Specialty", "Offensive", "Operations"]
const priceFilters = ["All", "Free", "Paid"]
const formatFilters = ["All", "Theory", "Hands-on Lab Pack", "Live Lab VM"]

export default function CertificatesPage() {
  return (
    <AppShell>
      <div>
          <h1 className="text-2xl font-bold text-white mb-6 tracking-tight font-code">Certificates</h1>

          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles w-4 h-4 text-neutral-400" aria-hidden="true">
                <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
                <path d="M20 2v4" /><path d="M22 4h-4" /><circle cx="4" cy="20" r="2" />
              </svg>
              <h2 className="text-sm font-bold text-neutral-400 uppercase tracking-wide font-code">Bundles &mdash; save vs. buying each certificate</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {bundles.map((bundle) => (
                <Link key={bundle.href} href={bundle.href} className="group relative p-5 rounded-2xl bg-gradient-to-br from-neutral-900 via-[#0a0a0a] to-neutral-800 border border-neutral-800 hover:border-neutral-600 hover:shadow-md transition-all overflow-hidden">
                  <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-2xl" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`, backgroundSize: '128px 128px', opacity: 0.2 }} />
                  <div className="flex items-start justify-between mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-package w-5 h-5 text-neutral-400" aria-hidden="true">
                      <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z" />
                      <path d="M12 22V12" /><polyline points="3.29 7 12 12 20.71 7" /><path d="m7.5 4.27 9 5.15" />
                    </svg>
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-900/40 px-2 py-0.5 rounded-full font-code">Save {bundle.savePercent}%</span>
                  </div>
                  <h3 className="font-bold text-white mb-1 truncate font-code">{bundle.title}</h3>
                  <p className="text-xs text-neutral-500 mb-3 font-code">{bundle.certCount} certificates</p>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-xs text-neutral-600 line-through font-code">${bundle.originalPrice}</span>
                    <span className="text-xl font-bold text-white font-code">${bundle.price}</span>
                    <span className="text-xs text-neutral-500 font-code">USD</span>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-xs text-emerald-400 font-semibold font-code">You save ${bundle.saveAmount}</span>
                    <span className="ml-auto inline-flex items-center gap-1 text-xs font-semibold text-neutral-400 group-hover:text-white font-code">View{" "}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-3 h-3" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-[#0a0a0a] rounded-xl border border-neutral-800 p-4 mb-6">
            <div className="flex flex-col lg:flex-row gap-3">
              <div className="relative flex-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-600" aria-hidden="true"><path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" /></svg>
                <input placeholder="Search certificates..." className="w-full pl-10 pr-4 py-2.5 bg-neutral-900 border border-neutral-700 rounded-lg text-sm text-white placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-neutral-500 focus:border-neutral-500 font-code" type="text" />
              </div>
              <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sliders-horizontal absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-600 pointer-events-none" aria-hidden="true"><path d="M10 5H3" /><path d="M12 19H3" /><path d="M14 3v4" /><path d="M16 17v4" /><path d="M21 12h-9" /><path d="M21 19h-5" /><path d="M21 5h-7" /><path d="M8 10v4" /><path d="M8 12H3" /></svg>
                <select className="pl-10 pr-8 py-2.5 bg-neutral-900 border border-neutral-700 rounded-lg text-sm text-white focus:outline-none focus:ring-1 focus:ring-neutral-500 focus:border-neutral-500 appearance-none cursor-pointer min-w-[160px] font-code">
                  <option value="all">All Levels</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                  <option value="expert">Expert</option>
                </select>
              </div>
              <select className="px-4 py-2.5 bg-neutral-900 border border-neutral-700 rounded-lg text-sm text-white focus:outline-none focus:ring-1 focus:ring-neutral-500 focus:border-neutral-500 appearance-none cursor-pointer min-w-[180px] font-code">
                <option value="name-asc">Name (A-Z)</option>
                <option value="name-desc">Name (Z-A)</option>
                <option value="duration-asc">Duration (Short &rarr; Long)</option>
                <option value="duration-desc">Duration (Long &rarr; Short)</option>
                <option value="tasks-asc">Tasks (Few &rarr; Many)</option>
                <option value="tasks-desc">Tasks (Many &rarr; Few)</option>
              </select>
            </div>
            <div className="mt-4 pt-4 border-t border-neutral-800 space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] uppercase tracking-wider text-neutral-600 w-16 shrink-0 font-code">Track</span>
                {tracks.map((track) => (<button key={track} className="px-3 py-1 rounded-full text-xs font-medium transition-colors border bg-[#0a0a0a] text-neutral-400 border-neutral-700 hover:border-neutral-500 hover:text-white font-code">{track}</button>))}
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] uppercase tracking-wider text-neutral-600 w-16 shrink-0 font-code">Price</span>
                {priceFilters.map((f) => (<button key={f} className={`px-3 py-1 rounded-full text-xs font-medium transition-colors border font-code ${f === "All" ? "bg-white text-black border-white" : "bg-[#0a0a0a] text-neutral-400 border-neutral-700 hover:border-neutral-500 hover:text-white"}`}>{f}</button>))}
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] uppercase tracking-wider text-neutral-600 w-16 shrink-0 font-code">Format</span>
                {formatFilters.map((f) => (<button key={f} className={`px-3 py-1 rounded-full text-xs font-medium transition-colors border font-code ${f === "All" ? "bg-white text-black border-white" : "bg-[#0a0a0a] text-neutral-400 border-neutral-700 hover:border-neutral-500 hover:text-white"}`}>{f}</button>))}
              </div>
            </div>
          </div>

          <p className="text-sm text-neutral-500 mb-4 font-code">{certificates.length} certificates found</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {certificates.map((cert) => <CertCard key={cert.title} cert={cert} />)}
          </div>
        </div>
    </AppShell>
  )
}
