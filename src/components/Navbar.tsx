import React, { useState, useEffect } from 'react';
import { Language, Currency } from '../types/homestay';
import { Menu, X, Phone } from 'lucide-react';
import { HOMESTAY_INFO } from '../data/homestayData';

interface NavbarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  currency: Currency;
  onCurrencyChange: (curr: Currency) => void;
  onOpenBooking: (prefillRoomId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  onLanguageChange,
  currency,
  onCurrencyChange,
  onOpenBooking,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#rooms', label: language === 'en' ? 'Rooms' : 'Phòng Nghỉ' },
    { href: '#grounds', label: language === 'en' ? 'Oasis Grounds' : 'Khuôn Viên' },
    { href: '#amenities', label: language === 'en' ? 'Amenities' : 'Tiện Nghi' },
    { href: '#bbq-dining', label: language === 'en' ? 'BBQ & Lounge' : 'BBQ & Giải Trí' },
    { href: '#contact', label: language === 'en' ? 'Contact' : 'Liên Hệ' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-200 ${
        isScrolled
          ? 'bg-stone-900/95 backdrop-blur-md border-b border-stone-800 text-stone-100 shadow-sm'
          : 'bg-stone-950/70 backdrop-blur-sm border-b border-white/10 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="text-2xl font-bold tracking-tight text-white hover:text-amber-300 transition-colors shrink-0"
        >
          SOL OASIS
        </a>

        {/* Zone 2: 4-6 nav links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium tracking-wide">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-stone-300 hover:text-white transition-colors hover:underline underline-offset-8 decoration-amber-400/70"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Actions (Language, Currency, Book CTA) */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Currency Toggle */}
          <div className="flex items-center bg-stone-800/80 rounded-lg p-0.5 border border-stone-700 text-xs">
            <button
              onClick={() => onCurrencyChange('VND')}
              className={`px-2 py-1 rounded transition-colors ${
                currency === 'VND' ? 'bg-amber-500 text-stone-950 font-bold' : 'text-stone-300 hover:text-white'
              }`}
            >
              ₫ VND
            </button>
            <button
              onClick={() => onCurrencyChange('USD')}
              className={`px-2 py-1 rounded transition-colors ${
                currency === 'USD' ? 'bg-amber-500 text-stone-950 font-bold' : 'text-stone-300 hover:text-white'
              }`}
            >
              $ USD
            </button>
          </div>

          {/* Language Toggle */}
          <div className="flex items-center bg-stone-800/80 rounded-lg p-0.5 border border-stone-700 text-xs">
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-2 py-1 rounded transition-colors ${
                language === 'en' ? 'bg-white text-stone-900 font-bold' : 'text-stone-300 hover:text-white'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => onLanguageChange('vi')}
              className={`px-2 py-1 rounded transition-colors ${
                language === 'vi' ? 'bg-white text-stone-900 font-bold' : 'text-stone-300 hover:text-white'
              }`}
            >
              VI
            </button>
          </div>

          {/* Primary Book CTA */}
          <button
            onClick={() => onOpenBooking()}
            className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold text-xs tracking-wider uppercase rounded-lg transition-all shadow-md hover:shadow-amber-500/20 whitespace-nowrap active:scale-95"
          >
            {language === 'en' ? 'Book a Stay' : 'Đặt Phòng Ngay'}
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => onOpenBooking()}
            className="px-3 py-1.5 bg-amber-500 text-stone-950 font-semibold text-xs rounded-md"
          >
            {language === 'en' ? 'Book' : 'Đặt'}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-300 hover:text-white rounded-md"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-stone-900 border-b border-stone-800 px-4 py-5 space-y-4">
          <div className="flex justify-between items-center pb-3 border-b border-stone-800 text-xs">
            <div className="flex items-center gap-1">
              <span className="text-stone-400 mr-1">Currency:</span>
              <button
                onClick={() => onCurrencyChange('VND')}
                className={`px-2 py-1 rounded ${currency === 'VND' ? 'bg-amber-500 text-stone-950 font-bold' : 'text-stone-300'}`}
              >
                ₫ VND
              </button>
              <button
                onClick={() => onCurrencyChange('USD')}
                className={`px-2 py-1 rounded ${currency === 'USD' ? 'bg-amber-500 text-stone-950 font-bold' : 'text-stone-300'}`}
              >
                $ USD
              </button>
            </div>

            <div className="flex items-center gap-1">
              <span className="text-stone-400 mr-1">Language:</span>
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-2 py-1 rounded ${language === 'en' ? 'bg-white text-stone-900 font-bold' : 'text-stone-300'}`}
              >
                English
              </button>
              <button
                onClick={() => onLanguageChange('vi')}
                className={`px-2 py-1 rounded ${language === 'vi' ? 'bg-white text-stone-900 font-bold' : 'text-stone-300'}`}
              >
                Tiếng Việt
              </button>
            </div>
          </div>

          <div className="space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-stone-200 hover:text-amber-400 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-stone-800">
            <a
              href={`tel:${HOMESTAY_INFO.phone}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-stone-300 hover:text-white text-xs border border-stone-700 rounded-lg"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>{HOMESTAY_INFO.phoneDisplay} (24/7)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
