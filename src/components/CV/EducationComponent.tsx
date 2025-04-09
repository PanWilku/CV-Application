// src/components/CV/EducationComponent.tsx

import { EducationItem } from "../../types";

type EducationComponentProps = {
  education: EducationItem;
};

export default function EducationComponent({
  education,
}: EducationComponentProps) {
  return (
    <div className="flex flex-col w-full">
      <div className="flex w-full">
        <div className="flex w-3/4 flex-col">
          <div className="font-bold text-md">{education.schoolName}</div>
          <div className="flex text-xs italic">{education.level}</div>
        </div>
        <div className="flex w-full gap-4">
          <div className="flex w-full justify-end text-xs">
            {education.duration}
          </div>
          <div className="flex w-fit justify-end text-xs">
            {education.location}
          </div>
        </div>
      </div>
    </div>
  );
}
