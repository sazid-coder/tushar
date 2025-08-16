import React, { useState} from 'react';

const ReturnOnInvestmentCalculator = () => {
    const [profitFromInvestment, setProfitFromInvestment] = useState('');
    const [investmentCost, setInvestmentCost] = useState('');
    const [investmentResult, setInvestmentResult] = useState(null);
    const [investmentError, setInvestmentError] = useState('');


    const [totalRevenue, setTotalRevenue] = useState('');
    const [itemsCost, setItemsCost] = useState('');
    const [revenueResult, setRevenueResult] = useState(null);
    const [revenueError, setRevenueError] = useState('');

    const calculateInvestment = () => {
        setInvestmentError('');
        setInvestmentResult(null);

        const average = parseFloat(profitFromInvestment);
        const activeS = parseFloat(investmentCost);

        if (isNaN(average) || isNaN(activeS)) {
            setInvestmentError('Please enter valid numbers for both fields.');
            return;
        }

        const growthRate = ((average - activeS) / activeS) * 100;
        setInvestmentResult(growthRate.toFixed(2));
    };

    const calculateProfitMargin = () => {
        setRevenueError('');
        setRevenueResult(null);

        const average = parseFloat(totalRevenue);
        const activeS = parseFloat(itemsCost);

        if (isNaN(average) || isNaN(activeS)) {
            setInvestmentError('Please enter valid numbers for both fields.');
            return;
        }

        const growthRate = ((average - activeS)/ activeS) * 100;
        setRevenueResult(growthRate.toFixed(2));
    };



    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">Return on Investment
                (ROI)</h1>
            <div
                className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <label htmlFor="currentRevenue"
                               className="block text-gray-700 dark:text-gray-300 text-lg font-medium mb-2">Net Profit from Investment</label>
                        <input
                            type="number"
                            id="currentRevenue"
                            className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={profitFromInvestment}
                            onChange={(e) => setProfitFromInvestment(e.target.value)}
                            placeholder="e.g., 1200000"
                        />
                    </div>
                    <div>
                        <label htmlFor="previousRevenue"
                               className="block text-gray-700 dark:text-gray-300 text-lg font-medium mb-2">Cost of Investment</label>
                        <input
                            type="number"
                            id="previousRevenue"
                            className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={investmentCost}
                            onChange={(e) => setInvestmentCost(e.target.value)}
                            placeholder="e.g., 1000000"
                        />
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
                    <button
                        onClick={calculateInvestment}
                        className="w-full sm:w-1/2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-colors duration-300"
                    >
                        Calculate
                    </button>

                </div>

                {investmentError && (
                    <div
                        className="mt-4 p-4 bg-red-100 dark:bg-red-900 border border-red-400 text-red-700 dark:text-red-300 rounded-md text-center">
                        {investmentError}
                    </div>
                )}

                {investmentResult !== null && (
                    <div
                        className="mt-6 p-6 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-700 text-center">
                        <h3 className="text-2xl font-semibold text-blue-800 dark:text-blue-200 mb-3">Return on
                            Investment (ROI):</h3>
                        <p className="text-4xl font-extrabold text-blue-700 dark:text-blue-300">
                            {investmentResult}%
                        </p>
                    </div>
                )}

            </div>

            {/*//===================================================================================================/*/}

            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">Gross Profit Margin</h1>
            <div
                className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <label htmlFor="currentRevenue"
                               className="block text-gray-700 dark:text-gray-300 text-lg font-medium mb-2">Total Revenue</label>
                        <input
                            type="number"
                            id="currentRevenue"
                            className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={totalRevenue}
                            onChange={(e) => setTotalRevenue(e.target.value)}
                            placeholder="e.g., 1200000"
                        />
                    </div>
                    <div>
                        <label htmlFor="previousRevenue"
                               className="block text-gray-700 dark:text-gray-300 text-lg font-medium mb-2">Cost of Goods Sold</label>
                        <input
                            type="number"
                            id="previousRevenue"
                            className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={itemsCost}
                            onChange={(e) => setItemsCost(e.target.value)}
                            placeholder="e.g., 1000000"
                        />
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
                    <button
                        onClick={calculateProfitMargin}
                        className="w-full sm:w-1/2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-colors duration-300"
                    >
                        Calculate
                    </button>

                </div>

                {revenueError && (
                    <div
                        className="mt-4 p-4 bg-red-100 dark:bg-red-900 border border-red-400 text-red-700 dark:text-red-300 rounded-md text-center">
                        {revenueError}
                    </div>
                )}

                {revenueResult !== null && (
                    <div
                        className="mt-6 p-6 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-700 text-center">
                        <h3 className="text-2xl font-semibold text-blue-800 dark:text-blue-200 mb-3">Return on
                            Investment (ROI):</h3>
                        <p className="text-4xl font-extrabold text-blue-700 dark:text-blue-300">
                            {revenueResult}%
                        </p>
                    </div>
                )}

            </div>


        </div>

    );
};

export default ReturnOnInvestmentCalculator;