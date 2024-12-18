import Marquee from "../Marquee";

const Header = () => {
  return (
    <section id="header" className="mt-20 px-6 md:px-12 py-8">
      <div className="pb-8 flex flex-col gap-3">
        <img src="./finn.svg" alt="Finn Solveig" />
        <h2 className="text-base md:text-3xl lg:text-5xl font-semibold">
          BRAND DESIGNER FROM BERLIN
        </h2>
      </div>

      <div>
        <Marquee />
        <img
          src="./header-img.png"
          alt="Product Design image"
          className="w-full object-fill"
        />
      </div>
    </section>
  );
};

export default Header;
