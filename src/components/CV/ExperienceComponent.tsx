// src/components/CV/EducationComponent.tsx

import { ExperienceItem } from "../../types";

type ExperienceComponentProps = {
  experience: ExperienceItem;
};

export default function ExperienceComponent({
  experience,
}: ExperienceComponentProps) {
  return (
    <div className="flex flex-col w-full">
      <div className="flex text-[10px] w-full">
        <div className="flex w-3/4 flex-col text-[10px]">
          <div>{experience.company}</div>
          <div className="flex text-[8px] italic">{experience.position}</div>
        </div>
        <div className="flex w-full gap-4">
          <div className="flex w-full justify-end">
            {experience.duration}
          </div>
          <div className="flex w-fit justify-end">
            {experience.location}
          </div>
        </div>
      </div>
        <div className="flex w-full text-[8px]">
            {experience.description}
        </div>
    </div>
  );
}
