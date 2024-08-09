import { Buttons } from '../components/Buttons'
import image1 from '../assets/Images.png'
import { ProductCard } from '@/components/ProductCard'
import { Filter } from '@/components/Filter'

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
      valorPassado: '900',
    },
  ],
]

function Shop() {
  return (
    <>
      <Filter />
      <div className="flex flex-col items-center justify-center gap-y-5 pt-10">
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
    </>
  )
}

export default Shop
