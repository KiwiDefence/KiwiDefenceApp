import type { Metadata } from "next"
import AppShell from "@/components/app-shell"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Sibereum HR Modülü Vaka Analizi | Kiwi Defence",
  description: "Sibereum'un sızma testi ekibi için Kiwi Defence HR modülü ile uygulamalı değerlendirme süreci.",
}

export default function BlogPostPage() {
  return (
    <AppShell>
      <article className="max-w-3xl mx-auto space-y-8">
        <div className="border-b border-neutral-800 pb-6">
          <Link href="/blog" className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors font-code mb-4 inline-block">&larr; Back to Blog</Link>
          <h1 className="text-3xl font-bold text-white font-code">Sibereum HR Modülü Vaka Analizi</h1>
          <p className="text-sm text-neutral-500 mt-2 font-code">July 15, 2026</p>
        </div>

        <section className="space-y-4 text-sm text-neutral-400 leading-relaxed font-code">
          <p>Sibereum, sızma testi ekibine katılacak uzmanı Kiwi Defence HR modülüyle uygulamalı pentest sınavları (web exploit, Active Directory, network), psikometrik test ve soft skill değerlendirmesi ile ölçtü.</p>
          <p>Engin Aydoğan pentest kariyerinde ilk şansını platformdaki kurumsal ağ üzerinden yakaladı, sahada biriktirdiği deneyimle bugün Kıdemli Siber Güvenlik Uzmanı olarak görev yapıyor.</p>
        </section>
      </article>
    </AppShell>
  )
}
