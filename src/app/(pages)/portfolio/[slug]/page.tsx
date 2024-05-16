import { ProjectDetails } from "@/components/project-details";
import { PageProjectsData } from "@/types/portfolio-info";
import { fetchHygraphQuery } from "@/utils/fetch-hygraph-query";

type PageProjectsProps = {
  params: {
    slug: string;
  }
}

const getProjectDetails = async (slugProjeto: string): Promise<PageProjectsData> => {
  const query = `
    query MyQuery {
      portfolio(where: {slugProjeto: "${slugProjeto}"}) {
        descricao
        id
        nomeDoProjeto
        slugProjeto
        fotoCapa {
          url
        }
        fotos {
          url
        }
        videoDesktop {
          url
        }F
      }
    }
`
  return await fetchHygraphQuery(
    query
  )
}

export default async function PageProjects({ params: { slug } }: PageProjectsProps) {
  const project = await getProjectDetails(slug);
  // console.log(project)
  return (
    <div>
      <ProjectDetails projectSlug={project} />
    </div>
  )
}