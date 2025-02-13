import { createContext, useState } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
  // Shopping Cart - Count
  const [count, setCount] = useState(0)
  
  // Shopping Cart - Products to cart
  const [cartProducts, setCartProducts] = useState([])

  // Shopping Cart - Order
  const [order, setOrder] = useState([])

  // Product Detail - Open/Close
  const [isOpenDetail, setIsOpenDetail] = useState(false)
  const openProductDetail = () => setIsOpenDetail(true)
  const closeProductDetail = () => setIsOpenDetail(false)
  
  // CheckoutSideMenu - Open/Close
  const [isCheckoutMenuOpen, setIsCheckoutMenuOpen] = useState(false)
  const openCheckoutMenu = () => setIsCheckoutMenuOpen(true)
  const closeCheckoutMenu = () => setIsCheckoutMenuOpen(false)

  // Product Detail - Show
  const [productToShow, setProductToShow] = useState({})

  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      isOpenDetail,
      openProductDetail,
      closeProductDetail,
      productToShow,
      setProductToShow,
      cartProducts,
      setCartProducts,
      isCheckoutMenuOpen,
      openCheckoutMenu,
      closeCheckoutMenu,
      order,  
      setOrder
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}