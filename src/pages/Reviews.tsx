
import React from 'react';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Reviews = () => {
  const { language } = useLanguage();

  const reviews = [
    {
      id: 1,
      name: language === 'ar' ? 'أحمد محمد' : 'Ahmed Mohammed',
      review: language === 'ar' 
        ? 'تجربة رائعة مع محجوز! حجزت فندقاً في عدن وكانت الإقامة مريحة جداً. فريق خدمة العملاء كان متعاوناً للغاية.'
        : 'Amazing experience with Mahjooz! I booked a hotel in Aden and the stay was very comfortable. The customer service team was extremely helpful.',
      rating: 5,
      date: language === 'ar' ? 'مارس 2025' : 'March 2025',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop'
    },
    {
      id: 2,
      name: language === 'ar' ? 'سارة علي' : 'Sara Ali',
      review: language === 'ar' 
        ? 'أفضل منصة حجز فنادق استخدمتها. الأسعار تنافسية والخيارات متنوعة. سأستخدمها دائماً في رحلاتي القادمة.'
        : 'The best hotel booking platform I have used. Competitive prices and diverse options. I will always use it in my future trips.',
      rating: 4,
      date: language === 'ar' ? 'فبراير 2025' : 'February 2025',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop'
    },
    {
      id: 3,
      name: language === 'ar' ? 'محمد عبدالله' : 'Mohammed Abdullah',
      review: language === 'ar' 
        ? 'مرونة في الحجز والإلغاء. استخدمت محجوز في رحلتي الأخيرة واضطررت لتغيير موعد الحجز، وكانت العملية سهلة وسريعة.'
        : 'Flexibility in booking and cancellation. I used Mahjooz on my last trip and had to change the booking date, and the process was easy and quick.',
      rating: 5,
      date: language === 'ar' ? 'يناير 2025' : 'January 2025',
      image: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop'
    },
    {
      id: 4,
      name: language === 'ar' ? 'فاطمة حسين' : 'Fatima Hussein',
      review: language === 'ar' 
        ? 'تطبيق سهل الاستخدام وخيارات دفع متنوعة. أحب استخدام محجوز لسهولة التصفح وتنوع طرق الدفع المتاحة.'
        : 'Easy to use application and various payment options. I love using Mahjooz for the ease of browsing and the variety of available payment methods.',
      rating: 4,
      date: language === 'ar' ? 'ديسمبر 2024' : 'December 2024',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 5,
      name: language === 'ar' ? 'خالد ناصر' : 'Khalid Nasser',
      review: language === 'ar' 
        ? 'أسعار تنافسية وعروض حصرية. وجدت على محجوز أسعاراً أقل من المنصات الأخرى، بالإضافة إلى عروض خاصة للأعضاء.'
        : 'Competitive prices and exclusive offers. I found lower prices on Mahjooz than other platforms, in addition to special offers for members.',
      rating: 5,
      date: language === 'ar' ? 'نوفمبر 2024' : 'November 2024',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop'
    },
    {
      id: 6,
      name: language === 'ar' ? 'نورة سالم' : 'Noura Salem',
      review: language === 'ar' 
        ? 'المساعد الذكي في محجوز ساعدني في العثور على الفندق المناسب حسب ميزانيتي ومتطلباتي. تجربة رائعة!'
        : 'The AI assistant in Mahjooz helped me find the right hotel according to my budget and requirements. Wonderful experience!',
      rating: 5,
      date: language === 'ar' ? 'أكتوبر 2024' : 'October 2024',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop'
    }
  ];

  const renderStars = (count) => {
    return Array(5).fill(0).map((_, index) => (
      <Star 
        key={index} 
        className={`h-4 w-4 ${index < count ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
            {language === 'ar' ? 'آراء عملائنا' : 'Customer Reviews'}
          </h1>
          <p className="text-xl text-gray-600">
            {language === 'ar'
              ? 'اكتشف ما يقوله عملاؤنا عن تجربتهم مع محجوز'
              : 'Discover what our customers say about their experience with Mahjooz'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <Card key={review.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-0 bg-gradient-to-br from-white to-purple-50">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img 
                        src={review.image} 
                        alt={review.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold">{review.name}</h3>
                    <div className="flex mt-1">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                  <div className="ml-auto text-gray-400 text-sm">
                    {review.date}
                  </div>
                </div>
                <div className="relative">
                  <Quote className="h-6 w-6 text-indigo-200 absolute top-0 left-0 -translate-x-2 -translate-y-2" />
                  <p className="text-gray-600 pt-2 px-3">{review.review}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-indigo-900 to-purple-800 text-white p-8 rounded-2xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              {language === 'ar' 
                ? 'شاركنا تجربتك'
                : 'Share Your Experience'}
            </h2>
            <p className="text-lg mb-8">
              {language === 'ar'
                ? 'رأيك يهمنا! شارك تجربتك مع محجوز وساعدنا في تحسين خدماتنا'
                : 'Your opinion matters! Share your experience with Mahjooz and help us improve our services'}
            </p>
            <button className="bg-amber-500 hover:bg-amber-600 text-white py-3 px-6 rounded-full font-bold transition-colors">
              {language === 'ar' ? 'أضف تقييمك' : 'Add Your Review'}
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Reviews;
