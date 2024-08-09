import { Buttons } from '../components/Buttons'
import image1 from '../assets/Images.png'
import { Card } from '@/components/Card'

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

function Shop() {
  return (
    <>
      <Filter />
      <div className="flex flex-col items-center justify-center gap-y-5 pt-10">
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
            <Card
              descrição={descrição}
              estaComHover={estaComHover}
              titulo={titulo}
              valorAtual={valorAtual}
              img={img}
              porcentagem={porcentagem}
              valorPassado={valorPassado}
            />
          ))}
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
