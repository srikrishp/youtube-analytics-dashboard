import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Heart, MessageCircle, Share, TrendingUp, Clock } from 'lucide-react';

const TrendingMetrics: React.FC = () => {
  const metrics = [
    {
      icon: Eye,
      title: 'Total Views',
      value: '847.2M',
      change: '+12.5%',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100 dark:bg-blue-900/20'
    },
    {
      icon: Heart,
      title: 'Total Likes',
      value: '23.1M',
      change: '+8.3%',
      color: 'text-red-600',
      bgColor: 'bg-red-100 dark:bg-red-900/20'
    },
    {
      icon: MessageCircle,
      title: 'Comments',
      value: '5.7M',
      change: '+15.2%',
      color: 'text-green-600',
      bgColor: 'bg-green-100 dark:bg-green-900/20'
    },
    {
      icon: Share,
      title: 'Shares',
      value: '1.2M',
      change: '+9.7%',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100 dark:bg-purple-900/20'
    },
    {
      icon: TrendingUp,
      title: 'Trending Videos',
      value: '2,847',
      change: '+6.1%',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100 dark:bg-orange-900/20'
    },
    {
      icon: Clock,
      title: 'Avg. Duration',
      value: '8:42',
      change: '+2.3%',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100 dark:bg-indigo-900/20'
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-200"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${metric.bgColor}`}>
                <Icon className={`w-6 h-6 ${metric.color}`} />
              </div>
              <span className={`text-sm font-medium ${metric.color}`}>
                {metric.change}
              </span>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {metric.value}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {metric.title}
              </p>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default TrendingMetrics;