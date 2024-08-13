import Menu from '@/componentes/Menu'
import CartMenu from '@/components/component/cartMenu';
import { Footer } from '@/components/footer';
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { useState } from 'react';

export const Route = createRootRoute({
  component: () => {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const handleCloseCart = () => {
      setIsCartOpen(false);
    };
  
    const handleOpenCart = () => {
      setIsCartOpen(true);
    };

    return (
      <>
        <Menu onCartClick={handleOpenCart} />
        {isCartOpen && <CartMenu onClose={handleCloseCart} />}
        <Outlet />
        <Footer />
        <TanStackRouterDevtools />
      </>
    )
  },
})