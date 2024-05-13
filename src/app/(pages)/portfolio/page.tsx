import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
    return (
        <div >
            <div className="container mx-auto py-16">
                <h1 className="text-3xl font-bold uppercase">Portfólio Maceno drones</h1>
            </div>
            <div className="py-16 grid grid-flow-row grid-cols-3 gap-5 container mx-auto ">
                <Link href='/' className="relative opacity-75 hover:opacity-100">
                    <Image width={900} height={900} src='/image/fotos/heli1.jpg' alt="1" className="rounded-xl relative " />
                    <div className="absolute w-full top-[45%] object-center text-center">
                        <p className="text-3xl  font-bold text-zinc-50 ">
                            HELIPORTO
                        </p>
                    </div>
                </Link>                
            </div>
        </div>

    )
}