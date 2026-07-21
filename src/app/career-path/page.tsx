import AppShell from "@/components/app-shell"

export default function CareerPathPage() {
  const paths = [
    {
      title: "DevSecOps Career Path",
      description:
        "Fundamentals to hands-on engineer to platform-security manager. Start with the free DevSecOps Fundamentals for vocabulary and shift-left mental model, prove hands-on pipeline security with the practical DevSecOps Engineer lab, then step into the manager-tier judgment exam that covers SLSA roadmapping, supply-chain postmortems, and tool procurement RFPs.",
      steps: 3,
      href: "/career-path/devsecops-career",
    },
    {
      title: "GRC & Compliance Manager",
      description:
        "Governance, Risk, and Compliance career path — from ISO/NIST framework fundamentals through auditor-tier control testing into full ISMS management. The corporate cyber path that maps to CISO-adjacent roles.",
      steps: 3,
      href: "/career-path/grc-compliance-manager",
    },
    {
      title: "Penetration Tester",
      description:
        "The single path from zero to senior offensive practitioner. Five foundational steps give you the pentester's vocabulary, your first hands-on target, and the market English you'll need to apply anywhere — then you pick one of four vertical specializations: Wireless, AppSec Management, AI Red Team, or IoT Specialist. Completing the path stamps your CV with 'Certified Penetration Tester — [your branch]', signalling a broad foundation and a sharp specialty in the same line.",
      steps: 11,
      href: "/career-path/penetration-tester",
    },
    {
      title: "SOC Analyst / Blue Team",
      description:
        "From cyber-hygiene basics to CTI capstone. A five-step main path that takes a helpdesk-tier ticket handler through SOC L1/L2, detection engineering, and into a choose-your-specialisation cap — Incident Response, Digital Forensics, or Threat Intelligence Expert. The complete defensive career pipeline in one roadmap.",
      steps: 8,
      href: "/career-path/blue-team-analyst",
    },
    {
      title: "Security Management Career Path",
      description:
        "For the security professional stepping into a manager, program owner, or leadership seat. Pre-sales foundation for framing risk in business language, then auditor and ISMS designer tiers, then branches into the specialization you actually manage: application security or DevSecOps and platform.",
      steps: 5,
      href: "/career-path/security-management",
    },
  ];

  return (
    <AppShell>
      <div className="space-y-6">
          <h1 className="text-2xl font-bold text-white tracking-tight font-code">Career Paths</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paths.map((path) => (
              <a
                key={path.href}
                href={path.href}
                className="group bg-[#0a0a0a] rounded-2xl border border-neutral-800 overflow-hidden hover:shadow-lg hover:border-neutral-600 transition-all"
              >
                <div className="relative h-40 bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center overflow-hidden">
                  <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`, backgroundSize: '128px 128px', opacity: 0.2 }} />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-route w-16 h-16 text-neutral-600"
                    aria-hidden="true"
                  >
                    <circle cx="6" cy="19" r="3" />
                    <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
                    <circle cx="18" cy="5" r="3" />
                  </svg>
                </div>
                <div className="p-5 space-y-3">
                  <h2 className="text-lg font-bold text-white group-hover:text-neutral-300 transition-colors font-code">
                    {path.title}
                  </h2>
                  <p className="text-sm text-neutral-500 line-clamp-2 font-code">
                    {path.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-neutral-400 bg-neutral-800 px-2.5 py-1 rounded-full font-code">
                      {path.steps} steps
                    </span>
                    <span className="flex items-center gap-1 text-sm font-medium text-neutral-400 group-hover:text-white group-hover:gap-2 transition-all font-code">
                      Explore
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-right w-4 h-4"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
    </AppShell>
  );
}
