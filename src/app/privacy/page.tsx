import type { Metadata } from "next"
import AppShell from "@/components/app-shell"

export const metadata: Metadata = {
  title: "Privacy Policy | Kiwi Defence",
  description: "Privacy Policy for Kiwi Defence cybersecurity certification platform.",
}

export default function PrivacyPage() {
  return (
    <AppShell>
      <article className="max-w-3xl mx-auto space-y-8">
        <div className="border-b border-neutral-800 pb-6">
          <h1 className="text-3xl font-bold text-white font-code">Privacy Policy</h1>
          <p className="text-sm text-neutral-500 mt-2 font-code">Last updated: July 21, 2026</p>
        </div>

        <section className="space-y-4 text-sm text-neutral-400 leading-relaxed font-code">
          <h2 className="text-lg font-semibold text-white">1. Information We Collect</h2>
          <p>We collect information you provide when creating an account, such as your name, email address, and billing information. We also collect exam performance data to issue certificates and improve the Platform.</p>
        </section>

        <section className="space-y-4 text-sm text-neutral-400 leading-relaxed font-code">
          <h2 className="text-lg font-semibold text-white">2. How We Use Your Information</h2>
          <p>Your information is used to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Operate and maintain your account</li>
            <li>Issue and verify certificates</li>
            <li>Process payments</li>
            <li>Send service-related communications</li>
            <li>Improve Platform features and content</li>
          </ul>
        </section>

        <section className="space-y-4 text-sm text-neutral-400 leading-relaxed font-code">
          <h2 className="text-lg font-semibold text-white">3. Data Sharing</h2>
          <p>We do not sell your personal data. We may share data with trusted third-party service providers (payment processing, hosting) who are contractually bound to protect your data. Certificate details may be shared with employers or organizations you authorize.</p>
        </section>

        <section className="space-y-4 text-sm text-neutral-400 leading-relaxed font-code">
          <h2 className="text-lg font-semibold text-white">4. Data Retention</h2>
          <p>We retain your account data for as long as your account is active. Exam records and certificates are retained indefinitely for verification purposes. You may request deletion of your account by contacting us.</p>
        </section>

        <section className="space-y-4 text-sm text-neutral-400 leading-relaxed font-code">
          <h2 className="text-lg font-semibold text-white">5. Cookies</h2>
          <p>We use essential cookies for authentication and session management. Optional analytics cookies may be used to improve the Platform. You can control cookie preferences through your browser settings.</p>
        </section>

        <section className="space-y-4 text-sm text-neutral-400 leading-relaxed font-code">
          <h2 className="text-lg font-semibold text-white">6. Your Rights</h2>
          <p>Depending on your jurisdiction, you may have rights to access, correct, delete, or port your data. To exercise these rights, contact <a href="mailto:info@kiwidefence.com" className="text-neutral-300 hover:text-white underline underline-offset-2">info@kiwidefence.com</a>.</p>
        </section>

        <section className="space-y-4 text-sm text-neutral-400 leading-relaxed font-code">
          <h2 className="text-lg font-semibold text-white">7. Security</h2>
          <p>We implement industry-standard measures including encryption in transit and at rest, access controls, and regular security reviews to protect your data.</p>
        </section>

        <section className="space-y-4 text-sm text-neutral-400 leading-relaxed font-code">
          <h2 className="text-lg font-semibold text-white">8. Contact</h2>
          <p>For privacy-related inquiries: <a href="mailto:info@kiwidefence.com" className="text-neutral-300 hover:text-white underline underline-offset-2">info@kiwidefence.com</a>.</p>
        </section>
      </article>
    </AppShell>
  )
}
