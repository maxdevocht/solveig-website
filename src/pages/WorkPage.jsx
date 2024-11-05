import Fade from "@/components/Fade";
import CTA from "@/components/Home/CTA";
import Work from "@/components/Work/Work";
import WorkHeader from "@/components/Work/WorkHeader";

const WorkPage = () => {
  return (
    <div id="work">
      <Fade blur={true}>
        <WorkHeader />
        <Work />
        <CTA />
      </Fade>
    </div>
  );
};

export default WorkPage;
