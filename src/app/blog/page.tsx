import type { Metadata } from "next"
import AppShell from "@/components/app-shell"

export const metadata: Metadata = {
  title: "Blog | Kiwi Defence",
  description: "Cybersecurity insights, case studies, and platform updates from Kiwi Defence.",
}

export default function BlogPage() {
  return (
    <AppShell>
      <div className="max-w-3xl mx-auto text-center py-20">
        <h1 className="text-3xl font-bold text-white font-code mb-4">Blog</h1>
        <p className="text-neutral-500 text-lg font-code">Coming soon.</p>
      </div>
    </AppShell>
  )
}
