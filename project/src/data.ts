import { Restaurant } from './types';

export const mockRestaurants: Restaurant[] = [
  {
    id: '1',
    name: 'さくらカフェ',
    coordinates: { x: 20, y: 30 },
    congestionLevel: 'available',
    waitTime: 0,
    rating: 4.5,
    category: 'カフェ',
    description: '静かな雰囲気で読書やお仕事にも最適なカフェです。',
    priceRange: '¥1,000-2,000',
    distance: 0.3,
    image: 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800',
    menu: [
      {
        id: '1-1',
        name: 'ブレンドコーヒー',
        price: 450,
        description: '厳選された豆をブレンドした自慢のコーヒー',
        image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'ドリンク'
      },
      {
        id: '1-2',
        name: 'チーズケーキ',
        price: 580,
        description: 'なめらかで濃厚なニューヨークチーズケーキ',
        image: 'https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'デザート'
      }
    ]
  },
  {
    id: '2',
    name: 'ラーメン太郎',
    coordinates: { x: 60, y: 40 },
    congestionLevel: 'busy',
    waitTime: 15,
    rating: 4.2,
    category: 'ラーメン',
    description: '昔ながらの醤油ラーメンが自慢の老舗店。',
    priceRange: '¥800-1,500',
    distance: 0.7,
    image: 'https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=800',
    menu: [
      {
        id: '2-1',
        name: '醤油ラーメン',
        price: 850,
        description: '秘伝のタレで作る昔ながらの醤油ラーメン',
        image: 'https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'ラーメン'
      },
      {
        id: '2-2',
        name: 'チャーシュー麺',
        price: 1200,
        description: 'とろとろのチャーシューがたっぷり',
        image: 'https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'ラーメン'
      }
    ]
  },
  {
    id: '3',
    name: 'みどり寿司',
    coordinates: { x: 80, y: 20 },
    congestionLevel: 'crowded',
    waitTime: 45,
    rating: 4.7,
    category: '寿司',
    description: '新鮮な海鮮を使った本格江戸前寿司。',
    priceRange: '¥2,000-5,000',
    distance: 1.2,
    image: 'https://images.pexels.com/photos/1756049/pexels-photo-1756049.jpeg?auto=compress&cs=tinysrgb&w=800',
    menu: [
      {
        id: '3-1',
        name: '特上にぎり',
        price: 3500,
        description: 'その日の最高のネタを厳選した特上にぎり',
        image: 'https://images.pexels.com/photos/1756049/pexels-photo-1756049.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: '寿司'
      },
      {
        id: '3-2',
        name: 'ちらし丼',
        price: 1800,
        description: '新鮮な刺身がたっぷりのちらし丼',
        image: 'https://images.pexels.com/photos/1756049/pexels-photo-1756049.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: '丼'
      }
    ]
  },
  {
    id: '4',
    name: 'パスタ・ベラ',
    coordinates: { x: 40, y: 70 },
    congestionLevel: 'available',
    waitTime: 5,
    rating: 4.1,
    category: 'イタリアン',
    description: '本格的なイタリアンパスタとピザが楽しめます。',
    priceRange: '¥1,500-3,000',
    distance: 0.9,
    image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800',
    menu: [
      {
        id: '4-1',
        name: 'カルボナーラ',
        price: 1680,
        description: 'クリーミーで濃厚なカルボナーラ',
        image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'パスタ'
      },
      {
        id: '4-2',
        name: 'マルゲリータ',
        price: 1980,
        description: 'シンプルで美味しいマルゲリータピザ',
        image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'ピザ'
      }
    ]
  },
  {
    id: '5',
    name: 'おばんざい花',
    coordinates: { x: 25, y: 60 },
    congestionLevel: 'busy',
    waitTime: 20,
    rating: 4.6,
    category: '和食',
    description: '京都風おばんざいが楽しめる落ち着いた和食店。',
    priceRange: '¥2,000-4,000',
    distance: 0.5,
    image: 'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=800',
    menu: [
      {
        id: '5-1',
        name: 'おばんざい定食',
        price: 2200,
        description: '季節の野菜を使った京都風おばんざい',
        image: 'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: '定食'
      },
      {
        id: '5-2',
        name: '湯豆腐膳',
        price: 1800,
        description: '上質な豆腐を使った湯豆腐膳',
        image: 'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: '膳'
      }
    ]
  }
];