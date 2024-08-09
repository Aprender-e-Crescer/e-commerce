import { Star } from 'lucide-react'

export function Produto() {
  return (
    <div className=" flex flex-col max-w-xl m-4 gap-3">
      <div>
        <p className="text-4xl font-semibold mb-3">Asgaard sofa</p>
        <p className="text-2xl font-500 text-gray-400">Rs. 250,000.00</p>
      </div>
      <div className="flex">
        <Star className="text-yellow-400" />
        <Star className="text-yellow-400" />
        <Star className="text-yellow-400" />
        <Star className="text-yellow-400" />
        <p className="ml-2 text-gray-600">| 5 Customer Review</p>
      </div>
      <p>
        Setting the bar as one of the loudest speakers in its class, the <br />{' '}
        Kilburn is a compact, stout-hearted hero with a well-balanced
        <br /> audio which boasts a clear midrange and extended highs for a
        <br />
        sound.
      </p>
      <p className="ml-2 text-gray-600">Size</p>
      <div className="flex space-x-2">
        <button className="bg-gray-200 text-gray-800 hover:bg-yellow-600  hover:text-gray-50 px-4 py-2 rounded">
          L
        </button>
        <button className="bg-gray-200 text-gray-800  hover:bg-yellow-600  hover:text-gray-50 px-4 py-2 rounded">
          XL
        </button>
        <button className="bg-gray-200 text-gray-800  hover:bg-yellow-600  hover:text-gray-50 px-4 py-2 rounded">
          XS
        </button>
      </div>
      <p className="ml-2 text-gray-600">Color</p>
      <div className="flex space-x-2 mb-3">
        <button title='cor do produto 1' className="bg-blue-400 h-8 w-8 rounded-full"> </button>
        <button title='cor do produto 2' className="bg-black h-8 w-8 rounded-full"> </button>
        <button title='cor do produto 3' className="bg-yellow-600 h-8 w-8 rounded-full"></button>
      </div>
      <div className="flex space-x-2">
        <button className="max-w-28 rounded-lg p-3 bg-white border border-black ">
          - 1 +
        </button>
        <button className="max-w-32 rounded-lg p-3 bg-white border border-black ">
          Add To Cart
        </button>
        <button className="max-w-32 rounded-lg p-3 bg-white border border-black">
          + Compare
        </button>
      </div>
    </div>
  )
}
