import { ProjectDetailsProps } from "@/types/portfolio-info";
import { revalidateTag } from "next/cache";
import Image from "next/image";
import Link from "next/link";

export function ProjectDetails({ projectSlug }: ProjectDetailsProps) {
  const detailsProject = projectSlug.portfolio;
  revalidateTag('portfolio')

  if (!detailsProject) {
    return <div className="flex text-2xl text-red-600 items-center justify-center h-screen w-full">Detalhes do projeto não encontrados</div>;
  }

  return (
    <div className="container mx-auto py-10 px-4 sm:px-0">
      <Link href="/portfolio" className="bg-zinc-800 hover:bg-zinc-950 p-3 rounded-xl text-zinc-50 font-bold transition-all shadow-2xl">Voltar</Link>
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="md:text-2xl text-xl text-center font-bold uppercase">{detailsProject.nomeDoProjeto}</h1>
        <p className="text-base text-center md:text-lg w-full max-w-[900px] md:text-justify">{detailsProject.descricao}</p>
      </div>
      {detailsProject.fotos.length > 0 && (
        <div className="flex items-center flex-col mt-20">
          <h1 className="md:text-3xl text-2xl text-center font-bold w-full uppercase">Fotos Profissionais</h1>
          <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 gap-2 mt-10">
            {detailsProject.fotos.map((foto, i) => (
              <div key={i}>
                <Image width={900} height={900} src={`${foto.url}`} alt={detailsProject.nomeDoProjeto} className="rounded-xl" />
              </div>
            ))}
          </div>
        </div>
      )}
      {detailsProject.videoDesktop.length > 0 && (
        <div className="flex items-center flex-col mt-10 ">
          <h1 className="mb-10 md:text-3xl text-2xl text-center font-bold uppercase">Videos Profissionais</h1>
          <div className="flex flex-col items-center">
            {detailsProject.videoDesktop.map((video, i) => (
              <div key={i} className="w-full sm:w-max flex flex-col items-center justify-center mb-10 bg-zinc-100 rounded-xl shadow-xl border border-zinc-300/80 p-3">
                <video src={`${video.url}`} controls muted preload="true" className="h-full max-h-[600px] min-w-[200px] w-min rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
