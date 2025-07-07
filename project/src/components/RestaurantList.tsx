import React from 'react';
import { Star, Clock, Users, MapPin } from 'lucide-react';
import { Restaurant } from '../types';

interface RestaurantListProps {
  restaurants: Restaurant[];
  onRestaurantClick: (restaurant: Restaurant) => void;
}

const RestaurantList: React.FC<RestaurantListProps> = ({ restaurants, onRestaurantClick }) => {
  const getCongestionText = (level: string) => {
    switch (level) {
      case 'available':
        return '空いています';
      case 'busy':
        return 'やや混雑';
      case 'crowded':
        return '混雑';
      default:
        return '不明';
    }
  };

  const getCongestionColor = (level: string) => {
    switch (level) {
      case 'available':
        return 'text-green-600 bg-green-50';
      case 'busy':
        return 'text-yellow-600 bg-yellow-50';
      case 'crowded':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-800">近くのお店</h2>
      {restaurants.map((restaurant) => (
        <div
          key={restaurant.id}
          onClick={() => onRestaurantClick(restaurant)}
          className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 cursor-pointer hover:shadow-md transition-shadow duration-200"
        >
          <div className="flex items-start gap-3">
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="w-16 h-16 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800 mb-1">{restaurant.name}</h3>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <Star className="w-3 h-3 text-yellow-500" fill="currentColor" />
                <span>{restaurant.rating}</span>
                <span>•</span>
                <span>{restaurant.category}</span>
                <span>•</span>
                <span>{restaurant.priceRange}</span>
              </div>
              <div className="flex items-center gap-2 text-sm mb-2">
                <div className={`px-2 py-1 rounded-full text-xs font-medium ${getCongestionColor(restaurant.congestionLevel)}`}>
                  <Users className="w-3 h-3 inline mr-1" />
                  {getCongestionText(restaurant.congestionLevel)}
                </div>
                <div className="flex items-center gap-1 text-gray-600">
                  <Clock className="w-3 h-3" />
                  <span>{restaurant.waitTime}分</span>
                </div>
                <div className="flex items-center gap-1 text-gray-600">
                  <MapPin className="w-3 h-3" />
                  <span>{restaurant.distance}km</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantList;