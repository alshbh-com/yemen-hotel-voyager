
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { hotels } from '@/data/hotels';
import { 
  Star, 
  MapPin, 
  Calendar, 
  Users, 
  ChevronLeft, 
  ChevronRight,
  Wifi,
  Pool,
  Utensils,
  Car,
  Bath,
  Dumbbell
} from 'lucide-react';

const HotelDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  
  const hotel = hotels.find(h => h.id === id);
  
  if (!hotel) {
    return <div className="text-center py-20">Hotel not found</div>;
  }
  
  // Get amenity icon based on amenity name
  const getAmenityIcon = (amenity: string) => {
    if (amenity.includes('واي فاي') || amenity.includes('Wi-Fi')) return <Wifi className="w-5 h-5" />;
    if (amenity.includes('مسبح') || amenity.includes('pool')) return <Pool className="w-5 h-5" />;
    if (amenity.includes('مطعم') || amenity.includes('restaurant')) return <Utensils className="w-5 h-5" />;
    if (amenity.includes('موقف') || amenity.includes('parking')) return <Car className="w-5 h-5" />;
    if (amenity.includes('خدمة الغرف') || amenity.includes('room service')) return <Bath className="w-5 h-5" />;
    if (amenity.includes('لياقة') || amenity.includes('fitness')) return <Dumbbell className="w-5 h-5" />;
    return null;
  };
  
  const nextImage = () => {
    setActiveImageIndex((prev) => 
      prev === hotel.images.length - 1 ? 0 : prev + 1
    );
  };
  
  const prevImage = () => {
    setActiveImageIndex((prev) => 
      prev === 0 ? hotel.images.length - 1 : prev - 1
    );
  };
  
  const handleRoomSelection = (roomId: string) => {
    setSelectedRoom(roomId === selectedRoom ? null : roomId);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <div className="mb-6 flex items-center text-sm">
          <button 
            onClick={() => navigate(-1)} 
            className="text-yemen-DEFAULT hover:underline flex items-center"
          >
            <ChevronLeft className="w-4 h-4 rtl:hidden" />
            <ChevronRight className="w-4 h-4 ltr:hidden" />
            <span>{language === 'ar' ? 'العودة' : 'Back'}</span>
          </button>
          <span className="mx-2">/</span>
          <span>{hotel.name}</span>
        </div>
        
        {/* Hotel Name and Rating */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{hotel.name}</h1>
            <div className="flex items-center">
              <div className="flex items-center mr-4 rtl:ml-4 rtl:mr-0">
                <Star className="w-5 h-5 fill-yemen-accent text-yemen-accent" />
                <span className="ms-1 font-medium">{hotel.rating}</span>
                <span className="ms-1 text-gray-500">
                  ({hotel.reviewCount} {t('reviews')})
                </span>
              </div>
              <div className="flex items-center text-gray-500">
                <MapPin className="w-4 h-4 me-1" />
                <span>{hotel.address}, {hotel.city}</span>
              </div>
            </div>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="text-2xl font-bold text-yemen-DEFAULT">
              ${hotel.pricePerNight}
              <span className="text-sm text-gray-500 ml-1 font-normal">/ {t('night')}</span>
            </div>
          </div>
        </div>
        
        {/* Image Gallery */}
        <div className="relative mb-8 rounded-lg overflow-hidden">
          <img 
            src={hotel.images[activeImageIndex]} 
            alt={hotel.name} 
            className="w-full h-96 object-cover"
          />
          
          <div className="absolute inset-0 flex justify-between items-center px-4">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full bg-white/80 hover:bg-white" 
              onClick={prevImage}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full bg-white/80 hover:bg-white" 
              onClick={nextImage}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1">
            {hotel.images.map((_, index) => (
              <button 
                key={index} 
                className={`w-2 h-2 rounded-full ${
                  activeImageIndex === index ? 'bg-white' : 'bg-white/50'
                }`}
                onClick={() => setActiveImageIndex(index)}
              />
            ))}
          </div>
        </div>
        
        {/* Tabs for Hotel Info */}
        <Tabs defaultValue="about" className="mb-10">
          <TabsList className="w-full justify-start border-b mb-6">
            <TabsTrigger value="about">{t('about')}</TabsTrigger>
            <TabsTrigger value="rooms">{t('rooms')}</TabsTrigger>
            <TabsTrigger value="amenities">{t('amenities')}</TabsTrigger>
            <TabsTrigger value="location">{t('location')}</TabsTrigger>
            <TabsTrigger value="reviews">{t('reviews_heading')}</TabsTrigger>
          </TabsList>
          
          <TabsContent value="about" className="mt-2">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">{t('hotel_info')}</h2>
              <p className="text-gray-600">{hotel.description}</p>
            </div>
          </TabsContent>
          
          <TabsContent value="rooms" className="mt-2">
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">{t('rooms')}</h2>
              {hotel.rooms.map(room => (
                <Card key={room.id} className={`overflow-hidden ${
                  selectedRoom === room.id ? 'ring-2 ring-yemen-DEFAULT' : ''
                }`}>
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 h-48 md:h-auto">
                      <img 
                        src={room.images[0]} 
                        alt={room.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 p-4">
                      <div className="flex flex-col md:flex-row justify-between">
                        <div>
                          <h3 className="text-lg font-medium">{room.name}</h3>
                          <p className="text-gray-600 text-sm mb-2">{room.description}</p>
                          
                          <div className="mb-2">
                            <span className="text-sm bg-gray-100 px-2 py-1 rounded inline-flex items-center">
                              <Users className="w-4 h-4 mr-1 rtl:ml-1 rtl:mr-0" />
                              {language === 'ar' 
                                ? `${room.capacity} أشخاص` 
                                : `${room.capacity} persons`
                              }
                            </span>
                          </div>
                          
                          {/* Room Amenities */}
                          <div className="flex flex-wrap gap-2">
                            {room.amenities.map((amenity, index) => (
                              <span 
                                key={index} 
                                className="inline-flex items-center text-xs bg-gray-100 px-2 py-1 rounded"
                              >
                                {amenity}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex flex-col items-end justify-between mt-4 md:mt-0">
                          <div className="text-right mb-2">
                            <span className="text-lg font-bold">${room.pricePerNight}</span>
                            <span className="text-gray-500 text-sm ml-1">/ {t('night')}</span>
                          </div>
                          <Button 
                            className={`w-full ${
                              selectedRoom === room.id 
                                ? 'bg-green-600 hover:bg-green-700'
                                : 'bg-yemen-DEFAULT hover:bg-yemen-dark'
                            }`}
                            onClick={() => handleRoomSelection(room.id)}
                          >
                            {selectedRoom === room.id 
                              ? (language === 'ar' ? 'تم الاختيار' : 'Selected') 
                              : t('book_now')
                            }
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
              
              {/* Booking Form */}
              {selectedRoom && (
                <Card className="p-4 mt-6 bg-gray-50">
                  <CardContent>
                    <h3 className="text-lg font-medium mb-4">
                      {language === 'ar' ? 'إكمال الحجز' : 'Complete Your Booking'}
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          {t('check_in')}
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-3 rtl:left-auto rtl:right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <input 
                            type="date" 
                            className="w-full pl-10 rtl:pl-4 rtl:pr-10 py-2 border rounded"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          {t('check_out')}
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-3 rtl:left-auto rtl:right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <input 
                            type="date" 
                            className="w-full pl-10 rtl:pl-4 rtl:pr-10 py-2 border rounded"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-yemen-DEFAULT hover:bg-yemen-dark">
                      {language === 'ar' ? 'إكمال الحجز' : 'Complete Booking'}
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="amenities" className="mt-2">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">{t('amenities')}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {hotel.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center">
                    {getAmenityIcon(amenity) && (
                      <div className="mr-2 rtl:ml-2 rtl:mr-0 text-yemen-DEFAULT">
                        {getAmenityIcon(amenity)}
                      </div>
                    )}
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="location" className="mt-2">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">{t('location')}</h2>
              <p className="text-gray-600">{hotel.address}, {hotel.city}, {hotel.country}</p>
              
              {/* Placeholder for map - in a real app you'd integrate with a mapping service */}
              <div className="bg-gray-200 h-72 rounded-md flex items-center justify-center">
                <p className="text-gray-500">{language === 'ar' ? 'خريطة غير متوفرة حالياً' : 'Map not available'}</p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="reviews" className="mt-2">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">{t('reviews_heading')}</h2>
              <p className="text-gray-600">
                {language === 'ar' 
                  ? `${hotel.reviewCount} تقييمات من الضيوف`
                  : `${hotel.reviewCount} guest reviews`
                }
              </p>
              
              {/* Placeholder for reviews - in a real app you'd have actual reviews */}
              <div className="bg-gray-50 p-4 text-center rounded">
                <p className="text-gray-500">
                  {language === 'ar' 
                    ? 'التقييمات غير متوفرة حالياً'
                    : 'Reviews not available'
                  }
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default HotelDetail;
