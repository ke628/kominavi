import React, { useState } from 'react';
import { mockRestaurants } from './data';
import { Restaurant, CartItem } from './types';
import Header from './components/Header';
import MapView from './components/MapView';
import RestaurantList from './components/RestaurantList';
import RestaurantModal from './components/RestaurantModal';
import PreOrderConfirm from './components/PreOrderConfirm';
import FeedbackSurvey from './components/FeedbackSurvey';

function App() {
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const [preOrderItems, setPreOrderItems] = useState<CartItem[]>([]);
  const [showPreOrderConfirm, setShowPreOrderConfirm] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [points, setPoints] = useState(1250);
  const [userLocation] = useState({ x: 50, y: 50 });

  const handleRestaurantClick = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  const handleCloseModal = () => {
    setSelectedRestaurant(null);
  };

  const handlePreOrder = (items: CartItem[]) => {
    setPreOrderItems(items);
    setShowPreOrderConfirm(true);
    setSelectedRestaurant(null);
  };

  const handleClosePreOrder = () => {
    setShowPreOrderConfirm(false);
    setPreOrderItems([]);
  };

  const handleShowFeedback = () => {
    setShowPreOrderConfirm(false);
    setShowFeedback(true);
  };

  const handleCloseFeedback = () => {
    setShowFeedback(false);
  };

  const handleCompleteFeedback = (earnedPoints: number) => {
    setPoints(prev => prev + earnedPoints);
    setShowFeedback(false);
  };

  const handleMenuClick = () => {
    // Menu functionality can be added here
    console.log('Menu clicked');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header points={points} onMenuClick={handleMenuClick} />
      
      <div className="max-w-md mx-auto px-4 py-6 space-y-6">
        {/* Current Status */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">現在地周辺</h2>
          <p className="text-sm text-gray-600 mb-4">
            混雑情報をリアルタイムで確認して、快適なお食事をお楽しみください。
          </p>
          <MapView 
            restaurants={mockRestaurants} 
            onRestaurantClick={handleRestaurantClick}
            userLocation={userLocation}
          />
        </div>

        {/* Restaurant List */}
        <RestaurantList 
          restaurants={mockRestaurants} 
          onRestaurantClick={handleRestaurantClick}
        />

        {/* Tips */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="font-semibold text-blue-800 mb-2">💡 こみナビのコツ</h3>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• 事前注文で待ち時間を短縮</li>
            <li>• フィードバックでポイント獲得</li>
            <li>• 緑のピンは穴場スポット</li>
          </ul>
        </div>
      </div>

      {/* Modals */}
      {selectedRestaurant && (
        <RestaurantModal
          restaurant={selectedRestaurant}
          onClose={handleCloseModal}
          onPreOrder={handlePreOrder}
        />
      )}

      {showPreOrderConfirm && (
        <PreOrderConfirm
          items={preOrderItems}
          onClose={handleClosePreOrder}
          onFeedback={handleShowFeedback}
        />
      )}

      {showFeedback && (
        <FeedbackSurvey
          onClose={handleCloseFeedback}
          onComplete={handleCompleteFeedback}
        />
      )}
    </div>
  );
}

export default App;