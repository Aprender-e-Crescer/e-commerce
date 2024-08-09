import seta from '../assets/home/seta.png'
import seta2 from '../assets/home/seta2.png'
import bola from '../assets/home/bola1.png'
import bola2 from '../assets/home/bola2.png'
import img from '../assets/home/carrossel3.png'

export function Carrossel() {
  return (
    <div className="bg-[#FCF8F3] px-[400px] py-14 flex items-center justify-center gap-x-10 m-0 overflowx-hidden">
      <div className="flex flex-col gap-4">
        <p className="text-4xl font-bold text-[#3A3A3A] ">
          50+ Beautiful rooms
          <br />
          inspiration
        </p>
        <p className="text-[#616161]">
          Our designer already made a lot of beautiful
          <br />
          prototipe of rooms that inspire you
        </p>
        <button
          className="px-6 w-40 py-2 border text-white font-bold bg-[#B88E2F] transition-colors duration-300 hover:bg-yellow-500 hover:text-white"
          type="button"
        >
          Explore More
        </button>
      </div>
      <div className="relative bg-[url('./assets/home/carrossel1.png')] w-[404px] h-[582px] flex">
        <div className="absolute bottom-5 right-[120px] bg-[#B88E2F]">
          <button className="w-[48px] h-[48px] pl-3">
            <img src={seta} alt="" />
          </button>
        </div>
        <div className="bg-white/75 w-[217px] h-[130px] absolute left-5 bottom-5 flex flex-col justify-center items-center">
          <div>
            <p className="text-[#616161] font-medium">01 ---- Bed Room</p>
            <p className="text-[28px] font-bold text-[#3A3A3A]">Inner Peace</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="bg-[url('./assets/home/carrossel2.png')] w-[372px] h-[486px] mb-20 relative">
          <button className="bg-white rounded-full p-3 shadow-lg absolute right-[-25px] top-[250px] ">
            <img src={seta2} alt="" />
          </button>
        </div>
        <div className="flex gap-3">
          <img src={bola2} alt="" />
          <img src={bola} alt="" />
          <img src={bola} alt="" />
          <img src={bola} alt="" />
        </div>
      </div>
      <div className="overflow-hidden mb-[94px] absolute right-[-200px] hidden [1800px]:flex">
        <img src={img} alt="" />
      </div>
    </div>
  )
}
