
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Summary } from "@/components/Summary";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Awards } from "@/components/Awards";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <Summary />
          <Skills />
          <Experience />
          <Education />
          <Awards />
          <Contact />
        </div>
      </main>
    </div>
  );
};

export default Index;
