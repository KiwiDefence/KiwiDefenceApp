"use client"

import { useState, type ReactNode } from "react"
import { usePathname } from "next/navigation"
import Sidebar from "@/components/sidebar"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AppShell({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-black">
      <Sidebar collapsed={!sidebarOpen} currentPath={pathname} />
      <Header onToggleSidebar={() => setSidebarOpen((v) => !v)} sidebarOpen={sidebarOpen} />
      <div className={`transition-all duration-300 ease-in-out ${sidebarOpen ? "ml-56" : "ml-20"} pt-16 min-h-screen`}>
        <main className="p-6 pb-20 overflow-auto">
          {children}
        </main>
      </div>
      <Footer sidebarOpen={sidebarOpen} />
    </div>
  )
}
