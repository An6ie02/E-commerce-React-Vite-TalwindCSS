import { useContext } from 'react'
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'

function Card({ props }) {
  const context = useContext(ShoppingCartContext)

  const showProduct = (productDetail) => {
    context.closeCheckoutMenu()
    context.openProductDetail()
    context.setProductToShow(productDetail)
  }

  const addProductsToCart = (event, productData) => {
    event.stopPropagation()
    context.setCount(context.count + 1)
    context.setCartProducts([...context.cartProducts, productData])
    context.openCheckoutMenu()
    context.closeProductDetail()
  }

  const renderIcon = (id) => {
    const isInCart = context.cartProducts.filter(product => product.id === id).length > 0
    if (isInCart) {
      return (
        <button className='absolute top-0 right-0 flex justify-center items-center bg-green-300 w-6 h-6 rounded-full m-2 p-1'>
          <CheckIcon className='h-6 w-6 text-black' /> </button>
      )

    } else {
      return (
        <button className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
          onClick={(event) => addProductsToCart(event, props)}>
          <PlusIcon className='h-6 w-6 text-black' /> </button>
      )
    }
  }

  return (
    <article className='bg-white cursor-pointer w-56 h-60 rounded-lg'
      onClick={() => showProduct(props)}>
      <figure className='relative mb-1 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{props.category.name}</span>
        <img className='w-full h-full object-cover rounded-lg' src={props.images[0]} alt={props.title} />
        {renderIcon(props.id)}
      </figure>
      <p className='flex justify-between bg-gray-200 p-2 rounded-lg'>
        <span className='text-sm font-light'>{props.title}</span>
        <span className='text-lg font-medium'>${props.price}</span>
      </p>
    </article>
  )
}

export default Card