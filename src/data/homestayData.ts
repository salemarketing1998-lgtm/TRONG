import { RoomType } from '../types/homestay';

export const HOMESTAY_INFO = {
  name: 'SOL OASIS',
  tagline: {
    en: 'Youthful Boutique Tropical Retreat & Homestay',
    vi: 'Khu Nghỉ Dưỡng Sinh Thái Trẻ Trung & Thư Thái'
  },
  phone: '+84399587856',
  phoneDisplay: '+84 399 587 856',
  email: 'Salemarketing1998@gmail.com',
  address: {
    en: 'Sol Oasis Retreat, Tropical Garden Way, Vietnam',
    vi: 'Sol Oasis Retreat, Khuôn viên vườn nhiệt đới, Việt Nam'
  },
  estateAreaM2: 3000,
  totalRooms: 13,
  usdExchangeRate: 25000, // 1 USD = 25,000 VND
};

export const ROOMS_DATA: RoomType[] = [
  {
    id: 'deluxe-single-double',
    name: {
      en: 'Deluxe Double Room',
      vi: 'Phòng Đơn Cao Cấp'
    },
    subtitle: {
      en: 'Ideal for couples & solo travelers · 5 Rooms Available',
      vi: 'Lý tưởng cho cặp đôi & khách lẻ · Có 5 phòng'
    },
    totalCount: 5,
    capacityGuests: 2,
    bedConfig: {
      en: '1 King Bed (1.8m × 2.0m)',
      vi: '1 Giường đôi King size (1.8m × 2.0m)'
    },
    sizeM2: 28,
    priceVnd: 1200000,
    image: '/src/assets/images/sol_oasis_deluxe_room_1790754577535.jpg',
    gallery: [
      '/src/assets/images/sol_oasis_deluxe_room_1790754577535.jpg',
      '/src/assets/images/hero_sol_oasis_resort_1790754559731.jpg',
      '/src/assets/images/sol_oasis_bbq_backyard_1790754590853.jpg'
    ],
    description: {
      en: 'Bright, minimalist 28m² sanctuary with floor-to-ceiling glass doors opening directly onto the tranquil central pool and palm garden. Designed with warm natural oak, woven accents, and ultra-comfortable bedding.',
      vi: 'Không gian 28m² ngập tràn ánh sáng tự nhiên với cửa kính chạm trần nhìn thẳng ra hồ bơi trung tâm xanh mát và vườn cọ nhiệt đới. Thiết kế trẻ trung, gỗ tự nhiên ấm cúng cùng nệm êm ái tiêu chuẩn quốc tế.'
    },
    view: {
      en: 'Central Pool & Tropical Garden View',
      vi: 'View trực diện Hồ bơi trung tâm & Sân vườn'
    },
    keyFeatures: {
      en: ['28m² living space', 'Direct pool & garden view', 'Included Breakfast Buffet', 'King bed with soft linen'],
      vi: ['Diện tích 28m² thoáng đãng', 'Ban công view hồ bơi & sân vườn', 'Đã bao gồm buffet sáng miễn phí', 'Giường đôi King êm ái']
    }
  },
  {
    id: 'superior-quad',
    name: {
      en: 'Superior Quad Room',
      vi: 'Phòng Đôi Tiêu Chuẩn'
    },
    subtitle: {
      en: 'Spacious retreat for friends or family of 4 · 4 Rooms Available',
      vi: 'Rộng rãi cho nhóm bạn hoặc gia đình 4 người · Có 4 phòng'
    },
    totalCount: 4,
    capacityGuests: 4,
    bedConfig: {
      en: '2 Queen Beds (1.6m × 2.0m)',
      vi: '2 Giường đôi Queen size (1.6m × 2.0m)'
    },
    sizeM2: 38,
    priceVnd: 1500000,
    image: '/src/assets/images/hero_sol_oasis_resort_1790754559731.jpg',
    gallery: [
      '/src/assets/images/hero_sol_oasis_resort_1790754559731.jpg',
      '/src/assets/images/sol_oasis_deluxe_room_1790754577535.jpg',
      '/src/assets/images/sol_oasis_billiards_lounge_1790754600898.jpg'
    ],
    description: {
      en: 'Expansive 38m² haven featuring two plush queen beds, generous lounge seating, and an expansive balcony overlooking the central swimming pool. Perfect for groups of travelers seeking comfort and community.',
      vi: 'Phòng nghỉ 38m² cực kỳ rộng rãi với 2 giường đôi cao cấp, khu vực nghỉ ngơi thoáng đãng và ban công phóng tầm mắt ra hồ bơi trung tâm. Lựa chọn tuyệt vời cho nhóm bạn trẻ hoặc gia đình 4 người.'
    },
    view: {
      en: 'Central Pool & Tropical Garden View',
      vi: 'View trực diện Hồ bơi trung tâm & Sân vườn'
    },
    keyFeatures: {
      en: ['38m² spacious layout', '2 Queen beds for 4 guests', 'Direct pool & garden view', 'Included Breakfast Buffet'],
      vi: ['Diện tích 38m² cực rộng', '2 Giường Queen cho 4 người', 'View bao trọn hồ bơi & vườn xanh', 'Bao gồm buffet sáng phong phú']
    }
  },
  {
    id: 'family-cozy-suite',
    name: {
      en: 'Family Cozy Suite',
      vi: 'Phòng Gia Đình Tiện Nghi'
    },
    subtitle: {
      en: 'Tailored for small families or trios · 3 Rooms Available',
      vi: 'Thiết kế riêng cho gia đình nhỏ hoặc nhóm 3 người · Có 3 phòng'
    },
    totalCount: 3,
    capacityGuests: 3,
    bedConfig: {
      en: '1 Queen Bed + 1 Single Bed',
      vi: '1 Giường đôi Queen + 1 Giường đơn'
    },
    sizeM2: 29,
    priceVnd: 1300000,
    image: '/src/assets/images/sol_oasis_deluxe_room_1790754577535.jpg',
    gallery: [
      '/src/assets/images/sol_oasis_deluxe_room_1790754577535.jpg',
      '/src/assets/images/hero_sol_oasis_resort_1790754559731.jpg',
      '/src/assets/images/sol_oasis_bbq_backyard_1790754590853.jpg'
    ],
    description: {
      en: 'Thoughtfully arranged 29m² room configured with one queen bed and one single bed to comfortably accommodate 3 guests. Panoramic window and patio looking out onto the garden and shimmering pool.',
      vi: 'Không gian ấm cúng 29m² bố trí thông minh gồm 1 giường Queen và 1 giường đơn cho 3 người ở thoải mái. Cửa sổ lớn ngắm trọn cảnh sắc sân vườn và hồ bơi xanh mát mỗi sớm mai.'
    },
    view: {
      en: 'Central Pool & Tropical Garden View',
      vi: 'View trực diện Hồ bơi trung tâm & Sân vườn'
    },
    keyFeatures: {
      en: ['29m² optimized layout', 'Sleeps 3 comfortably', 'Pool & Garden view terrace', 'Included Breakfast Buffet'],
      vi: ['Diện tích 29m² tối ưu', 'Dành riêng cho 3 khách', 'Ban công ngắm trọn hồ bơi & vườn', 'Bao gồm buffet sáng hàng ngày']
    }
  },
  {
    id: 'grand-family-villa-suite',
    name: {
      en: 'Grand Family Villa Suite',
      vi: 'Phòng Gia Đình Lớn (3 Giường Đôi)'
    },
    subtitle: {
      en: 'Exclusive grand villa suite for 6 guests · Only 1 Room Available',
      vi: 'Biệt thự suite độc bản cho 6 người · Duy nhất 1 phòng'
    },
    totalCount: 1,
    capacityGuests: 6,
    bedConfig: {
      en: '3 Double Beds (1.6m × 2.0m each)',
      vi: '3 Giường đôi cao cấp (1.6m × 2.0m mỗi giường)'
    },
    sizeM2: 50,
    priceVnd: 1800000,
    image: '/src/assets/images/hero_sol_oasis_resort_1790754559731.jpg',
    gallery: [
      '/src/assets/images/hero_sol_oasis_resort_1790754559731.jpg',
      '/src/assets/images/sol_oasis_billiards_lounge_1790754600898.jpg',
      '/src/assets/images/sol_oasis_deluxe_room_1790754577535.jpg',
      '/src/assets/images/sol_oasis_bbq_backyard_1790754590853.jpg'
    ],
    description: {
      en: 'Our premier signature 50m² grand suite featuring three comfortable double beds accommodating up to 6 guests with ease. Boasts the finest panoramic views over the pool and 3,000m² private oasis grounds.',
      vi: 'Căn phòng rộng nhất khu nghỉ dưỡng với 50m², sở hữu 3 giường đôi riêng biệt cho tối đa 6 người. Tầm nhìn panorama đắt giá nhất bao trọn toàn bộ hồ bơi trung tâm và khuôn viên 3.000m² ngập tràn cây xanh.'
    },
    view: {
      en: 'Top Panoramic Pool & Garden View',
      vi: 'View panorama đẹp nhất toàn cảnh Hồ bơi & Sân vườn'
    },
    keyFeatures: {
      en: ['50m² grand master suite', '3 full double beds for 6 guests', 'Best panoramic resort vantage', 'Included Breakfast Buffet'],
      vi: ['Diện tích 50m² cực đại', '3 Giường đôi cho 6 người', 'Vị trí ngắm cảnh đẹp nhất homestay', 'Bao gồm buffet sáng thịnh soạn']
    }
  }
];

