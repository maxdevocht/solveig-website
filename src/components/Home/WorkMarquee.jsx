import { Fragment } from "react";

const workIcons = [
  "SELECTED WORK",
  "SELECTED WORK",
  "SELECTED WORK",
  "SELECTED WORK",
  "SELECTED WORK",
  "SELECTED WORK",
  "SELECTED WORK",
  "SELECTED WORK",
  "SELECTED WORK",
];

const WorkMarquee = () => {
  return (
    <section id="workmarquee" className="overflow-x-clip">
      <div className="bg-gradient-to-r from-orange to-orange -mx-1 border-t-2">
        <div className="flex bg-white">
          <div className="flex flex-none gap-4 py-2 animate-move-left [animation-duration:60s]">
            {/* Creating a double display of icons */}
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {workIcons.map((icons, index) => (
                  <div className="items-center inline-flex gap-4" key={index}>
                    <p className="text-2xl md:text-5xl tracking-widest">
                      {icons}
                    </p>
                    <div className="rounded-full w-1 h-1 bg-black"></div>
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkMarquee;
