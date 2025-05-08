
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { CalendarIcon, Search, Users, MapPin, Star } from 'lucide-react';
import { cities, hotels } from '@/data/hotels';

const Index = () => {
  const { t, language } = useLanguage();
  const featuredHotels = hotels.filter(hotel => hotel.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1588422333078-44ad73367bcb?q=80&w=1974&auto=format&fit=crop" 
            alt="Yemen Cityscape" 
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-20 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            {t('welcome')}
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t('tagline')}
          </p>
        </div>
      </section>

      {/* Search Box */}
      <section className="relative z-20 container mx-auto px-4 -mt-8">
        <Card className="p-4 shadow-lg">
          <CardContent className="p-4">
            <form className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-4 relative">
                <Search className="absolute left-3 rtl:left-auto rtl:right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input 
                  placeholder={t('where_to')} 
                  className={`pl-10 rtl:pl-4 rtl:pr-10`} 
                />
              </div>
              <div className="md:col-span-3 relative">
                <CalendarIcon className="absolute left-3 rtl:left-auto rtl:right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input 
                  type="date" 
                  className={`pl-10 rtl:pl-4 rtl:pr-10`} 
                  placeholder={t('check_in')} 
                />
              </div>
              <div className="md:col-span-3 relative">
                <CalendarIcon className="absolute left-3 rtl:left-auto rtl:right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input 
                  type="date" 
                  className={`pl-10 rtl:pl-4 rtl:pr-10`} 
                  placeholder={t('check_out')} 
                />
              </div>
              <div className="md:col-span-2">
                <Button className="w-full bg-yemen-DEFAULT hover:bg-yemen-dark">
                  {t('search')}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </section>

      {/* Top Destinations */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">{t('top_destinations')}</h2>
          <Link to="/hotels" className="text-yemen-DEFAULT hover:text-yemen-dark">
            {t('view_all')}
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-6">
          {cities.map((city, index) => (
            <Link key={index} to={`/hotels?city=${city.name}`}>
              <div className="group relative rounded-lg overflow-hidden shadow-md h-60">
                <img 
                  src={city.image} 
                  alt={city.name} 
                  className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                  <h3 className="text-white text-lg font-semibold">{city.name}</h3>
                  <p className="text-white/80 text-sm">
                    {city.count} {language === 'ar' ? 'فنادق' : 'hotels'}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Hotels */}
      <section className="container mx-auto px-4 py-16 bg-gray-50">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">{t('featured_hotels')}</h2>
          <Link to="/hotels" className="text-yemen-DEFAULT hover:text-yemen-dark">
            {t('view_all')}
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredHotels.slice(0, 6).map((hotel) => (
            <Link key={hotel.id} to={`/hotels/${hotel.id}`}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                <div className="relative h-48">
                  <img 
                    src={hotel.images[0]} 
                    alt={hotel.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4 flex-grow flex flex-col">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-medium">{hotel.name}</h3>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-yemen-accent text-yemen-accent" />
                      <span className="ms-1 text-sm font-medium">{hotel.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <MapPin className="w-4 h-4 me-1" />
                    <span>{hotel.city}, {hotel.country}</span>
                  </div>
                  <div className="mt-auto flex items-end justify-between">
                    <div className="flex items-baseline">
                      <span className="text-lg font-bold">
                        ${hotel.pricePerNight}
                      </span>
                      <span className="text-gray-500 text-sm ms-1">/ {t('night')}</span>
                    </div>
                    <div className="text-sm text-gray-500">
                      {hotel.reviewCount} {t('reviews')}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Index;
