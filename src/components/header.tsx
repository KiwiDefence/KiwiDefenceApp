"use client"

import Link from "next/link"
import { useAuth } from "@/lib/auth-context"

export default function Header({ onToggleSidebar, sidebarOpen }: { onToggleSidebar: () => void; sidebarOpen: boolean }) {
  const { user, loading, logout } = useAuth()

  return (
    <header className={`fixed top-0 z-30 h-16 bg-[#050505] border-b border-neutral-800 flex items-center justify-between px-6 transition-all duration-300 ease-in-out ${sidebarOpen ? "left-56" : "left-20"} right-0`}>
      <div>
        <button className="p-2 rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer" title={sidebarOpen ? "Close menu" : "Open menu"} onClick={onToggleSidebar}>
          {sidebarOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-neutral-500" aria-hidden="true">
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M9 3v18" />
              <path d="m16 15-3-3 3-3" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-neutral-500" aria-hidden="true">
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M9 3v18" />
              <path d="m15 9-3 3 3 3" />
            </svg>
          )}
        </button>
      </div>
      <div className="flex items-center gap-4">
        {loading ? null : user ? (
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-sm text-neutral-400 font-code">
              <div className="w-7 h-7 rounded-full bg-neutral-700 flex items-center justify-center text-white text-xs font-bold">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <span className="hidden sm:inline">{user.name}</span>
            </div>
            <button onClick={logout} className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors font-code">
              Sign Out
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Link href="/login" className="flex items-center gap-1.5 px-3 py-2 text-sm font-code text-neutral-400 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                <path d="m10 17 5-5-5-5" />
                <path d="M15 12H3" />
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
              </svg>
              Sign In
            </Link>
            <Link href="/register" className="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold font-code text-black bg-white hover:bg-neutral-200 rounded-lg transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <line x1="19" x2="19" y1="8" y2="14" />
                <line x1="22" x2="16" y1="11" y2="11" />
              </svg>
              Register
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
