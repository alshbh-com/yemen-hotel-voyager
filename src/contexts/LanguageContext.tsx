
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

// Arabic translations
const arTranslations: Record<string, string> = {
  'home': 'الرئيسية',
  'hotels': 'الفنادق',
  'search': 'بحث',
  'bookings': 'الحجوزات',
  'profile': 'الملف الشخصي',
  'login': 'تسجيل الدخول',
  'signup': 'إنشاء حساب',
  'logout': 'تسجيل الخروج',
  'admin': 'لوحة التحكم',
  'welcome': 'مرحبًا بك في فندقي',
  'tagline': 'اكتشف أفضل الفنادق في اليمن',
  'search_placeholder': 'البحث عن فنادق، مدن، أو مناطق',
  'where_to': 'إلى أين؟',
  'check_in': 'تاريخ الوصول',
  'check_out': 'تاريخ المغادرة',
  'guests': 'الضيوف',
  'search_hotels': 'البحث عن الفنادق',
  'top_destinations': 'أفضل الوجهات',
  'featured_hotels': 'فنادق مميزة',
  'view_all': 'عرض الكل',
  'filters': 'الفلاتر',
  'price_range': 'نطاق السعر',
  'hotel_class': 'فئة الفندق',
  'amenities': 'المرافق',
  'guest_rating': 'تقييم الضيوف',
  'apply_filters': 'تطبيق الفلاتر',
  'reset_filters': 'إعادة تعيين',
  'sort_by': 'ترتيب حسب',
  'price_low_to_high': 'السعر: من الأقل إلى الأعلى',
  'price_high_to_low': 'السعر: من الأعلى إلى الأقل',
  'rating_high_to_low': 'التقييم: من الأعلى إلى الأقل',
  'distance': 'المسافة من',
  'show_on_map': 'عرض على الخريطة',
  'night': 'ليلة',
  'reviews': 'تقييمات',
  'book_now': 'احجز الآن',
  'hotel_info': 'معلومات الفندق',
  'rooms': 'الغرف',
  'photos': 'الصور',
  'location': 'الموقع',
  'reviews_heading': 'التقييمات',
  'about': 'عن الفندق',
  'room_type': 'نوع الغرفة',
  'admin_login': 'تسجيل دخول المدير',
  'admin_panel': 'لوحة تحكم المدير',
  'add_hotel': 'إضافة فندق',
  'edit_hotel': 'تعديل الفندق',
  'delete_hotel': 'حذف الفندق',
  'manage_hotels': 'إدارة الفنادق',
  'manage_bookings': 'إدارة الحجوزات',
  'hotel_name': 'اسم الفندق',
  'hotel_address': 'عنوان الفندق',
  'hotel_description': 'وصف الفندق',
  'submit': 'إرسال',
  'cancel': 'إلغاء',
  'email': 'البريد الإلكتروني',
  'password': 'كلمة المرور',
  'language': 'اللغة'
};

// English translations
const enTranslations: Record<string, string> = {
  'home': 'Home',
  'hotels': 'Hotels',
  'search': 'Search',
  'bookings': 'Bookings',
  'profile': 'Profile',
  'login': 'Login',
  'signup': 'Sign Up',
  'logout': 'Logout',
  'admin': 'Admin',
  'welcome': 'Welcome to Fandiqi',
  'tagline': 'Discover the best hotels in Yemen',
  'search_placeholder': 'Search for hotels, cities, or areas',
  'where_to': 'Where to?',
  'check_in': 'Check-in',
  'check_out': 'Check-out',
  'guests': 'Guests',
  'search_hotels': 'Search Hotels',
  'top_destinations': 'Top Destinations',
  'featured_hotels': 'Featured Hotels',
  'view_all': 'View All',
  'filters': 'Filters',
  'price_range': 'Price Range',
  'hotel_class': 'Hotel Class',
  'amenities': 'Amenities',
  'guest_rating': 'Guest Rating',
  'apply_filters': 'Apply Filters',
  'reset_filters': 'Reset',
  'sort_by': 'Sort By',
  'price_low_to_high': 'Price: Low to High',
  'price_high_to_low': 'Price: High to Low',
  'rating_high_to_low': 'Rating: High to Low',
  'distance': 'Distance from',
  'show_on_map': 'Show on Map',
  'night': 'night',
  'reviews': 'reviews',
  'book_now': 'Book Now',
  'hotel_info': 'Hotel Info',
  'rooms': 'Rooms',
  'photos': 'Photos',
  'location': 'Location',
  'reviews_heading': 'Reviews',
  'about': 'About',
  'room_type': 'Room Type',
  'admin_login': 'Admin Login',
  'admin_panel': 'Admin Panel',
  'add_hotel': 'Add Hotel',
  'edit_hotel': 'Edit Hotel',
  'delete_hotel': 'Delete Hotel',
  'manage_hotels': 'Manage Hotels',
  'manage_bookings': 'Manage Bookings',
  'hotel_name': 'Hotel Name',
  'hotel_address': 'Hotel Address',
  'hotel_description': 'Hotel Description',
  'submit': 'Submit',
  'cancel': 'Cancel',
  'email': 'Email',
  'password': 'Password',
  'language': 'Language'
};

// Create the language context
const LanguageContext = createContext<LanguageContextType>({
  language: 'ar',
  toggleLanguage: () => {},
  t: (key: string) => key,
});

export const useLanguage = () => useContext(LanguageContext);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved === 'en' ? 'en' : 'ar') as Language;
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.body.className = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'ar' ? 'en' : 'ar'));
  };

  const t = (key: string): string => {
    const translations = language === 'ar' ? arTranslations : enTranslations;
    return translations[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
