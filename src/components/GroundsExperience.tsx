import React from 'react';
import { Language } from '../types/homestay';
import { Waves, Flame, Trophy, Clock, Coffee, Trees, Sparkles, MapPin } from 'lucide-react';

interface GroundsExperienceProps {
  language: Language;
  onOpenBooking: () => void;
}

export const GroundsExperience: React.FC<GroundsExperienceProps> = ({
  language,
  onOpenBooking,
}) => {
  return (
    <section id="grounds" className="py-24 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-amber-700 mb-2">
            {language === 'en' ? 'Resort Grounds & Lifestyle' : 'Khuôn Viên 3.000m² & Không Gian Sống'}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight [text-wrap:balance]">
            {language === 'en'
              ? 'A 3,000m² Private Tropical Oasis Designed for Connection'
              : 'Ốc Đảo Sinh Thái 3.000m² Hòa Cùng Năng Lượng Trẻ'}
          </h2>
          <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed">
            {language === 'en'
              ? 'Step into open green spaces where you can take a morning dip in the central pool, play friendly billiards in the restaurant lounge, or host an unforgettable outdoor barbecue in our spacious backyard.'
              : 'Thư thả đắm mình trong làn nước trong vắt của hồ bơi trung tâm, giao lưu bi-a sôi nổi tại nhà hàng và thưởng thức tiệc nướng BBQ ngoài trời lung linh dưới ánh đèn sân sau.'}
          </p>
        </div>

        {/* Asymmetric Bento-Grid */}
        <div id="bbq-dining" className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Card 1: Central Swimming Pool (Col span 7) */}
          <div className="lg:col-span-7 bg-stone-950 text-white rounded-3xl overflow-hidden relative group min-h-[380px] sm:min-h-[440px] flex flex-col justify-end p-8 border border-stone-800">
            <img
              src="/src/assets/images/hero_sol_oasis_resort_1790754559731.jpg"
              alt="Sol Oasis central turquoise swimming pool"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />

            <div className="relative z-10 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-300 uppercase">
                <Waves className="w-4 h-4 text-amber-400" />
                <span>{language === 'en' ? 'Central Feature' : 'Tâm Điểm Khu Nghỉ'}</span>
                <span aria-hidden="true">·</span>
                <span>{language === 'en' ? 'Open 24/7' : 'Mở cửa 24/7'}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                {language === 'en' ? 'Central Turquoise Swimming Pool' : 'Hồ Bơi Trung Tâm Khuôn Viên'}
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm max-w-xl leading-relaxed">
                {language === 'en'
                  ? 'Surrounded by sun loungers and tropical greenery, the pool sits at the visual center of Sol Oasis. All 13 private rooms enjoy direct views of the shimmering water.'
                  : 'Nằm ngay trung tâm khuôn viên, được bao bọc bởi vườn dừa và ghế tắm nắng cao cấp. Toàn bộ 13 phòng nghỉ đều hướng nhìn trực tiếp ra hồ bơi trong vắt.'}
              </p>
            </div>
          </div>

          {/* Card 2: Backyard Outdoor BBQ Garden (Col span 5) */}
          <div className="lg:col-span-5 bg-stone-950 text-white rounded-3xl overflow-hidden relative group min-h-[380px] sm:min-h-[440px] flex flex-col justify-end p-8 border border-stone-800">
            <img
              src="/src/assets/images/sol_oasis_bbq_backyard_1790754590853.jpg"
              alt="Outdoor BBQ party garden in the backyard"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />

            <div className="relative z-10 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-300 uppercase">
                <Flame className="w-4 h-4 text-amber-400" />
                <span>{language === 'en' ? 'Spacious Backyard' : 'Sân Sau Cực Rộng'}</span>
                <span aria-hidden="true">·</span>
                <span>{language === 'en' ? 'BBQ Grills Ready' : 'Đầy Đủ Bếp Nướng'}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                {language === 'en' ? 'Outdoor BBQ Garden' : 'Khu Nướng BBQ Ngoài Trời'}
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                {language === 'en'
                  ? 'An expansive backyard garden outfitted with stainless steel grills, long rustic wooden dining tables, and ambient string lights for sunset feasts with friends.'
                  : 'Sân sau rộng rãi thoáng mát với bếp nướng hiện đại, bàn ăn gỗ dài ngoài trời và đèn led lung linh, lý tưởng cho những bữa tiệc nướng rộn rã tiếng cười.'}
              </p>
            </div>
          </div>

          {/* Card 3: Restaurant & Billiards Lounge (Col span 6) */}
          <div className="lg:col-span-6 bg-stone-950 text-white rounded-3xl overflow-hidden relative group min-h-[360px] flex flex-col justify-end p-8 border border-stone-800">
            <img
              src="/src/assets/images/sol_oasis_billiards_lounge_1790754600898.jpg"
              alt="Restaurant lounge with professional billiards table"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />

            <div className="relative z-10 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-300 uppercase">
                <Trophy className="w-4 h-4 text-amber-400" />
                <span>{language === 'en' ? 'Free for Guests' : 'Miễn Phí Khách Ở'}</span>
                <span aria-hidden="true">·</span>
                <span>{language === 'en' ? 'Restaurant & Bar' : 'Nhà Hàng & Bar'}</span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight">
                {language === 'en' ? 'Billiards Lounge & Bar' : 'Bàn Bi-a & Nhà Hàng Giao Lưu'}
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                {language === 'en'
                  ? 'Challenge fellow travelers to a match on our professional slate billiards table while sipping local craft beer, fresh coconut water, or chilled smoothies.'
                  : 'Bàn bi-a tiêu chuẩn quốc tế ngay trong không gian nhà hàng để bạn thư giãn giao lưu, thưởng thức bia thủ công hoặc nước dừa tươi mát lạnh.'}
              </p>
            </div>
          </div>

          {/* Card 4: 24/7 Front Desk & Included Breakfast Buffet (Col span 6) */}
          <div className="lg:col-span-6 bg-amber-900/10 rounded-3xl p-8 border border-amber-900/20 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-amber-700 uppercase mb-3">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>{language === 'en' ? 'Included In Every Stay' : 'Tiện Ích Đi Kèm Miễn Phí'}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight mb-4">
                {language === 'en'
                  ? 'Daily Breakfast Buffet & 24/7 Front Desk'
                  : 'Buffet Bữa Sáng & Lễ Tân Trực 24/7'}
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed mb-6">
                {language === 'en'
                  ? 'Wake up to a hearty complimentary buffet featuring hot Vietnamese phở, eggs cooked to your liking, baguettes, tropical seasonal fruits, and robust drip coffee. Our round-the-clock reception ensures effortless check-in at any hour.'
                  : 'Mỗi buổi sáng bắt đầu tràn đầy năng lượng với buffet sáng phong phú: phở nóng sốt, bánh mì, trứng theo yêu cầu, trái cây tươi nhiệt đới và cà phê phin đậm đà. Đội ngũ lễ tân túc trực 24/7 đón tiếp bạn chu đáo bất kể giờ nào.'}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-amber-900/15">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-700 shrink-0">
                  <Coffee className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-stone-500">{language === 'en' ? 'Breakfast Spread' : 'Bữa sáng'}</div>
                  <div className="text-xs sm:text-sm font-bold text-stone-900">{language === 'en' ? 'Included 100%' : 'Miễn Phí 100%'}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-700 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-stone-500">{language === 'en' ? 'Concierge' : 'Lễ tân'}</div>
                  <div className="text-xs sm:text-sm font-bold text-stone-900">{language === 'en' ? '24/7 On-Duty' : 'Trực 24/7'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
