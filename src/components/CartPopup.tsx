import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ShoppingCart, Trash2, Plus, Minus } from 'lucide-react'
import type { CartItem } from '../types/CartItem'
import { openWhatsApp } from '../utils/whatsappCart'
import './CartPopup.css'

interface CartPopupProps {
  cartItems: CartItem[]
  isOpen: boolean
  onClose: () => void
  onRemoveItem: (index: number) => void
  onUpdateQuantity: (index: number, newQuantity: number) => void
  onClearCart: () => void
  totalPrice: number
  originalTotalPrice: number
  totalSavings: number
}

const CartPopup: React.FC<CartPopupProps> = ({ cartItems, isOpen, onClose, onRemoveItem, onUpdateQuantity, onClearCart, totalPrice, originalTotalPrice, totalSavings }) => {
  const handleWhatsAppOrder = () => {
    openWhatsApp(cartItems, totalPrice)
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="cart-overlay"
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="cart-popup"
          >
            <div className="cart-header">
              <h2>Shopping Cart ({cartItems.length} items)</h2>
              <button className="close-btn" onClick={onClose}>
                <X size={24} />
              </button>
            </div>

            <div className="cart-content">
              {cartItems.length === 0 ? (
                <div className="empty-cart">
                  <ShoppingCart size={64} />
                  <h3>Your cart is empty</h3>
                </div>
              ) : (
                <>
                  <div className="cart-items">
                    {cartItems.map((item, index) => (
                      <div key={index} className="cart-item">
                        <img src={item.image} alt={item.name} className="item-image" />
                        <div className="item-details">
                          <h4>{item.name} ({item.size})</h4>
                          <div className="item-pricing">
                            <span className="original-price">₹{item.originalPrice || 0}</span>
                            <span className="discounted-price">₹{item.discountedPrice}</span>
                          </div>
                        </div>
                        <div className="item-controls">
                          <div className="quantity-controls">
                            <button 
                              onClick={() => onUpdateQuantity(index, item.quantity - 1)}
                              className="qty-btn"
                              disabled={item.quantity <= 1}
                            >
                              −
                            </button>
                            <span className="quantity">{item.quantity}</span>
                            <button 
                              onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                              className="qty-btn"
                            >
                              +
                            </button>
                          </div>
                          <button 
                            onClick={() => onRemoveItem(index)}
                            className="remove-btn"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <div className="item-total">
                          ₹{item.discountedPrice * item.quantity}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="cart-footer">
                    <div className="cart-summary">
                      <div className="total-row">
                        <span>Total Items:</span>
                        <span>{cartItems.reduce((sum, item) => sum + item.quantity, 0)}</span>
                      </div>
                      <div className="total-row">
                        <span>Original Total:</span>
                        <span className="original-total">₹{originalTotalPrice || 0}</span>
                      </div>
                      <div className="total-row">
                        <span>Discounted Total:</span>
                        <span className="discounted-total">₹{totalPrice || 0}</span>
                      </div>
                      <div className="total-row savings-row">
                        <span>You Saved:</span>
                        <span className="savings-amount">₹{totalSavings || 0}</span>
                      </div>
                    </div>
                    <div className="cart-actions">
                      <button className="clear-cart-btn" onClick={onClearCart}>
                        Clear Cart
                      </button>
                      <button className="checkout-btn" onClick={handleWhatsAppOrder}>
                        <ShoppingCart size={20} />
                        Order via WhatsApp
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CartPopup