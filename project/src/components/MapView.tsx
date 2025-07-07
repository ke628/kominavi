import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { Restaurant } from '../types';

interface MapViewProps {
  restaurants: Restaurant[];
  onRestaurantClick: (restaurant: Restaurant) => void;
  userLocation: { x: number; y: number };
}

const MapView: React.FC<MapViewProps> = ({ restaurants, onRestaurantClick, userLocation }) => {
  const getCongestionColor = (level: string) => {
    switch (level) {
      case 'available':
        return 'text-green-500';
      case 'busy':
        return 'text-yellow-500';
      case 'crowded':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  const getCongestionBg = (level: string) => {
    switch (level) {
      case 'available':
        return 'bg-green-50 border-green-200';
      case 'busy':
        return 'bg-yellow-50 border-yellow-200';
      case 'crowded':
        return 'bg-red-50 border-red-200';
      default:
        return 'bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="relative w-full h-64 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg border-2 border-blue-200 overflow-hidden">
      {/* Map Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-br from-blue-100 to-indigo-200"></div>
      </div>
      
      {/* User Location */}
      <div 
        className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20"
        style={{ 
          left: `${userLocation.x}%`, 
          top: `${userLocation.y}%` 
        }}
      >
        <div className="relative">
          <div className="w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <Navigation className="w-3 h-3 text-blue-600" />
          </div>
        </div>
      </div>

      {/* Restaurant Pins */}
      {restaurants.map((restaurant) => (
        <div
          key={restaurant.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10"
          style={{ 
            left: `${restaurant.coordinates.x}%`, 
            top: `${restaurant.coordinates.y}%` 
          }}
          onClick={() => onRestaurantClick(restaurant)}
        >
          <div className={`relative group transition-all duration-200 hover:scale-110`}>
            <MapPin 
              className={`w-6 h-6 ${getCongestionColor(restaurant.congestionLevel)} drop-shadow-lg`}
              fill="currentColor"
            />
            <div className={`absolute -top-12 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded text-xs font-medium border opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap ${getCongestionBg(restaurant.congestionLevel)}`}>
              {restaurant.name}
            </div>
          </div>
        </div>
      ))}

      {/* Legend */}
      <div className="absolute bottom-2 left-2 bg-white bg-opacity-90 rounded-lg p-2 text-xs">
        <div className="flex items-center gap-1 mb-1">
          <MapPin className="w-3 h-3 text-green-500" fill="currentColor" />
          <span>空いています</span>
        </div>
        <div className="flex items-center gap-1 mb-1">
          <MapPin className="w-3 h-3 text-yellow-500" fill="currentColor" />
          <span>やや混雑</span>
        </div>
        <div className="flex items-center gap-1">
          <MapPin className="w-3 h-3 text-red-500" fill="currentColor" />
          <span>混雑</span>
        </div>
      </div>
    </div>
  );
};

export default MapView;