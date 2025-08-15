import React from 'react';

const MetricsPage = ({ setCurrentPage }) => {
    const categories = [
        {
            name: "Financial Health Metrics", description: "Analyze your revenue, profit, and overall financial stability.", metrics: [
                { name: "Revenue Growth Rate", id: "revenue-growth" },
                { name: "Net Profit Margin", id: "net-profit-margin" },
                { name: "Monthly Recurring Revenue (MRR)", id: "mrr" },
                { name: "Annual Recurring Revenue (ARR)", id: "arr" },
                { name: "Gross Merchandise Volume (GMV)", id: "gmv" },
                { name: "Return on Investment (ROI)", id: "roi" },
            ]
        },
        {
            name: "Customer Insights Metrics", description: "Understand your customers' value, acquisition, and retention.", metrics: [
                { name: "Customer Acquisition Cost (CAC)", id: "cac" },
                { name: "Customer Lifetime Value (CLV)", id: "clv" },
                { name: "Customer Retention Rate", id: "customer-retention" },
                { name: "Customer Churn Rate", id: "customer-churn" },
                { name: "Net Promoter Score (NPS)", id: "nps" },
                { name: "Average Order Value (AOV)", id: "aov" },
                { name: "Customer Satisfaction Score (CSAT)", id: "csat" },
            ]
        },
        {
            name: "Marketing & Sales Performance Metrics", description: "Evaluate the effectiveness of your marketing and sales efforts.", metrics: [
                { name: "Conversion Rate", id: "conversion-rate" },
                { name: "Cost Per Lead (CPL)", id: "cpl" },
                { name: "Engagement Rate", id: "engagement-rate" },
                { name: "Market Share", id: "market-share" },
            ]
        },
        {
            name: "Operations & Internal Health Metrics", description: "Gauge your operational efficiency and employee well-being.", metrics: [
                { name: "Time to Market", id: "time-to-market" },
                { name: "Operational Efficiency", id: "operational-efficiency" },
                { name: "Employee Satisfaction Rate", id: "employee-satisfaction" },
                { name: "Employee Turnover Rate", id: "employee-turnover" },
            ]
        },
        {
            name: "Profit, Break-Even & ROI", description: "Core profitability and investment return calculations.", metrics: [
                { name: "Profit for ROI", id: "profit-roi" },
                { name: "Break-Even Point (Units)", id: "break-even" },
                { name: "Percentage Profit", id: "percentage-profit" },
                { name: "Profit Margin (Percentage)", id: "percentage-profit-margin" },
            ]
        },
        {
            name: "Depreciation Methods", description: "Calculate asset depreciation using various accounting methods.", metrics: [
                { name: "Straight-Line Depreciation (SLM)", id: "slm-depreciation" },
                { name: "Declining Balance Depreciation", id: "declining-balance-depreciation" },
                { name: "Units of Production Depreciation (UOP)", id: "uop-depreciation" },
                { name: "Sum of Years' Digits Depreciation (SYD)", id: "syd-depreciation" },
            ]
        },
        {
            name: "Forecasting & Business Modeling", description: "Predict future performance and model business scenarios.", metrics: [
                { name: "Linear Sales Forecasting", id: "linear-forecast" },
                { name: "Moving Average Forecast", id: "moving-average-forecast" },
                { name: "Contribution Margin per Unit", id: "contribution-margin-unit" },
                { name: "Total Contribution Margin", id: "total-contribution-margin" },
                { name: "Future Value (Compound Growth)", id: "future-value" },
            ]
        },
        {
            name: "Inventory & Percentage Changes", description: "Analyze inventory efficiency and calculate various percentage changes.", metrics: [
                { name: "Average Inventory", id: "average-inventory" },
                { name: "Inventory Turnover Ratio", id: "inventory-turnover" },
                { name: "Percentage Increase/Decrease", id: "percentage-change" },
                { name: "Percentage Change in Sales Volume", id: "sales-volume-change" },
                { name: "Percentage Salary Hike", id: "salary-hike" },
            ]
        },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">Metrics & Calculators</h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 text-center">
                Explore a wide range of business metrics grouped by category. Click on any metric to use its dedicated calculator.
            </p>

            {categories.map((category, index) => (
                <div key={index} className="mb-10 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                    <h2 className="text-3xl font-semibold text-blue-700 dark:text-blue-400 mb-4">{category.name}</h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">{category.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {category.metrics.map((metric, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentPage(metric.id)}
                                className="block p-4 bg-gray-50 dark:bg-gray-700 rounded-md shadow-sm hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors duration-200 text-left text-gray-800 dark:text-white font-medium hover:text-blue-700 dark:hover:text-blue-300"
                            >
                                {metric.name} &rarr;
                            </button>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MetricsPage;