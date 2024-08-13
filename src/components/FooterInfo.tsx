import { Archive, CircleCheck, Trophy, User } from 'lucide-react'

export function FooterInfo() {
  return (
    <div className="bg-[#FAF3EA] flex-1 h-[270px] flex items-center justify-center">
      <div className=" flex gap-28">
        <div className="w-[267px] h-[70px] flex gap-5">
          <Trophy className="h-[60px] w-[60px]"></Trophy>
          <div>
            <p className="size-6 w-40 font-bold">High Quality</p>
            <p className="text-[#898989]">crafted from top materials</p>
          </div>
        </div>
        <div className="flex gap-5">
          <CircleCheck className="h-[60px] w-[60px]" />
          <div>
            <p className="font-bold w-40">Warranty Protection</p>
            <p>Over 2 years</p>
          </div>
        </div>
        <div className="flex gap-5">
          <Archive className="h-[60px] w-[60px]" />
          <div>
            <p className="font-bold">Free Shipping</p>
            <p className="w-40">Order over 150 $</p>
          </div>
        </div>
        <div className="flex gap-5">
          <User className="h-[60px] w-[60px]" />
          <div>
            <p className="font-bold">24 / 7 Support</p>
            <p>Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterInfo
