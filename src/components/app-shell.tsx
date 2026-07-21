"use client"

import { useState, useEffect, useRef, type ReactNode } from "react"
import { usePathname } from "next/navigation"
import Sidebar from "@/components/sidebar"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AppShell({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const pathname = usePathname()
  const prevPath = useRef(pathname)

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)")
    setIsMobile(mq.matches)
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

  useEffect(() => {
    if (prevPath.current !== pathname) {
      setSidebarOpen(false)
    }
    prevPath.current = pathname
  }, [pathname])

  return (
    <div className="min-h-screen bg-black">
      <Sidebar collapsed={!sidebarOpen} currentPath={pathname} onCloseMobile={() => setSidebarOpen(false)} />
      <Header onToggleSidebar={() => setSidebarOpen((v) => !v)} sidebarOpen={sidebarOpen} isMobile={isMobile} />
      <div className={`transition-all duration-300 ease-in-out pt-16 min-h-screen pb-28 sm:pb-12 ${isMobile ? "ml-0" : sidebarOpen ? "ml-56" : "ml-20"}`}>
        <main className="p-4 sm:p-6">
          {children}
        </main>
      </div>
      <Footer sidebarOpen={sidebarOpen} isMobile={isMobile} />
    </div>
  )
}
