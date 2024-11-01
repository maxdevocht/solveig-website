import Clients from "@/components/Clients";
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
    </div>
  );
};

export default HomePage;
