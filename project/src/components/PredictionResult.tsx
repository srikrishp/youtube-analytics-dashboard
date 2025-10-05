import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, BarChart } from 'lucide-react';
import { PredictionData } from './PredictionTool';

interface PredictionResultProps {
  prediction: PredictionData | null;
  loading: boolean;
}

const PredictionResult: React.FC<PredictionResultProps> = ({ prediction, loading }) => {
  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex items-center justify-center min-h-[400px]"
      >
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">
            Analyzing your video with AI...
          </p>
        </div>
      </motion.div>
    );
  }

  if (!prediction) {
    return (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex items-center justify-center min-h-[400px]"
      >
        <div className="text-center">
          <BarChart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-300">
            Enter video details to see prediction results
          </p>
        </div>
      </motion.div>
    );
  }

  const percentage = Math.round(prediction.probability * 100);
  const isHighChance = percentage >= 60;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
    >
      <div className="flex items-center space-x-3 mb-6">
        {isHighChance ? (
          <TrendingUp className="w-6 h-6 text-green-600" />
        ) : (
          <TrendingDown className="w-6 h-6 text-orange-600" />
        )}
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          Prediction Results
        </h3>
      </div>

      {/* Probability Circle */}
      <div className="text-center mb-8">
        <div className="relative inline-flex items-center justify-center">
          <svg className="w-32 h-32 transform -rotate-90">
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke="currentColor"
              strokeWidth="8"
              fill="none"
              className="text-gray-200 dark:text-gray-700"
            />
            <motion.circle
              cx="64"
              cy="64"
              r="56"
              stroke="currentColor"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              className={isHighChance ? "text-green-600" : "text-orange-600"}
              initial={{ strokeDasharray: "0 351.86" }}
              animate={{ strokeDasharray: `${percentage * 3.5186} 351.86` }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                {percentage}%
              </span>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Viral Chance
              </p>
            </div>
          </div>
        </div>
        <p className={`mt-4 text-lg font-medium ${
          isHighChance ? 'text-green-600' : 'text-orange-600'
        }`}>
          {isHighChance ? '🔥 High viral potential!' : '📈 Moderate potential'}
        </p>
      </div>

      {/* Feature Importance */}
      <div>
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Key Factors
        </h4>
        <div className="space-y-3">
          {prediction.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="flex items-center justify-between"
            >
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {feature.name}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {feature.value}
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${feature.importance * 100}%` }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                    className="bg-red-600 h-2 rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default PredictionResult;