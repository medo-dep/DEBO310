import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsAppButton';
import { servicesData } from '../../lib/services';

export default function ServiceDetail({ service }) {
  if (!service) {
    return (
      <div className="min-h-screen flex flex-col justify-between">
        <Header />
        <div className="text-center py-20 text-slate-600">الخدمة المطلوبة غير موجودة.</div>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{service.title} | ديبو للخدمات</title>
        <meta name="description" content={service.shortDescription} />
      </Head>

      <div className="min-h-screen flex flex-col bg-slate-50">
        <Header />

        <main className="max-w-4xl mx-auto px-4 py-12 flex-grow w-full">
          <Link href="/" className="inline-flex items-center gap-1 text-sm text-debo-primary mb-6 hover:underline font-medium">
            ← العودة لجميع الخدمات
          </Link>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <span className="bg-blue-50 text-debo-primary text-xs font-semibold px-3 py-1 rounded-full mb-4 inline-block">
              {service.categoryName}
            </span>
            <h1 className="text-3xl font-extrabold text-slate-900 mb-4">{service.title}</h1>
            <p className="text-slate-600 text-base leading-relaxed mb-8 border-b pb-6">{service.fullDescription}</p>

            <h3 className="text-lg font-bold text-slate-900 mb-4">مميزات الخدمة:</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {service.features.map((feat, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <span className="text-emerald-500 font-bold">✓</span> {feat}
                </li>
              ))}
            </ul>

            <div className="bg-blue-50 p-6 rounded-2xl text-center border border-blue-100">
              <h4 className="font-bold text-slate-900 mb-2">هل ترغب في طلب هذه الخدمة؟</h4>
              <p className="text-xs text-slate-600 mb-6">تواصل معنا مباشرة عبر الواتساب وسنقوم بالتواصل معك فوراً.</p>
              <WhatsAppButton serviceName={service.title} phoneNumber={service.whatsappNumber} />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const paths = servicesData.map((s) => ({
    params: { slug: s.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const service = servicesData.find((s) => s.slug === params.slug) || null;
  return { props: { service } };
}
