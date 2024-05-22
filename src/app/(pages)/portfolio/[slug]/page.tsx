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
        }
      }
    }
  `;
  
  const data = await fetchHygraphQuery(query);
  return { portfolio: data?.portfolio || null };
}

export default async function PageProjects({ params: { slug } }: PageProjectsProps) {
  const data = await getProjectDetails(slug);
  const { portfolio } = data;

  if (!portfolio) {
    return <div className="flex text-2xl text-red-600 items-center justify-center h-screen w-full">Projetos não encontrados</div>;
  }

  return (
    <div>
      <ProjectDetails projectSlug={data} />
    </div>
  );
}