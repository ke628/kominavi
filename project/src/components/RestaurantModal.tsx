import React, { useState } from 'react';
import { X, Star, Clock, MapPin, Users, ShoppingCart } from 'lucide-react';
import { Restaurant, CartItem } from '../types';

interface RestaurantModalProps {
  restaurant: Restaurant;
  onClose: () => void;
  onPreOrder: (items: CartItem[]) => void;
}

const RestaurantModal: React.FC<RestaurantModalProps> = ({ restaurant, onClose, onPreOrder }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  
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

  const addToCart = (menuItem: any) => {
    const existingItem = cart.find(item => item.menuItem.id === menuItem.id);
    if (existingItem) {
      setCart(cart.map(item => 
        item.menuItem.id === menuItem.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { menuItem, quantity: 1, restaurant }]);
    }
  };

  const removeFromCart = (menuItemId: string) => {
    setCart(cart.filter(item => item.menuItem.id !== menuItemId));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.menuItem.price * item.quantity), 0);
  };

  const handlePreOrder = () => {
    if (cart.length > 0) {
      onPreOrder(cart);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="relative">
          <img 
            src={restaurant.image} 
            alt={restaurant.name}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full p-2 hover:bg-opacity-100 transition-all duration-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {/* Restaurant Info */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{restaurant.name}</h2>
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-4 h-4 text-yellow-500" fill="currentColor" />
              <span className="text-sm font-medium">{restaurant.rating}</span>
              <span className="text-sm text-gray-500">• {restaurant.category}</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">{restaurant.description}</p>
            
            {/* Status */}
            <div className="flex items-center gap-4 text-sm">
              <div className={`px-3 py-1 rounded-full flex items-center gap-1 ${getCongestionColor(restaurant.congestionLevel)}`}>
                <Users className="w-3 h-3" />
                <span>{getCongestionText(restaurant.congestionLevel)}</span>
              </div>
              <div className="flex items-center gap-1 text-gray-600">
                <Clock className="w-3 h-3" />
                <span>{restaurant.waitTime}分待ち</span>
              </div>
              <div className="flex items-center gap-1 text-gray-600">
                <MapPin className="w-3 h-3" />
                <span>{restaurant.distance}km</span>
              </div>
            </div>
          </div>

          {/* Menu */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">メニュー</h3>
            <div className="space-y-4">
              {restaurant.menu.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div>
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-sm text-gray-600">{item.description}</p>
                      <p className="text-sm font-medium text-gray-800">¥{item.price}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-700 transition-colors duration-200"
                  >
                    追加
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Cart */}
          {cart.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                カート
              </h3>
              <div className="space-y-2 mb-4">
                {cart.map((item) => (
                  <div key={item.menuItem.id} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div>
                      <span className="font-medium">{item.menuItem.name}</span>
                      <span className="text-sm text-gray-600 ml-2">x{item.quantity}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">¥{item.menuItem.price * item.quantity}</span>
                      <button
                        onClick={() => removeFromCart(item.menuItem.id)}
                        className="text-red-500 hover:text-red-700 transition-colors duration-200"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between pt-4 border-t">
                <span className="text-lg font-semibold">合計: ¥{getTotalPrice()}</span>
                <button
                  onClick={handlePreOrder}
                  className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200"
                >
                  事前注文
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantModal;