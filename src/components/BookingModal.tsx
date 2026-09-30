import React, { useState, useEffect } from 'react';
import { RoomType, Language, Currency } from '../types/homestay';
import { ROOMS_DATA, HOMESTAY_INFO } from '../data/homestayData';
import { formatPrice, calculateNights, getTodayDateString, getTomorrowDateString } from '../utils/formatters';
import {
  X,
  Calendar,
  Users,
  CheckCircle,
  Copy,
  Check,
  Send,
  Phone,
  Mail,
  Coffee,
  Sparkles,
  Bed,
} from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  prefillRoomId?: string;
  initialDates?: { checkIn: string; checkOut: string; guests: number };
  language: Language;
  currency: Currency;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  prefillRoomId,
  initialDates,
  language,
  currency,
  onClose,
}) => {
  const [selectedRoomId, setSelectedRoomId] = useState<string>(
    prefillRoomId || ROOMS_DATA[0].id
  );
  const [checkIn, setCheckIn] = useState<string>(
    initialDates?.checkIn || getTodayDateString()
  );
  const [checkOut, setCheckOut] = useState<string>(
    initialDates?.checkOut || getTomorrowDateString()
  );
  const [guests, setGuests] = useState<number>(initialDates?.guests || 2);
  const [roomsCount, setRoomsCount] = useState<number>(1);
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [needBbq, setNeedBbq] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [copiedCode, setCopiedCode] = useState<boolean>(false);
  const [bookingRef, setBookingRef] = useState<string>('');

  useEffect(() => {
    if (prefillRoomId) {
      setSelectedRoomId(prefillRoomId);
    }
  }, [prefillRoomId]);

  useEffect(() => {
    if (initialDates) {
      setCheckIn(initialDates.checkIn);
      setCheckOut(initialDates.checkOut);
      setGuests(initialDates.guests);
    }
  }, [initialDates]);

  if (!isOpen) return null;

  const selectedRoom = ROOMS_DATA.find((r) => r.id === selectedRoomId) || ROOMS_DATA[0];
  const nights = calculateNights(checkIn, checkOut);
  const subtotalVnd = selectedRoom.priceVnd * nights * roomsCount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `SOL-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);
    setSubmitted(true);
  };

  const copyBookingCode = () => {
    navigator.clipboard.writeText(bookingRef);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  const generateMessageText = () => {
    return encodeURIComponent(
      `Hello Sol Oasis! I would like to reserve a stay:\n` +
      `- Room: ${selectedRoom.name.en}\n` +
      `- Check-in: ${checkIn}\n` +
      `- Check-out: ${checkOut} (${nights} nights)\n` +
      `- Guests: ${guests}\n` +
      `- Rooms: ${roomsCount}\n` +
      `- Total: ${formatPrice(subtotalVnd, 'VND')} (Breakfast included)\n` +
      `- Guest Name: ${fullName}\n` +
      `- Phone/WhatsApp: ${phone}\n` +
      `- Email: ${email}\n` +
      `- Notes: ${needBbq ? 'BBQ kit requested. ' : ''}${notes}`
    );
  };

  const handleWhatsAppInquiry = () => {
    const text = generateMessageText();
    window.open(`https://wa.me/84399587856?text=${text}`, '_blank');
  };

  const handleEmailInquiry = () => {
    const subject = encodeURIComponent(`Booking Inquiry - Sol Oasis - ${fullName || 'Guest'}`);
    const body = generateMessageText();
    window.location.href = `mailto:${HOMESTAY_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative bg-white text-stone-900 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-stone-200 my-8">
        {/* Header */}
        <div className="bg-stone-900 text-white p-5 sm:p-6 flex items-center justify-between border-b border-stone-800">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
              {HOMESTAY_INFO.name}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
              {language === 'en' ? 'Direct Stay Reservation' : 'Yêu Cầu Đặt Phòng Trực Tiếp'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-white rounded-full bg-stone-800 hover:bg-stone-700 transition-colors"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          /* Confirmation Screen */
          <div className="p-6 sm:p-8 text-center space-y-6">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div>
              <h3 className="text-2xl font-extrabold text-stone-900">
                {language === 'en' ? 'Reservation Request Received!' : 'Đã Gửi Yêu Cầu Thành Công!'}
              </h3>
              <p className="mt-2 text-sm text-stone-600 max-w-md mx-auto">
                {language === 'en'
                  ? 'Our 24/7 reception team has logged your reservation details. We will confirm your room within 15 minutes.'
                  : 'Đội ngũ lễ tân 24/7 của Sol Oasis đã ghi nhận thông tin và sẽ liên hệ xác nhận phòng với bạn trong vòng 15 phút.'}
              </p>
            </div>

            {/* Booking Reference Code */}
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 max-w-sm mx-auto text-center">
              <div className="text-xs text-stone-500 uppercase tracking-wider font-semibold mb-1">
                {language === 'en' ? 'Your Reference ID' : 'Mã Đặt Phòng Của Bạn'}
              </div>
              <div className="flex items-center justify-center gap-3">
                <span className="text-xl font-mono font-bold text-amber-700">{bookingRef}</span>
                <button
                  type="button"
                  onClick={copyBookingCode}
                  className="p-1.5 text-stone-500 hover:text-stone-900 bg-stone-200 rounded-md transition-colors"
                  title="Copy reference code"
                >
                  {copiedCode ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Fast Connect Options */}
            <div className="space-y-3 pt-2 max-w-md mx-auto">
              <button
                onClick={handleWhatsAppInquiry}
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <Send className="w-4 h-4" />
                <span>{language === 'en' ? 'Fast Confirm via WhatsApp' : 'Xác Nhận Nhanh Qua WhatsApp'}</span>
              </button>

              <button
                onClick={handleEmailInquiry}
                className="w-full py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4 text-stone-600" />
                <span>
                  {language === 'en'
                    ? `Email Confirmation to ${HOMESTAY_INFO.email}`
                    : `Gửi email tới ${HOMESTAY_INFO.email}`}
                </span>
              </button>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="text-stone-500 hover:text-stone-900 text-xs font-medium"
            >
              {language === 'en' ? 'Close window' : 'Đóng cửa sổ'}
            </button>
          </div>
        ) : (
          /* Booking Form */
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            {/* Room Selector */}
            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                {language === 'en' ? 'Select Room Type' : 'Chọn Hạng Phòng'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ROOMS_DATA.map((r) => (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => setSelectedRoomId(r.id)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      selectedRoomId === r.id
                        ? 'border-amber-500 bg-amber-50/70 ring-2 ring-amber-400/30'
                        : 'border-stone-200 hover:border-stone-300 bg-stone-50'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-bold text-stone-900 mb-0.5">
                      <span className="truncate">{r.name[language]}</span>
                      <span className="text-amber-700 shrink-0 font-extrabold">
                        {formatPrice(r.priceVnd, currency)}
                      </span>
                    </div>
                    <div className="text-[11px] text-stone-500 flex items-center gap-2">
                      <span>{r.sizeM2}m²</span>
                      <span>·</span>
                      <span>Up to {r.capacityGuests} {language === 'en' ? 'guests' : 'khách'}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Dates & Guests Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase mb-1 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-amber-600" />
                  <span>{language === 'en' ? 'Check-in' : 'Nhận phòng'}</span>
                </label>
                <input
                  type="date"
                  value={checkIn}
                  min={getTodayDateString()}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full bg-white border border-stone-300 rounded-lg px-3 py-2 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase mb-1 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-amber-600" />
                  <span>{language === 'en' ? 'Check-out' : 'Trả phòng'}</span>
                </label>
                <input
                  type="date"
                  value={checkOut}
                  min={checkIn || getTodayDateString()}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full bg-white border border-stone-300 rounded-lg px-3 py-2 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase mb-1 flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-amber-600" />
                  <span>{language === 'en' ? 'Total Guests' : 'Số lượng khách'}</span>
                </label>
                <input
                  type="number"
                  min={1}
                  max={selectedRoom.capacityGuests * roomsCount}
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full bg-white border border-stone-300 rounded-lg px-3 py-2 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
              </div>
            </div>

            {/* Guest Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">
                  {language === 'en' ? 'Full Name' : 'Họ và tên'} *
                </label>
                <input
                  type="text"
                  placeholder={language === 'en' ? 'e.g. Alex Henderson' : 'VD: Nguyễn Văn An'}
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-white border border-stone-300 rounded-lg px-3 py-2 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase mb-1 flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-stone-500" />
                  <span>{language === 'en' ? 'WhatsApp / Phone Number' : 'Số điện thoại / Zalo'} *</span>
                </label>
                <input
                  type="tel"
                  placeholder="+84..."
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-white border border-stone-300 rounded-lg px-3 py-2 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-stone-700 uppercase mb-1 flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-stone-500" />
                  <span>{language === 'en' ? 'Email Address' : 'Địa chỉ Email'} *</span>
                </label>
                <input
                  type="email"
                  placeholder="yourname@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white border border-stone-300 rounded-lg px-3 py-2 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
              </div>
            </div>

            {/* Special Request Checkboxes */}
            <div className="space-y-2 pt-1 border-t border-stone-100 text-xs">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={needBbq}
                  onChange={(e) => setNeedBbq(e.target.checked)}
                  className="rounded text-amber-600 focus:ring-amber-500 w-4 h-4"
                />
                <span className="text-stone-700 font-medium">
                  {language === 'en'
                    ? 'Request Backyard Outdoor BBQ grill setup (free use)'
                    : 'Đặt trước khuôn viên nướng BBQ ngoài trời tại sân sau (miễn phí)'}
                </span>
              </label>

              <div className="pt-2">
                <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">
                  {language === 'en' ? 'Special Requests or Estimated Arrival Time' : 'Ghi chú đặc biệt / Giờ nhận phòng dự kiến'}
                </label>
                <input
                  type="text"
                  placeholder={language === 'en' ? 'e.g. Late night flight arrival, twin bed preference...' : 'VD: Đến muộn sau 22h, cần thuê xe máy...'}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-white border border-stone-300 rounded-lg px-3 py-2 text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

            {/* Pricing Summary Box */}
            <div className="bg-stone-50 rounded-xl p-4 border border-stone-200 space-y-2 text-xs">
              <div className="flex items-center justify-between text-stone-600">
                <span>
                  {selectedRoom.name[language]} ({nights} {language === 'en' ? 'nights' : 'đêm'})
                </span>
                <span className="font-semibold text-stone-900">
                  {formatPrice(selectedRoom.priceVnd * nights, currency)}
                </span>
              </div>

              <div className="flex items-center justify-between text-emerald-700 font-medium">
                <span className="flex items-center gap-1">
                  <Coffee className="w-3.5 h-3.5" />
                  <span>{language === 'en' ? 'Buffet Breakfast (Daily)' : 'Buffet bữa sáng hàng ngày'}</span>
                </span>
                <span>{language === 'en' ? 'INCLUDED' : 'MIỄN PHÍ'}</span>
              </div>

              <div className="pt-2 border-t border-stone-200 flex items-center justify-between text-sm">
                <span className="font-bold text-stone-900">
                  {language === 'en' ? 'Estimated Total' : 'Tổng Chi Phí Dự Kiến'}
                </span>
                <span className="text-xl font-extrabold text-stone-900">
                  {formatPrice(subtotalVnd, currency)}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="submit"
                className="flex-1 py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm rounded-xl transition-all shadow-md active:scale-95 text-center"
              >
                {language === 'en' ? 'Submit Direct Booking Request' : 'Gửi Yêu Cầu Đặt Phòng Trực Tiếp'}
              </button>

              <button
                type="button"
                onClick={handleWhatsAppInquiry}
                className="py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-xl transition-all flex items-center justify-center gap-2"
                title="Chat via WhatsApp"
              >
                <Send className="w-4 h-4" />
                <span>WhatsApp</span>
              </button>
            </div>

            <p className="text-[11px] text-center text-stone-500">
              {language === 'en'
                ? 'No immediate payment required. Pay upon arrival or via bank transfer with 24/7 reception support.'
                : 'Chưa cần thanh toán ngay. Quý khách thanh toán khi nhận phòng hoặc chuyển khoản qua sự hỗ trợ của lễ tân 24/7.'}
            </p>
          </form>
        )}
      </div>
    </div>
  );
};
