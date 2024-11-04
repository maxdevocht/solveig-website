import { Link } from "react-router-dom";

const Socials = () => {
  return (
    <section className="px-6 md:px-12 py-12 bg-yellow">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <h3 className="text-xl tracking-wide md:text-2xl">FOLLOW ME</h3>
        <div>
          <ul className="flex flex-col md:flex-row items-start gap-0 md:gap-8">
            <Link to={"https://www.instagram.com/maxde.v/"}>
              <div className="py-3 md:py-2">
                <div className="flex items-center gap-2">
                  <hr className="w-5 border-1 border-black" />
                  <h3 className="text-sm">INSTAGRAM</h3>
                </div>
              </div>
            </Link>
            <Link to={"https://www.linkedin.com/in/max-de-vocht-83b917321/"}>
              <div className="py-3 md:py-2">
                <div className="flex items-center gap-2">
                  <hr className="w-5 border-1 border-black" />
                  <h3 className="text-sm">LINKEDIN</h3>
                </div>
              </div>
            </Link>
            <Link to={"https://github.com/maxdevocht"}>
              <div className="py-3 md:py-2">
                <div className="flex items-center gap-2">
                  <hr className="w-5 border-1 border-black" />
                  <h3 className="text-sm">GITHUB</h3>
                </div>
              </div>
            </Link>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Socials;
