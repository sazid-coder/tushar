import React, { useState } from 'react';
import { useTransition, animated } from '@react-spring/web';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './components/pages/HomePage.jsx';
import MetricsPage from './components/pages/MetricsPage.jsx';
import BerkusValuationPage from './components/pages/BerkusValuationPage.jsx';
import WorksheetPage from './components/pages/WorksheetPage.jsx';
import ResourcesPage from './components/pages/ResourcesPage.jsx';
import ContactPage from './components/pages/ContactPage.jsx';
import LoginPage from './components/pages/LoginPage.jsx';
import RevenueGrowthRateCalculator from './components/pages/calculators/RevenueGrowthRateCalculator.jsx';
import NetProfitMarginCalculator from './components/pages/calculators/NetProfitMarginCalculator.jsx';
import MonthlyRecurringRevenueCalculator from "./components/pages/calculators/MonthlyRecurringRevenueCalculator.jsx";
import AnnualRecurringRevenueCalculator from "./components/pages/calculators/AnnualRecurringRevenueCalculator.jsx";
import GrossMerchandiseVolumeCalculator from "./components/pages/calculators/GrossMerchandiseVolumeCalculator.jsx";
import ReturnOnInvestmentCalculator from "./components/pages/calculators/ReturnOnInvestmentCalculator.jsx";

const App = () => {
    const [currentPage, setCurrentPage] = useState('home');

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <HomePage setCurrentPage={setCurrentPage} />;
            case 'metrics':
                return <MetricsPage setCurrentPage={setCurrentPage} />;
            case 'valuation':
                return <BerkusValuationPage />;
            case 'worksheet':
                return <WorksheetPage setCurrentPage={setCurrentPage} />;
            case 'resources':
                return <ResourcesPage />;
            case 'contact':
                return <ContactPage />;
            case 'login':
                return <LoginPage />;
            case 'revenue-growth':
                return <RevenueGrowthRateCalculator />;
            case 'net-profit-margin':
                return <NetProfitMarginCalculator />;
            case 'mrr':
                return <MonthlyRecurringRevenueCalculator />;
            case 'arr':
                return <AnnualRecurringRevenueCalculator />;
            case 'gmv':
                return <GrossMerchandiseVolumeCalculator />;
            case 'roi':
                return <ReturnOnInvestmentCalculator />;
            default:
                return <HomePage setCurrentPage={setCurrentPage} />;
        }
    };

    const transitions = useTransition(currentPage, {
        from: { opacity: 0, transform: 'translate3d(0,20px,0)' },
        enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(0,-20px,0)', position: 'absolute' },
        config: { duration: 200 },
    });

    return (
        <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex flex-col font-sans">
            <Navbar setCurrentPage={setCurrentPage} />
            <main className="flex-grow container mx-auto p-4">
                {transitions((style, item) => (
                    <animated.div style={style} className="w-full">
                        {renderPage(item)}
                    </animated.div>
                ))}
            </main>
            <Footer />
        </div>
    );
};

export default App;