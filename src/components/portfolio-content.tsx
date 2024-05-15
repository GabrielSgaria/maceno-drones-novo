import { PortfolioContentData } from "@/types/portfolio-info";
import Image from "next/image";

export async function PortfolioContent({ portfolios }: PortfolioContentData) {
  console.log(portfolios, "opa")
  return (
    <div>
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold uppercase">{portfolios[0].nomeDoProjeto}</h1>
      </div>
      <div className="py-16 container mx-auto ">
        <Image width={900} height={900} src={portfolios[0].fotoCapa.url} alt={portfolios[0].nomeDoProjeto} />
      </div>
    </div>
  )
}