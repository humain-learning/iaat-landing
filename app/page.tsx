import { Hero } from "./_components/Hero/Hero";
import { NavBar } from "./ui/NavBar/NavBar";
import { AtAGlance } from "./_components/AtAGlance/AtAGlance";
import { Distinction } from "./_components/Distinction/Distinction";
import { Explore } from "./_components/Explore/Explore";
import { Progressive } from "./_components/Progressive/Progressive";
import { Transforming } from "./_components/Transforming/Transforming";
import { ForWho } from "./_components/ForWho/ForWho";
import { Collaborations } from "./_components/Collaborations/Collaborations";
import { Journey } from "./_components/Journey/Journey";



export default function Home() {
  return (
        <div>
          {/* Mobile only */}
          <div className="flex flex-col items-center justify-center">
            <Hero />
            <NavBar />
            <AtAGlance />
            <Distinction />
            <Explore />
            <Progressive />
            <Transforming />
            <Journey />
            <ForWho />
            <Collaborations />
          </div>

          {/* Desktop and tablet (md and up) only */}
          {/* <div className="hidden md:block">
            <Hero />
            <NavBar />
            <div className="flex w-full">
              <div className="w-1/4">
                <AtAGlance />
              </div>
              <div className="w-3/4 flex flex-col">
                <Distinction />
                <Explore />
                <Progressive />
                <Transforming />
                <Journey />
                <ForWho />
                <Collaborations />
              </div>
            </div>
          </div> */}
        </div>
  );
}
