'use client'
import { ButtonWpp } from "@/components/button-wpp";
import { CardPortfolio } from "@/components/card-portfolio";
import { CardServices } from "@/components/card-services";
import { ClientsCarrousel } from "@/components/carrousel-clients";
import { CardCounter } from "@/components/counter-up";
import { Footer } from "@/components/footer";
import { SparklesCore } from "@/components/ui/sparkles";
import Link from "next/link";
import { InstagramEmbed } from "react-social-media-embed";


export default function Home() {
  return (
    <div>
      <section>
        <div className="h-[40rem] w-full bg-zinc-950 flex flex-col items-center justify-center overflow-hidden relative">
          <h1 className="text-[40px] md:text-[100px] lg:text-[130px] font-extrabold text-center text-white relative z-20 mb-3 sm:mb-0 uppercase">
            Maceno Films
          </h1>
          <p className="md:text-2xl text-[20px] lg:text-4xl font-bold text-center text-white absolute z-20 uppercase top-[50px] sm:top-[290px] md:top-[230px] tracking-[10px] sm:tracking-[30px]">
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

      <section className="py-16" id='services'>
        <div className="mx-auto container flex items-center justify-center mb-10">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">NOSSOS SERVIÇOS</h1>
        </div>
        <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 mx-auto container gap-10 sm:gap-20 px-4 sm:px-0">
          <CardServices
            imageCardServices="/image/fotos/DJI_0548.JPG"
            altCardServices="Institucional Image"
            textCardServices="Videos Institucionais"
            descCardServices="Eleve o visual da sua marca com vídeos institucionais de alta qualidade. capturo valores, missão e serviços de forma profissional, usando filmagem avançada e drones para destacar sua marca."

          />
          <CardServices
            imageCardServices="/image/fotos/dji_fly_20231122_084012_150_1700653219772_photo_optimized.jpg"
            altCardServices="Vídeos Imobiliários"
            textCardServices="Vídeos Imobiliários"
            descCardServices="Destaque imóveis com vídeos de alta qualidade. Registro cada detalhe, oferecendo uma experiência envolvente que atrai compradores em potencial."

          />
          <CardServices
            imageCardServices="/image/fotos/dji_fly_20231122_083044_135_1700652653902_photo_optimized.jpg"
            altCardServices="Eventos"
            textCardServices="Eventos"
            descCardServices="Capture a emoção do evento com um vídeo profissional. Especializado em cobrir eventos de lutas, drift de carros, shows de manobras radicais. Com técnicas avançadas de filmagem e drones, garanto um vídeo impactante e memorável."

          />
          <CardServices
            imageCardServices="/image/fotos/res1.jpg"
            altCardServices="Criativo para anuncios"
            textCardServices="Criativo para anuncios"
            descCardServices="Maximize o impacto da sua campanha com vídeos dinâmicos. Destaco ofertas e produtos de forma atraente, capturando a atenção do público-alvo e impulsionando suas vendas com produções inovadoras e profissionais."
          />
        </div>
      </section>
      <div id='clients'>
        <ClientsCarrousel />
      </div>
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
      <section className="py-16 bg-zinc-950">
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

              <Link href='www.instagram.com/macenofilmscompany/' className="ml-2 py-3 px-5 text-lg sm:text-2xl text-zinc-50 font-bold rounded-sm bg-blue-500 hover:bg-blue-600 transition-all duration-200">
                Ver perfil
              </Link>

            </div>

            <div className="flex justify-center items-center md:w-[50%] w-full px-4">
              <InstagramEmbed url='https://www.instagram.com/p/C7CVE3FrqjU/' width={390} captioned />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div >

  );
}
