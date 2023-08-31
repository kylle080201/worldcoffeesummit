export const metadata = {
  title: 'World Coffee Summit 2023',
  description: 'An in-person high-level summit connects Coffee, Climate Change and Finance on 13th September 2023',
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
