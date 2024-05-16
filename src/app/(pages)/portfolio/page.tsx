import ProjectList from "@/components/project-list";
import { getAllProjects } from "@/utils/actions";
import Image from "next/image";

export default async function Portfolio() {
  const { portfolios } = await getAllProjects();

  return (
    <div>
      {portfolios.length > 0 ? (
        <ProjectList portfolios={portfolios} />
      ) : (
        <div>Não foram encontrados projetos.</div>
      )}
    </div>
  );
}
