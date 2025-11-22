'use client'

import { useRef } from "react"
import { useClickOutside } from "../hooks/useClickOutside"
import { useCart } from "../providers/CartProvider"

export const Basket = () => {

  const { cartItems, isOpen, setIsOpen, deleteCartItem, totalAmount } = useCart()

  const catalogRef = useRef<HTMLDivElement>(null)
  useClickOutside(catalogRef, () => setIsOpen(false))

  return (
    <>
      <div className="cart" style={{ display: isOpen ? 'flex' : 'none' }}>
        <div className="cart-body" ref={catalogRef}>
          <div className="cart-title">Корзина</div>
          <div className="cart-total">Общая сумма: <span>{totalAmount}</span> руб</div>

          <div className="cart-wrapper">

            {cartItems.map(product => (
              <div className="card" key={product.id}>
                <div
                  className="cart-total"
                  id="total-num"
                  style={{ margin: '5px 10px 0 auto' }}
                >Кол-во: <span>{product.count}</span> </div>
                {product.sale ? <div className="card-sale">🔥Hot Sale🔥</div> : ''}
                <div className="card-img-wrapper">
                  <span className="card-img-top"
                    style={{ backgroundImage: `url(${product.img})` }}></span>
                </div>
                <div className="card-body justify-content-between">
                  <div className="card-price">${product.price}' ₽</div>
                  <h5 className="card-title">${product.title}'</h5>
                  <button className="btn btn-primary" onClick={() => deleteCartItem(product)}>Удалить</button>
                </div>
              </div>
            ))}

            {!cartItems.length ? (
              <div id="cart-empty">
                Ваша корзина пока пуста
              </div>
            ) : null}
          </div>
          {/* // Реализация метода отправки на сервер и очистки корзины */}
          <button className="btn btn-primary cart-confirm" onClick={() => setIsOpen(false)}>Оформить заказ</button>
          <div className="cart-close" onClick={() => setIsOpen(false)}></div>
        </div>
      </div>
    </>
  )
}