import Hero from "../sections/Hero";
import Services from "../sections/Services";
import AdvancedPortfolio from "../sections/AdvancedPortfolio";
import ProcessAndTestimonials from "../sections/ProcessAndTestimonials";

export default function Home() {
  return (
    <main>
      <Hero />
   
      <AdvancedPortfolio />
      <ProcessAndTestimonials />
    </main>
  );
}