import React from 'react';
import './AnalyticsChart.css';

const AnalyticsChart = ({ data }) => {
  // Normally, you'd use the data prop to feed into a charting library
  // For this example, I'll just show the data as a JSON string
  return (
    <div className="analytics-chart">
      <h2>Analytics Data</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default AnalyticsChart;
