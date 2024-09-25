import Image from "next/image";

import homeIcon from "@/Img/botao-home.png"
import newsIcon from "@/Img/news-podcast.png"
import logoIcon from "@/Img/LEGO_logo.svg.png"
import tabsIcon from "@/Img/artigos-pagos.png"
import appsIcon from "@/Img/cardapio.png"
import userIcon from "@/Img/imagem-do-usuario-com-fundo-preto.png"
import rewardIcon from "@/Img/recompensas.png"
import lupaIcon from "@/Img/lupa.png"
import dailyIcon from "@/Img/verifica.png"

export default function Home() {
  return (
    <div>
      <nav className="absolute bottom-0 bg-black h-20 w-full flex">
          <a  href="#"  className="w-1/5 text-white p-1 flex flex-col items-center justify-center	">
              <Image src={homeIcon} alt="Home Icon" className="w-1/2"/>
              <p>Home</p>
          </a>
          <a  href="#"  className="w-1/5 text-white p-1 flex flex-col items-center justify-center	">
              <Image src={newsIcon} alt="Home Icon" className="w-1/2"/>
              <p>News</p>
          </a>
          <a  href="#"  className="w-1/5 text-white p-1 flex flex-col items-center justify-center	">
              <Image src={logoIcon} alt="Home Icon" className="w-3/3"/>
          </a>
          <a  href="#"  className="w-1/5 text-white p-1 flex flex-col items-center justify-center	">
              <Image src={tabsIcon} alt="Home Icon" className="w-1/2"/>
              <p>Tabs</p>
          </a>
          <a  href="#"  className="w-1/5 text-white p-1 flex flex-col items-center justify-center	">
              <Image src={appsIcon} alt="Home Icon" className="w-1/2"/>
              <p>Home</p>
          </a>
      </nav>
      <div className="p-2 w-full">
        <a  href="#">
          🔙
        </a>
      </div>
      <div className="flex justify-center">
        <Image src={userIcon} alt="User Icon" className="w-20"/>
        <div className="w-2/3 flex flex-col content-start	justify-center p-4">
          <h1>Jão Direita Terceiro<a href="#">➡</a></h1>
          <p className="text-xs">JãoDireita@gmail.com</p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-full m-4 flex flex-row rounded-xl shadow-2xl ">
          <div className="w-1/3 flex flex-col content-center items-center p-2	">
              <Image src={rewardIcon} alt="Rewards" className="w-1/4"/>
              <h1 className="font-bold">6</h1>
              <p className="text-xs">Rewards</p>
          </div>
          <div className="w-1/3 flex flex-col content-center	items-center	 p-2">
              <Image src={lupaIcon} alt="Rewards" className="w-1/4"/>
              <h1 className="font-bold">6/203</h1>
              <p className="text-xs">Daily Points</p>
          </div>
          <div className="w-1/3 flex flex-col content-center	items-center	 p-2">
              <Image src={dailyIcon} alt="Rewards" className="w-1/4"/>
              <h1 className="font-bold">0 Days</h1>
              <p className="text-xs">Daily streak</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-full m-4 flex flex-row rounded-xl shadow-2xl">
          <div className="flex flex-row items-center p-2">
            <Image src={logoIcon} alt="" className="w-2/12"/>
            <p className="ml-2 text-base">The new Logo!!</p>
          </div>
          <div className="flex flex-row items-center p-2">
            <Image src={dailyIcon} alt="" className="w-2/12"/>
            <p className="ml-2 text-sm text-green-600">Approved</p>
          </div>
        </div>
      </div>
    </div>
  );
}
