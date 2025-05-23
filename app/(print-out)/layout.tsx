export const metadata = {
  title: 'World Coffee Innovation Summit London',
  description: 'As the leading summit that connects COFFEE, CLIMATE CHANGE and FINANCE through INNOVATION, the World Coffee Innovation Summit is a must-attend for those who invested in advancing nature-positive, resilient agriculture and food systems for a net positive future in coffee sector. Join global coffee, climate and finance leaders and agri-food innovators in London for two days of in-depth discussions and cross-sector networking.',
}
import './globals.css';

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
      <body>{children}</body>
    </html>
  )
}
