"use client";
import {
  DesktopIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";
import { FaFacebook, FaInstagram, FaPhone, FaPhoneSlash, FaPhoneSquareAlt, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { FaLocationDot, FaPhoneFlip } from "react-icons/fa6";

export function Footer() {
  function sendMensage(numeroTelefone: number, mensagemPadrao: string) {
    var linkWhatsApp =
      "https://wa.me/" +
      numeroTelefone +
      "?text=" +
      encodeURIComponent(mensagemPadrao);

    window.open(linkWhatsApp, "_blank");
  }

  return (
    <footer id="contacts" className="pb-8 border-t border-zinc-300/80">
      <div className="container mx-auto mt-16 flex flex-col gap-16 sm:flex-row sm:justify-around sm:gap-0">
        <div className="flex flex-col items-center sm:items-start ">
          <h1 className="text-2xl font-semibold bebasNeue text-zinc-800">
            Informações <br />
            para contato
          </h1>
          <p className="mt-8 max-w-[300px] text-center sm:text-start text-xl sm:text-base text-zinc-600">
            Sinta-se à vontade para entrar em contato conosco a qualquer
            momento.
          </p>
          <div className="mt-8 flex flex-col gap-4 text-center sm:items-start sm:justify-start">
            <a
              onClick={() =>
                sendMensage(
                  5541995020104,
                  "Olá! Vim através do site da Volpress!."
                )
              }
              className="flex cursor-pointer items-center justify-center gap-4 text-zinc-800"
            >
              <FaWhatsapp className="size-6" />
              <p className="h-6 text-base items-center justify-center font-semibold transition-all duration-500 hover:border-b-[1px] hover:border-zinc-800">
                (41) 99502-0104
              </p>
            </a>
            <a
              href="tel:+554133490338"
              className="flex cursor-pointer items-center justify-center gap-4 text-zinc-800"
            >
              <FaPhoneFlip className="size-5" />
              <p className="h-6 text-base items-center justify-center font-semibold transition-all duration-500 hover:border-b-[1px] hover:border-zinc-800">
                (41) 3349-0338
              </p>
            </a>
            <Link
              target="blank"
              href="mailto:transportes@volpress.com.br"
              className="flex cursor-pointer items-center gap-4 text-zinc-800"
            >
              <EnvelopeClosedIcon className="size-6" />
              <p className="h-6 font-semibold text-base transition-all duration-500 hover:border-b-[1px] hover:border-zinc-800">
                transportes@volpress.com.br
              </p>
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center sm:items-start">
          <h1 className="text-center text-2xl font-semibold text-zinc-800 sm:text-start ">
            Venha <br /> nos conhecer
          </h1>
          <p className="mt-8 max-w-[300px] text-center sm:text-start text-xl sm:text-base text-zinc-600">
            Volpress Transportes - Matriz
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:items-start justify-center">

            <Link
              target="blank"
              href="https://maps.app.goo.gl/WEy6ZKgSTVQibxew9"
              className="flex cursor-pointer flex-row items-center gap-4 text-zinc-800"
            >
              <FaLocationDot className="size-6" />
              <p className="h-full font-semibold text-base transition-all duration-500 hover:border-b-[1px] hover:border-zinc-800">
                Rod BR 116, Km 110, n. 22.730 Sala 2 <br />Tatuquara - 81690-500 - Curitiba PR
              </p>
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center sm:items-start">
          <h1 className="text-center text-2xl font-semibold text-zinc-800 sm:text-start ">
            Atual <br /> disponibilidade
          </h1>
          <p className="mt-8 max-w-[300px] text-center sm:text-start text-base text-zinc-600">
            Estamos sempre abertos para recebelos em nossa matriz e prestar o melhor serviço possível!
          </p>
        </div>

      </div>
      <div className="container mx-auto mt-16 flex h-8 cursor-pointer items-center justify-center space-x-2 text-zinc-500 transition-all  hover:font-semibold hover:text-zinc-950">
        <h1 className="max-w-[300px] text-sm sm:text-start ">
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
