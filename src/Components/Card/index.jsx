import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'

function Card({ props }) {
  const context = useContext(ShoppingCartContext)

  return (
    <article className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
      <figure className='relative mb-1 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{props.category.name}</span>
        <img className='w-full h-full object-cover rounded-lg' src={props.images[0]} alt={props.title} />
        <button className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
        onClick={() => context.setCount(context.count + 1)}> + </button>
      </figure>
      <p className='flex justify-between bg-gray-200 p-2 rounded-lg'>
        <span className='text-sm font-light'>{props.title}</span>
        <span className='text-lg font-medium'>${props.price}</span>
      </p>
    </article>
  )
}

export default Card