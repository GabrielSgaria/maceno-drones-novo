import { ButtonScrollTop } from "@/components/button-scroll-top";
import { ButtonWhatsAppFixed } from "@/components/button-whatsapp-fixed";
import ProjectList from "@/components/project-list";
import { revalidateTag, unstable_cache } from "next/cache";

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


const url = process.env.HYGRAPH_URL as string;
const token = process.env.HYGRAPH_TOKEN as string;

const fetchHygraphQuery = unstable_cache(async (query: string) => {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ query }),
            next: {
                revalidate: 1000,
                tags: ['portfolio']
            
            }
        });

        if (!response.ok) {
            throw new Error(`response erro! status: ${response.status}`);
        }

        const result = await response.json();
        return result.data;
    } catch (err) {
        console.error("Error fetching data:", err);
        return null;
    }
}, ['portfolio'], {
    revalidate: 1000,
    tags: ['portfolio']
})


export default async function Portfolio() {
  const data = await fetchHygraphQuery(query);
  if (!data || !data.portfolios) {
    return <div>Erro ao carregar o portfolio</div>;
  } else {
    // revalidateTag('portfolio')
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