import Banner from "../componentes/banner.tsx";
import CardPage from '../componentes/cardPage.tsx';
import Carrosel from "../componentes/carrosel.tsx";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute('/cart')({
  component: Cart,
})

function Cart() {
  return (
    <div className="Cart">
      <Banner titulo="Cart" nomeTelaInicial="Home" />
      <CardPage />
      <Carrosel />
    </div>
  );
}
