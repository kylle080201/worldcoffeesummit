export const metadata = {
  title: 'World Coffee Summit 2023',
  description: 'A face-to-face Coffee Summit Exhibition on September 13, 2023',
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
