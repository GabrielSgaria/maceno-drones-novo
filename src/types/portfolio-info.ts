export type PortfolioInfo = {
    id: string,
    descricao: string,
    nomeDoProjeto: string,
    slugProjeto: string,
    fotoCapa: {
        url: string
    },
    fotos: {
        url: string
    }
    videoDesktop: {
        url: string
    }
    
}

export type PortfolioContentData = {
    portfolio: PortfolioInfo,
}