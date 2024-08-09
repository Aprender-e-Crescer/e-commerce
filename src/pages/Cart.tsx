import Menu from "../componentes/Menu";
import Banner from "../componentes/banner";
import CardPage from '../componentes/cardPage.tsx';
import Carrosel from "../componentes/carrosel";
import CartMenu from "../components/component/cartMenu";
import { useState } from "react";

function Cart() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  const handleOpenCart = () => {
    setIsCartOpen(true);
  };

  return (
    <div className="Cart">
      <Menu onCartClick={handleOpenCart} />
      {isCartOpen && <CartMenu onClose={handleCloseCart} />}
      <Banner titulo="Cart" nomeTelaInicial="Home" />
      <CardPage />
      <Carrosel />
      {/* <Footer />  */}
    </div>
  );
}

export default Cart;
