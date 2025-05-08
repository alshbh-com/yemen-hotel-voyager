
import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Search, 
  MapPin, 
  Star, 
  Filter, 
  ChevronDown, 
  ChevronUp,
  Wifi,
  Pool,
  Utensils,
  Car,
  Bath,
  Dumbbell
} from 'lucide-react';
import { hotels, amenities } from '@/data/hotels';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';

const HotelList = () => {
  const { t, language } = useLanguage();
  const [searchParams] = useSearchParams();
  const cityParam = searchParams.get('city');
  
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [starFilter, setStarFilter] = useState<number[]>([]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [sortOption, setSortOption] = useState('recommended');
  
  // Filter hotels based on filters
  const filteredHotels = hotels.filter(hotel => {
    // City filter
    if (cityParam && hotel.city !== cityParam) return false;
    
    // Search term filter
    if (searchTerm && !hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !hotel.city.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    
    // Price range filter
    if (hotel.pricePerNight < priceRange[0] || hotel.pricePerNight > priceRange[1]) return false;
    
    // Star rating filter
    if (starFilter.length > 0 && !starFilter.includes(hotel.stars)) return false;
    
    // Amenities filter
    if (selectedAmenities.length > 0) {
      const hasAllAmenities = selectedAmenities.every(amenity => 
        hotel.amenities.includes(amenity)
      );
      if (!hasAllAmenities) return false;
    }
    
    return true;
  });
  
  // Sort hotels
  const sortedHotels = [...filteredHotels].sort((a, b) => {
    switch (sortOption) {
      case 'price-low':
        return a.pricePerNight - b.pricePerNight;
      case 'price-high':
        return b.pricePerNight - a.pricePerNight;
      case 'rating':
        return b.rating - a.rating;
      default: // recommended
        return b.rating * b.reviewCount - a.rating * a.reviewCount;
    }
  });
  
  // Icon mapping for amenities
  const getAmenityIcon = (amenity: string) => {
    if (amenity.includes('واي فاي') || amenity.includes('Wi-Fi')) return <Wifi className="w-4 h-4" />;
    if (amenity.includes('مسبح') || amenity.includes('pool')) return <Pool className="w-4 h-4" />;
    if (amenity.includes('مطعم') || amenity.includes('restaurant')) return <Utensils className="w-4 h-4" />;
    if (amenity.includes('موقف') || amenity.includes('parking')) return <Car className="w-4 h-4" />;
    if (amenity.includes('خدمة الغرف') || amenity.includes('room service')) return <Bath className="w-4 h-4" />;
    if (amenity.includes('لياقة') || amenity.includes('fitness')) return <Dumbbell className="w-4 h-4" />;
    return null;
  };
  
  const toggleStarFilter = (star: number) => {
    if (starFilter.includes(star)) {
      setStarFilter(starFilter.filter(s => s !== star));
    } else {
      setStarFilter([...starFilter, star]);
    }
  };
  
  const toggleAmenityFilter = (amenity: string) => {
    if (selectedAmenities.includes(amenity)) {
      setSelectedAmenities(selectedAmenities.filter(a => a !== amenity));
    } else {
      setSelectedAmenities([...selectedAmenities, amenity]);
    }
  };

  return (
    <Layout>
      {/* Search Header */}
      <section className="bg-yemen-DEFAULT py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 rtl:left-auto rtl:right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input 
                type="text" 
                placeholder={t('search_placeholder')} 
                className="pl-10 rtl:pl-4 rtl:pr-10 bg-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-6">
        {/* Filters and Sort Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <Button
            variant="outline"
            className="mb-4 md:mb-0 flex items-center"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="mr-2 rtl:ml-2 rtl:mr-0 h-4 w-4" />
            {t('filters')}
            {showFilters ? (
              <ChevronUp className="ml-2 rtl:mr-2 rtl:ml-0 h-4 w-4" />
            ) : (
              <ChevronDown className="ml-2 rtl:mr-2 rtl:ml-0 h-4 w-4" />
            )}
          </Button>
          
          <div className="flex items-center">
            <span className="text-sm text-gray-500 mr-2 rtl:ml-2 rtl:mr-0">{t('sort_by')}:</span>
            <select
              className="border rounded p-1 text-sm"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="recommended">{language === 'ar' ? 'الأكثر توصية' : 'Recommended'}</option>
              <option value="price-low">{t('price_low_to_high')}</option>
              <option value="price-high">{t('price_high_to_low')}</option>
              <option value="rating">{t('rating_high_to_low')}</option>
            </select>
          </div>
        </div>
        
        {/* Expanded Filters */}
        {showFilters && (
          <Card className="mb-6">
            <CardContent className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Price Range */}
                <div>
                  <h3 className="font-medium mb-2">{t('price_range')}</h3>
                  <div className="px-2">
                    <Slider
                      defaultValue={[0, 500]}
                      max={500}
                      step={10}
                      value={priceRange}
                      onValueChange={(value) => setPriceRange(value)}
                      className="my-6"
                    />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                </div>
                
                {/* Star Rating */}
                <div>
                  <h3 className="font-medium mb-2">{t('hotel_class')}</h3>
                  <div className="space-y-1">
                    {[5, 4, 3, 2, 1].map((star) => (
                      <div className="flex items-center" key={star}>
                        <Checkbox
                          id={`star-${star}`}
                          checked={starFilter.includes(star)}
                          onCheckedChange={() => toggleStarFilter(star)}
                        />
                        <label htmlFor={`star-${star}`} className="ml-2 rtl:mr-2 rtl:ml-0 text-sm flex items-center">
                          {[...Array(star)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 fill-yemen-accent text-yemen-accent inline-block" />
                          ))}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Amenities */}
                <div>
                  <h3 className="font-medium mb-2">{t('amenities')}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                    {amenities.slice(0, 8).map((amenity, index) => (
                      <div className="flex items-center" key={index}>
                        <Checkbox
                          id={`amenity-${index}`}
                          checked={selectedAmenities.includes(amenity)}
                          onCheckedChange={() => toggleAmenityFilter(amenity)}
                        />
                        <label htmlFor={`amenity-${index}`} className="ml-2 rtl:mr-2 rtl:ml-0 text-sm">
                          {amenity}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end mt-4 space-x-2 space-x-reverse:rtl">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setPriceRange([0, 500]);
                    setStarFilter([]);
                    setSelectedAmenities([]);
                  }}
                >
                  {t('reset_filters')}
                </Button>
                <Button
                  size="sm"
                  className="bg-yemen-DEFAULT hover:bg-yemen-dark"
                >
                  {t('apply_filters')}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
        
        {/* Results Count */}
        <div className="mb-4">
          <p className="text-gray-600">
            {language === 'ar' 
              ? `تم العثور على ${sortedHotels.length} فنادق`
              : `Found ${sortedHotels.length} hotels`
            }
            {cityParam && ` ${language === 'ar' ? 'في' : 'in'} ${cityParam}`}
          </p>
        </div>
        
        {/* Hotel Listings */}
        <div className="space-y-6">
          {sortedHotels.map((hotel) => (
            <Card key={hotel.id} className="overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 h-48 md:h-auto">
                  <img 
                    src={hotel.images[0]} 
                    alt={hotel.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 p-4">
                  <div className="flex flex-col md:flex-row justify-between">
                    <div>
                      <h3 className="text-lg font-medium">{hotel.name}</h3>
                      <div className="flex items-center text-gray-500 text-sm mb-2">
                        <MapPin className="w-4 h-4 me-1" />
                        <span>{hotel.city}, {hotel.country}</span>
                      </div>
                      
                      {/* Star rating display */}
                      <div className="flex mb-2">
                        {[...Array(hotel.stars)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yemen-accent text-yemen-accent" />
                        ))}
                      </div>
                      
                      {/* Amenities */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {hotel.amenities.slice(0, 4).map((amenity, index) => (
                          <span 
                            key={index} 
                            className="inline-flex items-center text-xs bg-gray-100 px-2 py-1 rounded"
                          >
                            {getAmenityIcon(amenity)}
                            <span className="ms-1">{amenity}</span>
                          </span>
                        ))}
                        {hotel.amenities.length > 4 && (
                          <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                            +{hotel.amenities.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-end justify-between mt-4 md:mt-0">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 fill-yemen-accent text-yemen-accent" />
                        <span className="ms-1 font-medium">{hotel.rating}</span>
                        <span className="ms-1 text-sm text-gray-500">
                          ({hotel.reviewCount})
                        </span>
                      </div>
                      
                      <div className="mt-auto">
                        <div className="text-right mb-2">
                          <span className="text-lg font-bold">${hotel.pricePerNight}</span>
                          <span className="text-gray-500 text-sm ml-1">/ {t('night')}</span>
                        </div>
                        <Link to={`/hotels/${hotel.id}`}>
                          <Button className="w-full bg-yemen-DEFAULT hover:bg-yemen-dark">
                            {t('book_now')}
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
          
          {sortedHotels.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 mb-4">
                {language === 'ar' 
                  ? 'لا توجد فنادق تطابق معايير البحث'
                  : 'No hotels match your search criteria'
                }
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm('');
                  setPriceRange([0, 500]);
                  setStarFilter([]);
                  setSelectedAmenities([]);
                }}
              >
                {t('reset_filters')}
              </Button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default HotelList;
