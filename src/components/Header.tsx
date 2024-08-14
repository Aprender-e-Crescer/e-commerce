import { ArrowRight, Heart, Search, User } from "lucide-react"
import logo from "../assets/logo.png"
import rectangle from "../assets/rectangle.jpg"

export function Header() {
  return (
    <div className="w-full bg-[#FFFFF]" id="alvo">

      <div className="h-[100px] flex items-center justify-between px-8">
        <div className="flex items-center gap-4">
          <img className="w-[50px] h-[32px]" src={logo} alt="Logo" />
          <p className="text-3xl font-bold">Furniro</p>
        </div>

        <div className="flex items-center gap-10 text-base font-medium leading-6 font-Poppins">
          <p>home</p>
          <p>shop</p>
          <p>about</p>
          <p>contact</p>
        </div>

        <div className="flex items-center gap-10">
          <User />
          <Search />
          <Heart />
        </div>

      </div>

    </div>
  )
}
