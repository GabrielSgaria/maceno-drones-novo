export function sendMensage(numeroTelefone: number, mensagemPadrao: string) {
    var linkWhatsApp =
      "https://wa.me/" +
      numeroTelefone +
      "?text=" +
      encodeURIComponent(mensagemPadrao);

    window.open(linkWhatsApp, "_blank");
  }