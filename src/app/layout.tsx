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

const siteUrl = "https://kiwidefence.com"

export const metadata: Metadata = {
  title: "Kiwi Defence | Cybersecurity",
  description:
    "Kiwi Defence provides enterprise-grade cybersecurity solutions. Penetration testing, threat monitoring, incident response, and security consulting.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Kiwi Defence | Cybersecurity",
    description:
      "Enterprise-grade cybersecurity solutions. Penetration testing, threat monitoring, incident response, and security consulting.",
    url: siteUrl,
    siteName: "Kiwi Defence",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kiwi Defence | Cybersecurity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kiwi Defence | Cybersecurity",
    description:
      "Enterprise-grade cybersecurity solutions. Penetration testing, threat monitoring, incident response, and security consulting.",
    images: ["/og-image.png"],
  },
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
