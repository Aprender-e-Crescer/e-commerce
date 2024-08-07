import img from '../assets/Images.png'
import img3 from '../assets/Images (1).png'
import img4 from '../assets/Images (2).png'
import img2 from '../assets/Images (3).png'
import { ArrowLeftRight, Heart, Share2 } from 'lucide-react'

export function Card() {
  return (
    <div className="brightness-50 bg-[#F4F5F7] h-[150px]">
    <div className="  flex flex-col gap-y-1">
      <div className="flex flex-col ml-4 mt-4 gap-y-1">
        <h1 className=" text-[#3A3A3A] font-Poppins-ExtraBold font-bold text-2xl opacity-70 ">
          Leviosa
        </h1>
        <p
          className="
    flex-1 w-[138px] h-[24px] text-[#898989] font-Poppins-Medium text-[15px]"
        >
          Stylish cafe chair
        </p>
      </div>
      <div className="flex ml-4">
        <p className="w-[130px] h-[29px] text-[#3A3A3A] font-Poppins-Medium font-bold opacity-70">
          Rp 2.500.000
        </p>
      </div>
    </div>
  </div>
  )
}
