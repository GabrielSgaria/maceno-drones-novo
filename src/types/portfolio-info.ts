export type PortfolioInfo =
    {
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

export type PortfolioContentData = {
    portfolios: PortfolioInfo[],
}

export type PageProjectsData = {
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
                url: string | null
            }
        ]
        videoDesktop: [
            {
                url: string | null
            }
        ]

    }
}

export type  ProjectDetailsProps = {
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
            url: string | null
          }
        ]
        videoDesktop: [
          {
            url: string | null
          }
        ]
  
      }
    }
  }
