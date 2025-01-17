import { Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
import './styles/Global.scss'
import './globals.scss'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata = {
  title: {
    template: '%s | ${process.env.NEXT_PUBLIC_NAME}',
    default: 'ARF-I - Powered by $FISH on LUKSO',
  },
  description: process.env.NEXT_PUBLIC_DESCRIPTION,
  keywords: [process.env.NEXT_PUBLIC_KEYWORDS],
  author: { name: process.env.NEXT_PUBLIC_AUTHOR, url: process.env.NEXT_PUBLIC_AUTHOR_URL },
  creator: process.env.NEXT_PUBLIC_CREATOR,
  openGraph: {
    images: '/og.png',
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.png',
    shortcut: '/favicon-32x32.png',
    apple: '/apple-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
  manifest: '/manifest.json',
  category: 'AI',
}

export const viewport = {
  themeColor: '#ff5cef',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-US">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
      <Script id="clarity-script" strategy="afterInteractive">
        {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "pvcynhtcvz");`}
      </Script>
    </html>
  )
}
