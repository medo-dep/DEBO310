import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { servicesData } from '../lib/services';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredServices = servicesData.filter(service => {
    const matchesSearch = service.title.includes(searchTerm) || service.shortDescription.includes(searchTerm);
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Head>
        <title>ديبو للسفر والخدمات العامة | DEBO Travel & Services</title>
        <meta name="description" content="خدمات سفر وحجوزات طيران وفنادق وتخليص معاملات عامة ومستندات في تركيا والشرق الأوسط." />
        <meta property="og:title" content="ديبو للسفر والخدمات العامة" />
        <meta property="og:description" content="خدمات حجز طيران وفنادق وتأشيرات واستشارات عامة الموثوقة." />
      </Head>

      <div className="min-h-screen flex flex-col bg-slate-50">
        <Header />

        {/* Hero Section */}
        <section className="bg-gradient-to-b from-debo-primary to-blue-900 text-white py-20 px-4 text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto relative z-10">
            <span className="bg-blue-800/80 text-blue-200 text-xs font-semibold px-4 py-1.5 rounded-full inline-block mb-4 border border-blue-700">
              خدمات موثوقة وسريعة لكافة معاملاتك
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold mb-6 leading-tight">
              ديبو للسفر والخدمات العامة
            </h1>
            <p className="text-base sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
              نطاق شامل من الخدمات الاستشارية وحجوزات الطيران والفنادق وتسهيل المعاملات بكل موثوقية وسرعة.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#services" className="bg-debo-secondary hover:bg-amber-600 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg transition-all hover:scale-105">
                استعرض كافة الخدمات
              </a>
              <WhatsAppButton />
            </div>
          </div>
        </section>

        {/* Services & Search Section */}
        <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full flex-grow">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">خدماتنا المتميزة</h2>
            <p className="text-slate-600 text-sm sm:text-base">ابحث عن الخدمة التي تحتاجها أو تصفح حسب الفئة</p>
          </div>

          {/* Search & Filter Controls */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mb-12 max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <input
                type="text"
                placeholder="ابحث عن خدمة (مثل: طيران، فيزا، فندق)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-grow px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-debo-primary text-sm"
              />
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center text-xs sm:text-sm">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${selectedCategory === 'all' ? 'bg-debo-primary text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                جميع الخدمات
              </button>
              <button
                onClick={() => setSelectedCategory('travel')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${selectedCategory === 'travel' ? 'bg-debo-primary text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                خدمات السفر
              </button>
              <button
                onClick={() => setSelectedCategory('visa')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${selectedCategory === 'visa' ? 'bg-debo-primary text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                التأشيرات
              </button>
              <button
                onClick={() => setSelectedCategory('public')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${selectedCategory === 'public' ? 'bg-debo-primary text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                الخدمات العامة
              </button>
            </div>
          </div>

          {/* Services Grid */}
          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {filteredServices.map((service) => (
                <div key={service.id} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-blue-50 text-debo-primary text-xs font-semibold px-3 py-1 rounded-full">
                        {service.categoryName}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">{service.shortDescription}</p>
                    
                    <ul className="space-y-2 mb-6 text-xs text-slate-500">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="text-emerald-500 font-bold">✓</span> {feat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
                    <Link
                      href={`/services/${service.slug}`}
                      className="w-full sm:w-auto text-center px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold rounded-xl text-sm transition-colors"
                    >
                      تفاصيل الخدمة
                    </Link>
                    <WhatsAppButton serviceName={service.title} phoneNumber={service.whatsappNumber} />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-slate-500">
              لا توجد نتائج تطابق بحثك حالياً. جرب البحث عن كلمات أخرى.
            </div>
          )}
        </section>

        {/* Testimonials */}
        <section className="bg-slate-100 py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">ماذا يقول عملاؤنا؟</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-right">
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">"خدمة ممتازة وسريعة جداً في حجز الطيران وتوفير خيارات مناسبة لميزانيتي. شكراً لفريق ديبو."</p>
                <span className="font-bold text-xs text-debo-primary">— أحمد م.</span>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">"تعامل راقي ودقة عالية في تجهيز وتخليص المعاملات والاستشارات. أنصح بالتعامل معهم."</p>
                <span className="font-bold text-xs text-debo-primary">— محمد س.</span>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
