
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <Summary />
        <Skills />
        <Experience />
        <Education />
        <Awards />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
