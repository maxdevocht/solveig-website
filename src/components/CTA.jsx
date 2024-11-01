import CTAMarquee from "./CTAMarquee";
import { Button } from "./ui/button";

const CTA = () => {
  return (
    <section id="cta" className="w-full">
      <CTAMarquee />
      <div className="bg-black py-12 md:py-24 lg:py-36 px-12 flex flex-col items-center gap-8">
        <img src="./src/assets/star.svg" alt="star image" />
        <h1 className="text-white text-center text-4xl md:text-6xl font-semibold tracking-wider">
          LET&apos;S CREATE
          <br /> YOUR NEW BRAND
        </h1>
        <Button>
          <hr className="w-5 border-1 border-black" />
          GET IN TOUCH
        </Button>
      </div>
    </section>
  );
};

export default CTA;
