import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

const playfair = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "LUNE — Esencia en cada hilo",
  description:
    "Minimalismo atemporal. Ropa diseñada para quienes valoran la calidad, el silencio y la autenticidad.",
  openGraph: {
    title: "LUNE",
    description:
      "Minimalismo atemporal. Ropa diseñada para quienes valoran la calidad, el silencio y la autenticidad.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${playfair.variable}`}
    >
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  )
}