export const STANDARD_ROOM_AMENITIES = [
  {
    key: 'fridge',
    iconName: 'Refrigerator',
    title: { en: 'Mini Fridge', vi: 'Tủ lạnh mini' },
    desc: { en: 'In-room chilled beverages & snacks', vi: 'Giữ đồ uống và hoa quả luôn mát lạnh' }
  },
  {
    key: 'hairdryer',
    iconName: 'Wind',
    title: { en: 'Hairdryer', vi: 'Máy sấy tóc' },
    desc: { en: 'High-power quiet salon dryer', vi: 'Công suất mạnh, sấy tóc nhanh' }
  },
  {
    key: 'toiletries',
    iconName: 'Sparkles',
    title: { en: 'Premium Toiletries', vi: 'Dụng cụ WC cá nhân' },
    desc: { en: 'Eco-friendly toothbrushes, shampoo & body wash', vi: 'Bàn chải, kem đánh răng, sữa tắm, dầu gội cao cấp' }
  },
  {
    key: 'ac',
    iconName: 'AirVent',
    title: { en: 'Dual 2-Way AC', vi: 'Điều hoà 2 chiều' },
    desc: { en: 'Cooling & heating dual-inverter climate control', vi: 'Điều hòa mát sâu mùa hè, sưởi ấm mùa đông' }
  },
  {
    key: 'fan',
    iconName: 'Fan',
    title: { en: 'Room Fan', vi: 'Quạt làm mát' },
    desc: { en: 'Gentle natural airflow in every room', vi: 'Thoáng khí tự nhiên, êm ái' }
  },
  {
    key: 'hotwater',
    iconName: 'Flame',
    title: { en: 'Instant Hot Water', vi: 'Bình nóng lạnh' },
    desc: { en: 'High-pressure rainfall shower 24/7', vi: 'Áp lực nước mạnh, nước nóng ổn định 24/7' }
  },
  {
    key: 'poolview',
    iconName: 'Eye',
    title: { en: '100% Pool & Garden View', vi: 'Tất cả view hồ bơi & vườn' },
    desc: { en: 'Every single room has a private pool view', vi: '100% các phòng đều có tầm nhìn hồ bơi xanh mát' }
  },
  {
    key: 'wifi',
    iconName: 'Wifi',
    title: { en: 'High-Speed Wi-Fi', vi: 'Wifi tốc độ cao' },
    desc: { en: 'Dedicated fiber connection for work & stream', vi: 'Cáp quang tốc độ cao cho làm việc & giải trí' }
  }
];

