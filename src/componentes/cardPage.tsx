import React from "react";
import ProductImage from '../assets/logo.cardPage.png'; // Caminho relativo correto
import { Link } from "@tanstack/react-router";

const CartPage: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      {/* Carrinho */}
      <div className="flex justify-center">
        <div className="w-2/3 flex flex-col gap-4">
          <div className="flex justify-between h-16 w-full text-lg bg-[#f9f1e7] p-4 items-center">
            <strong>
              <p>Product</p>
            </strong>
            <strong>
              <p>Price</p>
            </strong>
            <strong>
              <p>Quantity</p>
            </strong>
            <strong>
              <p>Subtotal</p>
            </strong>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between items-center h-52  p-4">
              <img
                src={ProductImage}
                alt="Asgaard sofa"
                className="h-24 w-24 rounded-lg"
              />
              <div className="flex-1 flex flex-col justify-center gap-2 text-gray-500 ml-4">
                <p className="text-xl">Asgaard sofa</p>
              </div>
              <div className="flex items-center justify-center w-32">
                <p className="text-gray-500">Rs. 250,000.00</p>
              </div>
              <div className="flex items-center justify-center w-16">
                <button className="w-8 h-8 rounded-lg border border-gray-300  flex items-center justify-center  cursor-pointer">
                  <p>1</p>
                </button>
              </div>
              <div className="flex items-center justify-center w-32">
                <p className="text-gray-500">Rs. 250,000.00</p>
              </div>
              {/* Ícone de lixeira sem fundo */}
              <i className="fas fa-trash text-[#b88e2f] text-2xl ml-5" style={{ backgroundColor: 'transparent' }}></i>
            </div>
          </div>
        </div>
        <div className="ml-8 border border-[#f9f1e7] bg-[#f9f1e7] w-96 h-80 p-8">
          <div className="flex justify-center mb-4">
            <h1 className="text-2xl font-bold">Cart Totals</h1>
          </div>
          <div className="flex justify-between mb-2">
            <h1 className="text-lg">Subtotal</h1>
            <p className="text-gray-500">Rs. 250,000.00</p>
          </div>
          <div className="flex justify-between mb-4">
            <h1 className="text-lg">Total</h1>
            <p className="text-[#b88e2f] text-xl font-semibold">
              Rs. 250,000.00
            </p>
          </div>
          <div className="flex justify-center">
            <Link to="/checkout-page">
              <button className="h-14 w-52 rounded-full border border-gray-500 bg-[#f9f1e7] text-lg hover:bg-gray-200">
                Check Out
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;