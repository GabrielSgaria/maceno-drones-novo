'use client'
import { WhatsappLogo } from "@phosphor-icons/react";

export function ButtonWhatsAppFixed() {
    function sendMensage(numeroTelefone: number, mensagemPadrao: string) {
        var linkWhatsApp =
            "https://wa.me/" +
            numeroTelefone +
            "?text=" +
            encodeURIComponent(mensagemPadrao);

        window.open(linkWhatsApp, "_blank");
    }
    return (
        <div className="flex fixed bottom-6 right-6 z-50 rounded-full shadow-xl">
            <button
                onClick={() =>
                    sendMensage(
                        554197514990,
                        "Olá! Vim através do site da Cami Agência Criativa."
                    )
                }
                className="cursor-pointer p-2 bg-green-500 hover:bg-green-600 transition-all rounded-full shadow-md hover:shadow-2xl"><WhatsappLogo
                    className="w-9 h-9 text-zinc-50"/></button>
        </div>
    )
}