import type { Metadata } from "next"
import AppShell from "@/components/app-shell"

export const metadata: Metadata = {
  title: "Terms of Use | Kiwi Defence",
  description: "Terms of Use for Kiwi Defence cybersecurity certification platform.",
}

export default function TermsPage() {
  return (
    <AppShell>
      <article className="max-w-3xl mx-auto space-y-8">
        <div className="border-b border-neutral-800 pb-6">
          <h1 className="text-3xl font-bold text-white font-code">Terms of Use</h1>
          <p className="text-sm text-neutral-500 mt-2 font-code">Last updated: July 21, 2026</p>
        </div>

        <section className="space-y-4 text-sm text-neutral-400 leading-relaxed font-code">
          <h2 className="text-lg font-semibold text-white">1. Acceptance of Terms</h2>
          <p>By accessing or using Kiwi Defence ("the Platform"), you agree to be bound by these Terms of Use. If you do not agree, do not use the Platform.</p>
        </section>

        <section className="space-y-4 text-sm text-neutral-400 leading-relaxed font-code">
          <h2 className="text-lg font-semibold text-white">2. Account Registration</h2>
          <p>You must provide accurate information when creating an account. You are responsible for maintaining the confidentiality of your credentials and for all activity under your account.</p>
        </section>

        <section className="space-y-4 text-sm text-neutral-400 leading-relaxed font-code">
          <h2 className="text-lg font-semibold text-white">3. Certifications</h2>
          <p>Certificates issued by Kiwi Defence reflect exam performance on the Platform at the time of testing. They do not constitute a professional license, accreditation, or employment guarantee. Sharing or falsifying certificates is prohibited.</p>
        </section>

        <section className="space-y-4 text-sm text-neutral-400 leading-relaxed font-code">
          <h2 className="text-lg font-semibold text-white">4. Prohibited Conduct</h2>
          <p>You agree not to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Share exam content, answers, or credentials with others</li>
            <li>Attempt to reverse-engineer, scrape, or disrupt the Platform</li>
            <li>Use automated tools to complete exams on your behalf</li>
            <li>Impersonate another person or entity</li>
          </ul>
        </section>

        <section className="space-y-4 text-sm text-neutral-400 leading-relaxed font-code">
          <h2 className="text-lg font-semibold text-white">5. Payments & Refunds</h2>
          <p>Paid certifications and bundles are subject to our Refund Policy. All prices are in USD unless stated otherwise. Payment is processed through our third-party payment provider.</p>
        </section>

        <section className="space-y-4 text-sm text-neutral-400 leading-relaxed font-code">
          <h2 className="text-lg font-semibold text-white">6. Limitation of Liability</h2>
          <p>Kiwi Defence is provided "as is" without warranties of any kind. To the maximum extent permitted by law, we are not liable for any indirect, incidental, or consequential damages arising from your use of the Platform.</p>
        </section>

        <section className="space-y-4 text-sm text-neutral-400 leading-relaxed font-code">
          <h2 className="text-lg font-semibold text-white">7. Changes to Terms</h2>
          <p>We may update these terms at any time. Continued use after changes constitutes acceptance of the new terms. We will notify material changes via email or Platform notice.</p>
        </section>

        <section className="space-y-4 text-sm text-neutral-400 leading-relaxed font-code">
          <h2 className="text-lg font-semibold text-white">8. Contact</h2>
          <p>For questions about these terms, contact us at <a href="mailto:info@kiwidefence.com" className="text-neutral-300 hover:text-white underline underline-offset-2">info@kiwidefence.com</a>.</p>
        </section>
      </article>
    </AppShell>
  )
}
