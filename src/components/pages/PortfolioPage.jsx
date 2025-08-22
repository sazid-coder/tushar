import React, { useEffect } from 'react';


const PortfolioPage = () => {
    // Animate progress bars on component mount

    return (
        <div className=" text-white font-['Inter']">
            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center p-4 relative">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        {/* Text Content */}
                        <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left mb-10 lg:mb-0">
                            <span className="text-sm md:text-base font-medium text-white mb-2">Hello there...</span>
                            <h1 className="text-4xl md:text-7xl font-bold text-white mb-4">Tony Smith</h1>
                            <p className="text-lg md:text-xl font-medium text-white border-b-2 border-orange-500 inline-block pb-2 mb-6">
                                I Am Passionate Dev
                            </p>
                            <p className="max-w-md text-white leading-relaxed mb-8">
                                The namics of how users interact with interactive elements within a user interface flow chart
                                based on container proportion.
                            </p>
                            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                                <button className="bg-orange-500 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-orange-600 transition-colors">
                                    MY WORK
                                </button>
                                <button className="bg-gray-800 text-orange-500 font-semibold py-3 px-8 rounded-lg border-2 border-orange-500 hover:bg-orange-500 hover:text-white transition-colors">
                                    HIRE ME
                                </button>
                            </div>
                        </div>

                        {/* Image Section */}
                        <div className="lg:w-1/2 flex justify-center">
                            <div className="w-full max-w-lg relative">
                                <div className="relative w-full aspect-square bg-gray-200 rounded-full overflow-hidden shadow-2xl">
                                    <div className="absolute inset-0 bg-gray-800 rounded-full scale-110 -bottom-24"></div>
                                    <img
                                        src="https://placehold.co/800x800/FFDDAA/FF7A00?text=Tony+Smith"
                                        alt="Tony Smith pointing"
                                        className="w-full h-full object-cover rounded-full transform scale-125 translate-y-8"
                                        style={{ objectPosition: 'center 25%' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Down Arrow */}
                <div className="absolute bottom-8 animate-bounce">
                    <a href="#about">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            className="lucide lucide-chevron-down text-gray-500">
                            <path d="m6 9 6 6 6-6" />
                        </svg>
                    </a>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="p-4 py-16 md:py-24">
                <div className="container mx-auto max-w-6xl">
                    {/* Section Heading */}
                    <div className="mb-12">
                        <div className="flex items-center space-x-2">
                            <h2 className="text-2xl md:text-3xl font-bold text-white uppercase">ABOUT ME</h2>
                            <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
                        </div>
                        <p className="text-sm font-medium text-gray-500 mt-2">
                            A LEAD UX & UI DESIGNER BASED IN CANADA
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row lg:space-x-12">
                        {/* Left Column: Image and Social Media */}
                        <div className="lg:w-1/3 flex flex-col items-center mb-8 lg:mb-0">
                            <div className="relative w-full max-w-sm rounded-lg shadow-xl overflow-hidden">
                                <img
                                    src="https://placehold.co/800x800/FFDDAA/FF7A00?text=Tony+Smith"
                                    alt="Tony Smith"
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute top-4 left-4 flex flex-col space-y-4">
                                    {/* Social Media Icons */}
                                    <a href="#" className="bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                            fill="currentColor" stroke="none" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round">
                                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                            fill="currentColor" stroke="none" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round">
                                            <path d="M22 4s-.7 2.1-2 3.4c1.6 1-.3 2.5-1.5 3.3a11.1 11.1 0 0 1-6.7 1.4c-4.4 0-8.2-2.7-11.4-6.4" />
                                        </svg>
                                    </a>
                                    <a href="#" className="bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round">
                                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                            <path d="M16 11.37a4 4 0 1 1-8 0a4 4 0 0 1 8 0z" />
                                            <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
                                        </svg>
                                    </a>
                                    <a href="#" className="bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round">
                                            <path d="M16 8a6 6 0 0 0-6 6v7h-4V14h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4v7h-4V9a2 2 0 0 1 2-2h4a6 6 0 0 0 6-6z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Bio and Details */}
                        <div className="lg:w-2/3">
                            <h3 className="text-2xl md:text-3xl font-bold mb-2">I'M <span className="text-orange-500">Tony Smith</span></h3>
                            <p className="text-lg font-medium text-gray-700 mb-6">
                                A Lead UX & UI designer based in Canada
                            </p>
                            <p className="text-white leading-relaxed mb-8">
                                I design and develop services for customers of all sizes, specializing in creating stylish,
                                modern websites, web services and online stores. My passion is to design digital user
                                experiences through the bold interface and meaningful interactions. Check out my Portfolio.
                            </p>

                            {/* Personal Details Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-4 text-gray-700 mb-8">
                                <div><span className="font-semibold">Birthday:</span> <span className="text-white">4th April 1991</span></div>
                                <div><span className="font-semibold">E-mail:</span> <span className="text-white">info@domain.com</span></div>
                                <div><span className="font-semibold">Age:</span> <span className="text-white">22 Yr</span></div>
                                <div><span className="font-semibold">Phone:</span> <span className="text-white">820-885-3321</span></div>
                                <div><span className="font-semibold">Residence:</span> <span className="text-white">Canada</span></div>
                                <div><span className="font-semibold">Skype:</span> <span className="text-white">skype.0404</span></div>
                                <div><span className="font-semibold">Address:</span> <span className="text-white">California, USA</span></div>
                                <div><span className="font-semibold">Freelance:</span> <span className="text-white">Available</span></div>
                            </div>

                            <button className="bg-orange-500 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-orange-600 transition-colors">
                                DOWNLOAD CV
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="p-4 py-16 md:py-24">
                <div className="container mx-auto max-w-6xl">
                    {/* Section Heading */}
                    <div className="mb-12">
                        <div className="flex items-center space-x-2">
                            <h2 className="text-2xl md:text-3xl font-bold text-white uppercase">MY SKILLS</h2>
                            <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
                        </div>
                        <p className="text-sm font-medium text-gray-500 mt-2">
                            A LEAD UX & UI DESIGNER BASED IN CANADA
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row lg:space-x-12">
                        {/* Left Column: Skills Progress Bars */}
                        <div className="lg:w-1/2 mb-12 lg:mb-0">
                            {/* HTML5 Skill Bar */}
                            <div className="mb-8">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="font-semibold text-white">HTML5</span>
                                    <span className="text-sm text-white">92%</span>
                                </div>
                                <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                    <div className="progress-bar-fill h-full bg-orange-500 w-[92%]"></div>
                                </div>
                            </div>

                            {/* WordPress Skill Bar */}
                            <div className="mb-8">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="font-semibold text-white">WordPress</span>
                                    <span className="text-sm text-white">75%</span>
                                </div>
                                <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                    <div className="progress-bar-fill h-full bg-orange-500 w-[75%]"></div>
                                </div>
                            </div>

                            {/* Magento Skill Bar */}
                            <div className="mb-8">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="font-semibold text-white">Magento</span>
                                    <span className="text-sm text-white">86%</span>
                                </div>
                                <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                    <div className="progress-bar-fill h-full bg-orange-500 w-[86%]"></div>
                                </div>
                            </div>

                            {/* UI/UX Skill Bar */}
                            <div className="mb-8">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="font-semibold text-white">UI/UX</span>
                                    <span className="text-sm text-white">88%</span>
                                </div>
                                <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                    <div className="progress-bar-fill h-full bg-orange-500 w-[88%]"></div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Factoid Cards */}
                        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* Card 1 */}
                            <div className="bg-gray-800 p-6 rounded-lg shadow-md flex items-center space-x-4 border-2 border-transparent hover:border-orange-500 transition-colors">
                                <div className="text-orange-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round" className="lucide lucide-disc-3">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M6 12c0-1.7.7-3.3 1.8-4.5S10.3 6 12 6" />
                                        <path d="M12 18c-1.7 0-3.3-.7-4.5-1.8S6 13.7 6 12" />
                                        <path d="M18 12c0 1.7-.7 3.3-1.8 4.5S13.7 18 12 18" />
                                        <path d="M12 6c1.7 0 3.3.7 4.5 1.8S18 10.3 18 12" />
                                    </svg>
                                </div>
                                <p className="font-medium text-white">80 Albums Listened</p>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-gray-800 p-6 rounded-lg shadow-md flex items-center space-x-4 border-2 border-transparent hover:border-orange-500 transition-colors">
                                <div className="text-orange-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round" className="lucide lucide-award">
                                        <circle cx="12" cy="8" r="6" />
                                        <path d="M15.4 14.5c.9.2 1.8.6 2.6 1.2s1.6 1.7 2.1 2.8c.6 1.2.9 2.5.8 3.8" />
                                        <path d="M8.6 14.5c-.9.2-1.8.6-2.6 1.2S4.4 17.2 3.9 18.3c-.6 1.2-.9 2.5-.8 3.8" />
                                        <path d="M12 18.5c.9.2 1.8.6 2.6 1.2s1.6 1.7 2.1 2.8c.6 1.2.9 2.5.8 3.8" />
                                        <path d="M12 18.5c-.9.2-1.8.6-2.6 1.2S4.4 17.2 3.9 18.3c-.6 1.2-.9 2.5-.8 3.8" />
                                    </svg>
                                </div>
                                <p className="font-medium text-white">15 Awards Won</p>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-gray-800 p-6 rounded-lg shadow-md flex items-center space-x-4 border-2 border-transparent hover:border-orange-500 transition-colors">
                                <div className="text-orange-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round" className="lucide lucide-coffee">
                                        <path d="M10 2a6 6 0 0 0-6 6v3.5A2.5 2.5 0 0 1 6.5 14H8a2 2 0 0 0 2-2V2z" />
                                        <path d="M14 8h-2a2 2 0 0 0 2 2v2a4 4 0 0 1-4 4H5" />
                                        <path d="M16 8h2a4 4 0 0 1 4 4v.5" />
                                        <path d="M10 18H5.5A2.5 2.5 0 0 1 3 15.5V14" />
                                    </svg>
                                </div>
                                <p className="font-medium text-white">1000 Cups of coffee</p>
                            </div>

                            {/* Card 4 */}
                            <div className="bg-gray-800 p-6 rounded-lg shadow-md flex items-center space-x-4 border-2 border-transparent hover:border-orange-500 transition-colors">
                                <div className="text-orange-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round" className="lucide lucide-globe">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M12 2a15.3 15.3 0 0 0 4 10a15.3 15.3 0 0 0-4 10V2" />
                                        <path d="M2 12h20" />
                                        <path d="M22 12A15.3 15.3 0 0 1 12 8a15.3 15.3 0 0 1-10 4M12 2a15.3 15.3 0 0 0 4 10a15.3 15.3 0 0 0-4 10V2M12 2v20" />
                                    </svg>
                                </div>
                                <p className="font-medium text-white">10 Countries Visited</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="p-4 py-16 md:py-24">
                <div className="container mx-auto max-w-6xl">
                    {/* Section Heading */}
                    <div className="mb-12">
                        <div className="flex items-center space-x-2">
                            <h2 className="text-2xl md:text-3xl font-bold text-white uppercase">MY SERVICES</h2>
                            <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
                        </div>
                        <p className="text-sm font-medium text-gray-500 mt-2">
                            A LEAD UX & UI DESIGNER BASED IN CANADA
                        </p>
                    </div>

                    {/* Service Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Service Card 1 */}
                        <div className="service-card p-8 rounded-lg shadow-md bg-gray-800">
                            <div className="icon text-orange-500 mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    className="lucide lucide-monitor">
                                    <rect x="2" y="3" width="20" height="14" rx="2" />
                                    <line x1="8" y1="21" x2="16" y2="21" />
                                    <line x1="12" y1="17" x2="12" y2="21" />
                                </svg>
                            </div>
                            <h3 className="title text-xl font-semibold mb-2 text-white">Unique design</h3>
                            <p className="description text-white">I design and develop services for customers of all sizes,
                                specializing in creating stylish, modern websites.</p>
                        </div>

                        {/* Service Card 2 */}
                        <div className="service-card p-8 rounded-lg shadow-md bg-gray-800">
                            <div className="icon text-orange-500 mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    className="lucide lucide-layout">
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                    <line x1="3" y1="9" x2="21" y2="9" />
                                    <line x1="9" y1="21" x2="9" y2="9" />
                                </svg>
                            </div>
                            <h3 className="title text-xl font-semibold mb-2 text-white">Different Layout</h3>
                            <p className="description text-white">I design and develop services for customers of all sizes,
                                specializing in creating stylish, modern websites.</p>
                        </div>

                        {/* Service Card 3 */}
                        <div className="service-card p-8 rounded-lg shadow-md bg-gray-800">
                            <div className="icon text-orange-500 mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    className="lucide lucide-message-circle">
                                    <path d="M7.9 20A9.1 9.1 0 0 1 4 16.1L2 22l6-2z" />
                                    <path d="M16 4a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8z" />
                                </svg>
                            </div>
                            <h3 className="title text-xl font-semibold mb-2 text-white">Make it Simple</h3>
                            <p className="description text-white">I design and develop services for customers of all sizes,
                                specializing in creating stylish, modern websites.</p>
                        </div>

                        {/* Service Card 4 */}
                        <div className="service-card p-8 rounded-lg shadow-md bg-gray-800">
                            <div className="icon text-orange-500 mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    className="lucide lucide-smartphone">
                                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                                    <path d="M12 18h.01" />
                                </svg>
                            </div>
                            <h3 className="title text-xl font-semibold mb-2 text-white">Responsiveness</h3>
                            <p className="description text-white">I design and develop services for customers of all sizes,
                                specializing in creating stylish, modern websites.</p>
                        </div>

                        {/* Service Card 5 */}
                        <div className="service-card p-8 rounded-lg shadow-md bg-gray-800">
                            <div className="icon text-orange-500 mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    className="lucide lucide-target">
                                    <circle cx="12" cy="12" r="10" />
                                    <circle cx="12" cy="12" r="6" />
                                    <circle cx="12" cy="12" r="2" />
                                </svg>
                            </div>
                            <h3 className="title text-xl font-semibold mb-2 text-white">Testing for Perfection</h3>
                            <p className="description text-white">I design and develop services for customers of all sizes,
                                specializing in creating stylish, modern websites.</p>
                        </div>

                        {/* Service Card 6 */}
                        <div className="service-card p-8 rounded-lg shadow-md bg-gray-800">
                            <div className="icon text-orange-500 mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    className="lucide lucide-settings">
                                    <path d="M12.22 2h-.44C9.4 2 8.5 3.16 8.5 4.5v15c0 1.34.9 2.5 3.28 2.5h.44c2.38 0 3.28-1.16 3.28-2.5V4.5c0-1.34-.9-2.5-3.28-2.5z" />
                                    <path d="M2.5 8.5h19c1.34 0 2.5.9 2.5 3.28v.44c0 2.38-1.16 3.28-2.5 3.28H2.5c-1.34 0-2.5-.9-2.5-3.28v-.44c0-2.38 1.16-3.28 2.5-3.28z" />
                                </svg>
                            </div>
                            <h3 className="title text-xl font-semibold mb-2 text-white">Advanced Options</h3>
                            <p className="description text-white">I design and develop services for customers of all sizes,
                                specializing in creating stylish, modern websites.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
            <section className="p-4 py-16 md:py-24">
                <div className="container mx-auto max-w-6xl">
                    {/* Section Heading */}
                    <div className="mb-12">
                        <div className="flex items-center space-x-2">
                            <h2 className="text-2xl md:text-3xl font-bold text-white uppercase">LATEST WORKS</h2>
                            <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
                        </div>
                        <p className="text-sm font-medium text-gray-500 mt-2">
                            A LEAD UX & UI DESIGNER BASED IN CANADA
                        </p>
                    </div>

                    {/* Portfolio Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Work Card 1 */}
                        <div className="work-card relative rounded-lg overflow-hidden shadow-lg aspect-w-1 aspect-h-1">
                            <img src="https://placehold.co/800x800/f97316/ffffff?text=Our+Photography" alt="Our Photography"
                                className="w-full h-full object-cover" />
                            <div className="work-card-overlay flex items-end p-6">
                                <div className="work-card-text text-white">
                                    <h3 className="text-2xl font-semibold">Our Photography</h3>
                                    <p className="text-lg">Design</p>
                                </div>
                            </div>
                        </div>

                        {/* Work Card 2 */}
                        <div className="work-card relative rounded-lg overflow-hidden shadow-lg aspect-w-1 aspect-h-1">
                            <img src="https://placehold.co/800x800/e5e7eb/6b7280?text=Enjoy+Your+Life" alt="Coffee Cups"
                                className="w-full h-full object-cover" />
                            <div className="work-card-overlay flex items-end p-6">
                                <div className="work-card-text text-white">
                                    <h3 className="text-2xl font-semibold">Coffee Cups</h3>
                                    <p className="text-lg">Branding</p>
                                </div>
                            </div>
                        </div>

                        {/* Work Card 3 */}
                        <div className="work-card relative rounded-lg overflow-hidden shadow-lg aspect-w-1 aspect-h-1">
                            <img src="https://placehold.co/800x800/F4B5D0/6B7280?text=Banana+Pop" alt="Banana"
                                className="w-full h-full object-cover" />
                            <div className="work-card-overlay flex items-end p-6">
                                <div className="work-card-text text-white">
                                    <h3 className="text-2xl font-semibold">Banana Pop</h3>
                                    <p className="text-lg">Art Direction</p>
                                </div>
                            </div>
                        </div>

                        {/* Work Card 4 */}
                        <div className="work-card relative rounded-lg overflow-hidden shadow-lg aspect-w-1 aspect-h-1">
                            <img src="https://placehold.co/800x800/d1d5db/4b5563?text=Summer+Agenda" alt="Summer Agenda"
                                className="w-full h-full object-cover" />
                            <div className="work-card-overlay flex items-end p-6">
                                <div className="work-card-text text-white">
                                    <h3 className="text-2xl font-semibold">Summer Agenda</h3>
                                    <p className="text-lg">Content</p>
                                </div>
                            </div>
                        </div>

                        {/* Work Card 5 */}
                        <div className="work-card relative rounded-lg overflow-hidden shadow-lg aspect-w-1 aspect-h-1">
                            <img src="https://placehold.co/800x800/3B82F6/ffffff?text=Pineapple+Art" alt="Pineapple Art"
                                className="w-full h-full object-cover" />
                            <div className="work-card-overlay flex items-end p-6">
                                <div className="work-card-text text-white">
                                    <h3 className="text-2xl font-semibold">Pineapple Art</h3>
                                    <p className="text-lg">Illustration</p>
                                </div>
                            </div>
                        </div>

                        {/* Work Card 6 */}
                        <div className="work-card relative rounded-lg overflow-hidden shadow-lg aspect-w-1 aspect-h-1">
                            <img src="https://placehold.co/800x800/FFC107/000000?text=Wooden+Hand" alt="Wooden Hand"
                                className="w-full h-full object-cover" />
                            <div className="work-card-overlay flex items-end p-6">
                                <div className="work-card-text text-white">
                                    <h3 className="text-2xl font-semibold">Wooden Hand</h3>
                                    <p className="text-lg">Sculpture</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="p-4 py-16 md:py-24">
                <div className="container mx-auto max-w-6xl">
                    {/* Section Heading */}
                    <div className="mb-12">
                        <div className="flex items-center space-x-2">
                            <h2 className="text-2xl md:text-3xl font-bold text-white uppercase">TESTIMONIALS</h2>
                            <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
                        </div>
                        <p className="text-sm font-medium text-gray-500 mt-2">
                            A LEAD UX & UI DESIGNER BASED IN CANADA
                        </p>
                    </div>

                    {/* Testimonials Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Testimonial Card 1 */}
                        <div className="bg-gray-800 p-8 rounded-lg shadow-md flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
                            <div className="flex-shrink-0 w-24 h-24 mb-6 sm:mb-0 sm:mr-6 rounded-full overflow-hidden border-2 border-orange-500">
                                <img src="https://placehold.co/100x100/f57c00/ffffff?text=Nancy" alt="Nancy Bayers"
                                    className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <p className="text-white mb-4 italic leading-relaxed">
                                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                                </p>
                                <h3 className="text-xl font-bold text-white">Nancy Bayers</h3>
                                <p className="text-sm font-medium text-gray-500">Co-founder</p>
                            </div>
                        </div>

                        {/* Testimonial Card 2 */}
                        <div className="bg-gray-800 p-8 rounded-lg shadow-md flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
                            <div className="flex-shrink-0 w-24 h-24 mb-6 sm:mb-0 sm:mr-6 rounded-full overflow-hidden border-2 border-orange-500">
                                <img src="https://placehold.co/100x100/F4B5D0/6B7280?text=Jane" alt="Jane Doe"
                                    className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <p className="text-white mb-4 italic leading-relaxed">
                                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                                </p>
                                <h3 className="text-xl font-bold text-white">Jane Doe</h3>
                                <p className="text-sm font-medium text-gray-500">CEO</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Section */}
            <section className="p-4 py-16 md:py-24">
                <div className="container mx-auto max-w-6xl">
                    {/* Section Heading */}
                    <div className="mb-12">
                        <div className="flex items-center space-x-2">
                            <h2 className="text-2xl md:text-3xl font-bold text-white uppercase">LATEST BLOGS</h2>
                            <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
                        </div>
                        <p className="text-sm font-medium text-gray-500 mt-2">
                            A LEAD UX & UI DESIGNER BASED IN CANADA
                        </p>
                    </div>

                    {/* Blog Posts Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Blog Card 1 */}
                        <div className="blog-card bg-gray-800 rounded-lg overflow-hidden shadow-md">
                            <div className="relative w-full h-48">
                                <img src="https://placehold.co/800x400/D1E8E8/4A6767?text=Coffee+on+Desk" alt="Coffee on Desk"
                                    className="w-full h-full object-cover" />
                                <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded-sm">
                                    02 Mar 2023
                                </div>
                            </div>
                            <div className="p-6">
                                <span className="text-xs font-medium text-gray-500 uppercase tracking-widest bg-gray-200 px-2 py-1 rounded-full">
                                    Design
                                </span>
                                <h3 className="text-lg md:text-xl font-semibold text-white mt-4 mb-2">
                                    Make your Marketing website
                                </h3>
                                <p className="text-white mb-4">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                </p>
                                <a href="#" className="text-orange-500 font-semibold uppercase text-sm hover:underline">
                                    READ MORE
                                </a>
                            </div>
                        </div>

                        {/* Blog Card 2 */}
                        <div className="blog-card bg-gray-800 rounded-lg overflow-hidden shadow-md">
                            <div className="relative w-full h-48">
                                <img src="https://placehold.co/800x400/E8D1D1/674A4A?text=Workspace+View" alt="Workspace View"
                                    className="w-full h-full object-cover" />
                                <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded-sm">
                                    02 Mar 2023
                                </div>
                            </div>
                            <div className="p-6">
                                <span className="text-xs font-medium text-gray-500 uppercase tracking-widest bg-gray-200 px-2 py-1 rounded-full">
                                    Design
                                </span>
                                <h3 className="text-lg md:text-xl font-semibold text-white mt-4 mb-2">
                                    Make your Marketing website
                                </h3>
                                <p className="text-white mb-4">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                </p>
                                <a href="#" className="text-orange-500 font-semibold uppercase text-sm hover:underline">
                                    READ MORE
                                </a>
                            </div>
                        </div>

                        {/* Blog Card 3 */}
                        <div className="blog-card bg-gray-800 rounded-lg overflow-hidden shadow-md">
                            <div className="relative w-full h-48">
                                <img src="https://placehold.co/800x400/D1E8D1/4A674A?text=Clean+Desk" alt="Clean Desk"
                                    className="w-full h-full object-cover" />
                                <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded-sm">
                                    02 Mar 2023
                                </div>
                            </div>
                            <div className="p-6">
                                <span className="text-xs font-medium text-gray-500 uppercase tracking-widest bg-gray-200 px-2 py-1 rounded-full">
                                    Design
                                </span>
                                <h3 className="text-lg md:text-xl font-semibold text-white mt-4 mb-2">
                                    Make your Marketing website
                                </h3>
                                <p className="text-white mb-4">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                </p>
                                <a href="#" className="text-orange-500 font-semibold uppercase text-sm hover:underline">
                                    READ MORE
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="p-4 py-16 md:py-24">
                <div className="container mx-auto max-w-6xl">
                    {/* Section Heading */}
                    <div className="mb-12">
                        <div className="flex items-center space-x-2">
                            <h2 className="text-2xl md:text-3xl font-bold text-white uppercase">GET IN TOUCH</h2>
                            <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
                        </div>
                        <p className="text-sm font-medium text-gray-500 mt-2">
                            A LEAD UX & UI DESIGNER BASED IN CANADA
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row lg:space-x-12">
                        {/* Left Column: Contact Form */}
                        <div className="lg:w-2/3 bg-gray-800 p-8 rounded-lg shadow-md mb-8 lg:mb-0">
                            <h3 className="text-xl font-bold text-white mb-6">SAY SOMETHING</h3>
                            <form>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <input type="text" placeholder="Name *"
                                        className="w-full text-gray-500 p-3 border border-gray-300 rounded-lg focus:border-orange-500 transition-colors" />
                                    <input type="email" placeholder="Email *"
                                        className="w-full text-gray-500 p-3 border border-gray-300 rounded-lg focus:border-orange-500 transition-colors" />
                                </div>
                                <div className="mb-4">
                                    <input type="text" placeholder="Subject *"
                                        className="w-full text-gray-500 p-3 border border-gray-300 rounded-lg focus:border-orange-500 transition-colors" />
                                </div>
                                <div className="mb-6">
                                    <textarea placeholder="Your message *" rows="6"
                                        className="w-full text-gray-500 p-3 border border-gray-300 rounded-lg resize-none focus:border-orange-500 transition-colors"></textarea>
                                </div>
                                <button type="submit"
                                    className="bg-orange-500 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-orange-600 transition-colors">
                                    SEND MESSAGE
                                </button>
                            </form>
                        </div>

                        {/* Right Column: Contact Details */}
                        <div className="lg:w-1/3 space-y-8">
                            {/* Address Card */}
                            <div className="bg-gray-800 p-8 rounded-lg shadow-md flex items-start space-x-4">
                                <div className="flex-shrink-0 text-orange-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round" className="lucide lucide-map-pin">
                                        <path d="M12 2C8.686 2 6 4.686 6 8a6 6 0 0 0 6 6s6-2.686 6-6a6 6 0 0 0-6-6zm0 9a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                        <path d="M19 12l-7 7-7-7" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-white mb-1">Our Address</h3>
                                    <p className="text-white leading-relaxed">
                                        123 Street New York City , United States Of America 750065.
                                    </p>
                                </div>
                            </div>

                            {/* Phone Card */}
                            <div className="bg-gray-800 p-8 rounded-lg shadow-md flex items-start space-x-4">
                                <div className="flex-shrink-0 text-orange-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round" className="lucide lucide-phone">
                                        <path d="M22 16.92a2 2 0 0 1-.7 1.4L18.9 21a2 2 0 0 1-2.67-2.67l-2.7-2.7a2 2 0 0 1-1.4-.7a2 2 0 0 1-.7-1.4V9.8a2 2 0 0 1 .7-1.4l2.7-2.7a2 2 0 0 1 2.67-2.67l2.18-2.18a2 2 0 0 1 1.4-.7H19.2c.4 0 .8.1 1.2.2a2 2 0 0 1 .9.7l3.9 3.9a2 2 0 0 1 .7 1.4v2.58a2 2 0 0 1-.7 1.4l-3.9 3.9z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-white mb-1">Our Phone</h3>
                                    <p className="text-white leading-relaxed">
                                        Office: +004 44444 44444
                                        <br />
                                        Office: +004 44444 44444
                                    </p>
                                </div>
                            </div>

                            {/* Email Card */}
                            <div className="bg-gray-800 p-8 rounded-lg shadow-md flex items-start space-x-4">
                                <div className="flex-shrink-0 text-orange-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 极 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round" className="lucide lucide-mail">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <path d="M22 6l-10 7-10-7" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-white mb-1">Our Email</h3>
                                    <p className="text-white leading-relaxed">
                                        info@domainname.com
                                        <br />
                                        contact@domainname.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PortfolioPage;