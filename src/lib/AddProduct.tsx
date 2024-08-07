import { ArrowDown } from 'lucide-react'

export function AddProduct() {
  return (
    <div className="flex flex-col gap-3">
      <p className="leading-8 font-semibold text-2xl">Add A Product</p>
      <div className="flex items-center w-48  border-[2px] border-[#B88E2F] rounded-md hover:bg-[#B88E2F] ease-in duration-300">
        <p className="flex items-center gap-5 leading-4 font-semibold text-smp-2 w-48 p-2 hover:text-white">
          Choose a Product
          <ArrowDown />
        </p>
      </div>
    </div>
  )
}
