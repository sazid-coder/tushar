import React from 'react';

const LoginPage = () => (
    <div className="max-w-md mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">Sign In / Register</h1>
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700">
            <form className="space-y-6">
                <div>
                    <label htmlFor="login-email" className="block text-gray-700 dark:text-gray-300 text-lg font-medium mb-2">Email</label>
                    <input
                        type="email"
                        id="login-email"
                        className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="you@example.com"
                    />
                </div>
                <div>
                    <label htmlFor="login-password" className="block text-gray-700 dark:text-gray-300 text-lg font-medium mb-2">Password</label>
                    <input
                        type="password"
                        id="login-password"
                        className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="********"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-colors duration-300"
                    onClick={(e) => {
                        e.preventDefault();
                        alert("Login/Registration functionality not implemented yet.");
                    }}
                >
                    Sign In
                </button>
            </form>
            <p className="text-center text-gray-600 dark:text-gray-400 mt-6">
                Don't have an account? <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline" onClick={(e) => { e.preventDefault(); alert("Registration form not implemented yet."); }}>Register here</a>.
            </p>
        </div>
    </div>
);

export default LoginPage;