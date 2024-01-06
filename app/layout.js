import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio - Sushan',
  description: 'Modern portfolio built using Next.JS and Tailwind CSS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Sushan - Portfolio</title>
        <meta name="description" content="Experienced and innovative Software Engineer with a passion for crafting cutting-edge solutions. Specialized in full-stack development, my portfolio showcases a diverse range of projects that demonstrate proficiency in front-end technologies, back-end frameworks, and cloud computing. Committed to delivering scalable, efficient, and user-centric applications to address real-world challenges. Explore my portfolio to witness the fusion of creativity and technical expertise." />
        <meta name="keywords" content="keywords related to your content" />
        <meta name="author" content="Sushan Uchil" />
        
        {/* Open Graph meta tags for better sharing on social media */}
        <meta property="og:title" content="Sushan Uchil - Portfolio" />
        <meta property="og:description" content="Experienced and innovative Software Engineer with a passion for crafting cutting-edge solutions. Specialized in full-stack development, my portfolio showcases a diverse range of projects that demonstrate proficiency in front-end technologies, back-end frameworks, and cloud computing. Committed to delivering scalable, efficient, and user-centric applications to address real-world challenges. Explore my portfolio to witness the fusion of creativity and technical expertise." />
        <meta property="og:image" content="https://avatars.githubusercontent.com/u/88882430?v=4" />
        <meta property="og:url" content="https://sushanuchil.tech" />
        <meta property="og:type" content="website" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
