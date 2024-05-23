import { imagesLogo } from "@/lib/images-clients";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
// @ts-ignore
import "@splidejs/react-splide/css";
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import Image from "next/image";

export function ClientsCarrousel() {
    return (
        <div>
            <Splide
                options={{
                    type: "loop",
                    focus: "center",
                    autoPlay: "play",
                    arrows: false,
                    pagination: false,
                    drag: "free",
                    gap: 80,
                    padding: 180,
                    autoWidth: true,
                    perPage: 1,
                    autoScroll: {
                        speed: 1,
                        autoStart: true,
                    },
                }}
                extensions={{ AutoScroll }}
            >
                {imagesLogo.map((image, index) => (

                    <SplideSlide key={index} className="flex items-center justify-center">

                        <Image
                            width={100000}
                            height={100000}
                            alt={image.alt}
                            src={image.src}
                            className="object-contain w-[120px] h-[120px] sm:h-[120px] sm:w-[120px]"
                        />
                    </SplideSlide>
                ))}





               

            </Splide>
        </div>
    )
}