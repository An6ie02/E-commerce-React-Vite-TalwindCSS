import { useContext } from "react"
import { Link } from "react-router-dom"
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import Layout from "../../Components/Layout"
import { OrderCard } from "../../Components/OrderCard"
import { ShoppingCartContext } from "../../Context"

function MyOrder() {
  const context = useContext(ShoppingCartContext)
  let currentPath = window.location.pathname.split('/').slice(-1)[0]
  if (currentPath === 'last') currentPath = context.order?.length - 1

  return (
    <Layout>
      <div className="flex w-80 items-center relative justify-center mb-5">
        <Link to='/my-orders' className="absolute left-0">
          <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer'></ChevronLeftIcon>
        </Link> 
        <h1>My Order</h1>
      </div>
      <div className='flex flex-col w-80'>
        {context.order?.[currentPath]?.products.map(product => (
          <OrderCard
            key={product.id}
            props={product}
          />
        ))}
      </div>
    </Layout>
  )
}

export default MyOrder
