const cart = () => {
  const cartBtn = document.getElementById('cart')
  const cartModal = document.querySelector('.cart')
  const cartCloseBtn = cartModal.querySelector('.cart-close')

  const openCart = () => {
    cartModal.style.display = 'flex'
  }

  const closeCart = () => {
    cartModal.style.display = 'none'
  }

  const closeOnBackdrop = (event) => {
    if (event.target === cartModal) {
      closeCart()
    }
  }

  const closeOnEscape = (event) => {
    if (event.key === 'Escape') {
      closeCart()
    }
  }

  cartBtn.addEventListener('click', openCart)
  cartCloseBtn.addEventListener('click', closeCart)

  cartModal.addEventListener('click', closeOnBackdrop)

  document.addEventListener('keydown', closeOnEscape)

  return () => {
    cartBtn.removeEventListener('click', openCart)
    cartCloseBtn.removeEventListener('click', closeCart)
    cartModal.removeEventListener('click', closeOnBackdrop)
    document.removeEventListener('keydown', closeOnEscape)
  }
}

export default cart