import { useContext } from "react"
import Layout from "../../Components/Layout"
import { OrderCard } from "../../Components/OrderCard"
import { ShoppingCartContext } from "../../Context"

function MyOrder() {
  const context = useContext(ShoppingCartContext)

  return (
    <Layout>
      React MyOrder
      <div className='flex flex-col w-80'>
        {context.order?.slice(-1)[0].products.map(product => (
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
