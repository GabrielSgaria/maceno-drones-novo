"use client";
import {
  DesktopIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";
import { FaFacebook, FaInstagram, FaPhone, FaPhoneSlash, FaPhoneSquareAlt, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { FaLocationDot, FaPhoneFlip } from "react-icons/fa6";
import { sendMensage } from "@/utils/actions";
import { InstagramLogo } from "@phosphor-icons/react";

export function Footer() {


  return (
    <footer id="contacts" className="pb-8 border-t border-zinc-300/80">
      <div className="container mx-auto mt-16 flex flex-col gap-16 md:flex-row md:justify-around md:gap-0">
        <div className="flex flex-col items-center md:items-start ">
          <h1 className="text-2xl font-semibold bebasNeue text-zinc-800">
            Informações <br />
            para contato
          </h1>
          <p className="mt-8 max-w-[300px] text-center md:text-start text-xl md:text-base text-zinc-600">
            Sinta-se à vontade para entrar em contato conosco a qualquer
            momento.
          </p>
          <div className="mt-8 flex flex-col gap-4 text-center md:items-start md:justify-start">
            <a
              onClick={() =>
                sendMensage(
                  5541991839439,
                  "Olá! Vim através do site Maceno Films Company!."
                )
              }
              className="flex cursor-pointer items-center justify-center gap-4 text-zinc-800"
            >
              <FaWhatsapp className="size-6" />
              <p className="h-6 text-base items-center justify-center font-semibold transition-all duration-500 hover:border-b-[1px] hover:border-zinc-800">
                (41) 99183-9439
              </p>
            </a>
            <Link
              target="blank"
              href="mailto:transportes@volpress.com.br"
              className="flex cursor-pointer items-center gap-4 text-zinc-800"
            >
              <EnvelopeClosedIcon className="size-6" />
              <p className="h-6 font-semibold text-base transition-all duration-500 hover:border-b-[1px] hover:border-zinc-800">
                fernandomaceno12@gmail.com.br
              </p>
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-center text-2xl font-semibold text-zinc-800 md:text-start ">
            Conheça <br /> nossas redes sociais
          </h1>
          <div className="mt-8 flex flex-col items-center gap-4 md:items-start justify-center">

          <Link
              target="blank"
              href="https://www.instagram.com/macenofilmscompany/"
              className="flex cursor-pointer items-center gap-2 text-zinc-800"
            >
              <InstagramLogo className="size-6" />
              <p className="h-6 font-semibold text-base transition-all duration-500 hover:border-b-[1px] hover:border-zinc-800">
                @macenofilmscompany
              </p>
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-center text-2xl font-semibold text-zinc-800 md:text-start ">
            Atual <br /> disponibilidade
          </h1>
          <p className="mt-8 max-w-[300px] text-center md:text-start text-base text-zinc-600">
            Estamos sempre abertos para recebelos em nossa matriz e prestar o melhor serviço possível!
          </p>
        </div>

      </div>
      <div className="container mx-auto mt-16 flex h-8 cursor-pointer items-center justify-center space-x-2 text-zinc-500 transition-all  hover:font-semibold hover:text-zinc-950">
        <h1 className="max-w-[300px] text-sm md:text-start ">
          <Link target="blank" href="https://portfolio-sgaria.vercel.app">
            Desenvolvido por Gabriel Sgaria
          </Link>
        </h1>
        <div>
          <DesktopIcon className="size-4 items-center " />
        </div>
      </div>
    </footer>
  );
}
