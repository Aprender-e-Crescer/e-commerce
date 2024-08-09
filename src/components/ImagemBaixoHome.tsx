import img1 from '../assets/home/em1.png'
import img2 from '../assets/home/em2.png'
import img3 from '../assets/home/em3.png'
import img4 from '../assets/home/em4.png'
import img5 from '../assets/home/em5.png'
import img6 from '../assets/home/em6.png'
import img7 from '../assets/home/em7.png'
import img8 from '../assets/home/em8.png'
import img9 from '../assets/home/em9.png'

export function ImagemBaixo() {
  return (
    <>
      <div>
        <p className="text-lg">Share your setup with</p>
        <h1 className="text-4xl font-bold text-[#3A3A3A]">#FuniroFurniture</h1>
      </div>

      <div className="relative w-[1440px] h-[700px] overflow-hidden">
        <img
          className="absolute top-[-26px] left-[-150px] h-[382px] w-[274px] object-cover"
          src={img1}
          alt="Imagem 1"
        />
        <img
          className="absolute top-[365px] left-[-150px] h-[323px] w-[381px] object-cover"
          src={img2}
          alt="Imagem 2"
        />
        <img
          className="absolute top-[440px] left-[900px] h-[242px] w-[178px] object-cover"
          src={img3}
          alt="Imagem 3"
        />
        <img
          className="absolute top-[440px] left-[1085px] h-[196px] w-[258px] object-cover"
          src={img4}
          alt="Imagem 4"
        />
        <img
          className="absolute top-[80px] left-[900px] h-[348px] w-[290px] object-cover"
          src={img5}
          alt="Imagem 5"
        />
        <img
          className="absolute top-[45px] left-[135px] h-[312px] w-[451px] object-cover"
          src={img6}
          alt="Imagem 6"
        />
        <img
          className="absolute top-[5px] left-[1200px] h-[425px] w-[433px] object-cover"
          src={img7}
          alt="Imagem 7"
        />
        <img
          className="absolute top-[130px] left-[595px] h-[392px] w-[295px] object-cover"
          src={img8}
          alt="Imagem 8"
        />
        <img
          className="absolute top-[365px] left-[242px] h-[242px] w-[344px] object-cover"
          src={img9}
          alt="Imagem 9"
        />
      </div>
    </>
  )
}
