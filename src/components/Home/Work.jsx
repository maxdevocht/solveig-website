import { workData } from "@/assets/assets";
import CustomCursor from "../CustomCursor";
import { useState } from "react";
import { Link } from "react-router-dom";

const Work = () => {
  const cursorImage = "../assets/cursor.png";
  const [isCursorActive, setIsCursorActive] = useState(false);

  return (
    <section className="px-6 md:px-12 pt-12 grid grid-cols-1 md:grid-cols-2 gap-4 pb-24">
      <CustomCursor cursorImage={cursorImage} isActive={isCursorActive} />
      {workData.map((item, index) => (
        <Link
          to={`/work/${item.id}`}
          key={index}
          className="flex flex-col items-start gap-2 group"
        >
          <div
            className="overflow-hidden hover:cursor-none"
            onMouseEnter={() => setIsCursorActive(true)}
            onMouseLeave={() => setIsCursorActive(false)}
          >
            <img
              src={item.image.src}
              alt="work image"
              className="group-hover:scale-105 transition-all duration-200"
            />
          </div>
          <div>
            <p className="text-xl tracking-wider">{item.title}</p>
            <span className="text-sm tracking-wider font-light">
              {item.description}
            </span>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default Work;
