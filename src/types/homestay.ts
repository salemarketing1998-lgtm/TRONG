export type Language = 'en' | 'vi';
export type Currency = 'VND' | 'USD';

export interface RoomType {
  id: string;
  name: {
    en: string;
    vi: string;
  };
  subtitle: {
    en: string;
    vi: string;
  };
  totalCount: number; // e.g. 5, 4, 3, 1
  capacityGuests: number; // e.g. 2, 4, 3, 6
  bedConfig: {
    en: string;
    vi: string;
  };
  sizeM2: number; // e.g. 28, 38, 29, 50
  priceVnd: number; // 1200000, 1500000, 1300000, 1800000
  image: string;
  gallery: string[];
  description: {
    en: string;
    vi: string;
  };
  view: {
    en: string;
    vi: string;
  };
  keyFeatures: {
    en: string[];
    vi: string[];
  };
}

export interface BookingState {
  roomId: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  fullName: string;
  email: string;
  phone: string;
  specialRequests: string;
  airportPickup: boolean;
  bbqKitRequested: boolean;
}
