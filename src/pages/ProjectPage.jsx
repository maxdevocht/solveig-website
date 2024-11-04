import { useParams } from "react-router-dom";
import { workSectionData } from "@/assets/assets";
import { statsProject } from "@/assets/assets";
import Marquee from "@/components/Marquee";

const ProjectPage = () => {
  const { projectId } = useParams();

  const project = workSectionData.find((item) => item.id === projectId);

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <div id="project">
      <section className="mt-20 px-6 md:px-12 pt-8">
        <div className="py-12">
          <h1 className="text-7xl font-semibold text-center">
            {project.title}
          </h1>
        </div>
      </section>

      <section className="pt-12 md:pt-16 lg:pt-24 px-6 md:px-12 pb-12">
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
    </div>
  );
};

export default ProjectPage;
