import React from 'react';
import { Language } from '../types/homestay';
import { HOMESTAY_INFO } from '../data/homestayData';
import { Phone, MessageCircle } from 'lucide-react';

interface FloatingHotlineProps {
  language: Language;
}

export const FloatingHotline: React.FC<FloatingHotlineProps> = ({ language }) => {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-2.5 items-end">
      {/* WhatsApp Quick Chat */}
      <a
        href={`https://wa.me/84399587856?text=${encodeURIComponent(
          'Hello Sol Oasis! I would like to inquire about booking a room.'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-3.5 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group active:scale-95 text-xs font-semibold"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>

      {/* 24/7 Phone Call Button */}
      <a
        href={`tel:${HOMESTAY_INFO.phone}`}
        className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-950 px-3.5 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group active:scale-95 text-xs font-bold"
        aria-label="Call Reception 24/7"
      >
        <Phone className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline">
          {language === 'en' ? 'Call 24/7' : 'Gọi 24/7'}
        </span>
      </a>
    </div>
  );
};
