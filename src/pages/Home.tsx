import { BannerInicio } from '../components/BannerInicioHome'
import { Filtro } from '../components/FiltroHome'
import { Carrossel } from '../components/CarrosselHome'
import { Button } from '../components/ButtonHome'
import { ImagemBaixo } from '../components/ImagemBaixoHome'
import { ProductCard } from '@/components/ProductCard'
import image1 from '../assets/Images.png'
/*import image2 from '../assets/Images (1).png'
import image3 from '../assets/Images (2).png'
import image4 from '../assets/Images (3).png'
import image5 from '../assets/home/cardsdown1.png'
import image6 from '../assets/home/cardsdown2.png'
import image7 from '../assets/home/cardsdown3.png'
import image8 from '../assets/home/cardsdown4.png' */

const linhasDeCards = [
  [
    {
      descrição: 'Teste',
      estaComHover: false,
      titulo: 'Produto bom',
      valorAtual: '6000',
      img: image1,
      estaComPorcentagem: true,
      porcentagem: '90',
      estaComNew: false,
      temValorPassado: false,
      valorPassado: '900',
    },
    {
      descrição: 'Teste',
      estaComHover: true,
      titulo: 'Produto bom',
      valorAtual: '6000',
      img: image1,
      estaComPorcentagem: true,
      porcentagem: '90',
      estaComNew: false,
      temValorPassado: false,
      valorPassado: '900',
    },
    {
      descrição: 'Teste',
      estaComHover: false,
      titulo: 'Produto bom',
      valorAtual: '6000',
      img: image1,
      estaComPorcentagem: false,
      porcentagem: '90',
      estaComNew: true,
      temValorPassado: true,
      valorPassado: '900',
    },
    {
      descrição: 'Teste',
      estaComHover: false,
      titulo: 'Produto bom',
      valorAtual: '6000',
      img: image1,
      estaComPorcentagem: false,
      porcentagem: '90',
      estaComNew: true,
      temValorPassado: true,
      valorPassado: '900',
    },
  ],
  [
    {
      descrição: 'Teste',
      estaComHover: false,
      titulo: 'Produto bom',
      valorAtual: '6000',
      img: image1,
      estaComPorcentagem: true,
      porcentagem: '90',
      estaComNew: false,
      temValorPassado: true,
      valorPassado: '900',
    },
    {
      descrição: 'Teste',
      estaComHover: true,
      titulo: 'Produto bom',
      valorAtual: '6000',
      img: image1,
      estaComPorcentagem: true,
      porcentagem: '90',
      estaComNew: false,
      temValorPassado: true,
      valorPassado: '900',
    },
    {
      descrição: 'Teste',
      estaComHover: false,
      titulo: 'Produto bom',
      valorAtual: '6000',
      img: image1,
      estaComPorcentagem: false,
      porcentagem: '90',
      estaComNew: true,
      temValorPassado: true,
      valorPassado: '900',
    },
    {
      descrição: 'Teste',
      estaComHover: false,
      titulo: 'Produto bom',
      valorAtual: '6000',
      img: image1,
      estaComPorcentagem: false,
      porcentagem: '90',
      estaComNew: true,
      temValorPassado: true,
      valorPassado: '900',
    },
  ],
]

export default function Home() {
  return (
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
    </div>
  )
}
