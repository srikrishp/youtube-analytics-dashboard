import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, Eye, Heart } from 'lucide-react';

interface TrendingInsightsProps {
  country: string;
}

const TrendingInsights: React.FC<TrendingInsightsProps> = ({ country }) => {
  const insights = [
    {
      icon: TrendingUp,
      title: 'Trending Videos Today',
      value: '47',
      change: '+12%',
      color: 'text-green-600',
    },
    {
      icon: Eye,
      title: 'Avg. Views to Trend',
      value: '2.1M',
      change: '+5%',
      color: 'text-blue-600',
    },
    {
      icon: Heart,
      title: 'Avg. Like Ratio',
      value: '94.2%',
      change: '+2%',
      color: 'text-red-600',
    },
    {
      icon: Clock,
      title: 'Peak Upload Time',
      value: '2-4 PM',
      change: 'EST',
      color: 'text-purple-600',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
    >
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
        Trending Insights - {country}
      </h3>
      <div className="grid grid-cols-2 gap-4">
        {insights.map((insight, index) => {
          const Icon = insight.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center space-x-3 mb-2">
                <Icon className={`w-5 h-5 ${insight.color}`} />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  {insight.title}
                </span>
              </div>
              <div className="flex items-end justify-between">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                  {insight.value}
                </span>
                <span className={`text-sm ${insight.color}`}>
                  {insight.change}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default TrendingInsights;