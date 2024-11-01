import { motion } from "framer-motion";
import logoipsum1 from "../../assets/logoipsum1.svg";
import logoipsum2 from "../../assets/logoipsum2.svg";
import logoipsum3 from "../../assets/logoipsum3.svg";
import logoipsum4 from "../../assets/logoipsum4.svg";
import logoipsum5 from "../../assets/logoipsum5.svg";
import logoipsum6 from "../../assets/logoipsum6.svg";
import logoipsum7 from "../../assets/logoipsum7.svg";
import logoipsum8 from "../../assets/logoipsum8.svg";
import logoipsum9 from "../../assets/logoipsum9.svg";
import { useRef } from "react";

const Clients = () => {
  const tapeRef = useRef();

  const handleMouseEnter = () => {
    if (tapeRef.current) {
      tapeRef.current.style.animationPlayState = "paused";
    }
  };

  const handleMouseLeave = () => {
    if (tapeRef.current) {
      tapeRef.current.style.animationPlayState = "running";
    }
  };

  return (
    <section id="tape" className="pt-16 lg:pt-32 px-6 md:px-12">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-5">
          <div className="flex items-center text-sm tracking-widest gap-2">
            <hr className="w-5 border-1 border-black" />
            <p>MY CLIENTS</p>
          </div>
          <div className="flex flex-1 items-end overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <div
                ref={tapeRef}
                className="flex flex-none gap-14 lg:gap-28 py-3 animate-move-left [animation-duration:20s]"
              >
                <motion.div
                  initial={{ translateX: "-50%" }}
                  animate={{ translateX: "0" }}
                  transition={{
                    repeat: Infinity,
                    duration: 20,
                    ease: "linear",
                  }}
                  className="flex flex-none gap-14 pr-14 -translate-x-1/2"
                ></motion.div>
                {[
                  logoipsum1,
                  logoipsum2,
                  logoipsum3,
                  logoipsum4,
                  logoipsum5,
                  logoipsum6,
                  logoipsum7,
                  logoipsum8,
                  logoipsum9,
                ].map((logo, index) => (
                  <div
                    className="items-center inline-flex"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    key={index}
                  >
                    <img src={logo} alt="client logo" className="w-auto h-8" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
