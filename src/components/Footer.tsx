import React from 'react';
import { Language } from '../types/homestay';
import { HOMESTAY_INFO } from '../data/homestayData';
import { Phone, Mail, Heart } from 'lucide-react';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  return (
    <footer className="bg-stone-950 text-stone-300 py-14 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <span className="text-2xl font-bold tracking-tight text-white">
              {HOMESTAY_INFO.name}
            </span>
            <p className="text-stone-400 text-sm max-w-sm leading-relaxed">
              {language === 'en'
                ? 'A modern boutique tropical sanctuary designed for mindful travelers, digital nomads, and vacationers. 13 private rooms overlooking a central pool & 3,000m² garden.'
                : 'Khu homestay nghỉ dưỡng sinh thái trẻ trung với 13 phòng nghỉ riêng biệt nhìn ra hồ bơi trung tâm và khuôn viên 3.000m² xanh mát.'}
            </p>
            <div className="flex items-center gap-4 text-xs text-stone-400">
              <a
                href={`tel:${HOMESTAY_INFO.phone}`}
                className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-amber-500" />
                <span>{HOMESTAY_INFO.phoneDisplay}</span>
              </a>
              <span aria-hidden="true">·</span>
              <a
                href={`mailto:${HOMESTAY_INFO.email}`}
                className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5 text-amber-500" />
                <span>{HOMESTAY_INFO.email}</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              {language === 'en' ? 'Explore Sol Oasis' : 'Khám Phá'}
            </h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>
                <a href="#rooms" className="hover:text-white transition-colors">
                  {language === 'en' ? '13 Private Rooms' : '13 Phòng Nghỉ'}
                </a>
              </li>
              <li>
                <a href="#grounds" className="hover:text-white transition-colors">
                  {language === 'en' ? '3,000m² Grounds' : 'Khuôn Viên 3.000m²'}
                </a>
              </li>
              <li>
                <a href="#bbq-dining" className="hover:text-white transition-colors">
                  {language === 'en' ? 'Outdoor BBQ Garden' : 'Khu Nướng BBQ Sân Sau'}
                </a>
              </li>
              <li>
                <a href="#bbq-dining" className="hover:text-white transition-colors">
                  {language === 'en' ? 'Billiards Lounge' : 'Bàn Bi-a & Nhà Hàng'}
                </a>
              </li>
            </ul>
          </div>

          {/* Inclusions */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              {language === 'en' ? 'Standard Inclusions' : 'Tiện Ích Đi Kèm'}
            </h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>{language === 'en' ? 'Breakfast Buffet Included' : 'Buffet bữa sáng miễn phí'}</li>
              <li>{language === 'en' ? 'Central Swimming Pool' : 'Hồ bơi trung tâm'}</li>
              <li>{language === 'en' ? '24/7 Multilingual Front Desk' : 'Lễ tân trực 24/7'}</li>
              <li>{language === 'en' ? 'High-Speed Wi-Fi & AC' : 'Wifi tốc độ cao & Điều hòa 2 chiều'}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-850 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} {HOMESTAY_INFO.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Crafted for travelers with</span>
            <Heart className="w-3.5 h-3.5 text-amber-500 fill-amber-500 inline" />
            <span>in Vietnam</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
