/**
 * WhatsApp integration utility
 * Handles opening WhatsApp with pre-filled messages for product orders
 */

interface ProductOrder {
  productName: string
  size: string
  quantity: number
  unitPrice: number
  totalPrice: number
}

/**
 * Detects if the user is on a mobile device
 */
const isMobileDevice = (): boolean => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}


/**
 * Opens WhatsApp with a pre-filled message
 * @param message - The message to send
 * @param phoneNumber - The phone number (default: +919128106245)
 */
export const openWhatsApp = (message: string, phoneNumber: string = '+919128106245'): void => {
  const encodedMessage = encodeURIComponent(message)
  
  if (isMobileDevice()) {
    // For mobile devices, try to open WhatsApp app first
    const whatsappAppUrl = `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`
    
    // Create a temporary link to test if WhatsApp app opens
    const link = document.createElement('a')
    link.href = whatsappAppUrl
    link.style.display = 'none'
    document.body.appendChild(link)
    
    // Try to open WhatsApp app
    link.click()
    
    // Clean up
    document.body.removeChild(link)
    
    // Fallback: If WhatsApp app doesn't open, redirect to WhatsApp Web after a short delay
    setTimeout(() => {
      const whatsappWebUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
      window.open(whatsappWebUrl, '_blank')
    }, 1000)
  } else {
    // For desktop, open WhatsApp Web directly
    const whatsappWebUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappWebUrl, '_blank')
  }
}

/**
 * Creates a formatted order message for WhatsApp
 * @param order - Product order details
 */
export const createOrderMessage = (order: ProductOrder): string => {
  return `Hi! I want to place an order for:

*Product:* ${order.productName}
*Size:* ${order.size}
*Quantity:* ${order.quantity}
*Unit Price:* ₹${order.unitPrice}
*Total Amount:* ₹${order.totalPrice}

*Name/Organization:* 
Please confirm availability and provide delivery details. Thank you!`
}

/**
 * Handles Buy Now button click with WhatsApp integration
 * @param product - Product details
 * @param size - Selected size (1L or 5L)
 * @param quantity - Selected quantity
 * @param unitPrice - Price per unit
 */
export const handleBuyNow = (
  productName: string,
  size: string,
  quantity: number,
  unitPrice: number
): void => {
  const totalPrice = quantity * unitPrice
  
  const order: ProductOrder = {
    productName,
    size,
    quantity,
    unitPrice,
    totalPrice
  }
  
  const message = createOrderMessage(order)
  openWhatsApp(message)
}
