import { PortfolioContentData } from "@/types/portfolio-info"
import { fetchHygraphQuery } from "./fetch-hygraph-query"

export const getPageData = async (): Promise<PortfolioContentData> => {
    const query = `query MyQuery {
          portfolio(where: {slugProjeto: "heliponto"}, stage: PUBLISHED) {
            id
            descricao
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
        `
    return fetchHygraphQuery(
      query
    )
  }