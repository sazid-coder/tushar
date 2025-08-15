import React, { useState } from 'react';

const RevenueGrowthRateCalculator = () => {
    const [currentRevenue, setCurrentRevenue] = useState('');
    const [previousRevenue, setPreviousRevenue] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');
    const [aiInsight, setAiInsight] = useState('');
    const [aiLoading, setAiLoading] = useState(false);

    const calculateGrowthRate = () => {
        setError('');
        setResult(null);
        setAiInsight('');

        const current = parseFloat(currentRevenue);
        const previous = parseFloat(previousRevenue);

        if (isNaN(current) || isNaN(previous)) {
            setError('Please enter valid numbers for both fields.');
            return;
        }
        if (previous === 0) {
            setError('Previous Period Revenue cannot be zero, as it leads to division by zero.');
            return;
        }

        const growthRate = ((current - previous) / previous) * 100;
        setResult(growthRate.toFixed(2));
    };

    const getAiInsight = async () => {
        if (result === null) {
            setError('Please calculate the Revenue Growth Rate first.');
            return;
        }

        setAiLoading(true);
        setAiInsight('');
        setError('');

        try {
            const prompt = `Provide a concise business insight and actionable suggestions for a company with a Revenue Growth Rate of ${result}%.
                            Categorize the insight into "Interpretation" and "Actionable Steps".`;
            let chatHistory = [];
            chatHistory.push({ role: "user", parts: [{ text: prompt }] });
            const payload = { contents: chatHistory };
            const apiKey = "YOUR_API_KEY_HERE";
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            const responseData = await response.json();

            if (responseData.candidates && responseData.candidates.length > 0 && responseData.candidates[0].content && responseData.candidates[0].content.parts && responseData.candidates[0].content.parts.length > 0) {
                const text = responseData.candidates[0].content.parts[0].text;
                setAiInsight(text);
            } else {
                setError('Could not get AI insight. Please try again.');
            }
        } catch (err) {
            console.error(err);
            setError('An error occurred while fetching AI insight.');
        } finally {
            setAiLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">Revenue Growth Rate Calculator</h1>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <label htmlFor="currentRevenue" className="block text-gray-700 dark:text-gray-300 text-lg font-medium mb-2">Current Period Revenue ($)</label>
                        <input
                            type="number"
                            id="currentRevenue"
                            className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={currentRevenue}
                            onChange={(e) => setCurrentRevenue(e.target.value)}
                            placeholder="e.g., 1200000"
                        />
                    </div>
                    <div>
                        <label htmlFor="previousRevenue" className="block text-gray-700 dark:text-gray-300 text-lg font-medium mb-2">Previous Period Revenue ($)</label>
                        <input
                            type="number"
                            id="previousRevenue"
                            className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={previousRevenue}
                            onChange={(e) => setPreviousRevenue(e.target.value)}
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
                    <button
                        onClick={getAiInsight}
                        disabled={aiLoading}
                        className={`w-full sm:w-1/2 font-bold py-3 px-6 rounded-lg shadow-lg transition-colors duration-300 ${aiLoading ? 'bg-gray-400 dark:bg-gray-600 text-gray-700 dark:text-gray-400 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white'}`}
                    >
                        {aiLoading ? 'Thinking...' : 'Get AI Insight'}
                    </button>
                </div>

                {error && (
                    <div className="mt-4 p-4 bg-red-100 dark:bg-red-900 border border-red-400 text-red-700 dark:text-red-300 rounded-md text-center">
                        {error}
                    </div>
                )}

                {result !== null && (
                    <div className="mt-6 p-6 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-700 text-center">
                        <h3 className="text-2xl font-semibold text-blue-800 dark:text-blue-200 mb-3">Revenue Growth Rate:</h3>
                        <p className="text-4xl font-extrabold text-blue-700 dark:text-blue-300">
                            {result}%
                        </p>
                    </div>
                )}

                {aiInsight && (
                    <div className="mt-6 p-6 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-700">
                        <h3 className="text-2xl font-semibold text-green-800 dark:text-green-200 mb-3">AI Insight:</h3>
                        <div className="text-lg text-gray-700 dark:text-gray-300 whitespace-pre-line">
                            {aiInsight}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RevenueGrowthRateCalculator;