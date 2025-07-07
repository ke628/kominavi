import React, { useState } from 'react';
import { CheckCircle, Clock, MapPin } from 'lucide-react';
import { CartItem } from '../types';

interface PreOrderConfirmProps {
  items: CartItem[];
  onClose: () => void;
  onFeedback: () => void;
}

const PreOrderConfirm: React.FC<PreOrderConfirmProps> = ({ items, onClose, onFeedback }) => {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const restaurant = items[0]?.restaurant;
  
  const getTotalPrice = () => {
    return items.reduce((total, item) => total + (item.menuItem.price * item.quantity), 0);
  };

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    // Simulate order processing
    setTimeout(() => {
      onFeedback();
    }, 2000);
  };

  if (orderPlaced) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg max-w-md w-full p-6 text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">注文完了！</h2>
          <p className="text-gray-600 mb-4">
            {restaurant?.name}にて事前注文を承りました。
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-6">
            <Clock className="w-4 h-4" />
            <span>準備時間: 約15分</span>
          </div>
          <p className="text-sm text-gray-500 mb-6">
            お店に到着されましたら、注文番号 <span className="font-mono font-bold">#KN-{Math.random().toString(36).substr(2, 6).toUpperCase()}</span> をお伝えください。
          </p>
          <button
            onClick={onFeedback}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            フィードバックを送信
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">注文確認</h2>
        
        {/* Restaurant Info */}
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-lg mb-2">{restaurant?.name}</h3>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="w-4 h-4" />
            <span>{restaurant?.distance}km • {restaurant?.category}</span>
          </div>
        </div>

        {/* Order Items */}
        <div className="mb-6">
          <h3 className="font-semibold mb-4">注文内容</h3>
          <div className="space-y-3">
            {items.map((item) => (
              <div key={item.menuItem.id} className="flex items-center justify-between">
                <div>
                  <span className="font-medium">{item.menuItem.name}</span>
                  <span className="text-sm text-gray-600 ml-2">x{item.quantity}</span>
                </div>
                <span className="font-medium">¥{item.menuItem.price * item.quantity}</span>
              </div>
            ))}
          </div>
          <div className="border-t pt-3 mt-3">
            <div className="flex items-center justify-between text-lg font-semibold">
              <span>合計</span>
              <span>¥{getTotalPrice()}</span>
            </div>
          </div>
        </div>

        {/* Estimated Time */}
        <div className="mb-6 p-4 bg-blue-50 rounded-lg">
          <div className="flex items-center gap-2 text-blue-800">
            <Clock className="w-5 h-5" />
            <span className="font-medium">準備時間: 約15分</span>
          </div>
          <p className="text-sm text-blue-600 mt-1">
            到着予定時刻に合わせて調理を開始します
          </p>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300 transition-colors duration-200"
          >
            キャンセル
          </button>
          <button
            onClick={handlePlaceOrder}
            className="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors duration-200"
          >
            注文確定
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreOrderConfirm;