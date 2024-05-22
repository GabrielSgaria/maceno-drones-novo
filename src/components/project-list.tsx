import { PortfolioContentData } from "@/types/portfolio-info";
import { revalidateTag } from "next/cache";
import Image from "next/image";
import Link from "next/link";

export default function ProjectList({ portfolios }: PortfolioContentData) {
    revalidateTag('portfolio')
    return (
        <div className="container mx-auto py-16">
             <Link href="/" className="bg-zinc-800 hover:bg-zinc-950 p-3 rounded-xl text-zinc-50 font-bold transition-all shadow-2xl">Voltar</Link>
            <h1 className="md:text-2xl text-xl text-center font-bold uppercase">Portfólio <br /> Maceno Films Company</h1>
            {portfolios && portfolios.length > 0 ? (
                <div className="py-16 flex-wrap-reverse flex space-y-5 gap-5 justify-center px-4 sm:px-0">
                    {portfolios?.map((projeto, index) => (
                        <div key={index} className="relative opacity-75 hover:opacity-100 w-full max-w-[410px] min-h-[220px] max-h-[220px]">
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
