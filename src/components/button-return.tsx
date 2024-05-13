import { ArrowLeft } from "@phosphor-icons/react";
import Link from "next/link";

export function ButtonReturn(){
    return (
        <div className="container mx-auto mt-10">
            <Link href='/portfolio'><ArrowLeft className="size-12 hover:text-zinc-950 hover:bg-zinc-300 p-1 rounded-full bg-zinc-950 text-zinc-50 transition-all " /></Link>
        </div>
    )
}