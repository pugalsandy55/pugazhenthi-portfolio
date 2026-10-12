import type { Metadata, Viewport } from 'next';
import { DM_Sans, DM_Mono, Playfair_Display } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
  weight: ['400', '500'],
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
  weight: ['500', '600'],
  style: ['normal', 'italic'],
});

export const viewport: Viewport = {
  themeColor: '#0b0c0b',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Pugazhenthi p — Web Developer & Systems Administrator',
  description:
    'Portfolio of Pugazhenthi p, a multidisciplinary technical professional based in Chennai, India specializing in Python, Django, modern frontend architecture, and enterprise systems administration.',
  keywords: [
    'Pugazhenthi p',
    'Pugazhenthi P',
    'Web Developer Chennai',
    'Python Django Developer',
    'Systems Administrator',
    'ITSM Observability',
    'Frontend Developer India',
    'Next.js Portfolio',
  ],
  authors: [{ name: 'Pugazhenthi p', url: 'https://github.com/pugalsandy55' }],
  creator: 'Pugazhenthi p',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://pugal.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Pugazhenthi p — Web Developer & Systems Administrator',
    description:
      'Turning ambitious ideas into crafted digital experiences. Explore featured projects in infrastructure observability, ITSM automation, and Python/Django web systems.',
    siteName: 'Pugazhenthi p Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pugazhenthi p — Web Developer & Systems Administrator',
    description:
      'Turning ambitious ideas into crafted digital experiences. Python, Django, and modern web developer based in Chennai, India.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${dmMono.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
