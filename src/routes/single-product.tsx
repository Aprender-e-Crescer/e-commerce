import { Produto } from '../components/Home'
import { ImagemProduto } from '../components/Imagem-Produto'
import { Footer } from '../components/footer'
import { Rodape } from '../components/RodapeCompra'
import { Descricao } from '../components/Description'
import { ProductCard } from '@/components/ProductCard'
import { Header } from '@/components/Header'
import image1 from '../assets/Images.png'
import { Button } from '../components/ButtonHome'
import Imagem3 from '../assets/Images (3).png'
import Imagem1 from '../assets/Images (1).png'
import Imagem2 from '../assets/Images (2).png'
import { createFileRoute } from '@tanstack/react-router'
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
      estaComHover: false,
      titulo: 'Leviosa',
      valorAtual: 'Rp 2.500.000',
      img: Imagem3,
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
      img: Imagem1,
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
      img: Imagem2,
      estaComPorcentagem: false,
      porcentagem: '90',
      estaComNew: true,
      temValorPassado: false,
      valorPassado: '900',
    },
  ],
]

export const Route = createFileRoute('/single-product')({
  component: SingleProduct,
})

function SingleProduct() {
  return (
    <div>
      <div>
        <div>
        </div>
        <div className="flex justify-center">
          <div className="ml-12 mt-12">
            <ImagemProduto />
          </div>
          <div className="m-20 mt-12">
            <div className="flex flex-col gap-7">
              <Produto />
              <hr />
            </div>
            <div className="mt-14">
              <Rodape />
            </div>
          </div>
        </div>
        <hr />
        <Descricao />
        <h1 className='flex justify-center text-start font-bold text-3xl mb-8'>Related Products</h1>
        <div className=' flex justify-center' >
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
           <div>
      </div>
        </div>
      ))}
     
      </div>
    
      <div className='flex justify-center m-10'>
      <Button />
      </div>
      </div>
    </div>
  )
}
