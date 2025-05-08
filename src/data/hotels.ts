
export interface HotelRoom {
  id: string;
  name: string;
  description: string;
  pricePerNight: number;
  capacity: number;
  images: string[];
  amenities: string[];
}

export interface Hotel {
  id: string;
  name: string;
  description: string;
  address: string;
  city: string;
  country: string;
  images: string[];
  rating: number;
  reviewCount: number;
  stars: number;
  pricePerNight: number;
  coordinates: {
    lat: number;
    lng: number;
  };
  amenities: string[];
  rooms: HotelRoom[];
  featured?: boolean;
}

export const hotels: Hotel[] = [
  {
    id: "2",
    name: "منتجع عدن الساحلي",
    description: "منتجع ساحلي فاخر يطل على خليج عدن. يوفر المنتجع تجربة فريدة مع مزيج من الراحة والرفاهية والخدمة الممتازة.",
    address: "طريق الساحل، عدن",
    city: "عدن",
    country: "اليمن",
    images: [
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1496307653780-42ee777d4833?q=80&w=2070&auto=format&fit=crop"
    ],
    rating: 4.8,
    reviewCount: 195,
    stars: 5,
    pricePerNight: 150,
    coordinates: {
      lat: 12.7742,
      lng: 45.0315
    },
    amenities: ["واي فاي مجاني", "مسبح خارجي", "شاطئ خاص", "سبا", "مطعم", "بار", "رياضات مائية"],
    rooms: [
      {
        id: "201",
        name: "غرفة ديلوكس مع إطلالة على البحر",
        description: "غرفة أنيقة مع إطلالة خلابة على البحر",
        pricePerNight: 150,
        capacity: 2,
        images: [
          "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?q=80&w=2070&auto=format&fit=crop"
        ],
        amenities: ["تكييف", "تلفزيون", "شرفة", "ميني بار"]
      },
      {
        id: "202",
        name: "فيلا على الشاطئ",
        description: "فيلا فاخرة مباشرة على الشاطئ مع مسبح خاص",
        pricePerNight: 350,
        capacity: 4,
        images: [
          "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?q=80&w=2070&auto=format&fit=crop"
        ],
        amenities: ["مسبح خاص", "مطبخ صغير", "تكييف", "تلفزيون", "شرفة"]
      }
    ],
    featured: true
  }
];

export const cities = [
  { name: 'عدن', image: 'https://images.unsplash.com/photo-1632149877166-f75d49000351?q=80&w=1964&auto=format&fit=crop', count: 8 }
];

export const amenities = [
  'واي فاي مجاني',
  'مسبح',
  'مطعم',
  'سبا',
  'موقف سيارات',
  'خدمة الغرف',
  'مركز لياقة بدنية',
  'شاطئ خاص',
  'بار',
  'استقبال 24 ساعة',
  'مركز أعمال',
  'مصعد',
  'خدمة نقل المطار',
  'غرف لغير المدخنين',
  'تكييف',
  'مناسب للأطفال',
  'مسموح بالحيوانات الأليفة',
  'مطبخ صغير',
  'خدمة الواي فاي'
];
