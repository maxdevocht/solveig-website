import { workSectionData } from "@/assets/assets";

const Work = () => {
  return (
    <section className="px-6 md:px-12 pt-12 grid grid-cols-1 md:grid-cols-2 gap-4 pb-24">
      {workSectionData.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-start gap-2 cursor-pointer group"
        >
          <img
            src={item.image.src}
            alt="work image"
            className="group-hover:scale-105"
          />
          <div>
            <p className="text-xl tracking-wider">{item.title}</p>
            <span className="text-sm tracking-wider font-light">
              {item.description}
            </span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Work;
