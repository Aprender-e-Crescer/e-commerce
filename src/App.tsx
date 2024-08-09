import { CheckoutBuy } from "./components/checkout-buy"
import { CheckoutPage } from './pages/checkout-page'
import ProductComparison from './pages/product-comparison'

export function App() {
  return (
    <>
      <ProductComparison />
      <CheckoutPage />
      <CheckoutBuy />
    </>
  )
}