export const GROUNDS_FACILITIES = [
  {
    id: 'pool',
    title: { en: 'Central Turquoise Swimming Pool', vi: 'Hồ Bơi Trung Tâm Khuôn Viên' },
    badge: { en: 'Resort Centerpiece', vi: 'Tâm Điểm Nghỉ Dưỡng' },
    desc: {
      en: 'A crystal-clear central pool positioned right in the heart of the grounds, framed by tropical palms and stylish wooden sun loungers for midday sunbathing or sunset dips.',
      vi: 'Hồ bơi nước trong vắt tọa lạc ngay giữa trung tâm khuôn viên, bao quanh bởi những hàng dừa nhiệt đới và ghế tắm nắng êm ái để bạn thư giãn suốt cả ngày.'
    },
    image: '/src/assets/images/hero_sol_oasis_resort_1790754559731.jpg'
  },
  {
    id: 'bbq',
    title: { en: 'Expansive Garden & Outdoor BBQ', vi: 'Sân Vườn & Khu Nướng BBQ Sân Sau' },
    badge: { en: '3,000m² Estate', vi: 'Khuôn Viên 3.000m²' },
    desc: {
      en: 'An immense 3,000m² lush garden featuring a dedicated backyard BBQ grill zone with fairy lights, long rustic timber picnic tables, and grilling tools for memorable evening gatherings.',
      vi: 'Khuôn viên 3.000m² xanh mướt với không gian nướng BBQ ngoài trời riêng biệt tại sân sau. Đầy đủ bếp nướng, bàn gỗ dài và đèn led lung linh cho bữa tiệc tối cùng bạn bè.'
    },
    image: '/src/assets/images/sol_oasis_bbq_backyard_1790754590853.jpg'
  },
  {
    id: 'billiards',
    title: { en: 'Restaurant Lounge & Billiards Table', vi: 'Nhà Hàng & Bàn Bi-a Giải Trí' },
    badge: { en: 'Social Hub', vi: 'Không Gian Giao Lưu' },
    desc: {
      en: 'A vibrant international dining lounge with a professional slate billiards table where travelers from around the world gather for casual matches, refreshing drinks, and great tunes.',
      vi: 'Nhà hàng tích hợp quầy bar phong cách mở với bàn bi-a tiêu chuẩn quốc tế miễn phí, là nơi các du khách trong và ngoài nước gặp gỡ, trò chuyện và giao lưu.'
    },
    image: '/src/assets/images/sol_oasis_billiards_lounge_1790754600898.jpg'
  },
  {
    id: 'reception',
    title: { en: '24/7 Front Desk & Included Breakfast Buffet', vi: 'Lễ Tân 24/7 & Buffet Bữa Sáng Miễn Phí' },
    badge: { en: 'All Included', vi: 'Dịch Vụ Chu Đáo' },
    desc: {
      en: 'Our friendly multilingual reception team is available 24/7 to assist with scooter rentals, airport shuttles, and local tour tips. Every stay includes our daily complimentary breakfast buffet.',
      vi: 'Đội ngũ lễ tân nhiệt tình hỗ trợ 24/7 từ hỗ trợ check-in muộn, thuê xe máy, xe đưa đón. Đặc biệt, tất cả giá phòng đều đã bao gồm buffet bữa sáng nóng sốt, thơm ngon.'
    },
    image: '/src/assets/images/sol_oasis_deluxe_room_1790754577535.jpg'
  }
];

