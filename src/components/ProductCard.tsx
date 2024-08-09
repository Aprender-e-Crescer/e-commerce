import { ArrowLeftRight, Heart, Share2 } from 'lucide-react'

export function ProductCard({
  titulo,
  descrição,
  valorAtual,
  estaComPorcentagem,
  porcentagem,
  estaComNew,
  temValorPassado,
  valorPassado,
  img,
  estaComHover,
}: {
  estaComHover: boolean
  titulo: string
  descrição: string
  valorAtual: string
  estaComPorcentagem: boolean
  porcentagem: string
  estaComNew: boolean
  temValorPassado: boolean
  valorPassado: string
  img: string
}) {
  return (
    <div className="bg-[#F4F5F7] h-[446px] w-[285px] relative">
      {estaComHover ? (
        <div className="relative">
          <div className="flex font-bold absolute top-36 left-14 -mt-15 z-10 bg-white w-44 text-[#B88E2F] p-2 justify-center text-center">
            Add to cart
          </div>
          <div className="flex items-center justify-center text-center absolute top-64 text-white -mt-7 z-10 gap-x-6 pr-1 pl-5">
            <p className="flex gap-x-[2px] font-Poppins font-bold text-base">
              <Share2 className="w-4 h-4 mt-1" /> Share
            </p>
            <p className="flex gap-x-[2px] font-Poppins font-bold text-base">
              <ArrowLeftRight className="w-4 h-4 mt-1" />
              Compare
            </p>
            <p className="flex gap-x-[2px] font-Poppins font-bold text-base">
              <Heart className="w-4 h-4 mt-1" /> Like
            </p>
          </div>
          <img
            className="h-[297px] w-[285px] brightness-50 "
            src={img}
            alt="Imagem do produto"
          />
        </div>
      ) : (
        <div>
          <img
            className="h-[301px] w-[285px] object-cover"
            src={img}
            alt="Imagem do produto"
          />
        </div>
      )}

      <div className="flex flex-col gap-y-1">
        <div className="flex flex-col ml-4 mt-4 gap-y-1">
          <h1 className="text-[#3A3A3A] font-Poppins-ExtraBold font-bold text-2xl">
            {titulo}
          </h1>
          <p className="flex-1 w-[150px] h-[24px] text-[#898989] font-Poppins-Medium text-[15px]">
            {descrição}
          </p>
        </div>
        <div className="flex ml-4 gap-x-12">
          <p className="text-[#3A3A3A] font-Poppins-Medium font-bold">
            {valorAtual}
          </p>
          {estaComPorcentagem && (
            <p className="absolute top-4 right-4 text-[#ffffff] bg-[#E97171] rounded-full w-10 h-10 text-[12px] flex items-center justify-center">
              {porcentagem}
            </p>
          )}
          {estaComNew && (
            <p className="absolute top-4 right-4 text-[#ffffff] bg-[#2EC1AC] rounded-full w-10 h-10 text-[12px] flex items-center justify-center">
              New
            </p>
          )}
          {temValorPassado && (
            <p className="w-[102px] h-[24px] font-Poppins-Medium line-through text-[#B0B0B0]">
              {valorPassado}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
