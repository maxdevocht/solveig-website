import { useParams } from "react-router-dom";
import { workSectionData } from "@/assets/assets";
import { statsProject } from "@/assets/assets";
import Marquee from "@/components/Marquee";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Fade from "@/components/Fade";

const ProjectPage = () => {
  const { projectId } = useParams();

  const project = workSectionData.find((item) => item.id === projectId);

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <div id="project">
      <Fade blur={true}>
        <section className="mt-20 px-6 md:px-12 pt-8">
          <div className="pt-12">
            <h1 className="text-7xl font-semibold text-center">
              {project.title}
            </h1>
          </div>
        </section>

        <section className="pt-12 md:pt-16 lg:pt-24 px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-20">
            {statsProject.map((stats, index) => (
              <div key={index} className="flex flex-col items-start gap-5">
                <hr className="w-full h-1" />
                <div className="flex flex-col items-start gap-1">
                  <p className="text-sm tracking-widest">{stats.title}</p>
                  <div className="flex gap-2">
                    <h1 className="count-up-text text-base lg:text-lg font-semibold tracking-wider">
                      {stats.text}
                    </h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="header" className="mt-20 px-6 md:px-12 py-8">
          <div>
            <Marquee />
            <img
              src={project.image.src}
              alt={project.image.alt}
              className="w-full object-cover"
            />
          </div>
        </section>

        <section className="mt-20 px-6 md:px-12 py-8">
          <div className="w-full flex flex-col md:mb-18 lg:mb-20">
            <div>
              <img src="./star.svg" alt="star image" className="mb-2" />
              <h2 className="rb-5 mb-5 text-4xl font-semibold md:mb-6 md:text-5xl lg:text-6xl">
                BRAND NEW BRANDING
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="w-full">
                <AccordionTrigger>
                  <div className="flex items-center gap-2">
                    <img
                      src="./star.svg"
                      alt="star image"
                      className="w-8 h-8"
                    />
                    <h2 className="font-semibold text-base">CHALLENGE</h2>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  Eu ultrices vitae auctor eu augue ut. Purus gravida quis
                  blandit turpis cursus in hac habitasse. Arcu dictum varius
                  duis at consectetur lorem donec. Ultricies lacus sed turpis
                  tincidunt id. Cursus sit amet dictum sit amet. Mi tempus
                  imperdiet nulla malesuada pellentesque elit eget. Nunc
                  lobortis mattis aliquam faucibus purus in massa. Consequat
                  mauris nunc congue nisi vitae.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  <div className="flex items-center gap-2">
                    <img
                      src="./star.svg"
                      alt="star image"
                      className="w-8 h-8"
                    />
                    <h2 className="font-semibold text-base">GOAL</h2>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  Dolor magna eget est lorem ipsum dolor sit amet consectetur.
                  Bibendum est ultricies integer quis auctor elit sed. Odio
                  morbi quis commodo odio aenean sed. Pharetra diam sit amet
                  nisl suscipit adipiscing. Eget nunc scelerisque viverra
                  mauris. Senectus et netus et malesuada fames.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  <div className="flex items-center gap-2">
                    <img
                      src="./star.svg"
                      alt="star image"
                      className="w-8 h-8"
                    />
                    <h2 className="font-semibold text-base">SOLUTION</h2>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et
                  ligula. Massa tempor nec feugiat nisl.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </Fade>
    </div>
  );
};

export default ProjectPage;
