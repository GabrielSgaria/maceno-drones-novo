import { PortfolioContentData } from "@/types/portfolio-info";
import { revalidateTag } from "next/cache";
import Image from "next/image";
import Link from "next/link";

export default function ProjectList({ portfolios }: PortfolioContentData) {
    revalidateTag('portfolio')
    return (
        <div className="container mx-auto py-16">
            <h1 className="text-3xl font-bold uppercase">Portfólio Maceno drones</h1>
            {portfolios && portfolios.length > 0 ? (
                <div className="py-16 flex-wrap-reverse flex space-y-5 gap-5 justify-center">
                    {portfolios?.map((projeto, index) => (
                        <div key={index} className="relative opacity-75 hover:opacity-100 max-w-[410px] max-h-[250px]">
                            <Link href={`/portfolio/${projeto.slugProjeto}`} className="w-full h-full">
                                <Image
                                    width={900}
                                    height={900}
                                    src={projeto.fotoCapa.url}
                                    alt={projeto.nomeDoProjeto}
                                    className="rounded-xl object-cover w-full h-full"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <p className="text-2xl font-bold text-zinc-50 uppercase w-full text-center">
                                        {projeto.nomeDoProjeto}
                                    </p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            ) : (
                <div>Não foram encontrados projetos.</div>
            )}
        
        </div>
    );
}
