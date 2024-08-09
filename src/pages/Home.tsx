import { BannerInicio } from '../components/BannerInicioHome'
import { Filtro } from '../components/FiltroHome'
import { Carrossel } from '../components/CarrosselHome'
import { Button } from '../components/ButtonHome'
import { ImagemBaixo } from '../components/ImagemBaixoHome'
import { Cards } from '@/components/CardsHome'
import { CardsDown } from '@/components/CardsDownHome'


export default function Home() {
  return (
        <div className="flex flex-col items-center justify-center gap-y-16">
          <BannerInicio />
          <Filtro />
          <div className='flex flex-col items-center justify-center gap-y-8'>
            <p className='font-bold text-[50px] text-[#3A3A3A]'>Our Products</p>
            <Cards />
            <CardsDown />
          </div>
            <Button />
            <Carrossel />
            <ImagemBaixo />
        </div>
  )
}
