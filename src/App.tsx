import React from 'react'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ProductsSection from './components/ProductsSection'
import ClientsSection from './components/ClientsSection'
import ProcessSection from './components/ProcessSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <ClientsSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App