import Footer from '../../components/Footer';
import './globals.css';
export const metadata = {
    title: 'World Coffee Summit 2023 Admin Page',
    description: 'A face-to-face Coffee Summit Exhibition on September 13, 2023',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head></head>
            <body>
                {children}
                <Footer />
            </body>
        </html>
    )
}
