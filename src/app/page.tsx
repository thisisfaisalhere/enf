import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { NewLaunches } from "@/components/sections/new-launches";
import { About } from "@/components/sections/about";
import { AiRecommender } from "@/components/sections/ai-recommender";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <NewLaunches />
      <About />
      <AiRecommender />
      <Contact />
    </>
  );
}
