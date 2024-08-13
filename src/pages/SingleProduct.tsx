import { Produto } from '../components/Home'
import { ImagemProduto } from '../components/Imagem-Produto'
import { Footer } from '../components/footer'
import { Rodape } from '../components/RodapeCompra'
import { Descricao } from '../components/Description'
import { ProductCard } from '@/components/ProductCard'
import { Header } from '@/components/Header'
import image1 from '../assets/Images.png'
import { Button } from '../components/Button'
const linhasDeCards = [
  [
    {
      descrição: 'Teste', 
      estaComHover: false,
      titulo: 'Produto bom',
      valorAtual: '6000',
      img: image1,
      porcentagem: '90',
      valorPassado: '900',
    },
    {
      descrição: 'Teste', 
      estaComHover: true,
      titulo: 'Produto bom',
      valorAtual: '6000',
      img: image1,
      porcentagem: '90',
      valorPassado: '900',
    },
    {
      descrição: 'Teste', 
      estaComHover: false,
      titulo: 'Produto bom',
      valorAtual: '6000',
      img: image1,
      porcentagem: '90',
      valorPassado: '900',
    },
    {
      descrição: 'Teste', 
      estaComHover: false,
      titulo: 'Produto bom',
      valorAtual: '6000',
      img: image1,
      porcentagem: '90',
      valorPassado: '900',
    }
  ],
]

export function SingleProduct() {
  return (
    <div>
      <div>
        <div>
        <Header></Header>

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
          {linha.map(({ 
            descrição,
            estaComHover,
            img,
            porcentagem,
            titulo,
            valorAtual,
            valorPassado
          }) => (
            <ProductCard
              descrição={descrição}
              estaComHover={estaComHover}
              titulo={titulo}
              valorAtual={valorAtual}
              img={img}
              porcentagem={porcentagem}
              valorPassado={valorPassado}
            />
          ))}
           <div>
           <Button text='Show More' />
      </div>
        </div>
      ))}
     
      </div>
      

        <Footer />
      </div>
    </div>
  )
}
