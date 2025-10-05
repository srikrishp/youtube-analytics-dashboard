import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Calendar, Users, Zap } from 'lucide-react';

const TimeAnalysis: React.FC = () => {
  const timeSlots = [
    { time: '6AM - 9AM', percentage: 15, color: 'bg-blue-500' },
    { time: '9AM - 12PM', percentage: 25, color: 'bg-green-500' },
    { time: '12PM - 3PM', percentage: 35, color: 'bg-red-500' },
    { time: '3PM - 6PM', percentage: 45, color: 'bg-orange-500' },
    { time: '6PM - 9PM', percentage: 60, color: 'bg-purple-500' },
    { time: '9PM - 12AM', percentage: 30, color: 'bg-pink-500' },
  ];

  const insights = [
    {
      icon: Clock,
      title: 'Peak Hours',
      value: '6-9 PM',
      description: 'Best time to upload'
    },
    {
      icon: Calendar,
      title: 'Best Day',
      value: 'Saturday',
      description: 'Highest trending rate'
    },
    {
      icon: Users,
      title: 'Audience',
      value: '18-34',
      description: 'Primary age group'
    },
    {
      icon: Zap,
      title: 'Viral Speed',
      value: '2.5hrs',
      description: 'Avg. time to trend'
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
    >
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
        Upload Time Analysis
      </h3>
      
      <div className="space-y-4 mb-6">
        {timeSlots.map((slot, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            className="flex items-center space-x-4"
          >
            <div className="w-20 text-sm font-medium text-gray-700 dark:text-gray-300">
              {slot.time}
            </div>
            <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${slot.percentage}%` }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.8 }}
                className={`h-full ${slot.color} rounded-full`}
              />
            </div>
            <div className="w-10 text-sm font-semibold text-gray-600 dark:text-gray-400">
              {slot.percentage}%
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4">
        {insights.map((insight, index) => {
          const Icon = insight.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 text-center"
            >
              <Icon className="w-6 h-6 text-red-600 mx-auto mb-2" />
              <div className="text-lg font-bold text-gray-900 dark:text-white">
                {insight.value}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-300">
                {insight.title}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {insight.description}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default TimeAnalysis;