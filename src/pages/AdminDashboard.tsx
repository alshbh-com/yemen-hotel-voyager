
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  Building, 
  PlusCircle, 
  Edit, 
  Trash, 
  Image,
  MapPin,
  Star
} from 'lucide-react';
import { hotels } from '@/data/hotels';
import { useToast } from '@/hooks/use-toast';

interface HotelFormData {
  name: string;
  description: string;
  address: string;
  city: string;
  country: string;
  pricePerNight: number;
  stars: number;
}

const AdminDashboard = () => {
  const { t, language } = useLanguage();
  const { isAdmin } = useAuth();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState<HotelFormData>({
    name: '',
    description: '',
    address: '',
    city: '',
    country: 'اليمن',
    pricePerNight: 0,
    stars: 3
  });
  const [editingHotelId, setEditingHotelId] = useState<string | null>(null);
  
  // Redirect if not admin
  if (!isAdmin) {
    return <Navigate to="/admin-login" />;
  }
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'pricePerNight' || name === 'stars' ? Number(value) : value
    }));
  };
  
  const handleAddHotel = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: language === 'ar' ? 'تمت الإضافة بنجاح' : 'Hotel added successfully',
      description: language === 'ar' ? 'تمت إضافة الفندق الجديد' : 'The new hotel has been added',
    });
    setFormData({
      name: '',
      description: '',
      address: '',
      city: '',
      country: 'اليمن',
      pricePerNight: 0,
      stars: 3
    });
  };
  
  const handleEditHotel = (hotelId: string) => {
    const hotel = hotels.find(h => h.id === hotelId);
    if (hotel) {
      setEditingHotelId(hotelId);
      setFormData({
        name: hotel.name,
        description: hotel.description,
        address: hotel.address,
        city: hotel.city,
        country: hotel.country,
        pricePerNight: hotel.pricePerNight,
        stars: hotel.stars
      });
    }
  };
  
  const handleUpdateHotel = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: language === 'ar' ? 'تم التحديث بنجاح' : 'Hotel updated successfully',
      description: language === 'ar' ? 'تم تحديث بيانات الفندق' : 'The hotel information has been updated',
    });
    setEditingHotelId(null);
    setFormData({
      name: '',
      description: '',
      address: '',
      city: '',
      country: 'اليمن',
      pricePerNight: 0,
      stars: 3
    });
  };
  
  const handleDeleteHotel = (hotelId: string) => {
    if (window.confirm(language === 'ar' ? 'هل أنت متأكد من رغبتك في حذف هذا الفندق؟' : 'Are you sure you want to delete this hotel?')) {
      toast({
        title: language === 'ar' ? 'تم الحذف بنجاح' : 'Hotel deleted successfully',
        description: language === 'ar' ? 'تم حذف الفندق' : 'The hotel has been deleted',
      });
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">{t('admin_panel')}</h1>
            <p className="text-gray-500">
              {language === 'ar' 
                ? 'إدارة الفنادق والحجوزات'
                : 'Manage hotels and bookings'
              }
            </p>
          </div>
        </div>
        
        <Tabs defaultValue="hotels" className="mb-10">
          <TabsList className="w-full justify-start border-b mb-6">
            <TabsTrigger value="hotels">{t('manage_hotels')}</TabsTrigger>
            <TabsTrigger value="bookings">{t('manage_bookings')}</TabsTrigger>
          </TabsList>
          
          <TabsContent value="hotels" className="mt-2">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Hotel Form */}
              <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle>
                    {editingHotelId ? t('edit_hotel') : t('add_hotel')}
                  </CardTitle>
                  <CardDescription>
                    {language === 'ar' 
                      ? 'أدخل تفاصيل الفندق أدناه'
                      : 'Enter hotel details below'
                    }
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form 
                    className="space-y-4" 
                    onSubmit={editingHotelId ? handleUpdateHotel : handleAddHotel}
                  >
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        {t('hotel_name')}
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="description" className="block text-sm font-medium mb-1">
                        {t('hotel_description')}
                      </label>
                      <Textarea
                        id="description"
                        name="description"
                        rows={4}
                        value={formData.description}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium mb-1">
                        {t('hotel_address')}
                      </label>
                      <Input
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="city" className="block text-sm font-medium mb-1">
                          {language === 'ar' ? 'المدينة' : 'City'}
                        </label>
                        <Input
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="country" className="block text-sm font-medium mb-1">
                          {language === 'ar' ? 'البلد' : 'Country'}
                        </label>
                        <Input
                          id="country"
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="pricePerNight" className="block text-sm font-medium mb-1">
                          {language === 'ar' ? 'السعر في الليلة ($)' : 'Price per Night ($)'}
                        </label>
                        <Input
                          id="pricePerNight"
                          name="pricePerNight"
                          type="number"
                          value={formData.pricePerNight}
                          onChange={handleInputChange}
                          required
                          min="0"
                        />
                      </div>
                      <div>
                        <label htmlFor="stars" className="block text-sm font-medium mb-1">
                          {language === 'ar' ? 'التصنيف (نجوم)' : 'Rating (stars)'}
                        </label>
                        <Input
                          id="stars"
                          name="stars"
                          type="number"
                          value={formData.stars}
                          onChange={handleInputChange}
                          required
                          min="1"
                          max="5"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Button 
                        type="button" 
                        variant="outline" 
                        className="w-full flex items-center"
                      >
                        <Image className="mr-2 rtl:ml-2 rtl:mr-0 w-4 h-4" />
                        {language === 'ar' ? 'إضافة صور' : 'Add Images'}
                      </Button>
                    </div>
                    
                    <div className="flex justify-end space-x-2 space-x-reverse:rtl">
                      {editingHotelId && (
                        <Button 
                          type="button" 
                          variant="outline"
                          onClick={() => {
                            setEditingHotelId(null);
                            setFormData({
                              name: '',
                              description: '',
                              address: '',
                              city: '',
                              country: 'اليمن',
                              pricePerNight: 0,
                              stars: 3
                            });
                          }}
                        >
                          {t('cancel')}
                        </Button>
                      )}
                      <Button type="submit" className="bg-yemen-DEFAULT hover:bg-yemen-dark">
                        {editingHotelId ? t('submit') : language === 'ar' ? 'إضافة فندق' : 'Add Hotel'}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
              
              {/* Hotels List */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>{language === 'ar' ? 'قائمة الفنادق' : 'Hotels List'}</CardTitle>
                    <CardDescription>
                      {language === 'ar'
                        ? `${hotels.length} فنادق`
                        : `${hotels.length} hotels`
                      }
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>{language === 'ar' ? 'الفندق' : 'Hotel'}</TableHead>
                            <TableHead>{language === 'ar' ? 'المدينة' : 'City'}</TableHead>
                            <TableHead>{language === 'ar' ? 'السعر' : 'Price'}</TableHead>
                            <TableHead>{language === 'ar' ? 'التقييم' : 'Rating'}</TableHead>
                            <TableHead className="text-right">{language === 'ar' ? 'إجراءات' : 'Actions'}</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {hotels.map(hotel => (
                            <TableRow key={hotel.id}>
                              <TableCell className="font-medium">
                                <div className="flex items-center">
                                  <Building className="w-4 h-4 mr-2 rtl:ml-2 rtl:mr-0 text-gray-500" />
                                  <span>{hotel.name}</span>
                                </div>
                              </TableCell>
                              <TableCell>
                                <div className="flex items-center">
                                  <MapPin className="w-4 h-4 mr-1 rtl:ml-1 rtl:mr-0 text-gray-500" />
                                  <span>{hotel.city}</span>
                                </div>
                              </TableCell>
                              <TableCell>${hotel.pricePerNight}</TableCell>
                              <TableCell>
                                <div className="flex items-center">
                                  <Star className="w-4 h-4 mr-1 rtl:ml-1 rtl:mr-0 fill-yellow-400 text-yellow-400" />
                                  <span>{hotel.rating}</span>
                                </div>
                              </TableCell>
                              <TableCell className="text-right">
                                <div className="flex justify-end space-x-2 space-x-reverse:rtl">
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => handleEditHotel(hotel.id)}
                                  >
                                    <Edit className="w-4 h-4" />
                                    <span className="sr-only">Edit</span>
                                  </Button>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="text-red-500 hover:text-red-600"
                                    onClick={() => handleDeleteHotel(hotel.id)}
                                  >
                                    <Trash className="w-4 h-4" />
                                    <span className="sr-only">Delete</span>
                                  </Button>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="bookings" className="mt-2">
            <Card>
              <CardHeader>
                <CardTitle>{t('manage_bookings')}</CardTitle>
                <CardDescription>
                  {language === 'ar'
                    ? 'عرض وإدارة حجوزات الفنادق'
                    : 'View and manage hotel bookings'
                  }
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-10 text-gray-500">
                  {language === 'ar' 
                    ? 'لا توجد حجوزات للعرض'
                    : 'No bookings to display'
                  }
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
