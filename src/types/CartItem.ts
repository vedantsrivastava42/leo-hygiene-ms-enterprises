export interface CartItem {
  id: string
  name: string
  size: '1L' | '5L'
  quantity: number
  originalPrice: number
  discountedPrice: number
  image: string
}
