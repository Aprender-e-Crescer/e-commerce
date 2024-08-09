import { ArrowLeftRight, Heart, Share2 } from 'lucide-react'
import { Card } from './Card'

export function Cards({
  estaComHover,
  img1,
  img2,
  img3,
  img4,
  titulo,
  descrição,
  valorAtual,
  valorPassado,
  porcentagem,
}: {
  estaComHover: boolean
  img1: string
  img2: string
  img3: string
  img4: string
  titulo: string
  descrição: string
  valorAtual: string
  valorPassado: string
  porcentagem: string
}) {
  if (estaComHover) {
    return (
      <div className="flex gap-x-12 jus">
        <div className="bg-[#F4F5F7] h-[446px] w-[285px]">
          <div>
            <p className=" flex items-center p-5 justify-center relative top-12 left-56 -mt-10 text-[#ffffff] bg-[#E97171] rounded-full w-7 h-7 text-[12px] ">
              {porcentagem}
            </p>

            <img className="h-[301px] w-[285px]" src={img1} alt="" />
          </div>

          <div className="  flex flex-col gap-y-1">
            <div className="flex flex-col ml-4 mt-4 gap-y-1">
              <h1 className=" text-[#3A3A3A] font-Poppins-ExtraBold font-bold text-2xl">
                {titulo}
              </h1>
              <p
                className="
          flex-1 w-[138px] h-[24px] text-[#898989] font-Poppins-Medium text-[15px]"
              >
                {descrição}
              </p>
            </div>
            <div className="flex ml-4">
              <p className="w-[130px] h-[29px] text-[#3A3A3A] font-Poppins-Medium font-bold">
                {valorAtual}
              </p>
              <p className="w-[102px] h-[24px] font-Poppins-Medium line-through text-[#B0B0B0]">
                {valorPassado}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#F4F5F7] h-[446px] w-[285px]">
          <div>
            <div className="flex font-bold relative top-52 left-16 -mt-10 z-10 bg-white w-44 text-[#B88E2F] p-2 justify-center text-center">
              Add to cart
            </div>
            <div className=" flex items-center justify-center text-center relative top-64 text-white -mt-7 z-10 gap-x-6 pr-1 pl-1">
              <p className="flex gap-x-[2px] font-Poppins font-bold text-base">
                <Share2 className="w-4 h-4 mt-1" /> Share
              </p>
              <p className="flex gap-x-[2px] font-Poppins font-bold text-base">
                <ArrowLeftRight className="w-4 h-4 mt-1" /> Compare
              </p>
              <p className="flex gap-x-[2px] font-Poppins font-bold text-base">
                {' '}
                <Heart className="w-4 h-4 mt-1" /> Like
              </p>
            </div>

            <img
              className="h-[297px] w-[285px] brightness-50 mt-1 "
              src={img2}
              alt=""
            />
          </div>
          <Card titulo="opa" descrição="peniliolo" valorAtual="Rp.120.0000" />
        </div>
        <div className="bg-[#F4F5F7] h-[446px] w-[285px]">
          <div>
            <p className=" flex items-center justify-center relative p-5 top-12 left-56 -mt-10 text-[#ffffff] bg-[#E97171] rounded-full w-7 h-7 text-[12px] ">
              {porcentagem}
            </p>

            <img className="h-[301px] w-[285px]" src={img3} alt="" />
          </div>

          <div className="  flex flex-col gap-y-1">
            <div className="flex flex-col ml-4 mt-4 gap-y-1">
              <h1 className=" text-[#3A3A3A] font-Poppins-ExtraBold font-bold text-2xl">
                {titulo}
              </h1>
              <p
                className="
          flex-1 w-[138px] h-[24px] text-[#898989] font-Poppins-Medium text-[15px]"
              >
                {descrição}
              </p>
            </div>
            <div className="flex ml-4">
              <p className="w-[130px] h-[29px] text-[#3A3A3A] font-Poppins-Medium font-bold">
                {valorAtual}
              </p>
              <p className="w-[105px] h-[24px] font-Poppins-Medium line-through text-[#B0B0B0]">
                {valorPassado}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#F4F5F7] h-[446px] w-[285px]">
          <div>
            <p className="flex relative top-12 left-56 p-5 -mt-10 text-[#ffffff] bg-[#2EC1AC] rounded-full w-7 h-7 text-[10px] items-center justify-center ">
              {porcentagem}
            </p>

            <img className="h-[301px] w-[285px]" src={img4} alt="" />
          </div>

          <div className="  flex flex-col gap-y-1">
            <div className="flex flex-col ml-4 mt-4 gap-y-1">
              <h1 className=" text-[#3A3A3A] font-Poppins-ExtraBold font-bold text-2xl">
                {titulo}
              </h1>
              <p
                className="
          flex-1 w-[200px] h-[24px] text-[#898989] font-Poppins-Medium text-[15px]"
              >
                {descrição}
              </p>
            </div>
            <div className="flex ml-4">
              <p className="w-[130px] h-[29px] text-[#3A3A3A] font-Poppins-Medium font-bold">
                {valorAtual}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex gap-x-12 jus">
      <div className="bg-[#F4F5F7] h-[446px] w-[285px]">
        <div>
          <p className=" flex items-center justify-center relative top-12 p-5 left-56 -mt-10 text-[#ffffff] bg-[#E97171] rounded-full w-7 h-7 text-[12px] ">
            {porcentagem}
          </p>

          <img className="h-[301px] w-[285px]" src={img1} alt="" />
        </div>

        <div className="  flex flex-col gap-y-1">
          <div className="flex flex-col ml-4 mt-4 gap-y-1">
            <h1 className=" text-[#3A3A3A] font-Poppins-ExtraBold font-bold text-2xl">
              {titulo}
            </h1>
            <p
              className="
          flex-1 w-[138px] h-[24px] text-[#898989] font-Poppins-Medium text-[15px]"
            >
              {descrição}
            </p>
          </div>
          <div className="flex ml-4">
            <p className="w-[130px] h-[29px] text-[#3A3A3A] font-Poppins-Medium font-bold">
              {valorAtual}
            </p>
            <p className="w-[102px] h-[24px] font-Poppins-Medium line-through text-[#B0B0B0]">
              {valorPassado}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#F4F5F7] h-[446px] w-[285px]">
        <div>
          <img className="h-[297px] w-[285px] " src={img2} alt="" />
        </div>
        <div className="bg-[#F4F5F7] h-[150px]">
          <div className="  flex flex-col gap-y-1">
            <div className="flex flex-col ml-4 mt-4 gap-y-1">
              <h1 className=" text-[#3A3A3A] font-Poppins-ExtraBold font-bold text-2xl  ">
                {titulo}
              </h1>
              <p
                className="
          flex-1 w-[138px] h-[24px] text-[#898989] font-Poppins-Medium text-[15px]"
              >
                {descrição}
              </p>
            </div>
            <div className="flex ml-4">
              <p className="w-[130px] h-[29px] text-[#3A3A3A] font-Poppins-Medium font-bold ">
                {valorAtual}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F4F5F7] h-[446px] w-[285px]">
        <div>
          <p className=" flex items-center justify-center relative top-12 p-5 left-56 -mt-10 text-[#ffffff] bg-[#E97171] rounded-full w-7 h-7 text-[12px] ">
            {porcentagem}
          </p>

          <img className="h-[301px] w-[285px]" src={img3} alt="" />
        </div>

        <div className="  flex flex-col gap-y-1">
          <div className="flex flex-col ml-4 mt-4 gap-y-1">
            <h1 className=" text-[#3A3A3A] font-Poppins-ExtraBold font-bold text-2xl">
              {titulo}
            </h1>
            <p
              className="
          flex-1 w-[138px] h-[24px] text-[#898989] font-Poppins-Medium text-[15px]"
            >
              {descrição}
            </p>
          </div>
          <div className="flex ml-4">
            <p className="w-[130px] h-[29px] text-[#3A3A3A] font-Poppins-Medium font-bold">
              {valorAtual}
            </p>
            <p className="w-[105px] h-[24px] font-Poppins-Medium line-through text-[#B0B0B0]">
              {valorPassado}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#F4F5F7] h-[446px] w-[285px]">
        <div>
          <p className="flex relative top-12 left-56 -mt-10 p-5 text-[#ffffff] bg-[#2EC1AC] rounded-full w-7 h-7 text-[10px] items-center justify-center ">
            {porcentagem}
          </p>

          <img className="h-[301px] w-[285px]" src={img4} alt="" />
        </div>

        <div className="  flex flex-col gap-y-1">
          <div className="flex flex-col ml-4 mt-4 gap-y-1">
            <h1 className=" text-[#3A3A3A] font-Poppins-ExtraBold font-bold text-2xl">
              {titulo}
            </h1>
            <p
              className="
          flex-1 w-[200px] h-[24px] text-[#898989] font-Poppins-Medium text-[15px]"
            >
              {descrição}
            </p>
          </div>
          <div className="flex ml-4">
            <p className="w-[130px] h-[29px] text-[#3A3A3A] font-Poppins-Medium font-bold">
              {valorAtual}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
