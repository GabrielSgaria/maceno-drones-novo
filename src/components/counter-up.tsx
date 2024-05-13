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
    <div className="bg-zinc-950 border border-zinc-800 rounded-2xl w-full flex flex-col justify-center items-center gap-8 py-5 shadow-md px-2">
      <h1 className="sm:text-4xl text-5xl font-bold bebasNeue text-center text-zinc-50">
        {andMoney}
        <CountUp
          duration={3}
          separator="."
          end={numberCardCounter}
          enableScrollSpy
        />
        {porcents}
      </h1>
      <span className="sm:text-base text-xs text-zinc-100 bebasNeue text-center ">
        {textCardCounter}
      </span>
    </div>
  );
}
