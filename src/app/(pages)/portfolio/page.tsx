import ProjectList from "@/components/project-list";
import { getAllProjects } from "@/utils/actions";

export default async function Portfolio() {
    const { portfolios } = await getAllProjects();
    return (
        <div>
            <ProjectList portfolios={portfolios} />
        </div>

    )
}