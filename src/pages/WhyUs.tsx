
import React from 'react';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Building, 
  CheckCircle2,
  DollarSign,
  Clock,
  Shield,
  Users,
  ThumbsUp
} from 'lucide-react';

const WhyUs = () => {
  const { language } = useLanguage();

  const reasons = [
    {
      title: language === 'ar' ? 'أكبر مجموعة فنادق' : 'Largest Hotel Collection',
      description: language === 'ar' 
        ? 'نوفر أكبر مجموعة من الفنادق المتميزة في مختلف المناطق والأسعار'
        : 'We provide the largest collection of premium hotels across different regions and price ranges',
      icon: Building
    },
    {
      title: language === 'ar' ? 'أفضل الأسعار مضمونة' : 'Best Price Guarantee',
      description: language === 'ar' 
        ? 'نضمن لك أفضل الأسعار وإذا وجدت سعراً أقل سنقوم بمطابقته'
        : 'We guarantee the best prices, and if you find a lower price, we will match it',
      icon: DollarSign
    },
    {
      title: language === 'ar' ? 'حجز سريع وآمن' : 'Fast & Secure Booking',
      description: language === 'ar' 
        ? 'نظام حجز سريع وآمن مع تأكيد فوري لحجزك'
        : 'Fast and secure booking system with instant confirmation',
      icon: Clock
    },
    {
      title: language === 'ar' ? 'دفع آمن' : 'Secure Payment',
      description: language === 'ar' 
        ? 'خيارات دفع متنوعة وآمنة تضمن حماية بياناتك المالية'
        : 'Diverse and secure payment options to protect your financial data',
      icon: Shield
    },
    {
      title: language === 'ar' ? 'دعم العملاء على مدار الساعة' : '24/7 Customer Support',
      description: language === 'ar' 
        ? 'فريق دعم متاح على مدار الساعة لمساعدتك في أي وقت'
        : 'Support team available 24/7 to assist you at any time',
      icon: Users
    },
    {
      title: language === 'ar' ? 'تقييمات حقيقية' : 'Genuine Reviews',
      description: language === 'ar' 
        ? 'تقييمات واقعية من نزلاء حقيقيين تساعدك على اتخاذ القرار الصحيح'
        : 'Authentic reviews from real guests help you make the right decision',
      icon: ThumbsUp
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
            {language === 'ar' ? 'لماذا محجوز؟' : 'Why Mahjooz?'}
          </h1>
          <p className="text-xl text-gray-600">
            {language === 'ar'
              ? 'نحن نسعى لتقديم أفضل تجربة حجز فندقي في العالم العربي'
              : 'We strive to provide the best hotel booking experience in the Arab world'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-0 bg-gradient-to-br from-white to-purple-50">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center p-4">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-3 rounded-full mb-4">
                    <reason.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-indigo-900 to-purple-800 text-white p-8 rounded-2xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              {language === 'ar' 
                ? 'انضم إلى ملايين المسافرين الذين يثقون بنا'
                : 'Join millions of travelers who trust us'}
            </h2>
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="text-center">
                <p className="text-4xl font-bold text-amber-300">500+</p>
                <p className="text-sm">{language === 'ar' ? 'فنادق' : 'Hotels'}</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-amber-300">50K+</p>
                <p className="text-sm">{language === 'ar' ? 'عميل سعيد' : 'Happy Customers'}</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-amber-300">100+</p>
                <p className="text-sm">{language === 'ar' ? 'مدن' : 'Cities'}</p>
              </div>
            </div>
            <p className="text-lg">
              {language === 'ar'
                ? 'جرب خدماتنا الآن ولن تندم أبدًا. نحن نضمن لك تجربة حجز مميزة وإقامة مريحة.'
                : 'Try our services now and you will never regret it. We guarantee a unique booking experience and a comfortable stay.'}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WhyUs;
