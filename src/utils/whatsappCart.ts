import type { CartItem } from '../types/CartItem'

export const generateWhatsAppMessage = (cartItems: CartItem[], totalPrice: number): string => {
  const phoneNumber = '+919128106245' // Replace with actual WhatsApp number
  
  let message = `🛒 *Order Summary - LEO Hygiene*\n\n`
  
  cartItems.forEach((item, index) => {
    const itemTotal = item.discountedPrice * item.quantity
    message += `${index + 1}. *${item.name}* (${item.size})\n`
    message += `   Quantity: ${item.quantity}\n`
    message += `   Price: ₹${item.discountedPrice}\n`
    message += `   Total: ₹${itemTotal}\n\n`
  })
  
  message += `💰 *Grand Total: ₹${totalPrice}*\n\n`
  message += `*Name/Organization:* \n\n`
  message += `Please confirm this order and provide delivery details.`
  
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`
}

export const openWhatsApp = (cartItems: CartItem[], totalPrice: number): void => {
  const whatsappUrl = generateWhatsAppMessage(cartItems, totalPrice)
  window.open(whatsappUrl, '_blank')
}