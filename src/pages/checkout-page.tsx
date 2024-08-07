import { ComboboxDemo } from "./components/ui/Combobox"
import { Input } from "./components/ui/input"
import { Label } from "./components/ui/label"

export function CheckoutPage() {
  return (
    <>
    <div className="grid w-full max-w-sm items-center gap-1.5 justify-center">
        <h1 className="size-full font-sans flex items-center justify-center w-28 h-14 top-5">Billing details</h1>
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

