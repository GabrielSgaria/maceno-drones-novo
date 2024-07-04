import { CardServices } from "./card-services";

export function SectionServices() {
    return (
        <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 mx-auto container gap-10 sm:gap-20 px-4 sm:px-0">
            <CardServices
                imageCardServices="https://media.graphassets.com/uWhffDxgSdmKz738yXU2"
                altCardServices="Institucional Image"
                textCardServices="Vídeos Institucionais"
                descCardServices="Eleve o visual da sua marca com vídeos institucionais de alta qualidade. capturo valores, missão e serviços de forma profissional, usando filmagem avançada e drones para destacar sua marca."

            />
            <CardServices
                imageCardServices="https://media.graphassets.com/TJVkxHKyS6yVOTlk9fEa"
                altCardServices="Gravação de Set"
                textCardServices="Vídeos Imobiliários"
                descCardServices="Nada melhor do que um vídeo set para mostrar o seu trabalho em grande estilo e abrir ainda mais as portas do mercado. Grave o seu vídeo set em Full HD para você postar em sites como YouTube, Twitch e Vimeo, com áudio masterizado."

            />
            <CardServices
                imageCardServices="https://media.graphassets.com/cgsgFmJVQtydDlQYeB7s"
                altCardServices="Eventos"
                textCardServices="Eventos"
                descCardServices="Capture a emoção do evento com um vídeo profissional. Especializado em cobrir eventos de lutas, drift de carros, shows de manobras radicais. Com técnicas avançadas de filmagem e drones, garanto um vídeo impactante e memorável."

            />
            <CardServices
                imageCardServices="https://media.graphassets.com/0K7eMTOQ0O1qm4cOVowA"
                altCardServices="Criativo para anuncios"
                textCardServices="Criativo para anuncios"
                descCardServices="Maximize o impacto da sua campanha com vídeos dinâmicos. Destaco ofertas e produtos de forma atraente, capturando a atenção do público-alvo e impulsionando suas vendas com produções inovadoras e profissionais."
            />
        </div>
    )

}