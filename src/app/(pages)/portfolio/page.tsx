import { getPageData } from "@/utils/actions";
import Image from "next/image";
import Link from "next/link";

export default async function Portfolio() {
    const portfolio = await getPageData();
    console.log(portfolio)
    return (
        <div >
            <div className="container mx-auto py-16">
                <h1 className="text-3xl font-bold uppercase">Portfólio Maceno drones</h1>
            </div>
            <div className="py-16 grid grid-flow-row grid-cols-3 gap-5 container mx-auto ">
                {portfolio.portfolios.map((projeto) => (
                    <Link key={projeto.id} href={`/portfolio/${projeto.slugProjeto}`} className="relative opacity-75 hover:opacity-100">
                        <Image width={900} height={900} src={projeto.fotoCapa.url} alt={projeto.nomeDoProjeto} className="rounded-xl relative" />
                        <div className="absolute w-full top-[45%] object-center text-center">
                            <p className="text-3xl font-bold text-zinc-50 uppercase">
                                {projeto.nomeDoProjeto}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>

    )
}