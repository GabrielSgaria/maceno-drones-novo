import { ButtonScrollTop } from "@/components/button-scroll-top";
import { ButtonWhatsAppFixed } from "@/components/button-whatsapp-fixed";
import ProjectList from "@/components/project-list";
import { fetchHygraphQuery } from "@/utils/fetch-hygraph-query";
import { revalidateTag } from "next/cache";

const query = `query MyQuery {
  portfolios(stage: PUBLISHED) {
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
}`;

export default async function Portfolio() {
  const data = await fetchHygraphQuery(query);
  if (!data || !data.portfolios) {
    return <div>Erro ao carregar o portfolio</div>;
  } else {
    revalidateTag('portfolio')
    const { portfolios } = data;

    return (
      
      <div>
        <ButtonScrollTop />
        <ButtonWhatsAppFixed />
        <ProjectList portfolios={portfolios} />
      </div>
    );

  }

}