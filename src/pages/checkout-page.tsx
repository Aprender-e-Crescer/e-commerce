import { ComboboxDemo } from "@/components/Combobox"
import { Input } from "@/components/input"
import { Label } from "@/components/label"

export function CheckoutPage() {
  return (
    <>
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

      <ComboboxDemo />
      <Input />

      <Label>Street Adress</Label>
      <Input />

       <Label>Town City</Label>
      <Input />

       <Label>Province</Label>
      <Input />

       <Label>Zip Code</Label>
      <Input />

       <Label>Phone</Label>
      <Input />

       <Label>Email Adress</Label>
      <Input />

      <Input placeholder="Aditional information"/>
      </div>
    </>
  )
}