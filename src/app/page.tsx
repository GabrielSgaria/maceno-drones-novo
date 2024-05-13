'use client'
import { ButtonWpp } from "@/components/button-wpp";
import { CardPortfolio } from "@/components/card-portfolio";
import { CardServices } from "@/components/card-services";
import { ClientsCarrousel } from "@/components/carrousel-clients";
import { CardCounter } from "@/components/counter-up";
import { Footer } from "@/components/footer";
import { NavBar } from "@/components/nav-bar";
import { SparklesCore } from "@/components/ui/sparkles";
import Link from "next/link";



export default function Home() {
  return (
    <div>
      <section>
        <div className="h-[40rem] w-full bg-zinc-950 flex flex-col items-center justify-center overflow-hidden relative">
          <h1 className="text-[40px] md:text-[100px] lg:text-[130px] font-extrabold text-center text-white relative z-20 mb-3 sm:mb-0 uppercase">
            Maceno Films
          </h1>
          <p className="md:text-2xl text-[20px] lg:text-4xl font-bold text-center text-white absolute z-20 uppercase top-[250px] sm:top-[290px] tracking-[10px] sm:tracking-[30px]">
            company
          </p>
          <div className="w-[40rem] h-40 relative">

            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
            <div className="absolute inset-0 w-full h-full bg-zinc-950 [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          </div>
        <div className="container mx-auto flex justify-center items-center mt-5">
          <div className="grid grid-flow-col grid-cols-4 gap-3">
            <CardCounter
              andMoney=""
              numberCardCounter={82}
              textCardCounter="Você sabia que 82% de todo tráfego na internet foi gerado por vídeo? "
              porcents="%"
            />
            <CardCounter
              andMoney=""
              numberCardCounter={1200}
              textCardCounter="Vídeos em redes sociais geram 1.200% mais compartilhamentos do que fotos e textos"
              porcents="%"
            />
            <CardCounter
              andMoney=""
              numberCardCounter={54}
              textCardCounter="Aumentamos 54% o alcance das marcas parceiras"
              porcents="%"
            />
            <CardCounter
              andMoney="R$"
              numberCardCounter={100000}
              textCardCounter="Mais de R$100.000 vendas feitas na internet com nossos vídeos"
              porcents=""
            />
          </div>
        </div>
        </div>
      </section>
      <section className="py-16 bg-zinc-950">
        <div className="w-full flex flex-col justify-center items-center gap-10">
          <h1 className="font-bold text-5xl text-zinc-50">Solicite um orçamento agora!</h1>
          <ButtonWpp />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto container flex items-center justify-center mb-10">
          <h1 className="text-5xl font-bold">NOSSOS SERVIÇOS</h1>
        </div>
        <div className="grid grid-flow-col grid-cols-2 grid-rows-2 mx-auto container gap-20 ">
          <CardServices
            imageCardServices="/image/fotos/DJI_0548.JPG"
            altCardServices="Institucional Image"
            textCardServices="Videos Institucionais"
            descCardServices="descrição dos videos institucionais descrição dos videos institucionais descrição dos videos institucionais descrição dos videos institucionais"

          />
          <CardServices
            imageCardServices="/image/fotos/dji_fly_20231122_084012_150_1700653219772_photo_optimized.jpg"
            altCardServices="Acompanhamento de obra"
            textCardServices="Acompanhamento de Obra"
            descCardServices="descrição dos videos institucionais descrição dos videos institucionais descrição dos videos institucionais descrição dos videos institucionais"

          />
          <CardServices
            imageCardServices="/image/fotos/dji_fly_20231122_083044_135_1700652653902_photo_optimized.jpg"
            altCardServices="Reels"
            textCardServices="Reels profissionais"
            descCardServices="descrição dos videos institucionais descrição dos videos institucionais descrição dos videos institucionais descrição dos videos institucionais"

          />
          <CardServices
            imageCardServices="/image/fotos/res1.jpg"
            altCardServices="Criativo para anuncios"
            textCardServices="Criativo para anuncios"
            descCardServices="descrição dos videos institucionais descrição dos videos institucionais descrição dos videos institucionais descrição dos videos institucionais"
          />
        </div>
      </section>
      <div>
        <ClientsCarrousel />
      </div>
      <section className="py-16">
        <div className="flex flex-col mx-auto container items-center">
          <h1 className="text-5xl uppercase font-bold">PORTFÓLIO</h1>
          <p className="text-xl text-zinc-700">conheça alguns de nossos projetos</p>
        </div>
        <div className="mx-auto flex container mt-10 flex-col">
          <CardPortfolio />
          <Link href='/portfolio' className="w-80 mt-10 flex mx-auto container justify-center bg-zinc-50 text-zinc-950 rounded-xl text-2xl py-3 px-3 border-2 font-bold transition-all border-zinc-950 hover:bg-zinc-950 hover:text-zinc-50">
            PORTFÓLIO COMPLETO
          </Link>
        </div>
      </section>
      <Footer />
    </div >

  );
}
