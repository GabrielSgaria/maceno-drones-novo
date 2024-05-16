import { PortfolioContentData } from "@/types/portfolio-info";
import Image from "next/image";
import Link from "next/link";

export default function ProjectList({ portfolios }: PortfolioContentData) {
    return (
        <div className="container mx-auto py-16">
            <h1 className="text-3xl font-bold uppercase">Portfólio Maceno drones</h1>
            {/* {portfolios.length > 0 ? (
                <div className="py-16 grid grid-flow-row grid-cols-3 gap-5">
                    {portfolios.map((projeto, index) => (
                        <div key={index} className="relative opacity-75 hover:opacity-100">
                            <Link href={`/portfolio/${projeto.slugProjeto}`}>
                                <Image
                                    width={900}
                                    height={900}
                                    src={projeto.fotoCapa.url}
                                    alt={projeto.nomeDoProjeto}
                                    className="rounded-xl"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <p className="text-3xl font-bold text-zinc-50 uppercase">
                                        {projeto.nomeDoProjeto}
                                    </p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            ) : (
                <div>Não foram encontrados projetos.</div>
            )} */}
        
        </div>
    );
}
