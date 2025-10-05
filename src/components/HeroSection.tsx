import React from 'react'
import { motion } from 'framer-motion'
import heroImage from '../assets/hero1.jpg'
import './HeroSection.css'

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-image-container">
        <img src={heroImage} alt="LEO Hygiene Solutions" className="hero-image" />
        <div className="hero-overlay">
          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-text"
            >
              <h1 className="hero-title">
                LEO: Trusted Hygiene Solutions by MS Enterprises
              </h1>
              <p className="hero-subtitle">
                Your Reliable Partner in Hygiene & Care
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="hero-cta"
              >
                <a href="#products" className="btn btn-secondary">
                  Shop with us
                </a>
                <a href="#contact" className="btn btn-secondary">
                  Get Contact
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
