export interface Restaurant {
  id: string;
  name: string;
  coordinates: { x: number; y: number };
  congestionLevel: 'available' | 'busy' | 'crowded';
  waitTime: number;
  rating: number;
  category: string;
  description: string;
  menu: MenuItem[];
  priceRange: string;
  distance: number;
  image: string;
}

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
  restaurant: Restaurant;
}

export interface FeedbackData {
  restaurantId: string;
  rating: number;
  comment: string;
  crowdingAccuracy: number;
  waitTimeAccuracy: number;
}