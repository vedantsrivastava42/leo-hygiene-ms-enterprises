import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ShoppingCart } from 'lucide-react'
import './Navbar.css'

interface NavbarProps {
  cartCount: number
  onCartClick: () => void
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="navbar-logo"
        >
          <h2>LEO Hygiene</h2>
        </motion.div>

        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="navbar-link"
            onClick={() => scrollToSection('home')}
          >
            Home
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="navbar-link"
            onClick={() => scrollToSection('about')}
          >
            About
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="navbar-link"
            onClick={() => scrollToSection('products')}
          >
            Products
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="navbar-link"
            onClick={() => scrollToSection('contact')}
          >
            Contact Us
          </motion.button>
        </div>

        <div className="navbar-right">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cart-icon-btn"
            onClick={onCartClick}
          >
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="cart-badge">{cartCount}</span>
            )}
          </motion.button>

          <div className="navbar-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
