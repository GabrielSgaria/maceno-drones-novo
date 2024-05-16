import ProjectList from "@/components/project-list";
import { getAllProjects } from "@/utils/actions";
import Image from "next/image";


export default async function Portfolio() {
    const { portfolios } = await getAllProjects();
    // console.log(portfolios)
    return (
        <div>
            <ProjectList portfolios={portfolios} />
        </div>

    )
}