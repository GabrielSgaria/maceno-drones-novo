export type PortfolioInfo = {
  id: string,
  descricao: string,
  nomeDoProjeto: string,
  slugProjeto: string,
  fotoCapa: {
    url: string
  },
  fotos: Array<{ url: string | undefined }>,
  videoDesktop: Array<{ url: string | undefined }>
}

export type PortfolioContentData = {
  portfolios?: PortfolioInfo[]
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

export type ProjectDetailsProps = {
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



// export type PortfolioInfo =
//   {
//     id: string,
//     descricao: string,
//     nomeDoProjeto: string,
//     slugProjeto: string,
//     fotoCapa: {
//       url: string
//     },
//     fotos: [
//       {
//         url: string | undefined
//       }
//     ]
//     videoDesktop: {
//       url: string | undefined
//     }
//   }