import { createContext, useState, useEffect } from 'react'
import { apiUrl } from "../api"

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

  //Get Products
  const [items, setItems] = useState(null)

  useEffect(() => {
    fetch(`${apiUrl}/products`)
      .then((response) => response.json())
      .then((data) => {
        setItems(data)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }, [])

  //Search by value input
  const [searchByTitle, setSearchByTitle] = useState(null)

  //Filter Items
  const [filteredItems, setFilteredItems] = useState(null)
  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }

  //Filter by Category
  const [filteredByCategory, setFilteredByCategory] = useState(null)
  const filteredItemsByCategory = (items, searchCategory) => {
    return items?.filter(item => item.category.name.toLowerCase().includes(searchCategory.toLowerCase()))
  }

  const filterBy = (searchType, items, searchByTitle, filteredByCategory) => {
    if (searchType === 'BY_TITLE') {
      return filteredItemsByTitle(items, searchByTitle)
    }
    if (searchType === 'BY_CATEGORY') {
      return filteredItemsByCategory(items, filteredByCategory)
    }
    if (searchType === 'BY_TITLE_AND_CATEGORY') {
      return filteredItemsByCategory(filteredItemsByTitle(items, searchByTitle), filteredByCategory)
    }
    if (searchType === 'ALL') {
      return items
    }
  }
  
  useEffect(() => {
    if (searchByTitle && !filteredByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, filteredByCategory))
    if (!searchByTitle && filteredByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, filteredByCategory))
    if (searchByTitle && filteredByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, filteredByCategory))
    if (!searchByTitle && !filteredByCategory) setFilteredItems(filterBy('ALL', items, searchByTitle, filteredByCategory))
  }, [items, searchByTitle, filteredByCategory])

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
      setOrder,
      items,
      setItems,
      searchByTitle,
      setSearchByTitle,
      filteredItems,
      setFilteredItems,
      filteredByCategory,
      setFilteredByCategory
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}