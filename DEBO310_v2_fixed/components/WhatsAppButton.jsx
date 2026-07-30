export default function WhatsAppButton({ serviceName, phoneNumber = "905000000000" }) {
  const message = serviceName 
    ? `مرحباً، أود الاستفسار وحجز خدمة: ${serviceName}`
    : "مرحباً، أود الاستفسار عن خدمات ديبو للسفر والخدمات العامة";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-xl shadow-md transition-all hover:scale-105 text-base w-full sm:w-auto"
    >
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.762.459 3.48 1.332 5.001l-1.416 5.172 5.294-1.388c1.464.798 3.115 1.218 4.776 1.219h.004c5.505 0 9.988-4.478 9.989-9.985 0-2.668-1.038-5.176-2.924-7.062-1.886-1.886-4.394-2.925-7.065-2.925zm0 18.172h-.003c-1.493 0-2.957-.401-4.233-1.159l-.304-.18-3.146.825.839-3.067-.198-.315c-.833-1.326-1.273-2.868-1.273-4.453.001-4.408 3.588-7.994 7.997-7.994 2.135 0 4.141.831 5.651 2.342 1.51 1.511 2.341 3.517 2.34 5.652-.001 4.409-3.588 7.994-7.996 7.994z"/>
      </svg>
      <span>طلب الخدمة عبر الواتساب</span>
    </a>
  );
}
