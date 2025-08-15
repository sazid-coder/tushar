import React, { useState } from 'react';

const NetProfitMarginCalculator = () => {
    const [totalRevenue, setTotalRevenue] = useState('');
    const [cogs, setCogs] = useState('');
    const [operatingExpenses, setOperatingExpenses] = useState('');
    const [taxes, setTaxes] = useState('');
    const [netProfitMargin, setNetProfitMargin] = useState(null);
    const [error, setError] = useState('');

    const calculateNetProfitMargin = () => {
        setError('');
        setNetProfitMargin(null);

        const revenue = parseFloat(totalRevenue);
        const costs = parseFloat(cogs);
        const opEx = parseFloat(operatingExpenses);
        const tax = parseFloat(taxes);

        if (isNaN(revenue) || isNaN(costs) || isNaN(opEx) || isNaN(tax)) {
            setError('Please enter valid numbers for all fields.');
            return;
        }

        if (revenue === 0) {
            setError('Total Revenue cannot be zero.');
            return;
        }

        const netProfit = revenue - costs - opEx - tax;
        const margin = (netProfit / revenue) * 100;
        setNetProfitMargin(margin.toFixed(2));
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">Net Profit Margin Calculator</h1>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 mb-8">
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                    Calculate your company's net profit margin by entering the following financial data.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <label htmlFor="totalRevenue" className="block text-gray-700 dark:text-gray-300 text-lg font-medium mb-2">Total Revenue ($)</label>
                        <input
                            type="number"
                            id="totalRevenue"
                            className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={totalRevenue}
                            onChange={(e) => setTotalRevenue(e.target.value)}
                            placeholder="e.g., 500000"
                        />
                    </div>
                    <div>
                        <label htmlFor="cogs" className="block text-gray-700 dark:text-gray-300 text-lg font-medium mb-2">Cost of Goods Sold (COGS) ($)</label>
                        <input
                            type="number"
                            id="cogs"
                            className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={cogs}
                            onChange={(e) => setCogs(e.target.value)}
                            placeholder="e.g., 150000"
                        />
                    </div>
                    <div>
                        <label htmlFor="operatingExpenses" className="block text-gray-700 dark:text-gray-300 text-lg font-medium mb-2">Operating Expenses ($)</label>
                        <input
                            type="number"
                            id="operatingExpenses"
                            className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={operatingExpenses}
                            onChange={(e) => setOperatingExpenses(e.target.value)}
                            placeholder="e.g., 100000"
                        />
                    </div>
                    <div>
                        <label htmlFor="taxes" className="block text-gray-700 dark:text-gray-300 text-lg font-medium mb-2">Taxes ($)</label>
                        <input
                            type="number"
                            id="taxes"
                            className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={taxes}
                            onChange={(e) => setTaxes(e.target.value)}
                            placeholder="e.g., 50000"
                        />
                    </div>
                </div>
                <button
                    onClick={calculateNetProfitMargin}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-colors duration-300"
                >
                    Calculate Net Profit Margin
                </button>

                {error && (
                    <div className="mt-4 p-4 bg-red-100 dark:bg-red-900 border border-red-400 text-red-700 dark:text-red-300 rounded-md text-center">
                        {error}
                    </div>
                )}

                {netProfitMargin !== null && (
                    <div className="mt-6 p-6 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-700 text-center">
                        <h3 className="text-2xl font-semibold text-blue-800 dark:text-blue-200 mb-3">Net Profit Margin:</h3>
                        <p className="text-4xl font-extrabold text-blue-700 dark:text-blue-300">
                            {netProfitMargin}%
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NetProfitMarginCalculator;