import React from 'react';
import { MapPin, Award, Menu } from 'lucide-react';

interface HeaderProps {
  points: number;
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ points, onMenuClick }) => {
  return (
    <div className="bg-white shadow-sm border-b">
      <div className="max-w-md mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">こみナビ</h1>
              <p className="text-xs text-gray-500">混雑回避アプリ</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 bg-yellow-50 border border-yellow-200 rounded-full px-3 py-1">
              <Award className="w-4 h-4 text-yellow-600" />
              <span className="text-sm font-medium text-yellow-800">{points}P</span>
            </div>
            <button
              onClick={onMenuClick}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            >
              <Menu className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;