import type { Metadata } from "next"
import { Geist, Geist_Mono, Syncopate } from "next/font/google"
import { AuthProvider } from "@/lib/auth-context"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const syncopate = Syncopate({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-syncopate",
})

export const metadata: Metadata = {
  title: "Kiwi Defence — Hands-On Cybersecurity Certification Platform",
  description:
    "Prove your cybersecurity skills with hands-on lab-based certification exams. Earn industry-recognized credentials in penetration testing, digital forensics, cloud security, and more.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${syncopate.variable} antialiased`}>
      <body className="min-h-screen"><AuthProvider>{children}</AuthProvider></body>
    </html>
  )
}
