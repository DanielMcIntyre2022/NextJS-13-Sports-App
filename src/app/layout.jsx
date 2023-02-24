import './globals.css'
import Header from './components/Header';
import NavBar from './components/NavBar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Header */}
        <Header/>
        {/* Navbar */}
        <NavBar/>
        {children}
      </body>
    </html>
  )
}
