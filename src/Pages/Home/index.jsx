import { useContext } from "react"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail"
import { ShoppingCartContext } from "../../Context"

function Home() {

  const context = useContext(ShoppingCartContext)

  const RenderView = () => {

    if (context.filteredItems?.length > 0) {
      return context.filteredItems?.map(item => (
        <Card key={item.id} props={item} />
      ))
    } else {
      return <p className="text-center">No products found</p>
    }
  }

  return (
    <Layout>
      <div className="flex w-80 items-center relative justify-center mb-4">
        <h1 className="font-medium text-xl">Products</h1>
      </div>
      <input
        type="text"
        placeholder="Search a product"
        className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
        onChangeCapture={(event) => context.setSearchByTitle(event.target.value)} />
      <div className="grid gap-6 grid-cols-4 w-full max-w-screen-lg">
        {
          RenderView()
        }
      </div>
      <ProductDetail />
    </Layout>
  )
}

export default Home
