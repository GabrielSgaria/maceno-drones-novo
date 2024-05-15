import { PortfolioContentData } from "@/types/portfolio-info"
import { fetchHygraphQuery } from "./fetch-hygraph-query"

export const getPageData = async (): Promise<PortfolioContentData> => {
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
  return fetchHygraphQuery(
    query
  )
}