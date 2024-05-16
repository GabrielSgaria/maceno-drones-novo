import ProjectList from "@/components/project-list";
import { getAllProjects } from "@/utils/actions";

export default async function Portfolio() {
  try {
    const { portfolios } = await getAllProjects();

    if (!portfolios || !Array.isArray(portfolios)) {
      throw new Error("Portfolios não estão no formato esperado.");
    }

    console.log(portfolios);

    return (
      <div>
        <ProjectList portfolios={portfolios} />
      </div>
    );
  } catch (error) {
    console.error("Erro ao carregar portfolios:", error);
    return <div>Erro ao carregar portfolios. Por favor, tente novamente mais tarde.</div>;
  }
}
