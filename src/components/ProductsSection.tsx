import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Download, ShoppingCart } from 'lucide-react'
import type { CartItem } from '../types/CartItem'
import './ProductsSection.css'
import { handleBuyNow } from '../utils/whatsapp'

interface ProductsSectionProps {
  onAddToCart: (item: CartItem) => void
}

// Import the catalog PDF
import catalogPdf from '../assets/catalog_compressed.pdf'

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
import whatsappIcon from '../assets/whatsapp.png'

interface Product {
  id: string
  name: string
  type: string
  description: string
  image1L: string
  image5L: string
  originalPrice1L: number
  originalPrice5L: number
  discountedPrice1L: number
  discountedPrice5L: number
  fragrance: string
}

const ProductsSection: React.FC<ProductsSectionProps> = ({ onAddToCart }) => {
  
  const createDefaultSizes = (products: Product[]): Record<string, '1L' | '5L'> => {
    const defaultSizes: Record<string, '1L' | '5L'> = {}
    products.forEach(product => {
      defaultSizes[product.id] = '5L'
    })
    return defaultSizes
  }

  const products: Product[] = [
    {
      id: 'handwash',
      name: 'Hand Wash',
      type: 'Antibacterial Hand Wash',
      description: 'Premium antibacterial hand wash. Gentle on skin, tough on germs.',
      image1L: handwash1L,
      image5L: handwash5L,
      originalPrice1L: 120,
      originalPrice5L: 550,
      discountedPrice1L: 70,
      discountedPrice5L: 250,
      fragrance: 'Customizable'
    },
    {
      id: 'phenyl',
      name: 'White Floor Cleaner',
      type: 'Floor Disinfectant',
      description: 'Powerful floor disinfectant with long-lasting fragrance. Safe for all floor types.',
      image1L: phenyl1L,
      image5L: phenyl5L,
      originalPrice1L: 100,
      originalPrice5L: 350,
      discountedPrice1L: 45,
      discountedPrice5L: 150,
      fragrance: 'Customizable'
    },
    {
      id: 'liquid-soap',
      name: 'Liquid Soap',
      type: 'Multi-Purpose Cleaner',
      description: 'Versatile liquid soap for various cleaning needs. Effective and economical.',
      image1L: liquidSoap1L,
      image5L: liquidSoap5L,
      originalPrice1L: 100,
      originalPrice5L: 400,
      discountedPrice1L: 55,
      discountedPrice5L: 200,
      fragrance: 'Customizable'
    },
    {
      id: 'acid',
      name: 'Acid Cleaner',
      type: 'Heavy Duty Cleaner',
      description: 'Professional-grade acid cleaner for tough stains and deep cleaning.',
      image1L: acid1L,
      image5L: acid5L,
      originalPrice1L: 110,
      originalPrice5L: 500,
      discountedPrice1L: 35,
      discountedPrice5L: 120,
      fragrance: 'Customizable'
    },
    {
      id: 'toilet-cleaner',
      name: 'Toilet Cleaner',
      type: 'Bathroom Sanitizer',
      description: 'Specialized toilet cleaner with powerful sanitizing properties.',
      image1L: toiletCleaner1L,
      image5L: toiletCleaner5L,
      originalPrice1L: 200,
      originalPrice5L: 900,
      discountedPrice1L: 80,
      discountedPrice5L: 300,
      fragrance: 'Customizable'
    }
  ]

  const [productSizes, setProductSizes] = useState<Record<string, '1L' | '5L'>>(() => 
    createDefaultSizes(products)
  )

  // Quantity state for each product
  const [productQuantities, setProductQuantities] = useState<Record<string, number>>(() => {
    const defaultQuantities: Record<string, number> = {}
    products.forEach(product => {
      defaultQuantities[product.id] = 1
    })
    return defaultQuantities
  })

  const handleSizeChange = (productId: string, size: '1L' | '5L') => {
    setProductSizes(prev => ({
      ...prev,
      [productId]: size
    }))
  }

  const handleQuantityChange = (productId: string, change: 'increment' | 'decrement') => {
    setProductQuantities(prev => {
      const currentQuantity = prev[productId]
      let newQuantity = currentQuantity

      if (change === 'increment') {
        newQuantity = Math.min(currentQuantity + 1, 99) // Max 99
      } else if (change === 'decrement') {
        newQuantity = Math.max(currentQuantity - 1, 1) // Min 1
      }

      return {
        ...prev,
        [productId]: newQuantity
      }
    })
  }

  const calculateDiscountPercentage = (originalPrice: number, discountedPrice: number): number => {
    return Math.round(((originalPrice - discountedPrice) / originalPrice) * 100)
  }

  const handleAddToCart = (product: Product) => {
    const cartItem: CartItem = {
      id: product.id,
      name: product.name,
      size: productSizes[product.id],
      quantity: productQuantities[product.id],
      originalPrice: productSizes[product.id] === '1L' ? product.originalPrice1L : product.originalPrice5L,
      discountedPrice: productSizes[product.id] === '1L' ? product.discountedPrice1L : product.discountedPrice5L,
      image: productSizes[product.id] === '1L' ? product.image1L : product.image5L
    }
    onAddToCart(cartItem)
  }

  const handleDownloadCatalog = () => {
    // Create a temporary link element
    const link = document.createElement('a')
    link.href = catalogPdf
    link.download = 'LEO-Hygiene-Products-Catalog.pdf'
    link.target = '_blank'
    
    // Trigger the download
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

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
                  src={productSizes[product.id] === '1L' ? product.image1L : product.image5L}
                  alt={`${product.name} ${productSizes[product.id]}`}
                  className="product-image"
                  loading="lazy"
                  decoding="async"
                />
                <div className="product-size-badge">
                  {productSizes[product.id]}
                </div>
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-type">{product.type}</p>
                
                <div className="product-size-toggle">
                  <div className="toggle-container">
                    <button
                      className={`toggle-btn ${productSizes[product.id] === '1L' ? 'active' : ''}`}
                      onClick={() => handleSizeChange(product.id, '1L')}
                    >
                      1L
                    </button>
                    <button
                      className={`toggle-btn ${productSizes[product.id] === '5L' ? 'active' : ''}`}
                      onClick={() => handleSizeChange(product.id, '5L')}
                    >
                      5L
                    </button>
                  </div>
                </div>

                <div className="product-pricing">
                  <div className="price-display">
                    <span className="price-label">Price:</span>
                    <div className="price-container">
                      <div className="price-row">
                        <span className="original-price">
                          ₹{productSizes[product.id] === '1L' ? product.originalPrice1L : product.originalPrice5L}
                        </span>
                        <span className="discounted-price">
                          ₹{productSizes[product.id] === '1L' ? product.discountedPrice1L : product.discountedPrice5L}
                        </span>
                      </div>
                      <span className="discount-badge">
                        {calculateDiscountPercentage(
                          productSizes[product.id] === '1L' ? product.originalPrice1L : product.originalPrice5L,
                          productSizes[product.id] === '1L' ? product.discountedPrice1L : product.discountedPrice5L
                        )}% OFF
                      </span>
                    </div>
                  </div>
                </div>

                <div className="product-quantity">
                  <span className="quantity-label">Quantity:</span>
                  <div className="quantity-controls">
                    <div className="quantity-counter">
                      <button
                        className="quantity-btn quantity-decrease"
                        onClick={() => handleQuantityChange(product.id, 'decrement')}
                        disabled={productQuantities[product.id] <= 1}
                      >
                        −
                      </button>
                      <span className="quantity-value">{productQuantities[product.id]}</span>
                      <button
                        className="quantity-btn quantity-increase"
                        onClick={() => handleQuantityChange(product.id, 'increment')}
                        disabled={productQuantities[product.id] >= 99}
                      >
                        +
                      </button>
                    </div>
                    <button 
                      className="add-to-cart-btn"
                      onClick={() => handleAddToCart(product)}
                    >
                      <ShoppingCart size={16} />
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="product-fragrance">
                  <span className="fragrance-label">Fragrance:</span>
                  <span className="fragrance-value">{product.fragrance}</span>
                </div>
                <p className="product-description">{product.description}</p>
                <div className="product-actions">
                  <button 
                    className="btn btn-primary"
                    onClick={() => handleBuyNow(
                      product.name,
                      productSizes[product.id],
                      productQuantities[product.id],
                      productSizes[product.id] === '1L' ? product.discountedPrice1L : product.discountedPrice5L
                    )}
                  >
                    Buy Now for ₹{productQuantities[product.id] * (productSizes[product.id] === '1L' ? product.discountedPrice1L : product.discountedPrice5L)}
                    <img src={whatsappIcon} alt="WhatsApp" className="whatsapp-icon" />
                  </button>
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
              <button className="btn btn-primary" onClick={handleDownloadCatalog}>
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
