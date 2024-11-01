import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-black py-24 px-6 md:px-12">
      <div className="flex flex-col items-start gap-24">
        <div className="w-full flex flex-col lg:flex-row items-start gap-12">
          <div className="flex items-center gap-2 w-1/2">
            <img
              src="./src/assets/star.svg"
              alt="star image"
              width={20}
              height={20}
            />
            <img src="./src/assets/logo-light.svg" alt="Solveig logo light" />
          </div>
          <div className="flex flex-col md:flex-row items-start gap-12 md:gap-32 w-1/2">
            <div className="flex flex-col items-start gap-4">
              <h4 className="text-white text-sm">PAGES</h4>
              <div className="text-gray/50 text-xs flex flex-col gap-2">
                <Link>HOME</Link>
                <Link>WORK</Link>
                <Link>WORK SINGLE</Link>
                <Link>CAREER</Link>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4">
              <h4 className="text-white text-sm">UTILITY PAGES</h4>
              <div className="text-gray/50 text-xs  flex flex-col gap-2">
                <Link>404 ERROR PAGE</Link>
                <Link>LICENSE</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex items-center justify-between">
          <p className="text-gray/50 text-xs tracking-wider">
            © MADE BY <span className="text-white">MAX DE VOCHT</span>
          </p>
          <div className="flex items-center gap-2 text-gray/50">
            <p className="text-xs">PRIVACY</p>
            <p className="text-xs">IMPRINT</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
