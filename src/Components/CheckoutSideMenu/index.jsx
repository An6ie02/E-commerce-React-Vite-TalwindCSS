import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import { OrderCard } from '../OrderCard'
import { totalPrice } from '../../utils'
import './styles.css'

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext)

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(product => product.id != id)
    context.setCartProducts(filteredProducts)
    context.setCount(context.count - 1)
  }

  return (
    <aside className={`${context.isCheckoutMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex flex-col fixed right-0 border border-black rounded-lg bg-white`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <div className='cursor-pointer' onClick={() => context.closeCheckoutMenu()}>
          <XMarkIcon className='h-6 w-6 text-black'></XMarkIcon>
        </div>
      </div>
      <div className='overflow-y-auto px-3'>
        {context.cartProducts.map(product => (
          <OrderCard
            key={product.id}
            props={product} 
            handleDelete={handleDelete}/>
        ))}
      </div>
      <div className='px-6 py-10'>
        <p className='flex justify-between items-center'>
          <span className='font-light'>Total: </span>
          <span className='font-medium text-xl'>${totalPrice(context.cartProducts)}</span>
        </p>
      </div>
    </aside>
  )
}

export default CheckoutSideMenu