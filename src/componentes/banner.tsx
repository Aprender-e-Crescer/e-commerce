const Banner = ({
    titulo,
    nomeTelaInicial,
  }: {
    titulo: string;
    nomeTelaInicial: string;
  }) => {
    return (
      <div className="relative h-[316px] w-full flex flex-col items-center justify-center overflow-hidden font-poppins">
        <div
          className="absolute top-0 left-0 h-full w-full bg-cover bg-center bg-no-repeat opacity-50 filter blur-sm z-10"
          style={{
            backgroundImage:
              "url('https://s3-alpha-sig.figma.com/img/1461/f3d6/ff74c027a1888544144abe4be6e02cbf?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aDAfOXgxNt3I6B4oU9~Ns6cpFmUTYojGNYNLTpTaHfH6zO6DlNdk8dG5AiSvVGnI0Kh5F7jL3wD24rly0yfvweZB3UK~eHjMoZ644IhGAgYFBLuXYWoT1sbOmyNL50d4yZBkWwJVMFHK9PzQYL5dc9TbAdrET-BjCYfl-rzmAZygq92Mnhsa3DyMqOs6p0yNJgpV~xAIxkAb7xupFvyhkBGSXiRaKTVeK6y2YHOKGtzG~i4n9Lmc6V35CctCMlzWqNLbjTl66X5pnHzZGT~K2BjBJ1dzIErV1adeUSbx2q5Vfq8mybQYqk7KNB3n0Ut3n3TPLNZ3b68BJSmjTC9MdA__')",
          }}
        ></div>
        <img
          src="https://i.im.ge/2024/08/04/fomj3T.icone-imagem.png"
          alt="Ícone"
          className="relative z-20 h-7 mb-2 object-cover"
        />
        <h1 className="relative z-20 text-4xl text-black font-montserrat m-0">
          {titulo}
        </h1>
        <div className="relative z-20 flex items-center gap-2 text-2xl text-black font-sans mt-2">
          <span>
            <b>{nomeTelaInicial}</b>
          </span>
          <span className="text-xl">
            <b>&gt;</b>
          </span>
          <span>{titulo}</span>
        </div>
      </div>
    );
  };
  
  export default Banner;
  