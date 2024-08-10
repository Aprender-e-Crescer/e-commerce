import CartMenu from '@/components/component/cartMenu'
import { AddProduct } from '../components/AddProduct'
import { Body } from '../components/Body'
import { Card } from '../components/Card'
import { Text } from '../components/Text'
import { Footer } from '@/components/footer'
import Banner from '@/componentes/banner'
import Menu from '@/componentes/Menu'

function ProductComparison() {
  return (
    <>
    <Menu/>
    <Banner nomeTelaInicial='Home' titulo='Product Comparison' />

      <div className="flex gap-36 ml-24 mt-12">
        <Text />
        <div className="flex gap-16 mb-28">
          <Card
            texto="Asgaard Sofa"
            moneyText="Rs. 250,000.00"
            reviewText="204 Review"
          />
          <Card
            texto="Outdoor Sofa Set"
            moneyText="Rs. 224,000.00"
            reviewText="145 Review"
          />
        </div>
        <div className="mt-10w">
          <AddProduct text=" Choose a Product" />
        </div>
      </div>
      <div className="flex ml-24">
        <Body />
      </div>
      <Footer/>
    </>
  )
}

export default ProductComparison
