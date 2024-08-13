import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

interface CartMenuProps {
  onClose: () => void;
}

export default function CartMenu({ onClose }: CartMenuProps) {
  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Overlay escuro */}
      <div
        className="fixed inset-0 bg-black opacity-50 z-40"
        onClick={onClose}
      ></div>

      {/* Menu do Carrinho */}
      <div className="relative w-[417px] h-[90%] bg-white shadow-lg font-poppins z-50">
        <div className="p-6 border-b border-gray-300">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Shopping Cart</h2>
            <Button variant="ghost" size="icon" className="ml-auto" onClick={onClose}>
              <XIcon className="w-6 h-6" />
            </Button>
          </div>
        </div>
        <div className="px-6 pt-6 pb-20 space-y-6 overflow-auto flex-1">
          <div className="relative flex items-center space-x-4">
            <div className="relative w-24 h-24 rounded overflow-hidden">
              <img
                src="https://s3-alpha-sig.figma.com/img/2ac4/13c1/917ac944454e358f73d0af67e1f1b74e?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WmyiVZTA4YJnIAoBmaqeEv7ixobo9A8RtzEP3bPtX1QoehX7bqhLk46WmKQzZ9qGsSTaYi3TcOWWuV9p3NwbKEchmD0Acp8HzigF2Rk3ULXtKk~wR9HVweu7-XBT17Uz6fyZfoxg~s-DhzishIVg28gSdgG~v5~2jUPTwLC8ap2A3-DViEzLYUu9XtLyrEaOQNe~exUI53xjDP4DFH-vN2jwZYecaQFPHstNw3T1acqc1YGTn3bqFOnBFHoVo52IMaQbFGdnsG0z9v0sj6SxAPeOd-kVMvICYV3Gsia0dYMx1TpgRFzzq0qNec10TnZBDG1Wq1w7rMC4pt1dRRAiJw__"
                alt="Asgaard sofa"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ background: "linear-gradient(rgba(184, 142, 47, 0.22), rgba(184, 142, 47, 0.22))" }}
              />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold">Asgaard sofa</h3>
              <p className="text-sm text-gray-200">
                1 x <span className="text-yellow-500">Rs. 250,000.00</span>
              </p>
            </div>
            <Button variant="ghost" size="icon" className="ml-auto">
              <XIcon className="w-5 h-5" />
            </Button>
          </div>
          <div className="flex items-center space-x-4">
            <img
              src="https://s3-alpha-sig.figma.com/img/7614/9a1a/1d489ea6ae7783215d8976dab5c582e3?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R2~7SagVa6fvQwQfWBvSgqmempfJtJuhRfrSVk9vaQNaTTBJTSV2Wd2kl8ktPOim2MPmymViSPCpSRkYUCzi2peLAIhYdCznwscZ8OUm8Eo~sS~OnR7-AT5kuRyyMRWgRCx4A7FQ8f78faTCD0ruA2w8y2UONAfmBBIV3sAfeGlFxFMSZ64j~uuOyUvpmN9wx-YRv9bjCA4G4pa1DWKiQH43YzIQczScKDf~OLsoPjk~DYKu~YsVgmR46htCRRbHwKid6w1bS29yJpBvMvnyc7bWNxbMk7Ftn3vf6oJY6ZtfJWzYVcPhzXzHlT8OovQZMdFo4MO-7l~86nmnXXmVnA__"
              alt="Casaliving Wood"
              className="w-24 h-24 object-cover rounded"
            />
            <div className="flex-1">
              <h3 className="text-lg font-semibold">Casaliving Wood</h3>
              <p className="text-sm text-gray-200">
                1 x <span className="text-yellow-500">Rs. 270,000.00</span>
              </p>
            </div>
            <Button variant="ghost" size="icon" className="ml-auto">
              <XIcon className="w-5 h-5" />
            </Button>
          </div>
        </div>
        <div className="p-6 border-t border-gray-200 absolute bottom-0 left-0 w-full bg-white">
          <div className="flex justify-between mb-4">
            <span className="text-lg font-semibold">Subtotal</span>
            <span className="text-lg font-semibold text-yellow-500">
              Rs. 520,000.00
            </span>
          </div>
          <div className="flex justify-between space-x-2">
            <Link to="/cart" onClick={onClose} className="flex-1 flex">
              <Button variant="outline" className="flex-1 rounded-full">
                Cart
              </Button>
            </Link>
            <Button variant="outline" className="flex-1 rounded-full">
              Checkout
            </Button>
            <Link to="/product-comparison" onClick={onClose}>
              <Button variant="outline" className="flex-1 rounded-full">
                Comparison
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}
