import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ProductsSection from './components/ProductsSection'
import ClientsSection from './components/ClientsSection'
import ProcessSection from './components/ProcessSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import CartPopup from './components/CartPopup'
import type { CartItem } from './types/CartItem'
import './App.css'

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addToCart = (item: CartItem) => {
    setCartItems(prev => {
      const existingItemIndex = prev.findIndex(
        cartItem => cartItem.id === item.id && cartItem.size === item.size
      )
      
      if (existingItemIndex !== -1) {
        // Update quantity if item already exists
        const updatedItems = [...prev]
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + item.quantity
        }
        return updatedItems
      } else {
        // Add new item
        return [...prev, item]
      }
    })
  }

  const removeFromCart = (index: number) => {
    setCartItems(prev => prev.filter((_, i) => i !== index))
  }

  const updateQuantity = (index: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(index)
      return
    }
    
    setCartItems(prev => prev.map((item, i) => 
      i === index ? { ...item, quantity: newQuantity } : item
    ))
  }

  const clearCart = () => {
    setCartItems([])
  }

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0)
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.discountedPrice * item.quantity), 0)
  const originalTotalPrice = cartItems.reduce((sum, item) => {
    const originalPrice = item.originalPrice || 0
    return sum + (originalPrice * item.quantity)
  }, 0)
  const totalSavings = originalTotalPrice - totalPrice

  return (
    <div className="App">
      <Navbar cartCount={cartCount} onCartClick={() => setIsCartOpen(true)} />
      <HeroSection />
      <AboutSection />
      <ProductsSection onAddToCart={addToCart} />
      <ClientsSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
      <CartPopup 
        cartItems={cartItems}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onRemoveItem={removeFromCart}
        onUpdateQuantity={updateQuantity}
        onClearCart={clearCart}
        totalPrice={totalPrice}
        originalTotalPrice={originalTotalPrice}
        totalSavings={totalSavings}
      />
    </div>
  )
}

export default App