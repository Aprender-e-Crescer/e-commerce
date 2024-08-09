import image1 from '../assets/Images.png'
import image2 from '../assets/Images (1).png'
import image3 from '../assets/Images (2).png'
import image4 from '../assets/Images (3).png'
import { ProductCard } from '@/components/ProductCard'
import { Buttons } from '@/components/Buttons'
import { Filter } from '@/components/Filter'
import Menu from '@/componentes/Menu'
import Banner from '@/componentes/banner'
import { Footer } from '@/components/footer'
import FooterInfo from '@/components/FooterInfo'

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
      img: image4,
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
      img: image2,
      estaComPorcentagem: true,
      porcentagem: '-50%',
      estaComNew: false,
      temValorPassado: true,
      valorPassado: 'Rp 14.000.000',
    },
    {
      descrição: 'Outdoor bar table and stool',
      estaComHover: false,
      titulo: 'Respira',
      valorAtual: 'Rp 500.000',
      img: image3,
      estaComPorcentagem: false,
      porcentagem: '90',
      estaComNew: true,
      temValorPassado: false,
      valorPassado: '900',
    },
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
      estaComHover: false,
      titulo: 'Leviosa',
      valorAtual: 'Rp 2.500.000',
      img: image4,
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
      img: image2,
      estaComPorcentagem: true,
      porcentagem: '-50%',
      estaComNew: false,
      temValorPassado: true,
      valorPassado: 'Rp 14.000.000',
    },
    {
      descrição: 'Outdoor bar table and stool',
      estaComHover: false,
      titulo: 'Respira',
      valorAtual: 'Rp 500.000',
      img: image3,
      estaComPorcentagem: false,
      porcentagem: '90',
      estaComNew: true,
      temValorPassado: false,
      valorPassado: '900',
    },
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
      estaComHover: false,
      titulo: 'Leviosa',
      valorAtual: 'Rp 2.500.000',
      img: image4,
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
      img: image2,
      estaComPorcentagem: true,
      porcentagem: '-50%',
      estaComNew: false,
      temValorPassado: true,
      valorPassado: 'Rp 14.000.000',
    },
    {
      descrição: 'Outdoor bar table and stool',
      estaComHover: false,
      titulo: 'Respira',
      valorAtual: 'Rp 500.000',
      img: image3,
      estaComPorcentagem: false,
      porcentagem: '90',
      estaComNew: true,
      temValorPassado: false,
      valorPassado: '900',
    },
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
      estaComHover: false,
      titulo: 'Leviosa',
      valorAtual: 'Rp 2.500.000',
      img: image4,
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
      img: image2,
      estaComPorcentagem: true,
      porcentagem: '-50%',
      estaComNew: false,
      temValorPassado: true,
      valorPassado: 'Rp 14.000.000',
    },
    {
      descrição: 'Outdoor bar table and stool',
      estaComHover: false,
      titulo: 'Respira',
      valorAtual: 'Rp 500.000',
      img: image3,
      estaComPorcentagem: false,
      porcentagem: '90',
      estaComNew: true,
      temValorPassado: false,
      valorPassado: '900',
    },
  ],
]

function Shop() {
  return (
    <>
      <Menu />
      <Banner titulo="Shop" nomeTelaInicial="Home" />
      <Filter />
      <div className="flex flex-col items-center justify-center gap-y-16">
        <div className="flex flex-col items-center justify-center gap-y-5 pt-10">
          {linhasDeCards.map((linha) => (
            <div className="flex gap-x-12 items-center justify-center flex-wrap gap-10">
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
        <div className="pt-10">
          <Buttons />
        </div>
        <div className="flex-1 w-full">
          <div>
            <FooterInfo />
          </div>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Shop
