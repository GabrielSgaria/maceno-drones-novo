import { sendMensage } from "@/utils/actions";
import { WhatsappLogo } from "@phosphor-icons/react";


export function ButtonWpp() {
  return (
    <div>
      <a
        onClick={() =>
          sendMensage(
            5541991839439,
            "Olá! Vim através do site Maceno Films Company!."
          )
        }
        className="flex font-bold shadow-xl bg-neutral-800 uppercase hover:bg-neutral-900 transition-colors px-4 py-3 w-full h-full rounded-xl text-lg md:text-xl lg:text-2xl bebasNeue cursor-pointer items-center justify-center text-center gap-4 text-neutral-200"
      >
        Fale conosco <WhatsappLogo />
      </a>
    </div>
  );
}
