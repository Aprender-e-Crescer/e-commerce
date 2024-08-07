import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-100 box-border">
      <div className="p-10">
        <div className="flex gap-52 justify-center">
          <div className="flex flex-col">
            <h3 className="pb-8 m-0 text-2xl">Funiro.</h3>
            <p className="w-[285px] text-gray-500 text-base">
              400 University Drive Suite 200 Coral Gables,<br /> FL 33134 USA
            </p>
          </div>
          <div className="flex flex-col pb-8">
            <p className="m-0 pb-8 text-base text-gray-500">Links</p>
            <div>
              <h4 className="m-0 pb-8 text-base">Home</h4>
              <h4 className="m-0 pb-8 text-base">Shop</h4>
              <h4 className="m-0 pb-8 text-base">About</h4>
              <h4 className="m-0 pb-8 text-base">Contact</h4>
            </div>
          </div>
          <div className="flex flex-col pb-8">
            <p className="m-0 pb-8 text-base text-gray-500">Help</p>
            <div>
              <h4 className="m-0 pb-8 text-base">Payment Options</h4>
              <h4 className="m-0 pb-8 text-base">Returns</h4>
              <h4 className="m-0 pb-8 text-base">Privacy Policies</h4>
            </div>
          </div>
          <div className="flex flex-col pb-8">
            <p className="m-0 pb-8 text-base text-gray-500">Newsletter</p>
            <div className="flex items-center gap-2.5">
              <span className="text-gray-800 inline-block border-b-2 border-black pb-0.5 m-0 leading-none text-sm">
                Enter Your Email Address
              </span>
              <h4 className="border-b-2 border-black w-[100px] m-0 pb-0.5 leading-none text-sm">
                SUBSCRIBE
              </h4>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-500 text-left text-gray-800 py-7 text-base">
          <p className="m-0">2023 Funiro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
