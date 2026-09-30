import React, { useState } from 'react';
import { RoomType, Language, Currency } from '../types/homestay';
import { ROOMS_DATA } from '../data/homestayData';
import { formatPrice } from '../utils/formatters';
import { Users, Maximize, Bed, Coffee, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface RoomCatalogProps {
  language: Language;
  currency: Currency;
  onSelectRoomModal: (room: RoomType) => void;
  onBookRoom: (roomId: string) => void;
}

export const RoomCatalog: React.FC<RoomCatalogProps> = ({
  language,
  currency,
  onSelectRoomModal,
  onBookRoom,
}) => {
  const [guestFilter, setGuestFilter] = useState<number | 'all'>('all');

  const filteredRooms = ROOMS_DATA.filter((r) => {
    if (guestFilter === 'all') return true;
    return r.capacityGuests === guestFilter;
  });

  return (
    <section id="rooms" className="py-20 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-amber-700 mb-2">
              {language === 'en' ? 'Exclusive Accommodations' : 'Hệ Thống Phòng Nghỉ'}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight [text-wrap:balance]">
              {language === 'en' ? '13 Private Sanctuary Rooms' : '13 Phòng Nghỉ Riêng Biệt'}
            </h2>
            <p className="mt-3 text-stone-600 max-w-2xl text-sm sm:text-base">
              {language === 'en'
                ? 'Every room features panoramic views of our central turquoise pool and 3,000m² tropical garden. Complete with 2-way AC, rainfall hot shower, and daily breakfast buffet.'
                : 'Tất cả 13 phòng đều view trực diện hồ bơi trung tâm và vườn cây nhiệt đới 3.000m². Trang bị đầy đủ tiện nghi cao cấp và buffet bữa sáng thơm ngon mỗi ngày.'}
            </p>
          </div>

          {/* Guest Filter Tabs (Interactive Functional Buttons) */}
          <div className="flex items-center gap-1.5 p-1.5 bg-stone-200/80 rounded-xl overflow-x-auto shrink-0 self-start md:self-end">
            <button
              onClick={() => setGuestFilter('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                guestFilter === 'all'
                  ? 'bg-stone-900 text-white shadow-sm'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
            >
              {language === 'en' ? 'All (13 Rooms)' : 'Tất cả (13 phòng)'}
            </button>
            <button
              onClick={() => setGuestFilter(2)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                guestFilter === 2
                  ? 'bg-stone-900 text-white shadow-sm'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
            >
              2 {language === 'en' ? 'Guests (5 Rms)' : 'Người (5 phòng)'}
            </button>
            <button
              onClick={() => setGuestFilter(3)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                guestFilter === 3
                  ? 'bg-stone-900 text-white shadow-sm'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
            >
              3 {language === 'en' ? 'Guests (3 Rms)' : 'Người (3 phòng)'}
            </button>
            <button
              onClick={() => setGuestFilter(4)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                guestFilter === 4
                  ? 'bg-stone-900 text-white shadow-sm'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
            >
              4 {language === 'en' ? 'Guests (4 Rms)' : 'Người (4 phòng)'}
            </button>
            <button
              onClick={() => setGuestFilter(6)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                guestFilter === 6
                  ? 'bg-stone-900 text-white shadow-sm'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
            >
              6 {language === 'en' ? 'Guests (Grand)' : 'Người (Villa 50m²)'}
            </button>
          </div>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredRooms.map((room) => (
            <div
              key={room.id}
              className="group bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image & Overlay */}
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                  <img
                    src={room.image}
                    alt={room.name[language]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />

                  {/* Room Inventory Counter & View Indicator */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                    <span className="bg-stone-900/80 backdrop-blur-sm px-2.5 py-1 rounded-md font-semibold">
                      {room.totalCount} {language === 'en' ? 'rooms total' : 'căn riêng biệt'}
                    </span>
                    <span className="bg-amber-500/90 text-stone-950 font-bold px-2.5 py-1 rounded-md">
                      {language === 'en' ? 'Pool & Garden View' : 'View Hồ Bơi & Vườn'}
                    </span>
                  </div>

                  {/* Card Title inside gradient */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                      {room.name[language]}
                    </h3>
                    <p className="text-xs text-stone-300 line-clamp-1 mt-0.5">
                      {room.subtitle[language]}
                    </p>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  {/* Zero-Pill Unboxed Metadata with Typographic Separator */}
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-stone-600 font-medium mb-4 pb-3 border-b border-stone-100">
                    <span className="flex items-center gap-1 text-stone-900 font-semibold">
                      <Maximize className="w-3.5 h-3.5 text-amber-600" />
                      <span>{room.sizeM2} m²</span>
                    </span>
                    <span aria-hidden="true" className="text-stone-300">·</span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-amber-600" />
                      <span>{room.capacityGuests} {language === 'en' ? 'Guests' : 'Người'}</span>
                    </span>
                    <span aria-hidden="true" className="text-stone-300">·</span>
                    <span className="flex items-center gap-1 truncate max-w-[200px]">
                      <Bed className="w-3.5 h-3.5 text-amber-600" />
                      <span>{room.bedConfig[language]}</span>
                    </span>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 mb-6">
                    {room.keyFeatures[language].map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-700">
                        <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* In-Room Standard Inclusion Notice */}
                  <div className="flex items-center gap-2 text-xs text-stone-500 bg-stone-50 p-2.5 rounded-lg mb-4">
                    <Coffee className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>
                      {language === 'en'
                        ? 'Includes Breakfast Buffet, Mini Fridge, AC & Hairdryer'
                        : 'Bao gồm buffet sáng, tủ lạnh mini, điều hòa 2 chiều & máy sấy'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 border-t border-stone-100 flex items-center justify-between gap-4">
                <div>
                  <div className="text-[11px] text-stone-500 uppercase tracking-wider">
                    {language === 'en' ? 'Per Night' : 'Giá 1 đêm'}
                  </div>
                  <div className="text-xl sm:text-2xl font-extrabold text-stone-900">
                    {formatPrice(room.priceVnd, currency)}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onSelectRoomModal(room)}
                    className="px-3.5 py-2.5 text-xs font-semibold text-stone-700 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors flex items-center gap-1"
                  >
                    <span>{language === 'en' ? 'Details' : 'Chi tiết'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onBookRoom(room.id)}
                    className="px-5 py-2.5 text-xs font-bold text-stone-950 bg-amber-500 hover:bg-amber-400 rounded-lg transition-all shadow-sm hover:shadow active:scale-95 whitespace-nowrap"
                  >
                    {language === 'en' ? 'Book Room' : 'Đặt Phòng'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
