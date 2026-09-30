import React, { useState } from 'react';
import { Language } from '../types/homestay';
import { HOMESTAY_INFO } from '../data/homestayData';
import { Phone, Mail, Clock, MapPin, Send, CheckCircle2 } from 'lucide-react';

interface ContactSectionProps {
  language: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ language }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setName('');
      setEmail('');
      setMessage('');
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details & Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-amber-700 mb-2">
                {language === 'en' ? 'Get In Touch' : 'Liên Hệ Trực Tiếp'}
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
                {language === 'en' ? 'We Are Here 24/7 for You' : 'Lễ Tân Phục Vụ 24/7'}
              </h2>
              <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
                {language === 'en'
                  ? 'Have special questions about group bookings, motorbike rentals, or airport pickups? Reach out anytime via phone, WhatsApp, or email.'
                  : 'Quý khách cần tư vấn đặt phòng theo đoàn, thuê xe máy, đặt tiệc BBQ hoặc xe đưa đón sân bay? Hãy liên hệ ngay với chúng tôi bất cứ lúc nào.'}
              </p>
            </div>

            <div className="space-y-4">
              {/* Phone / Hotline */}
              <a
                href={`tel:${HOMESTAY_INFO.phone}`}
                className="flex items-center gap-4 p-4 rounded-xl border border-stone-200 hover:border-amber-400 hover:bg-amber-50/40 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-stone-950 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-stone-500 font-medium">
                    {language === 'en' ? 'Hotline & WhatsApp / Zalo' : 'Hotline & Zalo / WhatsApp'}
                  </div>
                  <div className="text-base sm:text-lg font-bold text-stone-900">
                    {HOMESTAY_INFO.phoneDisplay}
                  </div>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${HOMESTAY_INFO.email}`}
                className="flex items-center gap-4 p-4 rounded-xl border border-stone-200 hover:border-amber-400 hover:bg-amber-50/40 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-stone-950 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-xs text-stone-500 font-medium">
                    {language === 'en' ? 'Official Reservation Email' : 'Email Đặt Phòng Chính Thức'}
                  </div>
                  <div className="text-sm sm:text-base font-bold text-stone-900 truncate">
                    {HOMESTAY_INFO.email}
                  </div>
                </div>
              </a>

              {/* Hours / Reception */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-stone-50 border border-stone-200">
                <div className="w-12 h-12 rounded-xl bg-stone-200 text-stone-700 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-stone-500 font-medium">
                    {language === 'en' ? 'Front Desk & Security' : 'Lễ Tân & Bảo Vệ'}
                  </div>
                  <div className="text-sm sm:text-base font-bold text-stone-900">
                    {language === 'en' ? '24 Hours / 7 Days a Week' : 'Trực 24/7 - Hỗ trợ check-in muộn'}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Message Form */}
          <div className="lg:col-span-7 bg-stone-50 rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm">
            <h3 className="text-xl font-bold text-stone-900 mb-2">
              {language === 'en' ? 'Send a Direct Inquiry' : 'Gửi Tin Nhắn Cho Sol Oasis'}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mb-6">
              {language === 'en'
                ? 'Fill out the form below and our manager will respond via email within 30 minutes.'
                : 'Điền thông tin bên dưới, quản lý sẽ phản hồi qua email hoặc số điện thoại trong 30 phút.'}
            </p>

            {sent ? (
              <div className="p-8 text-center bg-white rounded-xl border border-emerald-200 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-lg font-bold text-stone-900">
                  {language === 'en' ? 'Message Sent Successfully!' : 'Tin Nhắn Đã Được Gửi!'}
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 max-w-sm mx-auto">
                  {language === 'en'
                    ? `Thank you! We have sent a copy to ${HOMESTAY_INFO.email}. We will get back to you shortly.`
                    : `Cảm ơn bạn! Chúng tôi đã chuyển thông tin tới ${HOMESTAY_INFO.email} và sẽ phản hồi sớm nhất.`}
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold rounded-lg transition-colors"
                >
                  {language === 'en' ? 'Send another message' : 'Gửi tin nhắn khác'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">
                    {language === 'en' ? 'Your Name' : 'Họ và tên của bạn'} *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={language === 'en' ? 'John Doe' : 'Nguyễn Văn A'}
                    className="w-full bg-white border border-stone-300 rounded-lg px-3.5 py-2.5 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">
                    {language === 'en' ? 'Email Address' : 'Email liên hệ'} *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full bg-white border border-stone-300 rounded-lg px-3.5 py-2.5 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">
                    {language === 'en' ? 'Message / Inquiries' : 'Nội dung tin nhắn'} *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={
                      language === 'en'
                        ? 'Tell us about your trip, dates, and number of people...'
                        : 'Chia sẻ ngày dự kiến, số lượng khách hoặc câu hỏi về phòng...'
                    }
                    className="w-full bg-white border border-stone-300 rounded-lg px-3.5 py-2.5 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2 active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>{language === 'en' ? 'Send Message' : 'Gửi Tin Nhắn'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
