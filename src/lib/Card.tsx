import { Star } from 'lucide-react'
import Asgaardsofa3 from '../assets/Card/Asgaardsofa3.svg'

export function Card(props) {
  return (
    <div className="flex flex-col gap-3">
      <div className="w-[280px] h-[177px] rounded-xl bg-[#F9F1E7] flex justify-center items-center ">
        <img src={Asgaardsofa3} />
      </div>

      <div className="flex-1 flex gap-3 flex-col">
        <p className="font-medium text-2xl">{props.text}</p>
        <p className="font-medium text-lg">{props.moneyText}</p>
        <div className=" flex gap-2 items-center flex-1">
          <p className="font-medium text-lg">4.7</p>
          <p className="flex border-r-2 gap-2 pr-2 border-[#9F9F9F]">
            <Star color="#FFC700" fill="#FFC700" />
            <Star color="#FFC700" fill="#FFC700" />
            <Star color="#FFC700" fill="#FFC700" />
            <Star color="#FFC700" fill="#FFC700" />
            <Star color="#FFC700" fill="#FFC700" />
          </p>
          <p className="text-sm font-normal text-[#9F9F9F]">
            {props.reviewText}
          </p>
        </div>
      </div>
    </div>
  )
}
