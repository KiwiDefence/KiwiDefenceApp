import type { Metadata } from "next"
import AppShell from "@/components/app-shell"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Blog | Kiwi Defence",
  description: "Cybersecurity insights, case studies, and platform updates from Kiwi Defence.",
}

const posts = [
  {
    title: "Sibereum HR Modülü Vaka Analizi",
    slug: "sibereum-hr-modulu-vaka-analizi",
    excerpt: "Sibereum, sızma testi ekibine katılacak uzmanı Kiwi Defence HR modülüyle uygulamalı pentest sınavları, psikometrik test ve soft skill değerlendirmesi ile ölçtü.",
    date: "2026-07-15",
  },
]

export default function BlogPage() {
  return (
    <AppShell>
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="border-b border-neutral-800 pb-6">
          <h1 className="text-3xl font-bold text-white font-code">Blog</h1>
          <p className="text-sm text-neutral-500 mt-2 font-code">Case studies, updates, and insights</p>
        </div>

        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block group bg-[#0a0a0a] rounded-xl border border-neutral-800 p-6 hover:border-neutral-600 transition-all duration-300"
            >
              <h2 className="text-lg font-bold text-white group-hover:text-neutral-300 transition-colors font-code">{post.title}</h2>
              <p className="text-sm text-neutral-500 mt-2 leading-relaxed font-code">{post.excerpt}</p>
              <p className="text-xs text-neutral-600 mt-3 font-code">{post.date}</p>
            </Link>
          ))}
        </div>
      </div>
    </AppShell>
  )
}
