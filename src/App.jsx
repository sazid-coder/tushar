import React, { useState } from 'react';
import { useTransition, animated } from '@react-spring/web';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import MetricsPage from './components/pages/MetricsPage';
import BerkusValuationPage from './components/pages/BerkusValuationPage';
import WorksheetPage from './components/pages/WorksheetPage';
import ResourcesPage from './components/pages/ResourcesPage';
import ContactPage from './components/pages/ContactPage';
import LoginPage from './components/pages/LoginPage';
import RevenueGrowthRateCalculator from './components/pages/calculators/RevenueGrowthRateCalculator';
import NetProfitMarginCalculator from './components/pages/calculators/NetProfitMarginCalculator';

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