'use client'

import { createContext, ReactNode, useContext, useState } from "react";
import { ICartContext } from "../models/cartContext.model";

const CartContext = createContext<ICartContext | undefined>(undefined)

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('Need to wrap in "CartProvider"')
  }
  return context
}

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <CartContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </CartContext.Provider>
  )
}