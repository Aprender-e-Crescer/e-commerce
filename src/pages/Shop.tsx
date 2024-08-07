import { Filter } from '../components/Filter'
import { Cards } from '../components/Cards'
import { Buttons } from '../components/Buttons'

const Card = [true, false, false, false]

function Shop() {
  return (
    <>
      <Filter />
      <div className="flex flex-col items-center justify-center gap-y-5">
        {Card.map((estaComHover) => (
          <Cards estaComHover={estaComHover} />
        ))}
      </div>
      <div className="pt-10">
        <Buttons />
      </div>
    </>
  )
}

export default Shop
