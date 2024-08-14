import { Facebook, LinkedinIcon, TwitterIcon } from "lucide-react"
 
export function Rodape() {
  return (
    <div className="space-y-4">
      <div className="flex items-center">
        <span className="text-muted-foreground">SKU</span>
        <span className="mx-2">:</span>
        <span>SS001</span>
      </div>
      <div className="flex items-center">
        <span className="text-muted-foreground">Category</span>
        <span className="mx-2">:</span>
        <span>Sofas</span>
      </div>
      <div className="flex items-center">
        <span className="text-muted-foreground">Tags</span>
        <span className="mx-2">:</span>
        <span>Sofa, Chair, Home, Shop</span>
      </div>
      <div className="flex items-center">
        <span className="text-muted-foreground">Share</span>
        <span className="mx-2">:</span>
        <div className="flex space-x-2">
          <Facebook/>
          <LinkedinIcon/>
          <TwitterIcon/>
        </div>
      </div>
    </div>
  )
}