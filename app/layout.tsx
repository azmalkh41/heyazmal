import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Professional Web Developer | Custom Website Design & Development',
  description: 'Hire a skilled web developer from India. I create responsive, mobile-friendly websites with premium animations and modern technologies. Based in India with expertise in React, Next.js, and web development.',
  keywords: ['web developer', 'website development', 'web design', 'freelancer', 'India', 'responsive design', 'Next.js developer'],
  authors: [{ name: 'Web Developer' }],
  creator: 'Web Developer',
  publisher: 'Web Developer',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourwebsite.com',
    siteName: 'Professional Web Developer',
    title: 'Professional Web Developer | Custom Website Design & Development',
    description: 'Hire a skilled web developer from India for custom websites, responsive design, and premium animations.',
    images: [
      {
        url: '/profile.jpg',
        width: 1200,
        height: 1200,
        alt: 'Web Developer',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    viewportFit: 'cover',
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
