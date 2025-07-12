import React from 'react';
import Header from './components/Header';       // ✅ Header
import Hero from './components/Hero';           // ✅ Hero Section
// import CardSection from './components/CardSection'; // Optional CardSection

import { CardProvider } from './context/CardContext';        // ✅ CardProvider
import { ActivityProvider } from './context/ActivityContext'; // ✅ ActivityProvider

const App = () => {
  return (
    <CardProvider>       {/* Outer Provider */}
      <ActivityProvider> {/* Inner Provider */}
        <div className="page-container">
          <Header />
          <Hero />
          {/* Yahan ActivityTimeline ya jo bhi component timeline dikhana hai */}
        </div>
      </ActivityProvider>
    </CardProvider>
  );
};

export default App;
