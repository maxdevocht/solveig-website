import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const Form = () => {
  return (
    <section className="px-6 md:px-12 mt-20 pt-12 pb-40">
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="flex flex-col items-start justify-between">
          <div className="mb-8">
            <div className="py-3 md:py-2">
              <div className="flex items-center gap-2">
                <hr className="w-5 border-1 border-black" />
                CONTACT
              </div>
            </div>
            <h1 className="text-4xl md:text-7xl font-semibold">GET IN TOUCH</h1>
          </div>

          <div className="flex items-center gap-4">
            <img
              src="./src/assets/avatar.png"
              alt="avatar"
              className="h-12 w-auto"
            />
            <div className="flex flex-col">
              <p className="text-lg font-normal">FINN SØLVEIG</p>
              <span className="text-sm font-light tracking-widest">
                BRAND DESIGNER
              </span>
            </div>
          </div>
        </div>

        <form className="">
          <div className="block w-full mb-8">
            <Input type="text" placeholder="Your Name" className="mb-4" />
            <Input type="email" placeholder="Your Email" className="mb-4" />
            <Textarea placeholder="Type your message here." />
          </div>
          <Button className="w-full">Send Message</Button>
        </form>
      </div>
    </section>
  );
};

export default Form;
