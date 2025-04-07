import BackgroundComponent from "./BackgroundComponent"
import { BackgroundItem } from "../../types"
import GeneralInformationComponent from "./GeneralInformationComponent"
import { PersonalInformationItem } from "../../types"
import ImgUpload from "./ImageUpload"
import { EducationItem } from "../../types"
import EducationComponent from "./EducationComponent"

type props = {
  pickedBackground: BackgroundItem;
  hex: string;
  personalInformation: PersonalInformationItem;
  education: EducationItem[]
}


function CV({pickedBackground, hex, personalInformation, education}: props) {
    return (
        <div className="flex justify-center items-center">
        {/* ADJUST SIZE OF CV HERE */}
        <div className="relative aspect-[1/1.414] min-w-sm w-sm max-w-[600px]">
          
          <div className="absolute inset-0 -z-10 border-2">
            <BackgroundComponent color={hex} Svg={pickedBackground.svg} />
          </div>
  
          <div className="absolute inset-0 p-4">
            <GeneralInformationComponent personalInformation={personalInformation} />
          </div>
          <div className="absolute right-10 top-5 flex aspect-[1/1.414] border-2 w-18
          justify-center items-center">
            <ImgUpload/>
          </div>
          <div className="flex flex-col absolute top-25 p-4 w-full">
            <h1 className="pb-2 text-[12px] font-bold underline">Education</h1>
            {education.map((edu, i) => (
            <EducationComponent key={i} education={edu} />
            ))}
          </div>
        </div>
      </div>
    )
}

export default CV