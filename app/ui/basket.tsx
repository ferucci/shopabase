'use client'

import { useRef } from "react"
import { useClickOutside } from "../hooks/useClickOutside"
import { useCart } from "../providers/CartProvider"

export const Basket = () => {
  const { isOpen, setIsOpen } = useCart()
  const catalogRef = useRef<HTMLDivElement>(null)
  useClickOutside(catalogRef, () => setIsOpen(false))

  return (
    <>
      <div className="cart" style={{ display: isOpen ? 'flex' : 'none' }}>
        <div className="cart-body" ref={catalogRef}>
          <div className="cart-title">Корзина</div>
          <div className="cart-total">Общая сумма: <span>0</span> руб</div>

          <div className="cart-wrapper">
            <div id="cart-empty">
              Ваша корзина пока пуста
            </div>
          </div>
          <button className="btn btn-primary cart-confirm">Оформить заказ</button>
          <div className="cart-close" onClick={() => setIsOpen(false)}></div>
        </div>
      </div>
    </>
  )
}