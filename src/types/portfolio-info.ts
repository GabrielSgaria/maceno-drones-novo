export type PortfolioInfo = [
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
                url: string | null
            }
        ]
        videoDesktop: {
            url: string | null
        }

    }
]

export type PortfolioContentData = {
    portfolios: PortfolioInfo,
}