export function Button({ text }: { text: string }) {
  return (
    <div className="flex items-center justify-center border-[2px] border-[#B88E2F]  hover:bg-[#B88E2F] leading-4 font-semibold text-smp-2 p-2 hover:text-white ease-in duration-300">
      <p>{text}</p>
    </div>
  )
}
