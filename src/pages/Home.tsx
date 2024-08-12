import { BannerInicio } from '../components/BannerInicioHome'
import { Filtro } from '../components/FiltroHome'
import { Carrossel } from '../components/CarrosselHome'
import { Button } from '../components/ButtonHome'
import { ImagemBaixo } from '../components/ImagemBaixoHome'
import { ProductCard } from '@/components/ProductCard'
import image1 from '../assets/Images.png'
import image2 from '../assets/Images (3).png'
import image3 from '../assets/Images (1).png'
import image4 from '../assets/Images (2).png'
import image5 from '../assets/home/cardsdown1.png'
import image6 from '../assets/home/cardsdown2.png'
import image7 from '../assets/home/cardsdown3.png'
import image8 from '../assets/home/cardsdown4.png'
import { Footer } from '@/components/footer'
import Menu from '@/componentes/Menu'

const linhasDeCards = [
  [
    {
      descrição: 'Stylish cafe chair',
      estaComHover: false,
      titulo: 'Syltherine',
      valorAtual: 'Rp 2.500.000',
      img: image1,
      estaComPorcentagem: true,
      porcentagem: '-30%',
      estaComNew: false,
      temValorPassado: true,
      valorPassado: 'Rp 3.500.000',
    },
    {
      descrição: 'Stylish cafe chair',
      estaComHover: true,
      titulo: 'Leviosa',
      valorAtual: 'Rp 2.500.000',
      img: image2,
      estaComPorcentagem: false,
      porcentagem: '90',
      estaComNew: false,
      temValorPassado: false,
      valorPassado: '900',
    },
    {
      descrição: 'Luxury big sofa',
      estaComHover: false,
      titulo: 'Lolito',
      valorAtual: 'Rp 7.000.000',
      img: image3,
      estaComPorcentagem: true,
      porcentagem: '-50%',
      estaComNew: false,
      temValorPassado: true,
      valorPassado: '14.000.000',
    },
    {
      descrição: 'Outdoor bar table and stool',
      estaComHover: false,
      titulo: 'Respira',
      valorAtual: 'Rp 500.000',
      img: image4,
      estaComPorcentagem: false,
      porcentagem: '90',
      estaComNew: true,
      temValorPassado: false,
      valorPassado: '900',
    },
  ],
  [
    {
      descrição: 'Night lamp',
      estaComHover: false,
      titulo: 'Gripo',
      valorAtual: 'Rp 1.500.000',
      img: image5,
      estaComPorcentagem: false,
      porcentagem: '90',
      estaComNew: false,
      temValorPassado: false,
      valorPassado: '900',
    },
    {
      descrição: 'Small mug',
      estaComHover: false,
      titulo: 'Muggo',
      valorAtual: 'Rp 150.000',
      img: image6,
      estaComPorcentagem: false,
      porcentagem: '90',
      estaComNew: true,
      temValorPassado: false,
      valorPassado: '900',
    },
    {
      descrição: 'Cute bed set',
      estaComHover: false,
      titulo: 'Pingky',
      valorAtual: 'Rp 7.000.000',
      img: image7,
      estaComPorcentagem: true,
      porcentagem: '-50%',
      estaComNew: false,
      temValorPassado: true,
      valorPassado: 'Rp 14.000.000',
    },
    {
      descrição: 'Minimalist flower pot',
      estaComHover: false,
      titulo: 'Potty',
      valorAtual: 'Rp 500.000',
      img: image8,
      estaComPorcentagem: false,
      porcentagem: '90',
      estaComNew: true,
      temValorPassado: false,
      valorPassado: '900',
    },
  ],
]

export default function Home() {
  return (
    <>
      <Menu />
      <div className="flex flex-col items-center justify-center gap-y-16">
        <BannerInicio />
        <Filtro />
        <div className="flex flex-col items-center justify-center gap-y-5 pt-10">
          <p className="font-bold text-[50px] text-[#3A3A3A]">Our Products</p>
          {linhasDeCards.map((linha) => (
            <div className="flex gap-x-12">
              {linha.map(
                ({
                  descrição,
                  estaComHover,
                  img,
                  estaComPorcentagem,
                  porcentagem,
                  estaComNew,
                  titulo,
                  valorAtual,
                  temValorPassado,
                  valorPassado,
                }) => (
                  <ProductCard
                    descrição={descrição}
                    estaComHover={estaComHover}
                    titulo={titulo}
                    valorAtual={valorAtual}
                    img={img}
                    estaComPorcentagem={estaComPorcentagem}
                    porcentagem={porcentagem}
                    estaComNew={estaComNew}
                    temValorPassado={temValorPassado}
                    valorPassado={valorPassado}
                  />
                )
              )}
            </div>
          ))}
        </div>
        <Button />
        <Carrossel />
        <ImagemBaixo />
        <Footer />
      </div>
    </>
  )
}
