import Footer from '../../components/Footer';
import Navbar from '../../components/NavBar';
import './globals.css';
export const metadata = {
  title: 'World Coffee Innovation Summit London',
  description: 'As the leading summit that connects COFFEE, CLIMATE CHANGE and FINANCE through INNOVATION, the World Coffee Innovation Summit is a must-attend for those who invested in advancing nature-positive, resilient agriculture and food systems for a net positive future in coffee sector. Join global coffee, climate and finance leaders and agri-food innovators in London for two days of in-depth discussions and cross-sector networking.',
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
        <meta property="og:title" content="World Coffee Innovation Summit 2025" />
        <meta property="og:description" content="As the leading summit that connects COFFEE, CLIMATE CHANGE and FINANCE through INNOVATION, the World Coffee Innovation Summit is a must-attend for those who invested in advancing nature-positive, resilient agriculture and food systems for a net positive future in coffee sector. Join global coffee, climate and finance leaders and agri-food innovators in London for two days of in-depth discussions and cross-sector networking." />
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