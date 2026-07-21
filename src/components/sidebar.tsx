"use client"

import Link from "next/link"
import { useAuth } from "@/lib/auth-context"

const navItems = [
  { href: "/dashboard", label: "Home", icon: "house" },
  { href: "/my-statistics", label: "My Statistics", icon: "bar-chart" },
  { href: "/certificates", label: "Certificates", icon: "award" },
  { href: "/exam-history", label: "Exam History", icon: "history" },
  { href: "/career-path", label: "Career Path", icon: "route" },
]

const exploreItems = [
  { href: "/success-stories", label: "Success Stories", icon: "star" },
  { href: "/blog", label: "Blog", icon: "file-text" },
  { href: "/for-business", label: "For Business", icon: "building2" },
]

function Icon({ name, className = "w-5 h-5" }: { name: string; className?: string }) {
  const paths: Record<string, React.ReactNode> = {
    house: (
      <>
        <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
        <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      </>
    ),
    award: (
      <>
        <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
        <circle cx="12" cy="8" r="6" />
      </>
    ),
    route: (
      <>
        <circle cx="6" cy="19" r="3" />
        <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
        <circle cx="18" cy="5" r="3" />
      </>
    ),
    history: (
      <>
        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
        <path d="M3 3v5h5" />
        <path d="M12 7v5l4 2" />
      </>
    ),
    star: (
      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
    ),
    "file-text": (
      <>
        <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
        <path d="M14 2v5a1 1 0 0 0 1 1h5" />
        <path d="M10 9H8" />
        <path d="M16 13H8" />
        <path d="M16 17H8" />
      </>
    ),
    building2: (
      <>
        <path d="M10 12h4" />
        <path d="M10 8h4" />
        <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
        <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" />
        <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
      </>
    ),
    "bar-chart": (
      <>
        <path d="M4 20V10" />
        <path d="M9 20V6" />
        <path d="M14 20v-6" />
        <path d="M19 20V4" />
      </>
    ),
    "log-in": (
      <>
        <path d="m10 17 5-5-5-5" />
        <path d="M15 12H3" />
        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      </>
    ),
    "user-plus": (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <line x1="19" x2="19" y1="8" y2="14" />
        <line x1="22" x2="16" y1="11" y2="11" />
      </>
    ),
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`shrink-0 ${className}`} aria-hidden="true">
      {paths[name]}
    </svg>
  )
}

function NavLink({ href, icon, label, active, collapsed }: { href: string; icon: string; label: string; active?: boolean; collapsed: boolean }) {
  return (
    <Link
      href={href}
      className={`flex items-center rounded-lg text-sm font-code transition-colors min-h-[44px] ${collapsed ? "justify-center gap-0" : "gap-3 px-3"} py-2.5 ${
        active ? "bg-neutral-800 text-white" : "text-neutral-400 hover:bg-neutral-800/50 hover:text-white"
      }`}
      title={collapsed ? label : undefined}
    >
      <Icon name={icon} />
      {!collapsed && <span className="whitespace-nowrap overflow-hidden">{label}</span>}
    </Link>
  )
}

export default function Sidebar({ collapsed, currentPath = "", onCloseMobile }: { collapsed?: boolean; currentPath?: string; onCloseMobile?: () => void }) {
  const { user, loading, logout } = useAuth()

  return (
    <>
      {!collapsed && (
        <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={onCloseMobile} />
      )}
      <aside className={`fixed left-0 top-0 h-screen z-40 bg-black flex flex-col transition-all duration-300 ease-in-out overflow-hidden border-r border-neutral-800
        ${collapsed ? "-translate-x-full" : "translate-x-0"} lg:translate-x-0 lg:${collapsed ? "w-20" : "w-56"}`}>
        <div className={`py-5 flex items-center ${collapsed ? "justify-center px-0" : "px-4"}`}>
          <div className={`flex items-center gap-2 ${collapsed ? "justify-center" : ""}`}>
            <div className="w-7 h-7 flex items-center justify-center">
              <img alt="Kiwi Defence" className="w-full h-full invert" src="/kiwi-logo.svg" />
            </div>
            {!collapsed && <span className="text-white font-bold tracking-tight text-sm font-display">Kiwi Defence</span>}
          </div>
        </div>
        <nav className="flex-1 py-2 space-y-1 px-3">
          {navItems.map((item) => (
            <NavLink key={item.href} {...item} active={currentPath.startsWith(item.href)} collapsed={!!collapsed} />
          ))}
          <div className="mx-3 my-3 border-t border-neutral-800" />
          <p className={`px-4 mb-1 text-[10px] font-bold text-neutral-600 uppercase tracking-wider font-code ${collapsed ? "hidden" : ""}`}>Explore</p>
          {exploreItems.map((item) => (
            <NavLink key={item.href} {...item} collapsed={!!collapsed} />
          ))}
        </nav>
        <div className="py-4 space-y-2 px-3">
          <div className="mx-1 mb-2 border-t border-neutral-800" />
          {loading ? null : user ? (
            <div className={`flex items-center gap-3 px-3 py-2.5 ${collapsed ? "justify-center" : ""}`}>
              <div className="w-7 h-7 rounded-full bg-neutral-700 flex items-center justify-center text-white text-xs font-bold shrink-0 font-code">
                {user.name.charAt(0).toUpperCase()}
              </div>
              {!collapsed && (
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-white truncate font-code">{user.name}</p>
                  <button onClick={logout} className="text-[10px] text-neutral-500 hover:text-neutral-300 transition-colors mt-0.5 font-code">
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link
                href="/login"
                className={`flex items-center rounded-lg text-sm font-code transition-colors border border-neutral-700 text-neutral-300 hover:border-neutral-500 hover:text-white min-h-[44px] ${collapsed ? "justify-center gap-0" : "gap-3 px-3"} py-2.5`}
                title={collapsed ? "Sign In" : undefined}
              >
                <Icon name="log-in" />
                {!collapsed && <span className="whitespace-nowrap overflow-hidden">Sign In</span>}
              </Link>
              <Link
                href="/register"
                className={`flex items-center rounded-lg text-sm font-semibold font-code transition-colors bg-white text-black hover:bg-neutral-200 min-h-[44px] ${collapsed ? "justify-center gap-0" : "gap-3 px-3"} py-2.5`}
                title={collapsed ? "Register" : undefined}
              >
                <Icon name="user-plus" />
                {!collapsed && <span className="whitespace-nowrap overflow-hidden">Register</span>}
              </Link>
            </>
          )}
        </div>
      </aside>
    </>
  )
}
