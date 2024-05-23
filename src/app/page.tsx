'use client'
import { ButtonScrollTop } from "@/components/button-scroll-top";
import { ButtonWhatsAppFixed } from "@/components/button-whatsapp-fixed";
import { ButtonWpp } from "@/components/button-wpp";
import { CardPortfolio } from "@/components/card-portfolio";
import { CardServices } from "@/components/card-services";
import { ClientsCarrousel } from "@/components/carrousel-clients";
import { CardCounter } from "@/components/counter-up";
import { SparklesCore } from "@/components/ui/sparkles";
import Image from "next/image";
import Link from "next/link";
import { InstagramEmbed } from "react-social-media-embed";
import logoLetras from '../../public/image/maceno-films-company-letras.svg'
import { SectionServices } from "@/components/section-services";


export default function Home() {
  return (
    <div>
      <ButtonScrollTop />
      <ButtonWhatsAppFixed />
      <section>
        <div className="h-[40rem] w-full bg-zinc-950 flex flex-col items-center justify-center overflow-hidden relative">
          <Image
            width={900}
            height={900}
            alt="Logo Letras Maceno Films Company"
            src={logoLetras}
            className="relative top-7 sm:top-10 md:top-12 lg:top-16 z-20 w-full max-w-[330px] sm:max-w-none sm:w-[600px] md:w-[690px] lg:w-[850px] xl:w-[900px] "
          />
          <div className="w-[40rem] h-20 sm:h-40 relative">
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
            <div className="grid px-4 grid-flow-row md:grid-flow-col grid-cols-2 sm:grid-cols-4 gap-3">
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
                andMoney=""
                numberCardCounter={100000}
                textCardCounter="Mais de 100.000 visualizações na internet com nossos vídeos"
                porcents=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-zinc-950">
        <div className="w-full flex flex-col justify-center items-center gap-10">
          <h1 className="font-bold text-2xl sm:text-2xl md:text-4xl lg:text-5xl text-zinc-50">Solicite um orçamento agora!</h1>
          <ButtonWpp />
        </div>
      </section>

      <section className="py-10 md:py-16" id='services'>
        <div className="mx-auto container flex items-center justify-center mb-10">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">NOSSOS SERVIÇOS</h1>
        </div>
        <SectionServices />
        <div id='clients' />
      </section>
      <section className="flex flex-col overflow-hidden text-center justify-center text-zinc-50 mt-16 bg-zinc-950 py-28">
        <div className="flex flex-col mb-10 w-full justify-center items-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">NOSSOS CLIENTES</h1>
          <p className="text-sm sm:text-base font-normal text-zinc-200 mt-3 max-w-[550px]">Conheça alguns de nossos clientes que tiveram sucesso em suas publicações ao contratar Maceno Films</p>
        </div>
        <ClientsCarrousel />
      </section>
      <section className="py-16">
        <div className="flex flex-col mx-auto container items-center">
          <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl uppercase font-bold">PORTFÓLIO</h1>
          <p className="text-base sm:text-lg  text-zinc-700">conheça alguns de nossos projetos</p>
        </div>
        <div className="mx-auto flex container mt-10 flex-col">
          <CardPortfolio />
          <Link href='/portfolio' className="w-60 sm:w-80 mt-10 flex mx-auto container justify-center bg-zinc-50 text-zinc-950 rounded-xl text-lg sm:text-2xl py-3 px-3 border-2 font-bold transition-all border-zinc-950 hover:bg-zinc-950 hover:text-zinc-50">
            PORTFÓLIO COMPLETO
          </Link>
        </div>
      </section>
      <section className="py-16 bg-zinc-950" id='about'>
        <div className="mx-auto container flex items-center justify-center flex-col gap-10">

          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-zinc-50 ">
            QUEM SOMOS?
          </h1>

          <div className="w-full flex justify-around items-center flex-col md:flex-row">
            <div className="px-4 md:px-0 md:max-w-[50%] md:w-[50%] flex flex-col items-center justify-center gap-10 md:gap-16 mb-10 md:mb-0">

              <h1 className="text-zinc-50 text-center font-bold text-3xl md:text-4xl lg:text-5xl">
                MACENO FILMS COMPANY
              </h1>

              <p className="text-base md:text-lg text-zinc-50 text-justify">
                Na Maceno Films Company, transformamos visões em realidade com vídeos de alta qualidade.
                Com um aumento de 54% no alcance das marcas parceiras e mais de 100.000 visualizações na internet. Especializados em vídeos institucionais, imobiliários,
                cobertura de eventos e criativos para anúncios, usamos filmagem avançada e drones para capturar cada detalhe de forma profissional.
                Acompanhe nosso dia a dia no Instagram. Solicite um orçamento e veja como podemos impulsionar sua marca.
              </p>

              <Link
                href="https://www.instagram.com/macenofilmscompany/"
                target="blank"
                className="ml-2 py-3 px-5 text-lg sm:text-2xl text-zinc-50 font-bold rounded-sm bg-blue-500 hover:bg-blue-600 transition-all duration-200">
                Ver perfil
              </Link>

            </div>

            <div className="flex justify-center items-center md:w-[50%] w-full px-4">
              <InstagramEmbed url='https://www.instagram.com/p/C7CVE3FrqjU/' width={390} captioned />
            </div>
          </div>
        </div>
      </section>
    </div >

  );
}
