
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';
import { Menu, X, Globe, User, LogOut, Settings } from 'lucide-react';

const Navbar = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const { isAuthenticated, isAdmin, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-indigo-900 to-purple-800 shadow-lg sticky top-0 z-40">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-white font-bold text-2xl">
            {language === 'ar' ? 'محجوز' : 'Mahjooz'}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4 space-x-reverse:rtl">
          <Link to="/" className="px-3 py-2 text-sm font-medium text-white hover:text-yellow-300 transition-colors">{t('home')}</Link>
          <Link to="/hotels" className="px-3 py-2 text-sm font-medium text-white hover:text-yellow-300 transition-colors">{t('hotels')}</Link>
          <Link to="/why-us" className="px-3 py-2 text-sm font-medium text-white hover:text-yellow-300 transition-colors">{language === 'ar' ? 'لماذا محجوز' : 'Why Mahjooz'}</Link>
          <Link to="/reviews" className="px-3 py-2 text-sm font-medium text-white hover:text-yellow-300 transition-colors">{language === 'ar' ? 'التقييمات' : 'Reviews'}</Link>
          <Link to="/contact" className="px-3 py-2 text-sm font-medium text-white hover:text-yellow-300 transition-colors">{language === 'ar' ? 'تواصل معنا' : 'Contact Us'}</Link>
          <Link to="/ai-assistant" className="px-3 py-2 text-sm font-medium text-white hover:text-yellow-300 transition-colors">{language === 'ar' ? 'المساعد الذكي' : 'AI Assistant'}</Link>
          
          {isAuthenticated && (
            <Link to="/bookings" className="px-3 py-2 text-sm font-medium text-white hover:text-yellow-300 transition-colors">{t('bookings')}</Link>
          )}
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4 space-x-reverse:rtl">
          {/* Admin Panel Button */}
          {isAdmin ? (
            <Link to="/admin">
              <Button variant="outline" size="sm" className="flex items-center gap-1 bg-amber-600 text-white border-amber-500 hover:bg-amber-700">
                <Settings className="h-4 w-4" />
                <span>{language === 'ar' ? 'لوحة التحكم' : 'Admin Panel'}</span>
              </Button>
            </Link>
          ) : (
            <Link to="/admin-login">
              <Button variant="outline" size="sm" className="flex items-center gap-1 bg-amber-600 text-white border-amber-500 hover:bg-amber-700">
                <Settings className="h-4 w-4" />
                <span>{language === 'ar' ? 'لوحة التحكم' : 'Admin Panel'}</span>
              </Button>
            </Link>
          )}

          {/* Language Toggle */}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleLanguage} 
            className="rounded-full text-white hover:bg-purple-700"
          >
            <Globe className="h-5 w-5" />
            <span className="sr-only">{t('language')}</span>
          </Button>

          {/* Auth Buttons */}
          {isAuthenticated ? (
            <div className="flex items-center space-x-2 space-x-reverse:rtl">
              <Link to="/profile">
                <Button variant="ghost" size="icon" className="rounded-full text-white hover:bg-purple-700">
                  <User className="h-5 w-5" />
                  <span className="sr-only">{t('profile')}</span>
                </Button>
              </Link>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={logout} 
                className="rounded-full text-white hover:bg-purple-700"
              >
                <LogOut className="h-5 w-5" />
                <span className="sr-only">{t('logout')}</span>
              </Button>
            </div>
          ) : (
            <div className="flex space-x-2 space-x-reverse:rtl">
              <Link to="/login">
                <Button variant="ghost" size="sm" className="text-white hover:bg-purple-700">{t('login')}</Button>
              </Link>
              <Link to="/signup">
                <Button variant="default" size="sm" className="bg-amber-500 hover:bg-amber-600 text-white">
                  {t('signup')}
                </Button>
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden rounded-full text-white hover:bg-purple-700"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-indigo-900 border-t border-indigo-800">
          <div className="container mx-auto px-4 py-3 space-y-1">
            <Link 
              to="/" 
              className="block px-3 py-2 text-base font-medium text-white hover:bg-indigo-800 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('home')}
            </Link>
            <Link 
              to="/hotels" 
              className="block px-3 py-2 text-base font-medium text-white hover:bg-indigo-800 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('hotels')}
            </Link>
            <Link 
              to="/why-us" 
              className="block px-3 py-2 text-base font-medium text-white hover:bg-indigo-800 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              {language === 'ar' ? 'لماذا محجوز' : 'Why Mahjooz'}
            </Link>
            <Link 
              to="/reviews" 
              className="block px-3 py-2 text-base font-medium text-white hover:bg-indigo-800 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              {language === 'ar' ? 'التقييمات' : 'Reviews'}
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 text-base font-medium text-white hover:bg-indigo-800 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
            </Link>
            <Link 
              to="/ai-assistant" 
              className="block px-3 py-2 text-base font-medium text-white hover:bg-indigo-800 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              {language === 'ar' ? 'المساعد الذكي' : 'AI Assistant'}
            </Link>
            
            {isAuthenticated && (
              <Link 
                to="/bookings" 
                className="block px-3 py-2 text-base font-medium text-white hover:bg-indigo-800 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('bookings')}
              </Link>
            )}
            
            {/* Admin Panel Link for Mobile */}
            <Link 
              to={isAdmin ? "/admin" : "/admin-login"} 
              className="block px-3 py-2 text-base font-medium text-white hover:bg-indigo-800 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              {language === 'ar' ? 'لوحة التحكم' : 'Admin Panel'}
            </Link>
            
            {!isAuthenticated && (
              <>
                <Link 
                  to="/login" 
                  className="block px-3 py-2 text-base font-medium text-white hover:bg-indigo-800 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('login')}
                </Link>
                <Link 
                  to="/signup" 
                  className="block px-3 py-2 text-base font-medium text-white hover:bg-indigo-800 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('signup')}
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
