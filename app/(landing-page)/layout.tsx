import Footer from '../../components/Footer';
import Navbar from '../../components/NavBar';
import './globals.css';
import type { Metadata } from 'next';
import { Toaster } from 'react-hot-toast'
import { SITE_URL } from '../../utils/site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'World Coffee Innovation Summit London 2026',
  description:
    'Unlocking the future of Coffee & Cocoa, Climate, Finance through Innovation. Be part of this inspiring convening of global visionaries, innovators, investors and changemakers in London, 21–22 October 2026.',
  openGraph: {
    title: 'World Coffee Innovation Summit London 2026',
    description:
      'Unlocking the future of Coffee & Cocoa, Climate, Finance through Innovation. Be part of this inspiring convening of global visionaries, innovators, investors and changemakers in London, 21–22 October 2026.',
    url: SITE_URL,
    siteName: 'World Coffee Innovation Summit London 2026',
    images: [
      {
        url: 'https://worldcoffeealliance.com/wp-content/uploads/2024/04/world-coffee-innovation-summit-high-resolution-logo-transparent-1.png',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'World Coffee Innovation Summit London 2026',
    description:
      'Unlocking the future of Coffee & Cocoa, Climate, Finance through Innovation. Be part of this inspiring convening of global visionaries, innovators, investors and changemakers in London, 21–22 October 2026.',
    images: [
      'https://worldcoffeealliance.com/wp-content/uploads/2024/04/world-coffee-innovation-summit-high-resolution-logo-transparent-1.png',
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href=
          "https://worldcoffeealliance.com/wp-content/uploads/2023/06/world-coffee-summit-icon.png"
          type="image/x-icon" />
      </head>
      <body>
        <Toaster />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}