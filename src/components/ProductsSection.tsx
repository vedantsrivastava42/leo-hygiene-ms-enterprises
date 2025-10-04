import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import './ProductsSection.css'

// Import product images
import handwash1L from '../assets/1L Handwash.png'
import handwash5L from '../assets/5L Handwash.png'
import phenyl1L from '../assets/1Lphenyl.png'
import phenyl5L from '../assets/5Lphenyl.png'
import liquidSoap1L from '../assets/1LLiquid soap.png'
import liquidSoap5L from '../assets/5L Liquid Soap.png'
import acid1L from '../assets/1L Acid.png'
import acid5L from '../assets/5L Acid.png'
import toiletCleaner1L from '../assets/1L Toilet CLeaner.png'
import toiletCleaner5L from '../assets/5L Toilet CLeaner.png'

interface Product {
  id: string
  name: string
  type: string
  description: string
  image1L: string
  image5L: string
}

const ProductsSection: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState<'1L' | '5L'>('1L')

  const products: Product[] = [
    {
      id: 'handwash',
      name: 'Hand Wash',
      type: 'Antibacterial Hand Wash',
      description: 'Premium antibacterial hand wash for schools and offices. Gentle on skin, tough on germs.',
      image1L: handwash1L,
      image5L: handwash5L
    },
    {
      id: 'phenyl',
      name: 'Phenyl',
      type: 'Floor Disinfectant',
      description: 'Powerful floor disinfectant with long-lasting fragrance. Safe for all floor types.',
      image1L: phenyl1L,
      image5L: phenyl5L
    },
    {
      id: 'liquid-soap',
      name: 'Liquid Soap',
      type: 'Multi-Purpose Cleaner',
      description: 'Versatile liquid soap for various cleaning needs. Effective and economical.',
      image1L: liquidSoap1L,
      image5L: liquidSoap5L
    },
    {
      id: 'acid',
      name: 'Acid Cleaner',
      type: 'Heavy Duty Cleaner',
      description: 'Professional-grade acid cleaner for tough stains and deep cleaning.',
      image1L: acid1L,
      image5L: acid5L
    },
    {
      id: 'toilet-cleaner',
      name: 'Toilet Cleaner',
      type: 'Bathroom Sanitizer',
      description: 'Specialized toilet cleaner with powerful sanitizing properties.',
      image1L: toiletCleaner1L,
      image5L: toiletCleaner5L
    }
  ]

  return (
    <section id="products" className="products-section section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Our Products</h2>
          <p className="section-subtitle">
            Premium hygiene solutions for institutions and organizations
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="size-toggle"
        >
          <div className="toggle-container">
            <button
              className={`toggle-btn ${selectedSize === '1L' ? 'active' : ''}`}
              onClick={() => setSelectedSize('1L')}
            >
              1 Liter
            </button>
            <button
              className={`toggle-btn ${selectedSize === '5L' ? 'active' : ''}`}
              onClick={() => setSelectedSize('5L')}
            >
              5 Liters
            </button>
          </div>
        </motion.div>

        <div className="products-grid">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="product-card"
            >
              <div className="product-image-container">
                <img
                  src={selectedSize === '1L' ? product.image1L : product.image5L}
                  alt={`${product.name} ${selectedSize}`}
                  className="product-image"
                />
                <div className="product-size-badge">
                  {selectedSize}
                </div>
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-type">{product.type}</p>
                <p className="product-description">{product.description}</p>
                <div className="product-actions">
                  <button className="btn btn-primary">Get Quote</button>
                  <button className="btn btn-secondary">Learn More</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="catalog-section"
        >
          <div className="catalog-card">
            <div className="catalog-content">
              <h3>Download Our Product Catalog</h3>
              <p>Get detailed information about all our products, specifications, and pricing for your organization.</p>
              <button className="btn btn-primary">
                <Download size={20} />
                Download PDF Catalog
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProductsSection
