/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Language, Currency, RoomType } from './types/homestay';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RoomCatalog } from './components/RoomCatalog';
import { GroundsExperience } from './components/GroundsExperience';
import { IncludedAmenities } from './components/IncludedAmenities';
import { ReviewsAndFaq } from './components/ReviewsAndFaq';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { RoomDetailModal } from './components/RoomDetailModal';
import { FloatingHotline } from './components/FloatingHotline';

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [currency, setCurrency] = useState<Currency>('VND');
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [prefillRoomId, setPrefillRoomId] = useState<string | undefined>(undefined);
  const [initialBookingCriteria, setInitialBookingCriteria] = useState<{
    checkIn: string;
    checkOut: string;
    guests: number;
  } | undefined>(undefined);
  const [activeDetailRoom, setActiveDetailRoom] = useState<RoomType | null>(null);

  const handleOpenBooking = (roomId?: string) => {
    setPrefillRoomId(roomId);
    setIsBookingOpen(true);
  };

  const handleOpenBookingWithCriteria = (criteria: {
    checkIn: string;
    checkOut: string;
    guests: number;
  }) => {
    setInitialBookingCriteria(criteria);
    setIsBookingOpen(true);
  };

  const handleScrollToRooms = () => {
    const el = document.getElementById('rooms');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col font-sans selection:bg-amber-400 selection:text-stone-950">
      {/* Navigation */}
      <Navbar
        language={language}
        onLanguageChange={setLanguage}
        currency={currency}
        onCurrencyChange={setCurrency}
        onOpenBooking={() => handleOpenBooking()}
      />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          language={language}
          currency={currency}
          onOpenBookingWithCriteria={handleOpenBookingWithCriteria}
          onScrollToRooms={handleScrollToRooms}
        />

        {/* 13 Rooms Catalog & Filtering */}
        <RoomCatalog
          language={language}
          currency={currency}
          onSelectRoomModal={(room) => setActiveDetailRoom(room)}
          onBookRoom={(roomId) => handleOpenBooking(roomId)}
        />

        {/* 3,000m² Grounds, Pool, BBQ, Billiards, 24/7 Service */}
        <GroundsExperience
          language={language}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* In-Room Amenities & Standard Inclusions */}
        <IncludedAmenities language={language} />

        {/* Real Guest Stories & FAQ */}
        <ReviewsAndFaq language={language} />

        {/* Contact, Map & Direct Inquiries */}
        <ContactSection language={language} />
      </main>

      {/* Minimalist Footer */}
      <Footer language={language} />

      {/* Interactive Booking Calculation & Reservation Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        prefillRoomId={prefillRoomId}
        initialDates={initialBookingCriteria}
        language={language}
        currency={currency}
        onClose={() => {
          setIsBookingOpen(false);
          setPrefillRoomId(undefined);
        }}
      />

      {/* Room Detail Modal */}
      <RoomDetailModal
        room={activeDetailRoom}
        language={language}
        currency={currency}
        onClose={() => setActiveDetailRoom(null)}
        onBookRoom={(roomId) => {
          setActiveDetailRoom(null);
          handleOpenBooking(roomId);
        }}
      />

      {/* Floating 24/7 WhatsApp & Phone Hotline */}
      <FloatingHotline language={language} />
    </div>
  );
}
