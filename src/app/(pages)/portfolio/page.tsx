import ProjectList from "@/components/project-list";
import { getAllProjects } from "@/utils/actions";
import Image from "next/image";

export default async function Portfolio() {
  try {
    const { portfolios } = await getAllProjects();
    console.log("todos os portfoios inicio", portfolios, "todos os portfoios fim")
    return (
      <div>
        {portfolios.length > 0 ? (
          <ProjectList portfolios={portfolios} />
        ) : (
          <div>Não foram encontrados projetos.</div>
        )}
      </div>
    );
  } catch (error) {
    console.error("Erro ao carregar portfolios:", error);
    return <div>Erro ao carregar portfolios. Por favor, tente novamente mais tarde.</div>;
  }
}
