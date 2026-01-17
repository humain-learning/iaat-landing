import { Hero } from "./_components/Hero/Hero";
import { NavBar } from "./ui/NavBar/NavBar";
import { Overview as AtAGlance } from "./_components/Overview/Overview";
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
          <div>
            <Hero />
            <NavBar />
            <AtAGlance />
            <Distinction />
            <Explore />
            <Progressive />
            <Transforming />
            <ForWho />
            <Journey />
            <Collaborations />
          </div>

          {/* Desktop and tablet (md and up) only */}
          {/* <div className="hidden md:block">
            <Hero />
            <NavBar />
            <div className="flex w-full">
              <div className="w-1/4 flex justify-center bg-gray-100">
                <div className="sticky top-[16vh] z-30 h-fit ">
                  <AtAGlance />
                </div>
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
