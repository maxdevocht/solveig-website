import Form from "@/components/Contact/Form";
import Socials from "@/components/Contact/Socials";
import Fade from "@/components/Fade";

const ContactPage = () => {
  return (
    <div id="contact">
      <Fade blur={true}>
        <Form />
        <Socials />
      </Fade>
    </div>
  );
};

export default ContactPage;
