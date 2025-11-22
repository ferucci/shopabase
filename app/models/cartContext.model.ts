import { CartItem } from "./cartItem.model"
import { Product } from "./product.model"

export interface ICartContext {
  isOpen: boolean
  cartItems: CartItem[]
  totalAmount: number
  setIsOpen: (value: boolean) => void
  addToCart: (product: Product) => void
  deleteCartItem: (product: Product) => void
}