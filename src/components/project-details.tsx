import { ProjectDetailsProps } from "@/types/portfolio-info";
import { revalidateTag } from "next/cache";
import Image from "next/image";

export function ProjectDetails({ projectSlug }: ProjectDetailsProps) {
  const detailsProject = projectSlug.portfolio;
   revalidateTag('portfolio')

  if (!detailsProject) {
    return <div>Project details not found</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="text-3xl font-bold uppercase">{detailsProject.nomeDoProjeto}</h1>
        <p className="text-lg w-full max-w-[900px] text-justify">{detailsProject.descricao}</p>
      </div>
      {detailsProject.fotos.length > 0 && (
        <div className="flex items-center flex-col mt-20">
          <h1 className="text-3xl font-bold text-start w-full uppercase">Fotos Profissionais</h1>
          <div className="grid grid-flow-row grid-cols-2 gap-2 mt-10">
            {detailsProject.fotos.map((foto, i) => (
              <div key={i}>
                <Image width={900} height={900} src={`${foto.url}`} alt={detailsProject.nomeDoProjeto} className="rounded-xl" />
              </div>
            ))}
          </div>
        </div>
      )}
      {detailsProject.videoDesktop.length > 0 && (
        <div className="flex items-center flex-col mt-20">
          <h1 className="text-3xl font-bold text-start w-full uppercase">Videos Profissionais</h1>
          <div className="flex flex-col items-center">
            {detailsProject.videoDesktop.map((video, i) => (
              <div key={i} className="w-max flex flex-col items-center justify-center mb-10 bg-zinc-200 rounded-xl shadow-xl border border-zinc-300/80 p-3">
                <video src={`${video.url}`} controls muted preload="true" className="h-full max-h-[600px] min-w-[200px] w-min rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
