import React, { useState } from 'react';
import { Language } from '../types/homestay';
import { REVIEWS, FAQS } from '../data/homestayData';
import { Star, ChevronDown, ChevronUp, MessageSquare, HelpCircle } from 'lucide-react';

interface ReviewsAndFaqProps {
  language: Language;
}

export const ReviewsAndFaq: React.FC<ReviewsAndFaqProps> = ({ language }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Guest Reviews Section */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-bold uppercase tracking-widest text-amber-700 mb-2 flex items-center justify-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-amber-600" />
              <span>{language === 'en' ? 'Guest Stories' : 'Trải Nghiệm Khách Lưu Trú'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight [text-wrap:balance]">
              {language === 'en'
                ? 'Loved by International Travelers & Groups'
                : 'Được Yêu Thích Bởi Du Khách Quốc Tế & Trong Nước'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((rev, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 mb-4 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-stone-700 text-sm leading-relaxed mb-4 italic">
                    "{rev.text[language]}"
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100">
                  <div className="text-sm font-bold text-stone-900">{rev.author}</div>
                  <div className="text-xs text-stone-500">{rev.country}</div>
                  <div className="text-[11px] text-amber-700 font-medium mt-1">
                    {rev.stayed[language]}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="text-xs font-bold uppercase tracking-widest text-amber-700 mb-2 flex items-center justify-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
              <span>{language === 'en' ? 'Got Questions?' : 'Giải Đáp Thắc Mắc'}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
              {language === 'en' ? 'Frequently Asked Questions' : 'Câu Hỏi Thường Gặp'}
            </h3>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-stone-200 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-semibold text-stone-900 hover:text-amber-700 text-sm sm:text-base"
                  >
                    <span>{faq.question[language]}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-amber-600 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-stone-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
                      {faq.answer[language]}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
