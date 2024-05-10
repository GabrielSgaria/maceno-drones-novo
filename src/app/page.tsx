import { NavBar } from "@/components/nav-bar";
import { SparklesCore } from "@/components/ui/sparkles";

export default function Home() {
  return (
    <div>
      <NavBar />
      <section>
        <div className="h-[40rem] w-full bg-zinc-950 flex flex-col items-center justify-center overflow-hidden relative">
          <h1 className="text-[40px] md:text-[100px] lg:text-[130px] font-extrabold text-center text-white relative z-20 mb-3 sm:mb-0 uppercase">
            Maceno Films
          </h1>
          <p className="md:text-2xl text-[20px] lg:text-4xl font-bold text-center text-white absolute z-20 uppercase top-[250px] sm:top-[290px] tracking-[10px] sm:tracking-[30px]">
            company
          </p>
          <div className="w-[40rem] h-40 relative">

            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
            <div className="absolute inset-0 w-full h-full bg-zinc-950 [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-zinc-200">
        <div></div>

      </section>
    </div >

  );
}
