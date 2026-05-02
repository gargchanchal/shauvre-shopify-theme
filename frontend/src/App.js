import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CollectionsSection from './components/CollectionsSection';
import AboutSection from './components/AboutSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';
import CollectionPage from './pages/CollectionPage';
import ProductPage from './pages/ProductPage';
import { Toaster } from './components/ui/sonner';

function HomePage() {
  return (
    <main>
      <HeroSection />
      <CollectionsSection />
      <AboutSection />
      <NewsletterSection />
    </main>
  );
}

function App() {
  return (
    <Router>
      <div className="App min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/collections/:id" element={<CollectionPage />} />
          <Route path="/products/:id" element={<ProductPage />} />
        </Routes>
        <Footer />
        <Toaster position="bottom-right" />
      </div>
    </Router>
  );
}

export default App;
