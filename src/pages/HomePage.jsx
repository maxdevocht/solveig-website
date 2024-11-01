import Clients from "@/components/Home/Clients";
import CTA from "@/components/Home/CTA";
import Header from "@/components/Home/Header";
import Services from "@/components/Home/Services";
import Stats from "@/components/Home/Stats";
import Work from "@/components/Home/Work";
import WorkMarquee from "@/components/Home/WorkMarquee";

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
