import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/nav-bar";
import { ButtonWhatsAppFixed } from "@/components/button-whatsapp-fixed";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maceno Films Company",
  description: "A Maceno Films Company é líder em filmagens aéreas com drones, oferecendo serviços de alta qualidade para capturar momentos incríveis de uma perspectiva única. Especializada em produções cinematográficas, eventos, imóveis e projetos corporativos, nossa equipe de pilotos certificados e cinegrafistas experientes utiliza tecnologia de ponta para garantir imagens espetaculares. Explore nossos serviços personalizados e descubra como podemos transformar sua visão em realidade com filmagens aéreas profissionais. Escolha a Maceno Films Company para uma experiência visual inigualável e leve suas produções ao próximo nível.",
  icons: '/favicon.svg',
  openGraph: {
    title: "Maceno Films Company",
    description: "A Maceno Films Company é líder em filmagens aéreas com drones, oferecendo serviços de alta qualidade para capturar momentos incríveis de uma perspectiva única. Especializada em produções cinematográficas, eventos, imóveis e projetos corporativos, nossa equipe de pilotos certificados e cinegrafistas experientes utiliza tecnologia de ponta para garantir imagens espetaculares. Explore nossos serviços personalizados e descubra como podemos transformar sua visão em realidade com filmagens aéreas profissionais. Escolha a Maceno Films Company para uma experiência visual inigualável e leve suas produções ao próximo nível.",
    url: "https://macenofilms.com.br",
    siteName: "M2 AGÊNCIA DE MARKETING",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://media.graphassets.com/IOecyeRYQrOWaAFoR4C1",
        width: 800,
        height: 600,
      },
      {
        url: "https://media.graphassets.com/IOecyeRYQrOWaAFoR4C1",
        width: 1800,
        height: 1600,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
  keywords: [
    "Filmagens aéreas com drones", "Produções cinematográficas", "Serviços de filmagem profissional", "Vídeos aéreos", "Imagens aéreas incríveis",
    "Captura de momentos únicos", "Tecnologia de filmagem", "Pilotos certificados", "Equipe de cinegrafistas experientes", "Filmagens de eventos",
    "Filmagens de imóveis", "Filmagens corporativas", "Vídeos promocionais", "Filmagens comerciais", "Vídeos institucionais", "Edição de vídeo profissional",
    "Drone cinematográfico", "Filmagens em alta definição", "Estúdio de produção audiovisual", "Filmagens personalizadas", "Produção de conteúdo audiovisual",
    "Marketing visual", "Vídeos publicitários", "Estratégias de vídeo marketing", "Experiência cinematográfica", "Inovação em filmagens", "Estúdio de vídeo profissional",
    "Filmagens criativas", "Produção de vídeo 4K", "Filmagens de alta qualidade", "Direção de fotografia", "Edição de vídeo criativa", "Narrativa visual",
    "Vídeos inspiradores", "Produção audiovisual única", "Filmagens de casamento", "Filmagens de eventos sociais", "Cobertura de eventos ao vivo",
    "Filmagens esportivas", "Vídeos de aventura", "Drone cinematográfico", "Imagens aéreas épicas", "Drone videomaker", "Vídeos em movimento",
    "Drone storytelling", "Estilo cinematográfico", "Filmagens aéreas artísticas", "Vídeos emocionantes", "Drone cinematográfico", "Filmes aéreos",
    "Produção de vídeos corporativos", "Vídeos promocionais de produtos", "Filmagens de lançamentos", "Vídeos institucionais impactantes",
    "Filmagens de marcas", "Vídeos de demonstração de produtos", "Drone filmmaking", "Produção de vídeos de marca", "Filmagens de moda", "Vídeos de viagens",
    "Drone videography", "Filmagens de paisagens", "Vídeos de natureza", "Drone empreendedorismo", "Vídeos de negócios", "Filmagens de empresas",
    "Vídeos corporativos", "Marketing de vídeo", "Vídeos virais", "Conteúdo audiovisual", "Estratégias de vídeo online", "Marketing digital através de vídeos",
    "Vídeos para redes sociais", "Campanhas de vídeo marketing", "Vídeos de alta conversão", "Estratégias de vídeo digital", "Produção de vídeos para web",
    "Vídeos publicitários online", "Marketing visual", "Vídeos criativos para empresas", "Conteúdo audiovisual persuasivo", "Vídeos emocionantes para marcas",
    "Estratégias de storytelling em vídeo", "Vídeos corporativos impactantes", "Marketing de vídeo personalizado", "Vídeos interativos", "Conteúdo audiovisual cativante",
    "Vídeos que geram engajamento", "Estratégias de vídeo publicitário", "Produção de vídeos institucionais", "Vídeos de apresentação de produtos", "Vídeos educacionais",
    "Estratégias de vídeo tutorial", "Produção de vídeos didáticos", "Vídeos explicativos", "Vídeos de treinamento corporativo", "Conteúdo audiovisual educativo",
    "Vídeos instrucionais", "Estratégias de vídeo informativo", "Vídeos de tutoriais passo a passo", "Produção de vídeos de aprendizado", "Vídeos de demonstração de produtos",
    "Vídeos explicativos de serviços", "Conteúdo audiovisual esclarecedor", "Vídeos de apresentação de soluções", "Estratégias de vídeo explicativo",
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`bg-zinc-50 ${inter.className}`} >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
