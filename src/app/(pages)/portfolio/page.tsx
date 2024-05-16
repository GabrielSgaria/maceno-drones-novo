import ProjectList from "@/components/project-list";
import { fetchHygraphQuery } from "@/utils/fetch-hygraph-query";

const query = `query MyQuery {
    portfolios (stage: PUBLISHED) {
      descricao
      nomeDoProjeto
      id
      slugProjeto
      videoDesktop {
        url
      }
      fotoCapa {
        url
      }
      fotos {
        url
      }
    }
  }
`
export default async function Portfolio() {
    const { portfolios } = await fetchHygraphQuery(query);
    
    return (
        <div>
            <ProjectList/>
        </div>
    )
}