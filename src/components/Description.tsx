import Cloudsofathreeseaterottoman_21 from "../assets/Cloud sofa three seater + ottoman_2 1.png";
import Cloudsofathreeseaterottoman_32 from "../assets/Cloud sofa three seater + ottoman_32.png";

export function Descricao() {
  return (
    <div className="flex flex-col justify-center items-center p-10 ">
      <div className="flex justify-center font-medium gap-10">
        <h3 className="font-semibold">Description</h3>
        <h3 className="text-[#9F9F9F]">Additional Information</h3>
        <h3 className="text-[#9F9F9F]">Reviews [5]</h3>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col gap-10 m-20 ">
          <p className="text-[#9F9F9F] font-semibold">
            Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p className="text-[#9F9F9F] font-semibold">
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
          </p>
        </div>
        <div className="flex justify-center gap-5">
          <div className="bg-[#F9F1E7] rounded-[10px] p-2">
            <img src={Cloudsofathreeseaterottoman_21} alt="Sofa Image 1" />
          </div>
          <div className="bg-[#F9F1E7] rounded-[10px] p-2">
            <img src={Cloudsofathreeseaterottoman_32} alt="Sofa Image 2" />
          </div>
        </div>
      </div>
    </div>
  );
}

