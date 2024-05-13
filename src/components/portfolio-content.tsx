import { PortfolioContentData } from "@/types/portfolio-info";
import Image from "next/image";

export async function PortfolioContent({portfolio}: PortfolioContentData) {
  return (
    <div>
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold uppercase">{portfolio.nomeDoProjeto}</h1>
      </div>
      <div className="py-16 container mx-auto ">
        <Image width={900} height={900} src={portfolio.fotoCapa.url} alt={portfolio.nomeDoProjeto}/> 
      </div>
    </div>
  )
}