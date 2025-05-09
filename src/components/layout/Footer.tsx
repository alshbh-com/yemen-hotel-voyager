
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Facebook, Twitter, Instagram, Mail, Phone, Star, MessageSquare, Users } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Footer = () => {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();
  const isMobile = useIsMobile();

  return (
    <footer className="bg-yemen-DEFAULT text-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="w-full">
            <Link to="/" className="text-2xl font-bold text-white">
              {language === 'ar' ? 'محجوز' : 'Mahjooz'}
            </Link>
            <p className="mt-2 text-sm text-white/80">
              {language === 'ar' 
                ? 'منصة حجز الفنادق الأولى في اليمن. اكتشف أفضل الفنادق واحجز بأفضل الأسعار.'
                : 'The premier hotel booking platform in Yemen. Discover the best hotels and book at the best prices.'
              }
            </p>
            <div className="flex mt-4 space-x-4 rtl:space-x-reverse">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="w-full">
            <h3 className="font-semibold text-lg mb-4">
              {language === 'ar' ? 'روابط سريعة' : 'Quick Links'}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/hotels" className="text-white/80 hover:text-white transition-colors">
                  {t('hotels')}
                </Link>
              </li>
              <li>
                <Link to="/why-us" className="text-white/80 hover:text-white transition-colors">
                  {language === 'ar' ? 'لماذا محجوز' : 'Why Mahjooz'}
                </Link>
              </li>
              <li>
                <Link to="/ai-assistant" className="text-white/80 hover:text-white transition-colors">
                  {language === 'ar' ? 'المساعد الذكي' : 'AI Assistant'}
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-white/80 hover:text-white transition-colors">
                  {t('login')}
                </Link>
              </li>
              <li>
                <Link to="/signup" className="text-white/80 hover:text-white transition-colors">
                  {t('signup')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Additional Links */}
          <div className="w-full">
            <h3 className="font-semibold text-lg mb-4">
              {language === 'ar' ? 'روابط إضافية' : 'Additional Links'}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/reviews" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <Star className="h-4 w-4 me-2" />
                  {language === 'ar' ? 'التقييمات' : 'Reviews'}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <MessageSquare className="h-4 w-4 me-2" />
                  {language === 'ar' ? 'اتصل بنا' : 'Contact Us'}
                </Link>
              </li>
              <li>
                <a href="/hotels?city=صنعاء" className="text-white/80 hover:text-white transition-colors">
                  {language === 'ar' ? 'صنعاء' : 'Sana\'a'}
                </a>
              </li>
              <li>
                <a href="/hotels?city=تعز" className="text-white/80 hover:text-white transition-colors">
                  {language === 'ar' ? 'تعز' : 'Taiz'}
                </a>
              </li>
              <li>
                <a href="/hotels?city=المكلا" className="text-white/80 hover:text-white transition-colors">
                  {language === 'ar' ? 'المكلا' : 'Al Mukalla'}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="w-full">
            <h3 className="font-semibold text-lg mb-4">
              {language === 'ar' ? 'اتصل بنا' : 'Contact Us'}
            </h3>
            <div className="space-y-3">
              <p className="flex items-center text-white/80">
                <Mail className="h-4 w-4 flex-shrink-0 me-2" />
                <span>support@mahjooz.com</span>
              </p>
              <p className="flex items-center text-white/80">
                <Phone className="h-4 w-4 flex-shrink-0 me-2" />
                <span>+967 01 234 5678</span>
              </p>
              <p className="flex items-center text-white/80 mt-4">
                <Users className="h-4 w-4 flex-shrink-0 me-2" />
                <span>{language === 'ar' ? 'تابعنا على وسائل التواصل الاجتماعي' : 'Follow us on social media'}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center">
          <p className="text-sm text-white/80">
            &copy; {currentYear} {language === 'ar' ? 'محجوز' : 'Mahjooz'}. 
            {language === 'ar' 
              ? ' جميع الحقوق محفوظة.'
              : ' All rights reserved.'
            }
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
