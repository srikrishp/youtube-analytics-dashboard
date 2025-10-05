import React from "react";
import { motion } from "framer-motion";
import AnalyticsChart from "./AnalyticsChart";
import TimeAnalysis from "./TimeAnalysis";
import TrendingMetrics from "./TrendingMetrics";

const Analytics: React.FC = () => {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          📊 Advanced Analytics
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          Deep insights into YouTube trending patterns and performance metrics
        </p>
      </motion.div>

      <TrendingMetrics />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <AnalyticsChart />
        <TimeAnalysis />
      </div>
    </div>
  );
};

export default Analytics;
