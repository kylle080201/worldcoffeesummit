import Footer from '../../components/Footer';
import Navbar from '../../components/NavBar';
import './globals.css';
export const metadata = {
  title: 'World Coffee Summit 2023',
  description: 'A face-to-face Coffee Summit Exhibition on September 13, 2023',
}

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
        <meta property="og:title" content="World Coffee Summit 2023" />
        <meta property="og:description" content="A face-to-face Coffee Summit Exhibition on September 13, 2023" />
        <meta property="og:image" content="https://worldcoffeealliance.com/wp-content/uploads/2023/06/world-coffee-summit-icon.png" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
