import React from 'react';

const HomePage = ({ setCurrentPage }) => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-10 rounded-xl shadow-lg mb-12">
                <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                    Empower Your Business with Data-Driven Insights.
                </h1>
                <p className="text-xl md:text-2xl mb-8 opacity-90">
                    Calculate key metrics, value your startup, and plan for success with BizInsight Hub.
                </p>
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                    <button
                        onClick={() => setCurrentPage('metrics')}
                        className="bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
                    >
                        Explore Calculators
                    </button>
                    <button
                        onClick={() => setCurrentPage('worksheet')}
                        className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700 font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
                    >
                        Get Your Worksheet
                    </button>
                </div>
            </div>

            <section className="py-12">
                <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-10">Our Core Offerings</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 transform hover:scale-105 transition-transform duration-300">
                        <div className="text-blue-600 dark:text-blue-400 mb-4">
                            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Metric Calculators</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            Analyze your financial health, customer insights, marketing performance, and operational efficiency with our interactive tools.
                        </p>
                        <button onClick={() => setCurrentPage('metrics')} className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">Explore Metrics &rarr;</button>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 transform hover:scale-105 transition-transform duration-300">
                        <div className="text-blue-600 dark:text-blue-400 mb-4">
                            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.592 1M12 8V7m0 1v8m0 4v1m-6-10H4M2 12h2m-2 2h2m12-2h2m-2-2h2M6 20H4M2 20h2m12-4h2m-2 0V4m-2 4h-2m2 0V4m-2 4h-2m-2 4h-2m-2-4h-2m-2 4H4m-2 0h2"></path></svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Business Valuation</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            Estimate your startup's pre-money valuation quickly and effectively using the Berkus Method.
                        </p>
                        <button onClick={() => setCurrentPage('valuation')} className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">Value Your Business &rarr;</button>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 transform hover:scale-105 transition-transform duration-300">
                        <div className="text-blue-600 dark:text-blue-400 mb-4">
                            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Pre-Launch Worksheet</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            Navigate the crucial 15 stages of starting a business with our comprehensive, structured worksheet.
                        </p>
                        <button onClick={() => setCurrentPage('worksheet')} className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">Learn More &rarr;</button>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-10">What Our Users Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                        <p className="text-lg text-gray-700 dark:text-gray-300 italic mb-4">
                            "BizInsight Hub made understanding my business finances so much easier. The calculators are incredibly intuitive!"
                        </p>
                        <p className="font-semibold text-gray-900 dark:text-white">- Sarah L., Startup Founder</p>
                    </div>
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                        <p className="text-lg text-gray-700 dark:text-gray-300 italic mb-4">
                            "The Berkus Method tool was exactly what I needed for my early-stage pitch. Clear and concise results."
                        </p>
                        <p className="font-semibold text-gray-900 dark:text-white">- David M., Tech Entrepreneur</p>
                    </div>
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                        <p className="text-lg text-gray-700 dark:text-gray-300 italic mb-4">
                            "The 'Before A Business Start' worksheet is a game-changer. It covers everything you need to think about."
                        </p>
                        <p className="font-semibold text-gray-900 dark:text-white">- Emily R., Aspiring Business Owner</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;