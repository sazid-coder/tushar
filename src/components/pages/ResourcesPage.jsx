import React from 'react';

const ResourcesPage = () => (
    <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Resources & Blog</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Coming Soon: A library of articles, guides, and FAQs to help you further master business analysis and growth strategies.
        </p>
        <div className="flex justify-center items-center h-48">
            <svg className="w-24 h-24 text-gray-300 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18s-3.332.477-4.5 1.253"></path></svg>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mt-8">
            Check back soon for valuable insights!
        </p>
    </div>
);

export default ResourcesPage;