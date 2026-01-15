import { Hero } from "./_components/Hero/Hero";
import { NavBar } from "./ui/NavBar/NavBar";
import { AtAGlance } from "./_components/AtAGlance/AtAGlance";
import { Distinction } from "./_components/Distinction/Distinction";
import { Explore } from "./_components/Explore/Explore";
import { Progressive } from "./_components/Progressive/Progressive";
// import { Transforming } from "./_components/Transforming/Transforming";
import { ForWho } from "./_components/ForWho/ForWho";
import { Collaborations } from "./_components/Collaborations/Collaborations";
import { Journey } from "./_components/Journey/Journey";



export default function Home() {
  return (
        <>
        <Hero />
        <NavBar />
        <AtAGlance />
        <Distinction />
        <Explore />
        <Progressive />
        {/* <Transforming /> */}
        <Journey />
        <ForWho />
        <Collaborations />
        </>
  );
}
