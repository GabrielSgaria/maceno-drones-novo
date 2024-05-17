import Image from "next/image";

interface CardServicesPro {
    imageCardServices: string,
    altCardServices: string,
    textCardServices: string,
    descCardServices: string,
}

export function CardServices({ imageCardServices, descCardServices, altCardServices, textCardServices }: CardServicesPro) {
    return (

        <div className="py-2 px-2 border border-zinc-200 bg-zinc-100 rounded-2xl shadow-md text-center">
            <Image width={900} height={900} alt={altCardServices} src={imageCardServices} className="object-fill w-full rounded-xl" />
            <h1 className="text-2xl md:text-3xl font-bold uppercase my-2">
                {textCardServices}
            </h1>
            <p className="text-sm sm:text-base text-justify text-zinc-700 px-3">
                {descCardServices}
            </p>
        </div>
    )
}