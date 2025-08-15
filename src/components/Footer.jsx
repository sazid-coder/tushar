import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-8 px-4 mt-12 rounded-t-lg">
            <div className="max-w-7xl mx-auto text-center text-gray-600 dark:text-gray-400">
                <p className="text-lg font-bold mb-2 text-gray-800 dark:text-white">BizInsight Hub</p>
                <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
                <div className="flex justify-center space-x-6 mt-4">
                    <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">About Us</a>
                    <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Privacy Policy</a>
                    <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Terms of Service</a>
                    <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Contact</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;