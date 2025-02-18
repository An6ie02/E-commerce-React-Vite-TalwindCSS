import { ChevronRightIcon } from "@heroicons/react/24/solid";

function OrdersCard({ props }) {

  return (
    <div className="flex justify-between items-center border border-black w-80 p-4 rounded-lg mb-4">
      <div className="flex justify-between w-full">
        <p className="flex flex-col">
          <span className="font-light">01.02.23</span>
          <span className="font-light">{props.totalProducts} articles</span>
        </p>
        <p className="flex items-center gap-2">
          <span className="text-xl font-medium">${props.totalPrice}</span>
          <ChevronRightIcon className="h-6 w-6 text-black"></ChevronRightIcon>
        </p>
      </div>
    </div>
  )

}

export { OrdersCard };