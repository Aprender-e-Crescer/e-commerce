import { Filter } from '../components/Filter'
import { Cards } from '../components/Cards'
import { Buttons } from '../components/Buttons'
import image1 from '../assets/Images.png'
import image3 from '../assets/Images (1).png'
import image4 from '../assets/Images (2).png'
import image2 from '../assets/Images (3).png'

const hoverStates = [true, true, false, false]

function Shop() {
  return (
    <>
      <Filter />
      <div className="flex flex-col items-center justify-center gap-y-5 pt-10">
        {hoverStates.map((estaComHover) => (
          <Cards
            estaComHover={estaComHover}
            img1={image1}
            img2={image2}
            img3={image3}
            img4={image4}
            titulo="styreline"
            descrição="teste"
            valorAtual="Rp.120.000"
            valorPassado="Rp.100.000"
            porcentagem="-30%"
          />
        ))}
      </div>
      <div className="pt-10">
        <Buttons />
      </div>
    </>
  )
}

export default Shop
