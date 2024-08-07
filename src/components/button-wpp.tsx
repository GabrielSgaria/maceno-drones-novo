import { BsWhatsapp } from "react-icons/bs";

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
            5541991839439,
            "Olá! Vim através do site Maceno Films Company!."
          )
        }
        className="font-bold uppercase flex shadow-xl bg-neutral-800 hover:bg-neutral-900 transition-colors p-3 w-60 sm:p-4 sm:w-72 rounded-xl text-xl sm:text-2xl bebasNeue cursor-pointer items-center justify-center text-center gap-4 text-neutral-200"
      >
        Fale conosco <BsWhatsapp />
      </a>
    </div>
  );
}
