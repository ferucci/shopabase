'use client'

import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { ICartContext } from "../models/cartContext.model";
import { CartItem } from "../models/cartItem.model";
import { Product } from "../models/product.model";

const CartContext = createContext<ICartContext | undefined>(undefined)

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('Need to wrap in "CartProvider"')
  }
  return context
}

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const totalAmount = useMemo(() => {
    return cartItems.reduce((total, item) => {
      return total + (item.price * item.count);
    }, 0);
  }, [cartItems]);

  const addToCart = (product: Product) => {
    setCartItems((prevProducts) => {
      const findProduct = prevProducts.find(p => p.id === product.id)
      if (findProduct) {

        return prevProducts.map(p => {
          if (p.id === findProduct.id) {
            return { ...p, count: p.count + 1 }
          } else {
            return p
          }
        })

      } else {
        return [...prevProducts, { ...product, count: 1 }]
      }
    })

  }

  const deleteCartItem = (product: Product) => {
    setCartItems((prevProducts) => {
      const findProduct = cartItems.find(p => p.id === product.id)

      if (findProduct) {

        if (findProduct.count > 1) {
          return prevProducts.map(p => {
            if (p.id === findProduct.id) {
              return { ...p, count: p.count - 1 }
            } else {
              return p
            }
          })
        } else {
          return prevProducts.filter(p => p.id !== product.id)
        }

      } else {
        return prevProducts
      }

    })
  }

  return (
    <CartContext.Provider value={
      {
        isOpen,
        cartItems,
        totalAmount,
        setIsOpen,
        addToCart,
        deleteCartItem,

      }
    }>
      {children}
    </CartContext.Provider>
  )
}