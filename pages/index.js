import { services } from '../lib/services'
import ServiceCard from '../components/ServiceCard'

export default function Home(){
  return (
    <div>
      <section className="bg-white py-12" id="home">
        <div className="container flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <p className="text-gold font-bold">DEBO For General Service</p>
            <h1 className="text-3xl md:text-4xl font-bold text-navy mt-3">Integrated services for travel, study, and logistics</h1>
            <p className="text-gray-600 mt-3">We simplify visas, travel, student admissions, and residency procedures — reliable support from start to arrival.</p>
            <div className="mt-5 flex gap-3">
              <a href="#services" className="btn-primary">Explore Our Services</a>
              <a href="https://wa.me/905376085033" className="btn-cta">Contact via WhatsApp</a>
            </div>
          </div>
          <div className="flex-1">
            <div className="h-64 bg-gray-100 rounded-md flex items-center justify-center">Logo / visual</div>
          </div>
        </div>
      </section>

      <section id="services" className="py-12">
        <div className="container">
          <h2 className="text-2xl font-bold text-navy mb-6">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {services.map(s=> <ServiceCard key={s.id} s={s} />)}
          </div>
        </div>
      </section>

      <section id="about" className="py-12 bg-gray-50">
        <div className="container">
          <h2 className="text-2xl font-bold text-navy mb-4">من نحن</h2>
          <p className="text-gray-700">نحن في مؤسسة 'ديبو للخدمات العامة' (DEBO) نؤمن بأن الانتقال نحو خطوة جديدة، سواء للسياحة، أو لاستكمال المسيرة الأكاديمية، أو لتأسيس حياة مستقرة، يجب أن يكون تجربة سلسة وخالية من التعقيدات. انطلقنا من إدراكنا العميق للاحتياجات الحقيقية للمسافرين، وتحديداً الطلاب الوافدين إلى تركيا. ومن خلال جذورنا الممتدة في العمل القيادي والطلابي داخل الأوساط الأكاديمية التركية الحيوية كمدينة قيصري، لامسنا عن قرب كافة التحديات الإدارية واللوجستية التي يواجهها الأفراد. لذا، كرسنا جهودنا لتقديم منظومة خدمات لوجستية وتعليمية متكاملة؛ تبدأ من تيسير القبولات الجامعية واستخراج التأشيرات، وصولاً إلى توفير التأمين الصحي الشامل. نحن شريكك الموثوق ورفيق دربك نحو بلوغ أهدافك باحترافية وأمان.</p>
        </div>
      </section>

      <section id="faq" className="py-12">
        <div className="container">
          <h2 className="text-2xl font-bold text-navy mb-4">Frequently Asked Questions (FAQ)</h2>
          {/* simple FAQ items */}
          <div className="max-w-3xl">
            <details className="border p-3 rounded mb-2"><summary className="font-semibold">Study in Turkey (Admissions & Requirements)</summary><div className="mt-2 text-gray-700">We help prepare documents and guide admissions processes.</div></details>
            <details className="border p-3 rounded mb-2"><summary className="font-semibold">Visas & Clearances</summary><div className="mt-2 text-gray-700">Assistance with visa application and clearances for various countries.</div></details>
            <details className="border p-3 rounded mb-2"><summary className="font-semibold">Turkish Residency & Insurance</summary><div className="mt-2 text-gray-700">Guidance on residency permits and required insurance.</div></details>
          </div>
        </div>
      </section>
    </div>
  )
}
