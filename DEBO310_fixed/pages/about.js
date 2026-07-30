import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Head>
        <title>عن ديبو | DEBO Travel & Public Services</title>
      </Head>

      <div className="min-h-screen flex flex-col bg-slate-50">
        <Header />

        <main className="max-w-4xl mx-auto px-4 py-16 flex-grow">
          <h1 className="text-3xl font-extrabold text-slate-900 mb-6 border-b pb-4">عن ديبو للخدمات العامة والسفر</h1>
          
          <div className="prose max-w-none text-slate-700 space-y-6 leading-relaxed">
            <p>
              مكتب **ديبو للسفر والخدمات العامة** هو وجهتك الموثوقة للحصول على الاستشارات والخدمات العامة وحجوزات السفر بكل سهولة ويسر.
            </p>
            <p>
              نهدف إلى تقديم حلول متكاملة تضمن راحة العميل وتوفير الوقت والجهد في تنفيذ كافة الإجراءات الرسمية، الحجوزات الفندقية، وتذاكر الطيران بأعلى معايير الدقة والاحترافية.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">رؤيتنا</h2>
            <p>أن نكون الخيار الأول للعملاء في تقديم الخدمات العامة وحلول السفر الموثوقة والسريعة.</p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">قيمنا الأساسية</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>الشفافية والأمانة في التعامل.</li>
              <li>السرعة والإنجاز الفعال.</li>
              <li>الالتزام بتقديم أفضل الأسعار والخدمات.</li>
            </ul>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
