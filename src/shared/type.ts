export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClass = "ourclasses",
  ContactUs = "contactus",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}
