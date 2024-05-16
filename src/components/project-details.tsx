import { PageProjectsData } from "@/types/portfolio-info";
import Image from "next/image";

type ProjectDetailsProps = {
  projectSlug: {
    portfolio: {
      id: string,
      descricao: string,
      nomeDoProjeto: string,
      slugProjeto: string,
      fotoCapa: {
        url: string
      },
      fotos: [
        {
          url: string | undefined
        }
      ]
      videoDesktop: {
        url: string | undefined
      }

    }
  }
}

export async function ProjectDetails({ projectSlug }: ProjectDetailsProps) {
  let detailsProject = projectSlug.portfolio
  return (
    <div>
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold uppercase">{detailsProject.nomeDoProjeto}</h1>
      </div>
      <div className="py-16 container mx-auto ">
        {detailsProject.fotos.map((fotos, i) => (
          <div key={i}>
            <Image width={900} height={900} src={`${fotos.url}`} alt={detailsProject.nomeDoProjeto} />
          </div>
        ))}
      </div>
    </div>
  )
}