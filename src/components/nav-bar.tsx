"use client";
import Link from "next/link";
import { DotsHorizontalIcon, PersonIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import Image from "next/image";

export function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            closeMenu();
        }
    };

    return (
        <div className="z-50 relative border-b border-zinc-800">
            <div className="bg-zinc-950">
                <div
                    className={`container mx-auto flex flex-row items-center justify-between gap-8 py-6 text-lg px-8  ${isMenuOpen ? "flex-col" : "flex-row "
                        }`}
                >
                    <div className="flex h-9 w-9 items-center justify-center lg:hidden">
                        <DotsHorizontalIcon
                            onClick={handleMenuToggle}
                            className="size-8 text-zinc-50 hover:size-9 focus:outline-none lg:hidden"
                        />
                    </div>
                    <div className="w-10">
                        <Link href="/" onClick={closeMenu}>
                            <Image
                                width={400}
                                height={400}
                                src="/image/maceno-films-company-logo.svg"
                                alt="Logo Principal"
                            />
                        </Link>
                    </div>

                    <div
                        className={`lg:flex lg:items-center lg:gap-8 ${isMenuOpen ? "flex" : "hidden"
                            }`}
                    >
                        <nav className="md:flex grow justify-center ">
                            <div
                                className={`flex min-w-0 flex-row items-center justify-center gap-8 text-base ${isMenuOpen ? "flex-col" : "flex-row"
                                    }`}
                            >
                                <Link
                                    onClick={closeMenu}
                                    href="/"
                                    className="cursor-pointer px-3 bg-zinc-950 text-lg text-center text-zinc-50/70 hover:text-zinc-50 transition-all uppercase hover:border hover:border-zinc-50 rounded-full w-[90px] h-[30px]"
                                >
                                    Sobre
                                </Link>
                                <button
                                    onClick={() => scrollToSection("services")}
                                    className="cursor-pointer px-3 bg-zinc-950 text-lg text-zinc-50/70 hover:text-zinc-50 transition-all uppercase hover:border hover:border-zinc-50 rounded-full w-[120px] h-[30px]"
                                >
                                    Serviços
                                </button>
                                <button
                                    onClick={() => scrollToSection("results")}
                                    className="cursor-pointer px-3 bg-zinc-950 text-lg text-zinc-50/70 hover:text-zinc-50 transition-all uppercase hover:border hover:border-zinc-50 rounded-full w-[120px] h-[30px]"
                                >
                                    Projetos
                                </button>
                                <button
                                    onClick={() => scrollToSection("team")}
                                    className="cursor-pointer px-3 bg-zinc-950 text-lg text-zinc-50/70 hover:text-zinc-50 transition-all uppercase hover:border hover:border-zinc-50 rounded-full w-[170px] h-[30px]"
                                >
                                    Equipamentos
                                </button>
                                <button
                                    onClick={() => scrollToSection("clients")}
                                    className="cursor-pointer px-3 bg-zinc-950 text-lg text-zinc-50/70 hover:text-zinc-50 transition-all uppercase hover:border hover:border-zinc-50 rounded-full w-[120px] h-[30px]"
                                >
                                    Contato
                                </button>
                            </div>
                        </nav>
                    </div>

                    <button
                        onClick={() => scrollToSection("contacts")}
                        className="cursor-pointer px-3 bg-zinc-950 saira text-2xl text-zinc-50/70 hover:text-zinc-50 transition-all"
                    >
                        <PersonIcon className="size-7 w-8 transition-all duration-300 hover:size-8" />
                    </button>
                </div>
            </div>
        </div>
    );
}
