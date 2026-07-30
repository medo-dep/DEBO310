export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, phone, email, service, message } = req.body || {};

  // Input Validation
  if (!name || (!phone && !email) || !service) {
    return res.status(400).json({ 
      success: false, 
      message: 'الرجاء تعبئة الاسم ورقم الهاتف أو البريد الإلكتروني مع اسم الخدمة.' 
    });
  }

  try {
    // Process notification / email service logic safely using environment variables
    console.log('جديد طلب خدمة:', { name, phone, email, service, message, timestamp: new Date().toISOString() });

    return res.status(200).json({ 
      success: true, 
      message: 'تم استلام طلبك بنجاح وسنتواصل معك في أقرب وقت.' 
    });
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'حدث خطأ أثناء معالجة الطلب، يرجى المحاولة لاحقاً أو التواصل عبر الواتساب.' 
    });
  }
}
