import CountUp from "react-countup";

export interface CardCounterProps {
  numberCardCounter: number;
  textCardCounter: string;
  andMoney: string;
  porcents: string,
}

export function CardCounter({
  numberCardCounter,
  textCardCounter,
  andMoney,
  porcents,
}: CardCounterProps) {
  return (
    <div className="bg-zinc-950 border border-zinc-800 rounded-2xl w-full flex flex-col justify-center items-center pb-2 shadow-md px-2 h-[180px] sm:h-[160px] md:h-[230px]">
      <h1 className="text-2xl sm:text-2xl md:text-3xl xl:text-5xl font-bold bebasNeue text-center text-zinc-50 h-full flex items-center justify-center ">
        {andMoney}
        <CountUp
          duration={3}
          separator="."
          end={numberCardCounter}
          enableScrollSpy
        />
        {porcents}
      </h1>
      <span className="text-sm sm:text-xs md:text-sm lg:text-base text-zinc-100 bebasNeue text-center h-full ">
        {textCardCounter}
      </span>
    </div>
  );
}
