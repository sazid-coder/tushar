import React, {useEffect, useState} from 'react';

const AnnualRecurringRevenueCalculator = () => {
    const [averageRevenue, setAverageRevenue] = useState('');
    const [activeSubscribers, setActiveSubscribers] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');
    const mrr = parseFloat(localStorage.getItem("mrr"));

    const calculateGrowthRate = () => {
        setError('');
        setResult(null);

        const average = parseFloat(averageRevenue);
        const activeS = parseFloat(activeSubscribers);

        if (isNaN(average) || isNaN(activeS)) {
            setError('Please enter valid numbers for both fields.');
            return;
        }

        const growthRate = average * activeS * 12;
        setResult(growthRate.toFixed(2));
        localStorage.setItem('arr', growthRate)
    };

    useEffect(() => {
        if (mrr) {
            const val = mrr * 12;
            setResult(val)
            localStorage.setItem('arr', val)

        }
    }, [mrr])


    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">Annual Recurring
                Revenue</h1>
            <div
                className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <label htmlFor="currentRevenue"
                               className="block text-gray-700 dark:text-gray-300 text-lg font-medium mb-2">Average
                            Revenue Per User (ARPU)</label>
                        <input
                            type="number"
                            id="currentRevenue"
                            className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={averageRevenue}
                            onChange={(e) => setAverageRevenue(e.target.value)}
                            placeholder="e.g., 1200000"
                        />
                    </div>
                    <div>
                        <label htmlFor="previousRevenue"
                               className="block text-gray-700 dark:text-gray-300 text-lg font-medium mb-2">Total Active
                            Subscribers</label>
                        <input
                            type="number"
                            id="previousRevenue"
                            className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={activeSubscribers}
                            onChange={(e) => setActiveSubscribers(e.target.value)}
                            placeholder="e.g., 1000000"
                        />
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
                    <button
                        onClick={calculateGrowthRate}
                        className="w-full sm:w-1/2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-colors duration-300"
                    >
                        Calculate
                    </button>

                </div>

                {error && (
                    <div
                        className="mt-4 p-4 bg-red-100 dark:bg-red-900 border border-red-400 text-red-700 dark:text-red-300 rounded-md text-center">
                        {error}
                    </div>
                )}

                {result !== null && (
                    <div
                        className="mt-6 p-6 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-700 text-center">
                        <h3 className="text-2xl font-semibold text-blue-800 dark:text-blue-200 mb-3">Annual Recurring
                            Revenue:</h3>
                        <p className="text-4xl font-extrabold text-blue-700 dark:text-blue-300">
                            {result}
                        </p>
                    </div>
                )}

            </div>
        </div>
    );
};

export default AnnualRecurringRevenueCalculator;