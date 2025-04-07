import { FunctionComponent, SVGProps } from "react";

export interface BackgroundItem {
  id: number;
  image: string;
  svg: FunctionComponent<SVGProps<SVGSVGElement>>;
  name: string;
}


export interface PersonalInformationItem {
    name: string,
    surname: string,
    email: string,
    phoneNumber: string
  }

  export interface EducationItem {
    schoolName: string,
    duration: string,
    level: string,
    location: string
  }

  export interface ExperienceItem {
    company: string,
    duration: string,
    position: string,
    location: string,
    description: string,
  }