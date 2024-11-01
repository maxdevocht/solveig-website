import { Fragment } from "react";

// Importing icons as a string array
const icons = [
  "LET'S WORK TOGETHER",
  "LET'S WORK TOGETHER",
  "LET'S WORK TOGETHER",
  "LET'S WORK TOGETHER",
  "LET'S WORK TOGETHER",
  "LET'S WORK TOGETHER",
  "LET'S WORK TOGETHER",
  "LET'S WORK TOGETHER",
  "LET'S WORK TOGETHER",
];

const CTAMarquee = () => {
  return (
    <section id="ctamarquee" className="overflow-x-clip">
      <div className="bg-gradient-to-r from-orange to-orange -mx-1">
        <div className="flex bg-yellow">
          <div className="flex flex-none gap-4 py-2 animate-move-left [animation-duration:30s]">
            {/* Creating a double display of icons */}
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {icons.map((icons, index) => (
                  <div className="items-center inline-flex gap-4" key={index}>
                    <p className="text-xs md:text-sm tracking-widest">
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

export default CTAMarquee;
