import { Produto } from '../components/Home'
import { ImagemProduto } from '../components/Imagem-Produto'
import { Footer } from '../components/footer'
import { Rodape } from '../components/RodapeCompra'
import { Descricao } from '../components/Description'

export function SingleProduct() {
  return (
    <div>
      <div>
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

        <Footer />
      </div>
    </div>
  )
}
