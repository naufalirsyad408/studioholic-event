import "@/App.css";
import { useLenis } from "@/components/site/smooth";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { Services } from "@/components/site/Services";
import { Works } from "@/components/site/Works";
import { Showreel } from "@/components/site/Showreel";
import { Archive } from "@/components/site/Archive";
import { Packages } from "@/components/site/Packages";
import { Process } from "@/components/site/Process";
import { Faq } from "@/components/site/Faq";
import { Cta, Footer, FloatingWa } from "@/components/site/Cta";

function App() {
  useLenis();
  return (
    <div className="site">
      <div className="grain" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Works />
        <Archive />
        <Showreel />
        <Packages />
        <Process />
        <Faq />
        <Cta />
      </main>
      <Footer />
      <FloatingWa />
    </div>
  );
}

export default App;
