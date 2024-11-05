import { servicesData } from "@/assets/assets";

const Services = () => {
  return (
    <section className="px-6 md:px-12 pt-40">
      <div className="container pb-36">
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div className="static md:sticky md:top-[20%] flex flex-col justify-between">
            <div>
              <img src="./star.svg" alt="star image" className="mb-2" />
              <h2 className="rb-5 mb-5 text-4xl font-semibold md:mb-6 md:text-5xl lg:text-6xl">
                BRAND SERVICES
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <img src="./avatar.png" alt="avatar" className="h-12 w-auto" />
              <div className="flex flex-col">
                <p className="text-lg font-normal">FINN SØLVEIG</p>
                <span className="text-sm font-light tracking-widest">
                  BRAND DESIGNER
                </span>
              </div>
            </div>
          </div>
          <div>
            {servicesData.map((service, index) => (
              <div
                key={index}
                className="md:sticky mb-8 bg-gray p-8"
                style={{ top: `${25 + index * 0}%` }}
              >
                <div className="flex md:flex-row flex-col gap-2">
                  <div className="mb-3 md:mb-4">
                    <img src="./star.svg" alt="star image" className="size-8" />
                  </div>
                  <h3 className="mb-3 text-xl tracking-wide md:mb-4 md:text-2xl">
                    {service.title}
                  </h3>
                </div>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
