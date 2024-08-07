export function App() {


  return (
    <>
      <div className='flex flex-col  max-w-[390px] font-[Poppins]'> 
      <div className='flex justify-between ml-2'>
      <h1 className='font-semibold text-xl leading-9'>Product</h1>
      <h1 className='font-semibold text-xl leading-9'>Subtotal</h1>
      </div>
      <div className='flex justify-between ml-2 font-[Poppins]'>
        <p className='text-[#9F9F9F] leading-7 text-sm py-1'>Asgaard sofa <span className='text-black font-medium'>x1</span></p>
        <p className='text-sm leading-7 py-1'>R$. 250,000.00</p>
      </div>
      <div className='flex justify-between ml-2 font-[Poppins]'>
      <p className='text-black leading-7 font-medium py-1  text-base'>Subtotal</p>
      <p className='text-sm leading-7 py-1'>R$. 250,000.00</p>
      </div>
      <div className='flex justify-between ml-2 font-[Poppins]'>
        <p className='text-black leading-7 py-1 mb-4 font-medium  text-base'>Total</p>
        <p className='text-lg leading-7 py-1 mb-4 text-[#B88E2F] font-bold'>R$. 250,000.00</p>
      </div>
      <hr className='text-[#D9D9D9]' />
      <div className='flex font-[Poppins] mt-3'>
        <div className='bg-black p-2 m-1 mr-4 w-1 rounded-full'></div>
        <p className='text-black font-medium  text-base'>Direct Bank Transfer</p>
      </div>
      <div className='mt-2 ml-1 '>
      <p className='text-[#9F9F9F] leading-4 text-[12px]'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
      </div>
      <div className='flex mt-5'>
        <div className='border-solid border-2 border-[#9F9F9F] rounded-full  p-2 m-1 mr-4 '></div>
        <p className='text-[#9F9F9F] font-medium text-base mt-[2px]'>Direct Bank Transfer</p>
      </div>
      <div className='flex mt-4'>
        <div className='border-solid border-2 border-[#9F9F9F] rounded-full  p-2 m-1 mr-4 '></div>
        <p className='text-[#9F9F9F] font-medium text-base mt-[2px]'>Cash On Delivery</p>
      </div>
      <p className=' mt-4 ml-1 text-[12px] tracking-wide'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='font-bold'>privacy policy.</span></p>
      <div className=' flex justify-center'>
      <button className='mt-4 py-3 px-16 rounded-[8px] text-sm font-medium border border-[#000000]'>Place order</button>
      </div>
    </div>
    </>
  )
}

