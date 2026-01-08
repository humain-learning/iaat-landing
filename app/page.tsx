import Image from "next/image";
import { Hero } from "./_components/Hero/Hero";
import { NavBar } from "./_components/NavBar/NavBar";
export default function Home() {
  return (
        <>
        <Hero />
        <NavBar />
        <div className="min-h-screen w-full bg-red">Rest of the landing page</div>
        <div className="min-h-screen w-full bg-red">Rest of the landing page 2</div>
        <div className="min-h-screen w-full bg-red">Rest of the landing page 3</div>
        </>
  );
}
