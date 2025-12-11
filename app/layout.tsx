import type React from "react"
import "@/app/globals.css"
import { Roboto } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

// Update the font configuration to use Roboto with Greek support
const roboto = Roboto({
  subsets: ["latin", "greek"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-roboto",
})

export const metadata = {
  title: "Helani website",
  description: "Επίσημη ιστοσελίδα της Ελληνικής Ακαδημίας Νευροανοσολογίας",
    generator: 'v0.dev'
}

// Update the body className to use the new font
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="el" suppressHydrationWarning>
      <body className={`${roboto.className} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
