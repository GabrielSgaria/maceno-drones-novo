import { CardServices } from "./card-services";

export function SectionServices() {
    return (
        <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 mx-auto container gap-10 sm:gap-20 px-4 sm:px-0">
            <CardServices
                imageCardServices="/image/fotos/DJI_0548.JPG"
                altCardServices="Institucional Image"
                textCardServices="Vídeos Institucionais"
                descCardServices="Eleve o visual da sua marca com vídeos institucionais de alta qualidade. capturo valores, missão e serviços de forma profissional, usando filmagem avançada e drones para destacar sua marca."

            />
            <CardServices
                imageCardServices="/image/fotos/dji_fly_20231122_084012_150_1700653219772_photo_optimized.jpg"
                altCardServices="Vídeos Imobiliários"
                textCardServices="Vídeos Imobiliários"
                descCardServices="Destaque imóveis com vídeos de alta qualidade. Registro cada detalhe, oferecendo uma experiência envolvente que atrai compradores em potencial."

            />
            <CardServices
                imageCardServices="https://media.graphassets.com/W0Xs3hX9RXO7VO7vdkod"
                altCardServices="Eventos"
                textCardServices="Eventos"
                descCardServices="Capture a emoção do evento com um vídeo profissional. Especializado em cobrir eventos de lutas, drift de carros, shows de manobras radicais. Com técnicas avançadas de filmagem e drones, garanto um vídeo impactante e memorável."

            />
            <CardServices
                imageCardServices="https://media.graphassets.com/SpjkHy1R5urLmKVy6uNV"
                altCardServices="Criativo para anuncios"
                textCardServices="Criativo para anuncios"
                descCardServices="Maximize o impacto da sua campanha com vídeos dinâmicos. Destaco ofertas e produtos de forma atraente, capturando a atenção do público-alvo e impulsionando suas vendas com produções inovadoras e profissionais."
            />
        </div>
    )

}