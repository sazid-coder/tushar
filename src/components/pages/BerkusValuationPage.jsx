import React, { useState } from 'react';

const BerkusValuationPage = () => {
    const [ideaValue, setIdeaValue] = useState(0);
    const [prototypeValue, setPrototypeValue] = useState(0);
    const [qualityManagementValue, setQualityManagementValue] = useState(0);
    const [strategicRelationshipsValue, setStrategicRelationshipsValue] = useState(0);
    const [productRolloutValue, setProductRolloutValue] = useState(0);
    const [valuation, setValuation] = useState(0);

    const maxValuationPerFactor = 500000;

    const calculateBerkus = () => {
        const totalValuation =
            ideaValue +
            prototypeValue +
            qualityManagementValue +
            strategicRelationshipsValue +
            productRolloutValue;
        setValuation(totalValuation);
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">Business Valuation: Berkus Method</h1>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 mb-8">
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                    The Berkus Method is a popular way to value pre-revenue startups.
                    It assigns a monetary value to five key elements rather than traditional financial projections.
                    Each element can contribute up to $500,000 to the valuation.
                </p>
                <p className="text-md text-gray-600 dark:text-gray-400 mb-8">
                    Input the value (up to $500,000 for each factor) you believe your startup embodies for each of the following categories:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                        <label htmlFor="ideaValue" className="block text-gray-700 dark:text-gray-300 text-lg font-medium mb-2">
                            Sound Idea (Basic Value)
                        </label>
                        <input
                            type="number"
                            id="ideaValue"
                            className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={ideaValue}
                            onChange={(e) => setIdeaValue(Math.min(maxValuationPerFactor, Math.max(0, parseFloat(e.target.value) || 0)))}
                            min="0"
                            max={maxValuationPerFactor}
                            step="1000"
                            placeholder="e.g., 250000"
                        />
                    </div>
                    <div>
                        <label htmlFor="prototypeValue" className="block text-gray-700 dark:text-gray-300 text-lg font-medium mb-2">
                            Prototype (Reducing Technology Risk)
                        </label>
                        <input
                            type="number"
                            id="prototypeValue"
                            className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={prototypeValue}
                            onChange={(e) => setPrototypeValue(Math.min(maxValuationPerFactor, Math.max(0, parseFloat(e.target.value) || 0)))}
                            min="0"
                            max={maxValuationPerFactor}
                            step="1000"
                            placeholder="e.g., 300000"
                        />
                    </div>
                    <div>
                        <label htmlFor="qualityManagementValue" className="block text-gray-700 dark:text-gray-300 text-lg font-medium mb-2">
                            Quality Management Team (Reducing Execution Risk)
                        </label>
                        <input
                            type="number"
                            id="qualityManagementValue"
                            className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={qualityManagementValue}
                            onChange={(e) => setQualityManagementValue(Math.min(maxValuationPerFactor, Math.max(0, parseFloat(e.target.value) || 0)))}
                            min="0"
                            max={maxValuationPerFactor}
                            step="1000"
                            placeholder="e.g., 400000"
                        />
                    </div>
                    <div>
                        <label htmlFor="strategicRelationshipsValue" className="block text-gray-700 dark:text-gray-300 text-lg font-medium mb-2">
                            Strategic Relationships (Reducing Market Risk)
                        </label>
                        <input
                            type="number"
                            id="strategicRelationshipsValue"
                            className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={strategicRelationshipsValue}
                            onChange={(e) => setStrategicRelationshipsValue(Math.min(maxValuationPerFactor, Math.max(0, parseFloat(e.target.value) || 0)))}
                            min="0"
                            max={maxValuationPerFactor}
                            step="1000"
                            placeholder="e.g., 350000"
                        />
                    </div>
                    <div>
                        <label htmlFor="productRolloutValue" className="block text-gray-700 dark:text-gray-300 text-lg font-medium mb-2">
                            Product Rollout/Sales (Reducing Production Risk)
                        </label>
                        <input
                            type="number"
                            id="productRolloutValue"
                            className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={productRolloutValue}
                            onChange={(e) => setProductRolloutValue(Math.min(maxValuationPerFactor, Math.max(0, parseFloat(e.target.value) || 0)))}
                            min="0"
                            max={maxValuationPerFactor}
                            step="1000"
                            placeholder="e.g., 450000"
                        />
                    </div>
                </div>

                <button
                    onClick={calculateBerkus}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-colors duration-300 mt-6"
                >
                    Calculate Berkus Valuation
                </button>

                {valuation > 0 && (
                    <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-700 text-center">
                        <h3 className="text-2xl font-semibold text-blue-800 dark:text-blue-200 mb-3">Estimated Pre-Money Valuation:</h3>
                        <p className="text-4xl font-extrabold text-blue-700 dark:text-blue-300">
                            ${valuation.toLocaleString()}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                            *This is an estimate based on the Berkus Method and inputs provided. It should not be considered professional financial advice.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BerkusValuationPage;