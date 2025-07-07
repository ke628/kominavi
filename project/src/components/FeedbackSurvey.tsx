import React, { useState } from 'react';
import { Star, Award, X } from 'lucide-react';

interface FeedbackSurveyProps {
  onClose: () => void;
  onComplete: (points: number) => void;
}

const FeedbackSurvey: React.FC<FeedbackSurveyProps> = ({ onClose, onComplete }) => {
  const [rating, setRating] = useState(0);
  const [crowdingAccuracy, setCrowdingAccuracy] = useState(0);
  const [waitTimeAccuracy, setWaitTimeAccuracy] = useState(0);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    const totalPoints = rating + crowdingAccuracy + waitTimeAccuracy;
    const bonusPoints = comment.trim().length > 10 ? 50 : 0;
    const earnedPoints = totalPoints * 10 + bonusPoints;
    
    setSubmitted(true);
    setTimeout(() => {
      onComplete(earnedPoints);
    }, 2000);
  };

  const StarRating = ({ value, onChange, label }: { value: number; onChange: (rating: number) => void; label: string }) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => onChange(star)}
            className="transition-colors duration-200"
          >
            <Star
              className={`w-6 h-6 ${star <= value ? 'text-yellow-500' : 'text-gray-300'}`}
              fill={star <= value ? 'currentColor' : 'none'}
            />
          </button>
        ))}
      </div>
    </div>
  );

  if (submitted) {
    const totalPoints = rating + crowdingAccuracy + waitTimeAccuracy;
    const bonusPoints = comment.trim().length > 10 ? 50 : 0;
    const earnedPoints = totalPoints * 10 + bonusPoints;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg max-w-md w-full p-6 text-center">
          <Award className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">ありがとうございました！</h2>
          <p className="text-gray-600 mb-4">
            フィードバックを送信いただき、ありがとうございます。
          </p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Award className="w-5 h-5 text-yellow-600" />
              <span className="font-semibold text-yellow-800">獲得ポイント</span>
            </div>
            <div className="text-2xl font-bold text-yellow-600">{earnedPoints}P</div>
            <div className="text-sm text-yellow-600 mt-1">
              次回のご利用時に割引として使用できます
            </div>
          </div>
          <button
            onClick={() => onComplete(earnedPoints)}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            完了
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">フィードバック</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="mb-6">
          <StarRating
            value={rating}
            onChange={setRating}
            label="お店の評価をお聞かせください"
          />
          
          <StarRating
            value={crowdingAccuracy}
            onChange={setCrowdingAccuracy}
            label="混雑状況の正確性はいかがでしたか？"
          />
          
          <StarRating
            value={waitTimeAccuracy}
            onChange={setWaitTimeAccuracy}
            label="待ち時間の正確性はいかがでしたか？"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            コメント（任意）
          </label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows={4}
            placeholder="お店の良かった点や改善点があれば教えてください..."
          />
          <div className="text-xs text-gray-500 mt-1">
            10文字以上のコメントで+50ポイント獲得
          </div>
        </div>

        <div className="mb-6 p-4 bg-blue-50 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Award className="w-5 h-5 text-blue-600" />
            <span className="font-medium text-blue-800">ポイント予想</span>
          </div>
          <div className="text-sm text-blue-600">
            評価ポイント: {(rating + crowdingAccuracy + waitTimeAccuracy) * 10}P
            {comment.trim().length > 10 && (
              <span className="block">コメントボーナス: +50P</span>
            )}
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300 transition-colors duration-200"
          >
            スキップ
          </button>
          <button
            onClick={handleSubmit}
            disabled={rating === 0 || crowdingAccuracy === 0 || waitTimeAccuracy === 0}
            className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200"
          >
            送信
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackSurvey;