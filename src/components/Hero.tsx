import React, { useState } from 'react';
import { Language, Currency } from '../types/homestay';
import { HOMESTAY_INFO } from '../data/homestayData';
import { Calendar, Users, ArrowRight, ShieldCheck, Coffee, Sparkles } from 'lucide-react';
import { getTodayDateString, getTomorrowDateString } from '../utils/formatters';

interface HeroProps {
  language: Language;
  currency: Currency;
  onOpenBookingWithCriteria: (dates: { checkIn: string; checkOut: string; guests: number }) => void;
  onScrollToRooms: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  language,
  currency,
  onOpenBookingWithCriteria,
  onScrollToRooms,
}) => {
  const [checkIn, setCheckIn] = useState(getTodayDateString());
  const [checkOut, setCheckOut] = useState(getTomorrowDateString());
  const [guests, setGuests] = useState(2);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenBookingWithCriteria({ checkIn, checkOut, guests });
  };

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Measured Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_sol_oasis_resort_1790754559731.jpg"
          alt="Sol Oasis Resort central pool and garden grounds"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Measured dark gradient scrim for 4.5:1 text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-stone-900/40" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white mt-10">
        {/* Unboxed Metadata (Zero-Pill Discipline) */}
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium tracking-wider text-amber-300 uppercase mb-4">
          <span>{language === 'en' ? 'Boutique Tropical Sanctuary' : 'Khu Nghỉ Dưỡng Nhiệt Đới Trẻ Trung'}</span>
          <span aria-hidden="true">·</span>
          <span>3,000m² Estate</span>
          <span aria-hidden="true">·</span>
          <span>13 Private Rooms</span>
        </div>

        {/* Display Headline with text-wrap: balance */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 max-w-4xl mx-auto [text-wrap:balance] text-white">
          {language === 'en' ? (
            <>
              Your Sun-Drenched <span className="text-amber-400">Tropical Oasis</span> for Mindful Living
            </>
          ) : (
            <>
              Ốc Đảo Nghỉ Dưỡng <span className="text-amber-400">Trẻ Trung</span> Giữa Thiên Nhiên Xanh
            </>
          )}
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg lg:text-xl text-stone-200 max-w-3xl mx-auto mb-10 font-normal leading-relaxed">
          {language === 'en'
            ? 'Designed for international nomads, couples & groups of friends. 13 standalone private rooms all overlooking our central turquoise pool, lush BBQ backyard garden, social billiards lounge, and daily complimentary breakfast buffet.'
            : 'Thiết kế hiện đại chuẩn phong cách sống năng động quốc tế. 13 phòng nghỉ riêng biệt 100% view hồ bơi và vườn 3.000m², tiệc BBQ ngoài trời, bàn bi-a giải trí và buffet bữa sáng thơm ngon mỗi ngày.'}
        </p>

        {/* Interactive Fast Booking Bar */}
        <div className="max-w-4xl mx-auto bg-stone-900/90 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-stone-800 shadow-2xl text-left mb-8">
          <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            {/* Check-In */}
            <div>
              <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                <span>{language === 'en' ? 'Check-in' : 'Nhận phòng'}</span>
              </label>
              <input
                type="date"
                value={checkIn}
                min={getTodayDateString()}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full bg-stone-800 border border-stone-700 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                required
              />
            </div>

            {/* Check-Out */}
            <div>
              <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                <span>{language === 'en' ? 'Check-out' : 'Trả phòng'}</span>
              </label>
              <input
                type="date"
                value={checkOut}
                min={checkIn || getTodayDateString()}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full bg-stone-800 border border-stone-700 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                required
              />
            </div>

            {/* Guests */}
            <div>
              <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-amber-400" />
                <span>{language === 'en' ? 'Guests' : 'Số lượng khách'}</span>
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full bg-stone-800 border border-stone-700 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                <option value={1}>1 {language === 'en' ? 'Guest (Solo)' : 'Khách (Đơn)'}</option>
                <option value={2}>2 {language === 'en' ? 'Guests (Couple/Twin)' : 'Khách (Cặp đôi)'}</option>
                <option value={3}>3 {language === 'en' ? 'Guests (Trio/Family)' : 'Khách (3 người)'}</option>
                <option value={4}>4 {language === 'en' ? 'Guests (Quad/Group)' : 'Khách (Nhóm 4)'}</option>
                <option value={6}>6 {language === 'en' ? 'Guests (Grand Suite)' : 'Khách (Gia đình 6)'}</option>
              </select>
            </div>

            {/* Action CTA */}
            <div>
              <button
                type="submit"
                className="w-full h-[42px] bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg active:scale-95"
              >
                <span>{language === 'en' ? 'Check Rates' : 'Xem Giá & Đặt'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>

          {/* Value inclusions in fast-check bar */}
          <div className="mt-4 pt-3 border-t border-stone-800 flex flex-wrap items-center justify-between gap-y-2 text-xs text-stone-400">
            <div className="flex items-center gap-1.5">
              <Coffee className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{language === 'en' ? 'Breakfast Buffet Included' : 'Buffet bữa sáng miễn phí'}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{language === 'en' ? '100% Pool & Garden Views' : '100% phòng view hồ bơi & vườn'}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
              <span>{language === 'en' ? '24/7 Multilingual Front Desk' : 'Lễ tân trực 24/7'}</span>
            </div>
          </div>
        </div>

        {/* Secondary exploration link */}
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={onScrollToRooms}
            className="text-stone-300 hover:text-white text-sm font-medium underline underline-offset-4 decoration-stone-500 transition-colors"
          >
            {language === 'en' ? 'Explore all 13 private rooms ↓' : 'Khám phá toàn bộ 13 phòng nghỉ ↓'}
          </button>
        </div>
      </div>
    </section>
  );
};
