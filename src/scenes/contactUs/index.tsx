import { SelectedPage } from "@/shared/types";

interface Props {
  setSelectedPage: (value: SelectedPage) => void;
}

const ContactUs = ({ setSelectedPage }: Props) => {
  return <section id="contactus">ContactUs</section>;
};

export default ContactUs;
