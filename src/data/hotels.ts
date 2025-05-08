
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
    id: "1",
    name: "فندق سبأ",
    description: "فندق فاخر في قلب صنعاء يوفر إطلالة رائعة على المدينة القديمة. يتميز بطابعه الأصيل المستوحى من العمارة اليمنية التقليدية.",
    address: "شارع الزبيري، صنعاء",
    city: "صنعاء",
    country: "اليمن",
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1925&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1780&auto=format&fit=crop"
    ],
    rating: 4.7,
    reviewCount: 128,
    stars: 5,
    pricePerNight: 120,
    coordinates: {
      lat: 15.3694,
      lng: 44.1910
    },
    amenities: ["واي فاي مجاني", "مسبح", "مطعم", "موقف سيارات", "خدمة الغرف", "مركز لياقة بدنية"],
    rooms: [
      {
        id: "101",
        name: "غرفة ديلوكس",
        description: "غرفة فسيحة مع سرير كينغ وإطلالة على المدينة",
        pricePerNight: 120,
        capacity: 2,
        images: [
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop"
        ],
        amenities: ["تكييف", "تلفزيون", "ميني بار", "خزنة"]
      },
      {
        id: "102",
        name: "جناح فاخر",
        description: "جناح فسيح مع منطقة جلوس منفصلة وإطلالة بانورامية",
        pricePerNight: 200,
        capacity: 3,
        images: [
          "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1925&auto=format&fit=crop"
        ],
        amenities: ["تكييف", "تلفزيون", "ميني بار", "خزنة", "جاكوزي"]
      }
    ],
    featured: true
  },
  {
    id: "2",
    name: "منتجع عدن الساحلي",
    description: "منتجع ساحلي فاخر يطل على خليج عدن. يوفر المنتجع تجربة فريدة مع مزيج من الراحة والرفاهية والخدمة الممتازة.",
    address: "طريق الساحل، عدن",
    city: "عدن",
    country: "اليمن",
    images: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1562790351-d273a961e0e9?q=80&w=2065&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1949&auto=format&fit=crop"
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
          "https://images.unsplash.com/photo-1562790351-d273a961e0e9?q=80&w=2065&auto=format&fit=crop"
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
          "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop"
        ],
        amenities: ["مسبح خاص", "مطبخ صغير", "تكييف", "تلفزيون", "شرفة"]
      }
    ],
    featured: true
  },
  {
    id: "3",
    name: "فندق المكلا الحديث",
    description: "فندق عصري في قلب مدينة المكلا، يوفر إقامة مريحة للزوار ورجال الأعمال.",
    address: "شارع الكورنيش، المكلا",
    city: "المكلا",
    country: "اليمن",
    images: [
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=2067&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1587985064135-0366536eab42?q=80&w=2070&auto=format&fit=crop"
    ],
    rating: 4.3,
    reviewCount: 87,
    stars: 4,
    pricePerNight: 95,
    coordinates: {
      lat: 14.5393,
      lng: 49.1325
    },
    amenities: ["واي فاي مجاني", "مطعم", "خدمة الغرف", "مركز أعمال", "موقف سيارات"],
    rooms: [
      {
        id: "301",
        name: "غرفة قياسية",
        description: "غرفة مريحة مع جميع الخدمات الأساسية",
        pricePerNight: 95,
        capacity: 2,
        images: [
          "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2070&auto=format&fit=crop"
        ],
        amenities: ["تكييف", "تلفزيون", "حمام خاص"]
      },
      {
        id: "302",
        name: "غرفة إطلالة على البحر",
        description: "غرفة أنيقة مع إطلالة على خليج عدن",
        pricePerNight: 120,
        capacity: 2,
        images: [
          "https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=2067&auto=format&fit=crop"
        ],
        amenities: ["تكييف", "تلفزيون", "شرفة", "ميني بار"]
      }
    ]
  },
  {
    id: "4",
    name: "فندق تعز الأصيل",
    description: "فندق تراثي في مدينة تعز، يحافظ على الطابع المعماري اليمني الأصيل مع توفير كافة وسائل الراحة العصرية.",
    address: "حي القاهرة، تعز",
    city: "تعز",
    country: "اليمن",
    images: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974&auto=format&fit=crop"
    ],
    rating: 4.5,
    reviewCount: 112,
    stars: 4,
    pricePerNight: 85,
    coordinates: {
      lat: 13.5783,
      lng: 44.0174
    },
    amenities: ["واي فاي مجاني", "مطعم تقليدي", "موقف سيارات", "خدمة الغرف", "استقبال 24 ساعة"],
    rooms: [
      {
        id: "401",
        name: "غرفة تراثية",
        description: "غرفة مصممة على الطراز اليمني التقليدي",
        pricePerNight: 85,
        capacity: 2,
        images: [
          "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop"
        ],
        amenities: ["تكييف", "تلفزيون", "حمام خاص"]
      },
      {
        id: "402",
        name: "جناح عائلي",
        description: "جناح فسيح مناسب للعائلات مع غرفة معيشة منفصلة",
        pricePerNight: 130,
        capacity: 4,
        images: [
          "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1974&auto=format&fit=crop"
        ],
        amenities: ["تكييف", "تلفزيون", "ميني بار", "غرفة معيشة"]
      }
    ],
    featured: true
  },
  {
    id: "5",
    name: "فندق الحديدة البحري",
    description: "فندق حديث يطل على البحر الأحمر في مدينة الحديدة، يوفر إقامة مريحة وخدمات متكاملة.",
    address: "شارع الكورنيش، الحديدة",
    city: "الحديدة",
    country: "اليمن",
    images: [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?q=80&w=2027&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?q=80&w=1932&auto=format&fit=crop"
    ],
    rating: 4.2,
    reviewCount: 76,
    stars: 3,
    pricePerNight: 65,
    coordinates: {
      lat: 14.7970,
      lng: 42.9532
    },
    amenities: ["واي فاي مجاني", "مطعم", "موقف سيارات", "استقبال 24 ساعة"],
    rooms: [
      {
        id: "501",
        name: "غرفة قياسية",
        description: "غرفة مريحة مع جميع الخدمات الأساسية",
        pricePerNight: 65,
        capacity: 2,
        images: [
          "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop"
        ],
        amenities: ["تكييف", "تلفزيون", "حمام خاص"]
      },
      {
        id: "502",
        name: "غرفة مطلة على البحر",
        description: "غرفة مع إطلالة رائعة على البحر الأحمر",
        pricePerNight: 80,
        capacity: 2,
        images: [
          "https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?q=80&w=2027&auto=format&fit=crop"
        ],
        amenities: ["تكييف", "تلفزيون", "شرفة"]
      }
    ]
  }
];

export const cities = [
  { name: 'صنعاء', image: 'https://images.unsplash.com/photo-1588422333078-44ad73367bcb?q=80&w=1974&auto=format&fit=crop', count: 12 },
  { name: 'عدن', image: 'https://images.unsplash.com/photo-1632149877166-f75d49000351?q=80&w=1964&auto=format&fit=crop', count: 8 },
  { name: 'المكلا', image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=2070&auto=format&fit=crop', count: 5 },
  { name: 'تعز', image: 'https://images.unsplash.com/photo-1581338834647-b0fb40704e21?q=80&w=2074&auto=format&fit=crop', count: 7 },
  { name: 'الحديدة', image: 'https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?q=80&w=1971&auto=format&fit=crop', count: 4 }
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