export const REVIEWS = [
  {
    author: 'Liam & Sophie',
    country: 'Australia / United Kingdom',
    rating: 5,
    text: {
      en: 'Sol Oasis completely exceeded our expectations! The central pool is stunning, fast WiFi for remote work, and we had an epic BBQ night with fellow travelers in the backyard. 10/10 stay.',
      vi: 'Sol Oasis vượt ngoài mong đợi của chúng tôi! Hồ bơi trung tâm siêu đẹp, wifi cực nhanh để làm việc từ xa, và tiệc BBQ sân sau vô cùng ấm cúng. Chắc chắn sẽ quay lại!'
    },
    stayed: {
      en: 'Stayed 5 nights · Deluxe Double',
      vi: 'Ở 5 đêm · Phòng Đơn Cao Cấp'
    }
  },
  {
    author: 'Minh & Hoàng Travel Group',
    country: 'Hà Nội, Vietnam',
    rating: 5,
    text: {
      en: 'Khuôn viên 3.000m² cực kỳ rộng rãi và thoáng mát, phòng 50m² cho nhóm 6 người ngủ cực kỳ thoải mái. Đồ ăn buffet sáng rất ngon, bàn bi-a chơi free rất vui!',
      vi: 'Khuôn viên 3.000m² cực kỳ rộng rãi và thoáng mát, phòng 50m² cho nhóm 6 người ngủ cực kỳ thoải mái. Đồ ăn buffet sáng rất ngon, bàn bi-a chơi free rất vui!'
    },
    stayed: {
      en: 'Stayed 3 nights · Grand Family Villa',
      vi: 'Ở 3 đêm · Phòng Gia Đình Lớn 50m²'
    }
  },
  {
    author: 'Marc Schneider',
    country: 'Germany',
    rating: 5,
    text: {
      en: 'Clean, youthful modern design that matches European boutique hotels. Having 24/7 reception and full air conditioning + fan made the tropical climate so comfortable.',
      vi: 'Thiết kế trẻ trung, hiện đại tương đương các khách sạn boutique tại châu Âu. Lễ tân 24/7 và điều hòa 2 chiều cùng quạt giúp kỳ nghỉ vô cùng dễ chịu.'
    },
    stayed: {
      en: 'Stayed 1 week · Superior Quad',
      vi: 'Ở 1 tuần · Phòng Đôi Tiêu Chuẩn'
    }
  }
];

