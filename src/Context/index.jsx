import { createContext, useState } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
  // Shopping Cart - Count
  const [count, setCount] = useState(0)

  // Product Detail - Open/Close
  const [isOpenDetail, setIsOpenDetail] = useState(false)
  const openProductDetail = () => setIsOpenDetail(true)
  const closeProductDetail = () => setIsOpenDetail(false)

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
      setProductToShow
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}