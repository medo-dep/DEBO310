export default function Footer() {
  return (
    <footer className="bg-debo-dark text-slate-300 py-12 mt-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white font-bold text-lg mb-3">ديبو للسفر والخدمات العامة</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            شريكك الموثوق لتسهيل كافة إجراءات السفر، المعاملات العامة، وحجوزات الطيران والفنادق بأعلى معايير الجودة والسرعة.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-3">روابط سريعة</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white transition-colors">الرئيسية</a></li>
            <li><a href="/#services" className="hover:text-white transition-colors">دليل الخدمات</a></li>
            <li><a href="/about" className="hover:text-white transition-colors">عن ديبو</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-3">التواصل المباشر</h4>
          <p className="text-sm text-slate-400 mb-2">اسطنبول، تركيا / Kayseri</p>
          <p className="text-sm text-slate-400 mb-2">البريد: info@debotravel.com</p>
          <p className="text-sm text-slate-400">واتساب: +90 500 000 0000</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 px-6 mt-8 pt-6 border-t border-slate-800 text-center text-xs text-slate-500">
        جميع الحقوق محفوظة © {new Date().getFullYear()} DEBO Travel & Public Services
      </div>
    </footer>
  );
}
