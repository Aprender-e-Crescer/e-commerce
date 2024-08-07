import { AddProduct } from './lib/AddProduct'
import { Body } from './lib/Body'
import { Card } from './lib/Card'
import { Text } from './lib/Text'

function App() {
  return (
    <>
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
    </>
  )
}

export default App
