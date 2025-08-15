import React from 'react';

const ContactPage = () => (
    <div className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">Contact Us</h1>
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 text-center">
                Have questions, feedback, or need support? Reach out to us using the form below, or send us an email.
            </p>
            <form className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 text-lg font-medium mb-2">Your Name</label>
                    <input
                        type="text"
                        id="name"
                        className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="John Doe"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 text-lg font-medium mb-2">Your Email</label>
                    <input
                        type="email"
                        id="email"
                        className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="you@example.com"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 text-lg font-medium mb-2">Message</label>
                    <textarea
                        id="message"
                        rows="5"
                        className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your message here..."
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-colors duration-300"
                    onClick={(e) => { e.preventDefault(); /* Handle form submission */ }}
                >
                    Send Message
                </button>
            </form>
            <p className="text-center text-gray-600 dark:text-gray-400 mt-6">
                You can also email us directly at <a href="mailto:support@bizinsighthub.com" className="text-blue-600 dark:text-blue-400 hover:underline">support@bizinsighthub.com</a>
            </p>
        </div>
    </div>
);

export default ContactPage;