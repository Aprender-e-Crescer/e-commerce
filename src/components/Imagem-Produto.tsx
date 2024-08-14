import Asgaardsofa3 from "../assets/Asgaard sofa 3.png"
import Stuartsofa1 from "../assets/Stuart sofa 1.png"
import Outdoorsofaset2 from "../assets/Outdoor sofa set 2.png"
import Mayasofathreeseater from "../assets/Maya sofa three seater (1) 1.png"
import Outdoorsofaset1 from "../assets/Outdoor sofa set_2 1.png"

export function ImagemProduto() {
    return (
      <>
        <div className=" flex gap-x-6 py-4">
              <div className='flex flex-col p-2 pt-0 gap-y-8'>
                <div className="hover:scale-125 bg-[#F9F1E7] flex flex-content-center items-center w-[80px] h-[80px] rounded-[10px] "><a href="#"><img src={Outdoorsofaset2} alt="Outdoor Sofa Set 2" className='mb-2'/></a></div>
  
                <div className='hover:scale-125 bg-[#F9F1E7] justify-center w-[80px] h-[80px] rounded-[10px]'><a href="#"><img src={Outdoorsofaset1 }alt="Outdoorsofaset1" /></a></div>
  
                <div className="hover:scale-125 bg-[#F9F1E7] flex items-center justify-center w-[80px] h-[80px] rounded-[10px] "><a href="#"><img src={Stuartsofa1} alt="Stuart Sofa 1" /></a></div>
  
                <div className="hover:scale-125 bg-[#F9F1E7] flex items-center justify-center w-[80px] h-[80px] rounded-[10px] "><a href="#"><img src={Mayasofathreeseater} alt="Maya Sofa Three Seater" /></a></div>
              </div>
  
            <div className="flex rounded-[10px] bg-[#F9F1E7] items-center justify-center w-[423px] h-[500px]">  
            <a href="#"><img src={Asgaardsofa3} alt="Asgaard Sofa" className="w-[481px] h-[391px]"/></a>
            </div>
        </div>
      </>
    );
  }
  
