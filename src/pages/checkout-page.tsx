import { ComboboxDemo } from "@/components/Combobox"
import { Input } from "@/components/input"
import { Label } from "@/components/label"
import { CheckoutBuy } from "@/components/checkout-buy"

export function CheckoutPage() {
  return (
    <div className="flex justify-between w-[900px]">
    <div className="grid w-full max-w-sm items-center gap-1.5 justify-center">
        <h1 className="font-roboto flex text-2xl font-bold items-center justify-center h-14 top-5 ml-14 pl-4">Billing details</h1>
      <div className="flex gap-3">
        <div>
          <Label>First name</Label>
          <Input />
        </div>

        <div>
          <Label>Last name</Label>
          <Input />
        </div>
      </div>



      <Label>Company Name(Optional)</Label>
      <Input />

      <Label className="mb-6">Country / Region</Label>
      <ComboboxDemo />

      <Label>Street Adress</Label>
      <Input />

       <Label>Town City</Label>
      <Input />

       <Label>Province</Label>
      <ComboboxDemo />

       <Label>Zip Code</Label>
      <Input />

       <Label>Phone</Label>
      <Input />

       <Label>Email Adress</Label>
      <Input />

      <Input placeholder="Aditional information"/>
      </div>
      <CheckoutBuy />
    </div>
  )
}