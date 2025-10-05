import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import './Footer.css'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Our Clients', href: '#clients' },
    { name: 'How We Work', href: '#process' },
    { name: 'Contact', href: '#contact' }
  ]

  const productCategories = [
    'Hand Wash Solutions',
    'Floor Cleaners',
    'Liquid Soaps',
    'Acid Cleaners',
    'Toilet Cleaners',
    'Phenyl Products'
  ]

  const socialLinks = [
    { icon: <Facebook size={20} />, href: '#', label: 'Facebook' },
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <Instagram size={20} />, href: '#', label: 'Instagram' },
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' }
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="footer-section company-info"
          >
            <div className="logo-section">
              <h3>LEO</h3>
              <p className="company-tagline">Trusted Hygiene Solutions by MS Enterprises</p>
            </div>
            <p className="company-description">
              Serving schools, offices and organizations with premium hygiene products since 2001. 
              Your reliable partner in maintaining clean, safe, and healthy environments.
            </p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="social-link"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="footer-section quick-links"
          >
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="footer-section products"
          >
            <h4>Our Products</h4>
            <ul>
              {productCategories.map((category, index) => (
                <li key={index}>
                  <span>{category}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="footer-section contact-info"
          >
            <h4>Contact Info</h4>
            <div className="contact-item">
              <Phone size={18} />
              <a href="tel:+919128106245">+91 9128106245</a>
            </div>
            <div className="contact-item">
              <Phone size={18} />
              <a href="tel:+919430065284">+91 9430065284</a>
            </div>
            <div className="contact-item">
              <Mail size={18} />
              <a href="mailto:leo.msenterprises@gmail.com">leo.msenterprises@gmail.com</a>
            </div>
            <div className="contact-item">
              <Mail size={18} />
              <a href="mailto:kumar.atul706@gmail.com">kumar.atul706@gmail.com</a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="footer-bottom"
        >
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} MS Enterprises | Owned by Mr. ATUL KUMAR. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#disclaimer">Disclaimer</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
