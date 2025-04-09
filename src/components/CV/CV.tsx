import BackgroundComponent from "./BackgroundComponent"
import { BackgroundItem, ExperienceItem } from "../../types"
import GeneralInformationComponent from "./GeneralInformationComponent"
import { PersonalInformationItem } from "../../types"
import { EducationItem } from "../../types"
import EducationComponent from "./EducationComponent"
import ExperienceComponent from "./ExperienceComponent"

type props = {
  pickedBackground: BackgroundItem;
  hex: string;
  personalInformation: PersonalInformationItem;
  education: EducationItem[];
  experience: ExperienceItem[];
  img: string,
  reference: React.Ref<HTMLDivElement>
}


function CV({pickedBackground, hex, personalInformation, education, experience, img, reference}: props) {
    return (
        <div className="flex justify-center items-center lg:h-full lg:w-full">
        {/* ADJUST SIZE OF CV HERE */}
        <div ref={reference} className="flex flex-col overflow-auto relative aspect-[1/1.414] min-w-sm max-w-[600px] w-full">
          
          <div className="absolute inset-0 -z-10 border-2">
            <BackgroundComponent color={hex} Svg={pickedBackground.svg} />
          </div>
  
          <div className="flex h-1/5 w-full gap-10">
          <div className="flex inset-0 p-4 w-full overflow-hidden">
            <GeneralInformationComponent personalInformation={personalInformation} />
          </div>
          <div className="flex w-full justify-center">
            {/* The image container using pseudo-element for background-cover */}
            <div
              className="cover-background flex aspect-[1/1.414] h-32 border-2 mt-4 justify-center items-center"
              style={{ "--bg-img": `url(${img})` } as React.CSSProperties}
            >
              {/* Optionally, if you want overlay content, place it here */}
            </div>
          </div>
        </div>

          <div className="flex flex-col w-full h-fit">
              <div className="flex flex-col p-2 pl-4 pr-4 w-full">
                <h1 className="pb-2 text-sm font-bold underline">Education</h1>
                {education.map((edu, i) => (
                <EducationComponent key={i} education={edu} />
                ))}
              </div>
              <div className="flex flex-col p-2 pl-4 pr-4 w-full">
                <h1 className="pb-2 text-sm font-bold underline">Experience</h1>
                {experience.map((exp, i) => (
                <ExperienceComponent key={i} experience={exp} />
                ))}
              </div>
          </div>
        </div>
      </div>
    )
}

export default CV