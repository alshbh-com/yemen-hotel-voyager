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
    name: "فندق الخليج",
    description: "فندق فاخر يطل على خليج عدن. يوفر إقامة مميزة مع مناظر بانورامية للبحر والمدينة.",
    address: "شارع الكورنيش، عدن",
    city: "عدن",
    country: "اليمن",
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=2089&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop"
    ],
    rating: 4.7,
    reviewCount: 182,
    stars: 5,
    pricePerNight: 120,
    coordinates: {
      lat: 12.7854,
      lng: 45.0324
    },
    amenities: ["واي فاي مجاني", "مسبح خارجي", "مطعم", "سبا", "خدمة الغرف", "موقف سيارات"],
    rooms: [
      {
        id: "101",
        name: "غرفة عادية",
        description: "غرفة مريحة ومجهزة بالكامل لضمان إقامة مريحة",
        pricePerNight: 120,
        capacity: 2,
        images: [
          "https://images.unsplash.com/photo-1560448075-bb485b067938?q=80&w=2070&auto=format&fit=crop"
        ],
        amenities: ["تكييف", "تلفزيون", "ميني بار"]
      },
      {
        id: "102",
        name: "جناح ديلوكس",
        description: "جناح فسيح مع إطلالة مذهلة على البحر",
        pricePerNight: 250,
        capacity: 3,
        images: [
          "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop"
        ],
        amenities: ["تكييف", "تلفزيون", "ميني بار", "شرفة خاصة"]
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
  },
  {
    id: "3",
    name: "فندق الميناء",
    description: "فندق عصري في قلب مدينة عدن. موقع مثالي للمسافرين بغرض العمل أو الترفيه.",
    address: "شارع المعلا، عدن",
    city: "عدن",
    country: "اليمن",
    images: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=2074&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1444201983204-c43cbd584d93?q=80&w=2070&auto=format&fit=crop"
    ],
    rating: 4.5,
    reviewCount: 120,
    stars: 4,
    pricePerNight: 95,
    coordinates: {
      lat: 12.7930,
      lng: 45.0190
    },
    amenities: ["واي فاي مجاني", "مطعم", "خدمة الغرف", "موقف سيارات", "قاعة اجتماعات"],
    rooms: [
      {
        id: "301",
        name: "غرفة قياسية",
        description: "غرفة عملية ومريحة مناسبة لرجال الأعمال والمسافرين",
        pricePerNight: 95,
        capacity: 2,
        images: [
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop"
        ],
        amenities: ["تكييف", "تلفزيون", "مكتب عمل", "خزنة"]
      },
      {
        id: "302",
        name: "غرفة تنفيذية",
        description: "غرفة واسعة مع مساحة عمل مخصصة وإطلالة على المدينة",
        pricePerNight: 140,
        capacity: 2,
        images: [
          "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2074&auto=format&fit=crop"
        ],
        amenities: ["تكييف", "تلفزيون", "مكتب عمل", "خزنة", "ميني بار", "خدمة رجال الأعمال"]
      }
    ],
    featured: false
  },
  {
    id: "4",
    name: "فندق كريتر الحديث",
    description: "فندق حديث في منطقة كريتر التاريخية. يوفر الراحة مع لمسة من التراث اليمني.",
    address: "كريتر، عدن",
    city: "عدن",
    country: "اليمن",
    images: [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560624052-449f5ddf0c31?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop"
    ],
    rating: 4.3,
    reviewCount: 87,
    stars: 4,
    pricePerNight: 85,
    coordinates: {
      lat: 12.7770,
      lng: 45.0336
    },
    amenities: ["واي فاي مجاني", "مطعم تقليدي", "موقف سيارات", "خدمة الغرف"],
    rooms: [
      {
        id: "401",
        name: "غرفة تقليدية",
        description: "غرفة مريحة مصممة بطراز يمني تقليدي",
        pricePerNight: 85,
        capacity: 2,
        images: [
          "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1957&auto=format&fit=crop"
        ],
        amenities: ["تكييف", "تلفزيون", "واي فاي مجاني"]
      },
      {
        id: "402",
        name: "جناح عائلي",
        description: "جناح واسع مناسب للعائلات مع غرفتي نوم",
        pricePerNight: 150,
        capacity: 4,
        images: [
          "https://images.unsplash.com/photo-1598928636135-d146006ff4be?q=80&w=2070&auto=format&fit=crop"
        ],
        amenities: ["تكييف", "تلفزيون", "مطبخ صغير", "غرفتي نوم"]
      }
    ],
    featured: false
  },
  {
    id: "5",
    name: "فندق الشيخ عثمان",
    description: "فندق عائلي بأسعار معقولة في منطقة الشيخ عثمان. مناسب للإقامات المريحة القصيرة والطويلة.",
    address: "الشيخ عثمان، عدن",
    city: "عدن",
    country: "اليمن",
    images: [
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?q=80&w=2074&auto=format&fit=crop"
    ],
    rating: 4.0,
    reviewCount: 65,
    stars: 3,
    pricePerNight: 60,
    coordinates: {
      lat: 12.8550,
      lng: 44.9890
    },
    amenities: ["واي فاي مجاني", "مطعم", "موقف سيارات", "مكيفات هواء"],
    rooms: [
      {
        id: "501",
        name: "غرفة اقتصادية",
        description: "غرفة بسيطة ومريحة بسعر اقتصادي",
        pricePerNight: 60,
        capacity: 2,
        images: [
          "https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=2070&auto=format&fit=crop"
        ],
        amenities: ["تكييف", "تلفزيون", "حمام خاص"]
      },
      {
        id: "502",
        name: "غرفة عائلية",
        description: "غرفة واسعة تتسع لعائلة صغيرة",
        pricePerNight: 90,
        capacity: 3,
        images: [
          "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2074&auto=format&fit=crop"
        ],
        amenities: ["تكييف", "تلفزيون", "سرير مزدوج وسرير فردي"]
      }
    ],
    featured: false
  },
  {
    id: "6",
    name: "منتجع عدن بلاس",
    description: "منتجع حديث يقدم أعلى مستويات الخدمة والرفاهية في قلب عدن.",
    address: "طريق الكورنيش، عدن",
    city: "عدن",
    country: "اليمن",
    images: [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2025&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=2089&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop"
    ],
    rating: 4.9,
    reviewCount: 205,
    stars: 5,
    pricePerNight: 180,
    coordinates: {
      lat: 12.7850,
      lng: 45.0340
    },
    amenities: ["واي فاي مجاني", "مسبح خارجي", "سبا", "مطعم فاخر", "نادي صحي", "مركز أعمال"],
    rooms: [
      {
        id: "601",
        name: "جناح تنفيذي",
        description: "جناح فاخر مع خدمات متميزة لرجال الأعمال",
        pricePerNight: 180,
        capacity: 2,
        images: [
          "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop"
        ],
        amenities: ["تكييف", "تلفزيون ذكي", "مكتب عمل", "ميني بار", "خزنة"]
      },
      {
        id: "602",
        name: "الجناح الرئاسي",
        description: "أفخم جناح في المنتجع مع إطلالة بانورامية",
        pricePerNight: 400,
        capacity: 4,
        images: [
          "https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=2067&auto=format&fit=crop"
        ],
        amenities: ["تكييف", "تلفزيون ذكي", "صالة معيشة", "مطبخ", "شرفة خاصة", "جاكوزي"]
      }
    ],
    featured: true
  },
  {
    id: "7",
    name: "فندق الوادي الأخضر",
    description: "فندق هادئ وسط مساحات خضراء على أطراف عدن. ملاذ مثالي للباحثين عن الاسترخاء.",
    address: "منطقة دار سعد، عدن",
    city: "عدن",
    country: "اليمن",
    images: [
      "https://images.unsplash.com/photo-1561501878-aabd62634533?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=2074&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1490122417551-6ee9691429d0?q=80&w=2070&auto=format&fit=crop"
    ],
    rating: 4.6,
    reviewCount: 112,
    stars: 4,
    pricePerNight: 110,
    coordinates: {
      lat: 12.8670,
      lng: 44.9760
    },
    amenities: ["واي فاي مجاني", "حديقة واسعة", "مطعم", "موقف سيارات", "ملاعب رياضية"],
    rooms: [
      {
        id: "701",
        name: "غرفة جاردن",
        description: "غرفة مريحة مع إطلالة على الحدائق",
        pricePerNight: 110,
        capacity: 2,
        images: [
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop"
        ],
        amenities: ["تكييف", "تلفزيون", "شرفة خاصة"]
      },
      {
        id: "702",
        name: "جناح عائلي مع حديقة",
        description: "جناح واسع مع حديقة صغيرة خاصة",
        pricePerNight: 190,
        capacity: 4,
        images: [
          "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2058&auto=format&fit=crop"
        ],
        amenities: ["تكييف", "تلفزيون", "مطبخ صغير", "حديقة خاصة", "منطقة جلوس خارجية"]
      }
    ],
    featured: false
  },
  {
    id: "8",
    name: "فندق المنارة",
    description: "فندق تاريخي تم تجديده بالكامل. يجمع بين العراقة والخدمات الحديثة.",
    address: "المعلا، عدن",
    city: "عدن",
    country: "اليمن",
    images: [
      "https://images.unsplash.com/photo-1519449556851-5720b33024e7?q=80&w=2071&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1549294413-26f195200c16?q=80&w=2064&auto=format&fit=crop"
    ],
    rating: 4.4,
    reviewCount: 98,
    stars: 4,
    pricePerNight: 100,
    coordinates: {
      lat: 12.7920,
      lng: 45.0210
    },
    amenities: ["واي فاي مجاني", "مطعم تقليدي", "تراس على السطح", "موقف سيارات", "متحف صغير"],
    rooms: [
      {
        id: "801",
        name: "غرفة تراثية",
        description: "غرفة مصممة بطراز يمني تقليدي مع لمسات عصرية",
        pricePerNight: 100,
        capacity: 2,
        images: [
          "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?q=80&w=2074&auto=format&fit=crop"
        ],
        amenities: ["تكييف", "تلفزيون", "أثاث خشبي تقليدي"]
      },
      {
        id: "802",
        name: "جناح المنارة",
        description: "جناح فسيح بتصميم يجمع بين التراث والحداثة",
        pricePerNight: 170,
        capacity: 3,
        images: [
          "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop"
        ],
        amenities: ["تكييف", "تلفزيون", "منطقة جلوس منفصلة", "شرفة خاصة"]
      }
    ],
    featured: false
  },
  {
    id: "9",
    name: "فندق القصر الصغير",
    description: "فندق بوتيك صغير وأنيق يقدم خدمة شخصية مميزة في قلب عدن.",
    address: "التواهي، عدن",
    city: "عدن",
    country: "اليمن",
    images: [
      "https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1549294413-26f195200c16?q=80&w=2064&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop"
    ],
    rating: 4.7,
    reviewCount: 76,
    stars: 4,
    pricePerNight: 120,
    coordinates: {
      lat: 12.7740,
      lng: 44.9980
    },
    amenities: ["واي فاي مجاني", "إفطار مشمول", "تراس", "خدمة الكونسيرج", "مطعم حميم"],
    rooms: [
      {
        id: "901",
        name: "غرفة ديلوكس",
        description: "غرفة أنيقة مصممة بعناية فائقة",
        pricePerNight: 120,
        capacity: 2,
        images: [
          "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2074&auto=format&fit=crop"
        ],
        amenities: ["تكييف", "تلفزيون", "ميني بار", "خدمة الغرف"]
      },
      {
        id: "902",
        name: "جناح القصر",
        description: "جناح فاخر مع ديكورات راقية وخدمات استثنائية",
        pricePerNight: 200,
        capacity: 2,
        images: [
          "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop"
        ],
        amenities: ["تكييف", "تلفزيون ذكي", "صالة منفصلة", "حوض استحمام فاخر", "إفطار مجاني في الغرفة"]
      }
    ],
    featured: false
  },
  {
    id: "10",
    name: "فندق الساحل الذهبي",
    description: "فندق ساحلي مميز يقدم تجربة استثنائية مع إطلالة مباشرة على البحر.",
    address: "جولدمور، عدن",
    city: "عدن",
    country: "اليمن",
    images: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop"
    ],
    rating: 4.9,
    reviewCount: 148,
    stars: 5,
    pricePerNight: 160,
    coordinates: {
      lat: 12.7650,
      lng: 45.0380
    },
    amenities: ["واي فاي مجاني", "شاطئ خاص", "مسبح لانهائي", "مطعم بحري", "سبا", "رياضات مائية"],
    rooms: [
      {
        id: "1001",
        name: "غرفة بإطلالة على البحر",
        description: "غرفة أنيقة مع إطلالة مباشرة على البحر",
        pricePerNight: 160,
        capacity: 2,
        images: [
          "https://images.unsplash.com/photo-1554647286-f365d7defc2e?q=80&w=1974&auto=format&fit=crop"
        ],
        amenities: ["تكييف", "تلفزيون", "شرفة خاصة", "ميني بار"]
      },
      {
        id: "1002",
        name: "فيلا شاطئية",
        description: "فيلا فاخرة تقع مباشرة على الشاطئ",
        pricePerNight: 450,
        capacity: 6,
        images: [
          "https://images.unsplash.com/photo-1562778612-e1e0cda9915c?q=80&w=1973&auto=format&fit=crop"
        ],
        amenities: ["تكييف", "تلفزيون ذكي", "مطبخ كامل", "مسبح خاص", "تراس مع إطلالة بحرية", "خدمة الكونسيرج الخاصة"]
      }
    ],
    featured: true
  }
];

// For now, we'll keep this but only include one city - Aden
export const cities = [
  { name: 'عدن', image: 'https://images.unsplash.com/photo-1632149877166-f75d49000351?q=80&w=1964&auto=format&fit=crop', count: 10 }
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
