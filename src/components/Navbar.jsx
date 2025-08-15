import React, { useState } from 'react';

const Navbar = ({ setCurrentPage }) => {
    const [isOpen, setIsOpen] = useState(false);

    const linkClasses = "block py-2 px-3 text-gray-700 hover:text-blue-600 rounded md:bg-transparent md:p-0 dark:text-gray-200 dark:hover:text-blue-400 font-medium transition-colors duration-200";

    return (
        <nav className="bg-white border-b border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700 p-4 rounded-b-lg">
            <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse" onClick={() => setCurrentPage('home')}>
                    <span className="self-center text-2xl font-bold whitespace-nowrap text-gray-900 dark:text-white">
                        BizInsight Hub
                    </span>
                </a>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded={isOpen ? "true" : "false"}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>

                <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto transition-all duration-300 ease-in-out`} id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-700">
                        <li>
                            <a href="#" className={linkClasses} onClick={() => setCurrentPage('home')}>Home</a>
                        </li>
                        <li>
                            <a href="#" className={linkClasses} onClick={() => setCurrentPage('metrics')}>Metrics & Calculators</a>
                        </li>
                        <li>
                            <a href="#" className={linkClasses} onClick={() => setCurrentPage('valuation')}>Business Valuation</a>
                        </li>
                        <li>
                            <a href="#" className={linkClasses} onClick={() => setCurrentPage('worksheet')}>'Before A Business Start' Worksheet</a>
                        </li>
                        <li>
                            <a href="#" className={linkClasses} onClick={() => setCurrentPage('resources')}>Resources</a>
                        </li>
                        <li>
                            <a href="#" className={linkClasses} onClick={() => setCurrentPage('contact')}>Contact</a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200 ml-4 border border-blue-600 dark:border-blue-400 py-1 px-3 rounded-full hover:bg-blue-50 dark:hover:bg-gray-700" onClick={() => setCurrentPage('login')}>
                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
                                </svg>
                                Sign In / Register
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;