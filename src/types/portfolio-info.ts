export type PortfolioInfo = {
  id: string,
  descricao: string,
  nomeDoProjeto: string,
  slugProjeto: string,
  fotoCapa: {
    url: string
  },
  fotos: { url: string | undefined }[],
  videoDesktop: { url: string | undefined }[]
}

export type PortfolioContentData = {
  portfolios?: PortfolioInfo[]
}

export type PageProjectsData = {
  portfolio: PortfolioInfo | null
}

export type ProjectDetailsProps = {
  projectSlug: PageProjectsData
}
