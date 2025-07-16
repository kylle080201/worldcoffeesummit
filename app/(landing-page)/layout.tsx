import Footer from '../../components/Footer';
import Navbar from '../../components/NavBar';
import './globals.css';
export const metadata = {
  title: 'World Coffee Innovation Summit London 2025',
  description: 'Unlocking the future of Coffee & Cocoa, Climate, Finance through Innovation. Be part of this inspiring convening of global visionaries, innovators, investors and changemakers in London, 23–24 October 2025.',
}
import { Toaster } from 'react-hot-toast'

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
        <meta property="og:title" content="World Coffee Innovation Summit London 2025" />
        <meta property="og:description" content="Unlocking the future of Coffee & Cocoa, Climate, Finance through Innovation. Be part of this inspiring convening of global visionaries, innovators, investors and changemakers in London, 23–24 October 2025." />
        <meta property="og:image" content="https://worldcoffeealliance.com/wp-content/uploads/2024/04/world-coffee-innovation-summit-high-resolution-logo-transparent-1.png" />
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