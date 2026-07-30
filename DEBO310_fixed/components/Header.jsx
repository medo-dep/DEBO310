import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-debo-primary text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="bg-white p-2 rounded-lg shadow-sm text-debo-primary font-bold text-xl tracking-wider group-hover:scale-105 transition-transform">
            DEBO
          </div>
          <div>
            <h1 className="font-bold text-lg leading-none">ديبو للخدمات</h1>
            <span className="text-xs text-blue-200">DEBO Travel & Public Services</span>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
          <Link href="/" className="hover:text-blue-200 transition-colors">الرئيسية</Link>
          <Link href="/#services" className="hover:text-blue-200 transition-colors">الخدمات</Link>
          <Link href="/about" className="hover:text-blue-200 transition-colors">من نحن</Link>
          <Link href="/#contact" className="hover:text-blue-200 transition-colors">اتصل بنا</Link>
        </nav>

        <a 
          href="https://wa.me/905000000000" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-debo-secondary hover:bg-amber-600 text-white font-bold px-4 py-2 rounded-lg text-sm transition-colors shadow-sm flex items-center gap-2"
        >
          <span>تواصل معنا</span>
        </a>
      </div>
    </header>
  );
}
