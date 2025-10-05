import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PredictionForm from './PredictionForm';
import PredictionResult from './PredictionResult';

export interface VideoData {
  title: string;
  tags: string;
  category: string;
  uploadTime: string;
  description: string;
}

export interface PredictionData {
  probability: number;
  features: {
    name: string;
    importance: number;
    value: string;
  }[];
}

const PredictionTool: React.FC = () => {
  const [prediction, setPrediction] = useState<PredictionData | null>(null);
  const [loading, setLoading] = useState(false);

  const handlePredict = async (videoData: VideoData) => {
    setLoading(true);
    
    // Simulate ML prediction with mock data
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const mockPrediction: PredictionData = {
      probability: Math.random() * 0.8 + 0.1, // 10% to 90%
      features: [
        { name: 'Title Length', importance: 0.23, value: `${videoData.title.length} chars` },
        { name: 'Tag Count', importance: 0.19, value: `${videoData.tags.split(',').length} tags` },
        { name: 'Category', importance: 0.18, value: videoData.category },
        { name: 'Upload Time', importance: 0.15, value: videoData.uploadTime },
        { name: 'Description Length', importance: 0.12, value: `${videoData.description.length} chars` },
        { name: 'Trending Keywords', importance: 0.13, value: 'High match' },
      ]
    };
    
    setPrediction(mockPrediction);
    setLoading(false);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          🎯 Will Your Video Go Viral?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          Enter your video details and let our AI predict its trending potential
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <PredictionForm onPredict={handlePredict} loading={loading} />
        <PredictionResult prediction={prediction} loading={loading} />
      </div>
    </div>
  );
};

export default PredictionTool;