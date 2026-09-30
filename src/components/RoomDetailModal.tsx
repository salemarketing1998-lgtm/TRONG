import React from 'react';
import { RoomType, Language, Currency } from '../types/homestay';
import { X, Users, Maximize, Bed, Eye, Check, Coffee, ArrowRight } from 'lucide-react';
import { formatPrice } from '../utils/formatters';
import { STANDARD_ROOM_AMENITIES } from '../data/homestayData';

interface RoomDetailModalProps {
  room: RoomType | null;
  language: Language;
  currency: Currency;
  onClose: () => void;
  onBookRoom: (roomId: string) => void;
}

export const RoomDetailModal: React.FC<RoomDetailModalProps> = ({
  room,
  language,
  currency,
  onClose,
  onBookRoom,
}) => {
  if (!room) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative bg-white text-stone-900 rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-stone-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-stone-900/60 hover:bg-stone-900 text-white rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Gallery / Image Header */}
        <div className="relative aspect-video sm:aspect-[16/9] w-full bg-stone-100 overflow-hidden">
          <img
            src={room.image}
            alt={room.name[language]}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-300 uppercase mb-1">
              <span>{room.totalCount} {language === 'en' ? 'Rooms of this type' : 'Phòng tiêu chuẩn này'}</span>
              <span aria-hidden="true">·</span>
              <span>{room.view[language]}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              {room.name[language]}
            </h2>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Key Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 px-5 bg-stone-50 rounded-xl border border-stone-100 text-sm">
            <div>
              <div className="text-xs text-stone-500 flex items-center gap-1.5 mb-1">
                <Maximize className="w-3.5 h-3.5 text-amber-600" />
                <span>{language === 'en' ? 'Room Area' : 'Diện tích'}</span>
              </div>
              <p className="font-semibold text-stone-900">{room.sizeM2} m²</p>
            </div>

            <div>
              <div className="text-xs text-stone-500 flex items-center gap-1.5 mb-1">
                <Users className="w-3.5 h-3.5 text-amber-600" />
                <span>{language === 'en' ? 'Max Capacity' : 'Số khách'}</span>
              </div>
              <p className="font-semibold text-stone-900">
                {room.capacityGuests} {language === 'en' ? 'Guests' : 'Người'}
              </p>
            </div>

            <div>
              <div className="text-xs text-stone-500 flex items-center gap-1.5 mb-1">
                <Bed className="w-3.5 h-3.5 text-amber-600" />
                <span>{language === 'en' ? 'Bedding' : 'Giường'}</span>
              </div>
              <p className="font-semibold text-stone-900 text-xs sm:text-sm truncate">
                {room.bedConfig[language]}
              </p>
            </div>

            <div>
              <div className="text-xs text-stone-500 flex items-center gap-1.5 mb-1">
                <Eye className="w-3.5 h-3.5 text-amber-600" />
                <span>{language === 'en' ? 'Balcony View' : 'Tầm nhìn'}</span>
              </div>
              <p className="font-semibold text-amber-700 text-xs sm:text-sm">
                {language === 'en' ? 'Pool & Garden' : 'Hồ bơi & Vườn'}
              </p>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-stone-500 mb-2">
              {language === 'en' ? 'Room Overview' : 'Mô tả chi tiết'}
            </h3>
            <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
              {room.description[language]}
            </p>
          </div>

          {/* Included In-Room Amenities Checklist */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-stone-500 mb-3">
              {language === 'en' ? 'In-Room Amenities (Included)' : 'Tiện nghi có sẵn trong phòng'}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs text-stone-700">
              {STANDARD_ROOM_AMENITIES.map((amenity) => (
                <div key={amenity.key} className="flex items-center gap-2 py-1.5 px-2.5 bg-stone-50 rounded-lg">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-medium">{amenity.title[language]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Breakfast Buffet Note */}
          <div className="flex items-center gap-3 p-3.5 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 text-xs sm:text-sm">
            <Coffee className="w-5 h-5 text-amber-600 shrink-0" />
            <div>
              <span className="font-bold">
                {language === 'en' ? 'Complimentary Breakfast Buffet Included: ' : 'Miễn phí buffet bữa sáng: '}
              </span>
              <span>
                {language === 'en'
                  ? 'Enjoy a freshly cooked daily buffet spread from 7:00 AM to 10:00 AM.'
                  : 'Phục vụ hàng ngày từ 7:00 đến 10:00 sáng với đa dạng món ngon nóng sốt.'}
              </span>
            </div>
          </div>

          {/* Footer Action */}
          <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-xs text-stone-500">
                {language === 'en' ? 'Nightly Rate (All Taxes & Breakfast Included)' : 'Giá mỗi đêm (Đã gồm thuế & buffet sáng)'}
              </div>
              <div className="text-2xl font-bold text-stone-900">
                {formatPrice(room.priceVnd, currency)}{' '}
                <span className="text-xs font-normal text-stone-500">/ {language === 'en' ? 'night' : 'đêm'}</span>
              </div>
            </div>

            <button
              onClick={() => {
                onClose();
                onBookRoom(room.id);
              }}
              className="w-full sm:w-auto px-7 py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 active:scale-95"
            >
              <span>{language === 'en' ? 'Reserve This Room' : 'Đặt Căn Phòng Này'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
