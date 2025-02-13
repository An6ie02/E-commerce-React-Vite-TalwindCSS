import { XMarkIcon } from '@heroicons/react/24/solid'

function OrderCard({ props, handleDelete }) {
  return (
    <div className="flex justify-between items-center mb-3">
      <div className="flex items-center gap-2">
        <figure className='w-20 h-20'>
          <img className='w-full h-full object-cover rounded-lg' src={props.image} alt={props.title} />
        </figure>
        <p className="font-light text-sm">{props.title.substring(0,18)}...</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="font-medium text-lg">${props.price}</p>
        <XMarkIcon className='h-6 w-6 text-black cursor-pointer' onClick={() => handleDelete(props.id)}></XMarkIcon>
      </div>

    </div>
  )

}

export { OrderCard };