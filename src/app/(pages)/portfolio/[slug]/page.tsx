
import { PortfolioContent } from "@/components/portfolio-content";
import { getPageData } from "@/utils/actions";


export default async function PageProjects() {
      const { portfolio } = await getPageData();
     console.log(portfolio)
    return (
        <div>
            <PortfolioContent portfolio={portfolio} />
        </div>
    )
}