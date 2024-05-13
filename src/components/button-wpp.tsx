import { WhatsappLogo } from "@phosphor-icons/react";


export function ButtonWpp() {
  function sendMensage(numeroTelefone: number, mensagemPadrao: string) {
    var linkWhatsApp =
      "https://wa.me/" +
      numeroTelefone +
      "?text=" +
      encodeURIComponent(mensagemPadrao);

    window.open(linkWhatsApp, "_blank");
  }
  return (
    <div>
      <a
        onClick={() =>
          sendMensage(
            5541997169203,
            "Olá! Vim através do site Maceno Films"
          )
        }
        className="flex font-bold shadow-xl bg-neutral-800 uppercase hover:bg-neutral-900 transition-colors px-3 py-3 w-full h-full rounded-xl text-xl sm:text-2xl bebasNeue cursor-pointer items-center justify-center text-center gap-4 text-neutral-200"
      >
        Fale conosco <WhatsappLogo />
      </a>
    </div>
  );
}
