import Link from 'next/link'
export default function Header(){
  return (
    <header className="bg-white shadow-sm">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-md bg-navy flex items-center justify-center text-white font-bold">DE</div>
          <span className="font-bold text-navy">DEBO</span>
        </div>
        <nav className="flex gap-4">
          <Link href="#home"><a className="header-link">Home</a></Link>
          <Link href="/about"><a className="header-link">About Us</a></Link>
          <Link href="#services"><a className="header-link">Services</a></Link>
          <Link href="#faq"><a className="header-link">FAQ</a></Link>
          <Link href="#contact"><a className="header-link">Contact</a></Link>
        </nav>
      </div>
    </header>
  )
}
