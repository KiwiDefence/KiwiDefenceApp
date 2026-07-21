import type { Metadata } from "next"
import AppShell from "@/components/app-shell"

export const metadata: Metadata = {
  title: "Refund Policy | Kiwi Defence",
  description: "Refund and cancellation policy for Kiwi Defence cybersecurity certification platform.",
}

export default function RefundPolicyPage() {
  return (
    <AppShell>
      <article className="max-w-3xl mx-auto space-y-8">
        <div className="border-b border-neutral-800 pb-6">
          <h1 className="text-3xl font-bold text-white font-code">Refund Policy</h1>
          <p className="text-sm text-neutral-500 mt-2 font-code">Last updated: July 21, 2026</p>
        </div>

        <section className="space-y-4 text-sm text-neutral-400 leading-relaxed font-code">
          <h2 className="text-lg font-semibold text-white">1. Individual Purchases</h2>
          <p>You may request a full refund within 14 days of purchase, provided you have not started any exam on the certificate. Refunds are processed to the original payment method within 5-10 business days.</p>
        </section>

        <section className="space-y-4 text-sm text-neutral-400 leading-relaxed font-code">
          <h2 className="text-lg font-semibold text-white">2. Bundle Purchases</h2>
          <p>Bundle refunds follow the same 14-day policy. If any individual certificate within the bundle has been started, the refund value will be adjusted to deduct the standalone price of started certificates.</p>
        </section>

        <section className="space-y-4 text-sm text-neutral-400 leading-relaxed font-code">
          <h2 className="text-lg font-semibold text-white">3. Business & Team Plans</h2>
          <p>Annual team plans (Starter, Growth, Scale) may be cancelled within 30 days of the initial purchase for a full refund. After 30 days, refunds are prorated for unused seat-months minus a 10% administrative fee. Refunds are not issued for partial billing periods after cancellation.</p>
        </section>

        <section className="space-y-4 text-sm text-neutral-400 leading-relaxed font-code">
          <h2 className="text-lg font-semibold text-white">4. Exam Credit Refunds</h2>
          <p>Lab credits purchased as add-ons are non-refundable but do not expire as long as your account remains active.</p>
        </section>

        <section className="space-y-4 text-sm text-neutral-400 leading-relaxed font-code">
          <h2 className="text-lg font-semibold text-white">5. Exceptions</h2>
          <p>Refunds are not granted for:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Exams that have been fully or partially completed</li>
            <li>Digital certificates already issued</li>
            <li>Purchases made more than 14 days ago (individual) or 30 days ago (business)</li>
          </ul>
        </section>

        <section className="space-y-4 text-sm text-neutral-400 leading-relaxed font-code">
          <h2 className="text-lg font-semibold text-white">6. How to Request a Refund</h2>
          <p>Send your refund request from the email address associated with your account to <a href="mailto:info@kiwidefence.com" className="text-neutral-300 hover:text-white underline underline-offset-2">info@kiwidefence.com</a>. Include your full name and order reference number. We will respond within 3 business days.</p>
        </section>
      </article>
    </AppShell>
  )
}