export const FAQS = [
  {
    question: {
      en: 'What are the check-in and check-out times?',
      vi: 'Thời gian nhận phòng và trả phòng như thế nào?'
    },
    answer: {
      en: 'Check-in is from 14:00 (2:00 PM) and check-out is until 12:00 (12:00 PM). Because our front desk is staffed 24/7, late-night check-in is always supported smoothly.',
      vi: 'Giờ nhận phòng từ 14:00 và trả phòng trước 12:00 trưa. Vì quầy lễ tân trực 24/7 nên khách đến vào ban đêm hoặc rạng sáng luôn được hỗ trợ nhanh chóng.'
    }
  },
  {
    question: {
      en: 'Is the breakfast buffet really included in the room price?',
      vi: 'Giá phòng đã bao gồm buffet bữa sáng chưa?'
    },
    answer: {
      en: 'Yes! Every room booking includes our daily breakfast buffet featuring local Vietnamese specialties, fresh tropical fruits, eggs made to order, and artisanal coffee.',
      vi: 'Chính xác! Tất cả các hạng phòng tại Sol Oasis đều đã bao gồm buffet bữa sáng nóng hổi, hoa quả tươi nhiệt đới và cà phê thơm ngon mỗi ngày mà không phụ thu.'
    }
  },
  {
    question: {
      en: 'Do all rooms really have views of the pool and garden?',
      vi: 'Có phải tất cả các phòng đều nhìn ra hồ bơi và sân vườn không?'
    },
    answer: {
      en: 'Yes, 100% of our 13 rooms are arranged around the central swimming pool and 3,000m² lush garden, ensuring every guest enjoys a serene tropical view from their window or private patio.',
      vi: 'Đúng vậy! Toàn bộ 13 phòng nghỉ tại Sol Oasis đều được thiết kế hướng nhìn trực diện về hồ bơi trung tâm và khuôn viên sân vườn 3.000m² ngập tràn cây xanh.'
    }
  },
  {
    question: {
      en: 'Can we use the backyard outdoor BBQ and billiards table?',
      vi: 'Khách có được sử dụng khuôn viên nướng BBQ sân sau và bàn bi-a không?'
    },
    answer: {
      en: 'Absolutely! The billiards table inside the restaurant lounge is free to play for all staying guests. The backyard BBQ grill zone is available for private or group cookouts; our team can provide charcoal and prep assistance upon request.',
      vi: 'Hoàn toàn có! Bàn bi-a trong nhà hàng phục vụ miễn phí cho khách lưu trú. Khuôn viên nướng BBQ sân sau luôn sẵn sàng cho các bữa tiệc nướng ngoài trời, lễ tân có thể hỗ trợ than và dụng cụ.'
    }
  },
  {
    question: {
      en: 'How can I contact or reserve directly?',
      vi: 'Làm thế nào để liên hệ đặt phòng trực tiếp?'
    },
    answer: {
      en: 'You can reserve through our instant booking estimator on this site, call or WhatsApp our hotline directly at +84399587856, or email Salemarketing1998@gmail.com for instant confirmation.',
      vi: 'Bạn có thể gửi yêu cầu đặt phòng trực tiếp trên website, gọi điện hoặc nhắn tin Zalo/WhatsApp tới hotline +84399587856, hoặc gửi email tới Salemarketing1998@gmail.com để được xác nhận ngay lập tức.'
    }
  }
];
