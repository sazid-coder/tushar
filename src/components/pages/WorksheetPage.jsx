import React from 'react';

const WorksheetPage = ({ setCurrentPage }) => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
                'Before A Business Start' 15-Stage Worksheet
            </h1>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 mb-8">
                <div className="text-blue-600 dark:text-blue-400 mb-6">
                    <svg className="w-20 h-20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01m-2-4h2.01M7 8h.01M16 8h.01"></path></svg>
                </div>
                <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
                    Your Blueprint for a Successful Launch
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                    Don't just start a business; launch it strategically. Our comprehensive 15-stage worksheet guides you through every critical step, from idea validation to your go-to-market strategy.
                </p>
                <ul className="text-left text-gray-700 dark:text-gray-300 list-disc list-inside space-y-2 mb-8 max-w-lg mx-auto">
                    <li>Idea Validation & Market Research</li>
                    <li>Defining Your Value Proposition</li>
                    <li>Legal Structure & Funding Strategy</li>
                    <li>Financial Projections & Risk Assessment</li>
                    <li>Detailed Marketing & Operational Planning</li>
                    <li>And much more!</li>
                </ul>

                <div className="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-6">
                    One-Time Purchase: $29.99
                </div>
                <button
                    onClick={() => { /* Implement a modal for purchase confirmation instead of alert */ }}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                    Get the Worksheet Now
                </button>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                    Instant download after purchase.
                </p>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mt-8">
                Have questions? <button onClick={() => setCurrentPage('contact')} className="text-blue-600 dark:text-blue-400 hover:underline">Contact us</button>.
            </p>
        </div>
    );
};

export default WorksheetPage;