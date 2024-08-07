import { Button } from './Button'

export function Body() {
  return (
    <div>
      <div className="flex border-t-2 border-gray-300">
        <div className="flex-col flex border-r-2 border-gray-300 pt-3 w-max gap-7 pl-16 ">
          <p className="pt-2 font-medium text-3xl">General</p>
          <div className="text-lg font-normal mb-4 flex flex-col gap-3 ">
            <p>Sales Package</p>
            <p>Model Number</p>
            <p>Secondary Material</p>
            <p>Configuration</p>
            <p>Upholstery Material</p>
            <p>Upholstery Color</p>
          </div>

          <p className=" w-60 pt-2 font-medium text-3xl">Dimensions</p>
          <div className="text-lg font-normal mb-4 flex flex-col gap-3">
            <p>Filling Material</p>
            <p>Finish Type</p>
            <p>Adjustable Headrest</p>
            <p>Maximum Load Capacity</p>
            <p>Origin of Manufacture</p>
          </div>

          <p className=" w-60 pt-2 font-medium text-3xl">Warranty</p>
          <div className="text-lg font-normal mb-4 flex flex-col gap-3">
            <p>Width</p>
            <p>Height</p>
            <p>Depth</p>
            <p>Weight</p>
            <p>Seat Height</p>
            <p>Leg Height</p>
          </div>

          <p className=" w-60 pt-2 font-medium text-3xl">General</p>
          <div className="text-lg font-normal flex flex-col gap-3">
            <p className="mb-7">Warranty Summary</p>
            <p className="mb-14">Warranty Service Type</p>
            <p className="mb-20">Covered in Warranty</p>
            <p className="mb-36">Not Covered in Warranty</p>
            <p>Domestic Warranty</p>
          </div>
        </div>

        <div className="flex-col flex border-r-2 border-gray-300 w-72 gap-7 ml-16 pr-6 pt-12 pb-11">
          <p className="pt-2 font-medium text-3xl"></p>
          <div className="text-lg font-normal mb-4 flex flex-col gap-3 ">
            <p>1 sectional sofa</p>
            <p>TFCBLIGRBL6SRHS</p>
            <p>Solid Wood</p>
            <p>L-shaped</p>
            <p>Fabric + Cotton</p>
            <p className="mb-9">Bright Grey & Lion</p>
          </div>

          <p className=" w-60 pt-2 font-medium text-3xl"></p>
          <div className="text-lg font-normal mb-4 flex flex-col gap-3">
            <p>Foam</p>
            <p>Bright Grey & Lion</p>
            <p>No</p>
            <p>280 KG</p>
            <p className="mb-9" mb-9>
              India
            </p>
          </div>

          <p className=" w-60 pt-2 font-medium text-3xl"></p>
          <div className="text-lg font-normal mb-4 flex flex-col gap-3 ">
            <p>265.32 cm</p>
            <p>76 cm</p>
            <p>167.76 cm</p>
            <p>45 KG</p>
            <p>41.52 cm</p>
            <p className="mb-9">5.46 cm</p>
          </div>

          <p className=" w-60 pt-2 font-medium text-3xl p-"></p>
          <div className="text-lg font-normal flex flex-col gap-3">
            <p>1 Year Manufacturing Warranty</p>
            <p>
              For Warranty Claims or Any Product Related Issues Please Email at
              operations@trevifurniture.com
            </p>
            <p className="mb-8">Warranty Against Manufacturing Defect</p>
            <p className="mb-14">
              The Warranty Does Not Cover Damages Due To Usage Of The Product
              Beyond Its Intended Use And Wear & Tear In The Natural Course Of
              Product Usage.
            </p>
            <p className="-mb-1">1 Year</p>
          </div>

          <div>
            <Button text="Add To Cart" />
          </div>
        </div>

        <div className="flex-col flex border-r-2 border-gray-300 w-72 gap-7 ml-16 pr-8 pt-10">
          <p className="pt-2 font-medium text-3xl"></p>
          <div className="text-lg font-normal mb-4 flex flex-col gap-3 ">
            <p>1 Three Seater, 2 Single Seater</p>
            <p>DTUBLIGRBL568</p>
            <p>Solid Wood</p>
            <p>L-shaped</p>
            <p>Fabric + Cotton</p>
            <p className="mb-9">Bright Grey & Lion</p>
          </div>

          <p className=" w-60 pt-2 font-medium text-3xl"></p>
          <div className="text-lg font-normal mb-4 flex flex-col gap-3">
            <p>Matte</p>
            <p>Bright Grey & Lion</p>
            <p>Yes</p>
            <p>300 KG</p>
            <p className="mb-9" mb-9>
              India
            </p>
          </div>

          <p className=" w-60 pt-2 font-medium text-3xl"></p>
          <div className="text-lg font-normal mb-4 flex flex-col gap-3 ">
            <p>265.32 cm</p>
            <p>76 cm</p>
            <p>167.76 cm</p>
            <p>65 KG</p>
            <p>41.52 cm</p>
            <p className="mb-9">5.46 cm</p>
          </div>

          <p className=" w-60 pt-2 font-medium text-3xl"></p>
          <div className="text-lg font-normal flex flex-col gap-3">
            <p>1.2 Year Manufacturing Warranty</p>
            <p className="mb-7">
              For Warranty Claims or Any Product Related Issues Please Email at
              support@xyz.com
            </p>
            <p>
              Warranty of the product is limited to manufacturing defects only.
            </p>
            <p className="mb-2">
              The Warranty Does Not Cover Damages Due To Usage Of The Product
              Beyond Its Intended Use And Wear & Tear In The Natural Course Of
              Product Usage.
            </p>
            <p>3 Months</p>
          </div>
          <div>
            <Button text="Add To Cart" />
          </div>
        </div>
      </div>
    </div>
  )
}
