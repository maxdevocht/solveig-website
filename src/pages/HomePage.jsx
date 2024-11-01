import Clients from "@/components/Clients";
import CTA from "@/components/CTA";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Work from "@/components/Work";
import WorkMarquee from "@/components/WorkMarquee";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Stats />
      <Clients />
      <Services />
      <WorkMarquee />
      <Work />
      <CTA />
    </div>
  );
};

export default HomePage;
