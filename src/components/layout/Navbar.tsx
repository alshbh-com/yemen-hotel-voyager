
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';
import { Menu, X, Globe, User, LogOut } from 'lucide-react';

const Navbar = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const { isAuthenticated, isAdmin, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-40">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-yemen-DEFAULT font-bold text-2xl">
            {language === 'ar' ? 'فندقي' : 'Fandiqi'}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4 space-x-reverse:rtl">
          <Link to="/" className="px-3 py-2 text-sm font-medium hover:text-yemen-DEFAULT">{t('home')}</Link>
          <Link to="/hotels" className="px-3 py-2 text-sm font-medium hover:text-yemen-DEFAULT">{t('hotels')}</Link>
          
          {isAuthenticated && (
            <Link to="/bookings" className="px-3 py-2 text-sm font-medium hover:text-yemen-DEFAULT">{t('bookings')}</Link>
          )}
          
          {isAdmin && (
            <Link to="/admin" className="px-3 py-2 text-sm font-medium hover:text-yemen-DEFAULT">{t('admin')}</Link>
          )}
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4 space-x-reverse:rtl">
          {/* Language Toggle */}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleLanguage} 
            className="rounded-full"
          >
            <Globe className="h-5 w-5" />
            <span className="sr-only">{t('language')}</span>
          </Button>

          {/* Auth Buttons */}
          {isAuthenticated ? (
            <div className="flex items-center space-x-2 space-x-reverse:rtl">
              <Link to="/profile">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <User className="h-5 w-5" />
                  <span className="sr-only">{t('profile')}</span>
                </Button>
              </Link>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={logout} 
                className="rounded-full"
              >
                <LogOut className="h-5 w-5" />
                <span className="sr-only">{t('logout')}</span>
              </Button>
            </div>
          ) : (
            <div className="flex space-x-2 space-x-reverse:rtl">
              <Link to="/login">
                <Button variant="ghost" size="sm">{t('login')}</Button>
              </Link>
              <Link to="/signup">
                <Button variant="default" size="sm" className="bg-yemen-DEFAULT hover:bg-yemen-dark">
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
            className="md:hidden rounded-full"
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
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-3 space-y-1">
            <Link 
              to="/" 
              className="block px-3 py-2 text-base font-medium hover:bg-yemen-muted rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('home')}
            </Link>
            <Link 
              to="/hotels" 
              className="block px-3 py-2 text-base font-medium hover:bg-yemen-muted rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('hotels')}
            </Link>
            
            {isAuthenticated && (
              <Link 
                to="/bookings" 
                className="block px-3 py-2 text-base font-medium hover:bg-yemen-muted rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('bookings')}
              </Link>
            )}
            
            {isAdmin && (
              <Link 
                to="/admin" 
                className="block px-3 py-2 text-base font-medium hover:bg-yemen-muted rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('admin')}
              </Link>
            )}
            
            {!isAuthenticated && (
              <>
                <Link 
                  to="/login" 
                  className="block px-3 py-2 text-base font-medium hover:bg-yemen-muted rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('login')}
                </Link>
                <Link 
                  to="/signup" 
                  className="block px-3 py-2 text-base font-medium hover:bg-yemen-muted rounded-md"
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
