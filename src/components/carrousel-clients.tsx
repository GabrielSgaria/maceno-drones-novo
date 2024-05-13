'use client'
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
// @ts-ignore
import "@splidejs/react-splide/css";
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import Image from "next/image";

export function ClientsCarrousel() {
    return (
        <div className="flex flex-col overflow-hidden text-center justify-center text-zinc-50 mt-16 bg-zinc-950 h-[450px]">
            <div className="flex flex-col mb-10 w-full justify-center items-center">
                <h1 className="text-3xl"> NOSSOS CLIENTES</h1>
                <p className="text-xl font-normal text-zinc-200 mt-3 max-w-[550px]">Conheça alguns de nossos clientes que tiveram sucesso em suas publicações ao contratar Maceno Films</p>
            </div>
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
                    <SplideSlide className="flex items-center justify-center">
                        <Image
                            width={100000}
                            height={100000}
                            alt=""
                            src="/image/clients/28.png"
                            className=" object-contain h-[150px] w-[150px]"
                        />
                    </SplideSlide>
                    <SplideSlide>
                        <Image
                            width={100000}
                            height={100000}
                            alt=""
                            src="/image/clients/26.png"
                            className=" object-contain h-[150px] w-[150px]"

                        />
                    </SplideSlide>
               
                </Splide>
            </div>
           
        </div>
    )
}