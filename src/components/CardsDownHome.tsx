import img1 from '../assets/home/cardsdown1.png'
import img2 from '../assets/home/cardsdown2.png'
import img3 from '../assets/home/cardsdown3.png'
import img4 from '../assets/home/cardsdown4.png'


export function CardsDown() {
    return (
        <div className="flex gap-x-12 jus">
        <div className="bg-[#F4F5F7] h-[446px] w-[285px]">
          <div>
            <img className="h-[301px] w-[285px]" src={img1} alt="" />
          </div>
          <div className="  flex flex-col gap-y-1">
            <div className="flex flex-col ml-4 mt-4 gap-y-1">
              <h1 className=" text-[#3A3A3A] font-Poppins-ExtraBold font-bold text-2xl">
                Gripho
              </h1>
              <p
                className="
            flex-1 w-[138px] h-[24px] text-[#898989] font-Poppins-Medium text-[15px]"
              >
                Night lamp
              </p>
            </div>
            <div className="flex ml-4">
              <p className="w-[130px] h-[29px] text-[#3A3A3A] font-Poppins-Medium font-bold">
                Rp 1.500.000
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#F4F5F7] h-[446px] w-[285px]">
          <div>

            <img className="h-[301px] w-[285px]" src={img2} alt="" />
          </div>
  
          <div className="  flex flex-col gap-y-1">
            <div className="flex flex-col ml-4 mt-4 gap-y-1">
              <h1 className=" text-[#3A3A3A] font-Poppins-ExtraBold font-bold text-2xl">
                Muggo
              </h1>
              <p
                className="
            flex-1 w-[138px] h-[24px] text-[#898989] font-Poppins-Medium text-[15px]"
              >
                Small mug
              </p>
            </div>
            <div className="flex ml-4">
              <p className="w-[130px] h-[29px] text-[#3A3A3A] font-Poppins-Medium font-bold">
                Rp 150.000
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#F4F5F7] h-[446px] w-[285px]">
          <div>
          <p className="flex relative top-12 left-56 -mt-10 text-[#ffffff] bg-[#2EC1AC] rounded-full w-7 h-7 text-[10px] items-center justify-center p-5 ">
            New
          </p>


            <img className="h-[301px] w-[285px]" src={img3} alt="" />
          </div>
  
          <div className="  flex flex-col gap-y-1">
            <div className="flex flex-col ml-4 mt-4 gap-y-1">
              <h1 className=" text-[#3A3A3A] font-Poppins-ExtraBold font-bold text-2xl">
                Pingky
              </h1>
              <p
                className="
            flex-1 w-[138px] h-[24px] text-[#898989] font-Poppins-Medium text-[15px]"
              >
                Cute bed set
              </p>
            </div>
            <div className="flex ml-4">
              <p className="w-[130px] h-[29px] text-[#3A3A3A] font-Poppins-Medium font-bold">
                Rp 7.000.000
              </p>
              <p className="w-[120px] h-[24px] font-Poppins-Medium line-through text-[#B0B0B0]">
                Rp 14.000.000
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#F4F5F7] h-[446px] w-[285px]">
          <div>
          <p className="flex relative top-12 left-56 -mt-10 text-[#ffffff] bg-[#2EC1AC] rounded-full w-7 h-7 text-[10px] items-center justify-center p-5 ">
            New
          </p>

  
            <img className="h-[301px] w-[285px]" src={img4} alt="" />
          </div>
  
          <div className="  flex flex-col gap-y-1">
            <div className="flex flex-col ml-4 mt-4 gap-y-1">
              <h1 className=" text-[#3A3A3A] font-Poppins-ExtraBold font-bold text-2xl">
                Potty
              </h1>
              <p
                className="
            flex-1 w-[200px] h-[24px] text-[#898989] font-Poppins-Medium text-[15px]"
              >
                Minimalist flower pot
              </p>
            </div>
            <div className="flex ml-4">
              <p className="w-[130px] h-[29px] text-[#3A3A3A] font-Poppins-Medium font-bold">
                Rp 500.000
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }