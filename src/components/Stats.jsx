import { statsData } from "@/assets/assets";
import CountUp from "./CountUp";

const Stats = () => {
  return (
    <section id="stats" className="pt-12 md:pt-16 lg:pt-24 px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-20">
        {statsData.map((stats, index) => (
          <div key={index} className="flex flex-col items-start gap-5">
            <hr className="w-full h-1" />
            <div className="flex flex-col items-start">
              <p className="text-sm tracking-widest">{stats.title}</p>
              <div className="flex gap-2">
                <CountUp
                  from={0}
                  to={stats.number}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text text-6xl lg:text-7xl font-semibold"
                />
                <span className="text-6xl lg:text-7xl font-semibold text-yellow">
                  {stats.symbol}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
