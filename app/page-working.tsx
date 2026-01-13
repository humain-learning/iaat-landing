import Image from "next/image";
import { Hero } from "./_components/Hero/Hero";
import { NavBar } from "./ui/NavBar/NavBar";
import { AtAGlance } from "./_components/AtAGlance";
import { Distinction } from "./_components/Distinction/Distinction";
import { Explore } from "./_components/Explore/Explore";




export default function Home() {
  return (
        <>
        <Hero />
        <NavBar />
        <AtAGlance />
        <Distinction />
        <Explore />
        </>
  );
}
