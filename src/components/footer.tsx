import Link from "next/link"

export default function Footer({ sidebarOpen, isMobile }: { sidebarOpen?: boolean; isMobile?: boolean }) {
  return (
    <footer className={`fixed bottom-0 z-40 border-t border-neutral-800 bg-black px-4 sm:px-6 py-4 transition-all duration-300 ease-in-out right-0 ${isMobile ? "left-0" : sidebarOpen ? "left-56" : "left-20"}`}>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500 font-code">
        <span className="text-center sm:text-left">
          &copy; 2026 <span className="font-medium text-neutral-400">KIWI DEFENCE</span>
        </span>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <Link href="/terms" className="hover:text-neutral-300 transition-colors">Terms of Use</Link>
          <Link href="/privacy" className="hover:text-neutral-300 transition-colors">Privacy Policy</Link>
          <Link href="/refund-policy" className="hover:text-neutral-300 transition-colors">Refund Policy</Link>
          <a href="mailto:info@kiwidefence.com" className="hover:text-neutral-300 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  )
}
