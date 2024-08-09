import bedroom from '../assets/home/bedroom.png'
import dining from '../assets/home/dining.png'
import living from '../assets/home/living.png'

export function Filtro() {
    return (
        <div className="flex gap-x-10 justify-center">
            <div className="h-[685px] w-[1183px]">
                <div className="flex flex-col items-center text-center">
                    <h1 className='text-3xl font-Poppins-ExtraBold text-[#333333] font-bold'>
                        Browse The Range
                    </h1>
                    <p className='text-xl font-Poppins text-[#666666] font-normal'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
                <div className="flex justify-around mt-8 text-[#333333] font-semibold">
                    <div className="flex flex-col items-center">
                        <img className='h-[480px] w-[381px] rounded-lg' src={dining} alt="Dining"/>
                        <div className="p-4">
                            <h2 className="text-2xl	 font-semibold font-Poppins">
                                Dining
                            </h2>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <img className='h-[480px] w-[381px] rounded-lg' src={living} alt="Living"/>
                        <div className="p-4">
                            <h2 className="text-2xl font-semibold font-Poppins">
                                Living
                            </h2>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <img className='h-[480px] w-[381px] rounded-lg' src={bedroom} alt="Bedroom"/>
                        <div className="p-4">
                            <h2 className="text-2xl font-semibold font-Poppins">
                                Bedroom
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}