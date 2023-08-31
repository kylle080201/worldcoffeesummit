import Footer from '../../components/Footer';
import Navbar from '../../components/NavBar';
import './globals.css';
export const metadata = {
  title: 'World Coffee Summit 2023',
  description: 'An in-person high-level summit connects Coffee, Climate Change and Finance on 13th September 2023',
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
        <meta property="og:description" content="An in-person high-level summit connects Coffee, Climate Change and Finance on 13th September 2023" />
        <meta property="og:image" content="https://worldcoffeealliance.com/wp-content/uploads/2023/08/WCS-LinkedIn-Banner.png" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
