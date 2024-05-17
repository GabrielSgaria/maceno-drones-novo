import ProjectList from "@/components/project-list";
import { fetchHygraphQuery } from "@/utils/fetch-hygraph-query";

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
  }

  const { portfolios } = data;

  return (
    <div>
      <ProjectList portfolios={portfolios} />
    </div>
  );
}