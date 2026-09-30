import React from 'react';
import { Language } from '../types/homestay';
import { STANDARD_ROOM_AMENITIES } from '../data/homestayData';
import {
  Refrigerator,
  Wind,
  Sparkles,
  AirVent,
  Fan,
  Flame,
  Eye,
  Wifi,
  Coffee,
  Clock,
  Waves,
  Trophy,
  Check,
} from 'lucide-react';

interface IncludedAmenitiesProps {
  language: Language;
}

export const IncludedAmenities: React.FC<IncludedAmenitiesProps> = ({ language }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Refrigerator':
        return <Refrigerator className="w-6 h-6 text-amber-600" />;
      case 'Wind':
        return <Wind className="w-6 h-6 text-amber-600" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-amber-600" />;
      case 'AirVent':
        return <AirVent className="w-6 h-6 text-amber-600" />;
      case 'Fan':
        return <Fan className="w-6 h-6 text-amber-600" />;
      case 'Flame':
        return <Flame className="w-6 h-6 text-amber-600" />;
      case 'Eye':
        return <Eye className="w-6 h-6 text-amber-600" />;
      case 'Wifi':
        return <Wifi className="w-6 h-6 text-amber-600" />;
      default:
        return <Check className="w-6 h-6 text-amber-600" />;
    }
  };

  return (
    <section id="amenities" className="py-20 bg-stone-100 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-amber-700 mb-2">
            {language === 'en' ? 'Complete Comfort Guarantee' : 'Tiện Nghi Tiêu Chuẩn Quốc Tế'}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight [text-wrap:balance]">
            {language === 'en'
              ? 'Thoughtful In-Room Amenities for Effortless Stays'
              : 'Trang Bị Đầy Đủ Trong Mọi Phòng Nghỉ'}
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base">
            {language === 'en'
              ? 'Every single one of our 13 rooms comes fully furnished with climate control, private refrigeration, premium toiletries, and direct pool views.'
              : 'Toàn bộ 13 phòng đều được chăm chút tỉ mỉ từng chi tiết, từ điều hòa 2 chiều, quạt mát, máy sấy đến đồ vệ sinh cá nhân cao cấp.'}
          </p>
        </div>

        {/* 8 In-Room Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {STANDARD_ROOM_AMENITIES.map((amenity) => (
            <div
              key={amenity.key}
              className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm hover:border-amber-400/50 transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center mb-4">
                {getIcon(amenity.iconName)}
              </div>
              <h3 className="text-base font-bold text-stone-900 mb-1.5">
                {amenity.title[language]}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {amenity.desc[language]}
              </p>
            </div>
          ))}
        </div>

        {/* Complimentary Resort Inclusions Banner */}
        <div className="bg-stone-900 text-white rounded-3xl p-8 sm:p-10 border border-stone-800 shadow-xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-center lg:text-left">
              <div className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2">
                {language === 'en' ? 'Included At No Extra Charge' : 'Đặc Quyền Đã Bao Gồm Trong Giá'}
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                {language === 'en'
                  ? 'Buffet Breakfast & Billiards Lounge Access'
                  : 'Buffet Sáng Hàng Ngày & Bàn Bi-a Giải Trí'}
              </h3>
              <p className="mt-2 text-stone-300 text-xs sm:text-sm leading-relaxed">
                {language === 'en'
                  ? 'No hidden resort fees. Wake up to a free morning breakfast spread and unwind anytime with friendly billiards games in our social dining lounge.'
                  : 'Không phụ phí ẩn. Thưởng thức buffet sáng giàu dinh dưỡng và tự do chơi bi-a miễn phí trong nhà hàng bất cứ lúc nào bạn muốn.'}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full lg:w-auto shrink-0">
              <div className="bg-stone-800/80 rounded-xl p-4 text-center border border-stone-700">
                <Coffee className="w-6 h-6 text-amber-400 mx-auto mb-2" />
                <div className="text-xs font-bold">{language === 'en' ? 'Breakfast' : 'Buffet Sáng'}</div>
                <div className="text-[11px] text-stone-400">{language === 'en' ? '100% Free' : 'Miễn phí'}</div>
              </div>

              <div className="bg-stone-800/80 rounded-xl p-4 text-center border border-stone-700">
                <Trophy className="w-6 h-6 text-amber-400 mx-auto mb-2" />
                <div className="text-xs font-bold">{language === 'en' ? 'Billiards' : 'Bàn Bi-a'}</div>
                <div className="text-[11px] text-stone-400">{language === 'en' ? 'Free play' : 'Miễn phí'}</div>
              </div>

              <div className="bg-stone-800/80 rounded-xl p-4 text-center border border-stone-700 col-span-2 sm:col-span-1">
                <Clock className="w-6 h-6 text-amber-400 mx-auto mb-2" />
                <div className="text-xs font-bold">{language === 'en' ? 'Reception' : 'Lễ Tân'}</div>
                <div className="text-[11px] text-stone-400">{language === 'en' ? '24/7 Support' : 'Trực 24/7'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
