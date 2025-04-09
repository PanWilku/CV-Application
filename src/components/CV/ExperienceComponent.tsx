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
      <div className="flex w-full">
        <div className="flex w-3/4 flex-col">
          <div className="font-bold text-md">{experience.company}</div>
          <div className="flex text-xs italic">{experience.position}</div>
        </div>
        <div className="flex w-full gap-4">
          <div className="flex w-full justify-end text-xs">
            {experience.duration}
          </div>
          <div className="flex w-fit justify-end text-xs">
            {experience.location}
          </div>
        </div>
      </div>
        <div className="flex w-full text-xs">
            {experience.description}
        </div>
    </div>
  );
}
