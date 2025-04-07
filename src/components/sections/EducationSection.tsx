// src/components/sections/EducationSection.tsx

import { EducationItem } from "../../types";
import { useState } from "react";
import PlusButton from "../ui/PlusButton";
import AddEducationButton from "../ui/AddEducationButton";

type EducationProps = {
  education: EducationItem[];
  setEducation: React.Dispatch<React.SetStateAction<EducationItem[]>>;
};

export default function EducationSection({
  education,
  setEducation,
}: EducationProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => setIsExpanded((prev) => !prev);

  // now takes an index
  function handleChange(
    idx: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const { id, value } = event.target;
    setEducation((prev) =>
      prev.map((item, i) =>
        i === idx ? { ...item, [id]: value } : item
      )
    );
  }

  // pushes a new blank entry
  function handleAddEducationField() {
    setEducation((prev) => [
      ...prev,
      { schoolName: "", level: "", duration: "", location: "" },
    ]);
  }

  return (
    <div className="flex flex-col border-2 rounded-md h-fit">
      <div className="flex justify-between gap-2 w-full p-2">
        <div className="flex justify-center items-center">Education</div>
        <div className="flex">
          <PlusButton onClick={handleToggle} isExpanded={isExpanded} />
        </div>
      </div>

      <div
        className="transition-all duration-500 ease-in-out overflow-y-auto"
        style={{
          maxHeight: isExpanded ? "200px" : "0px",
          opacity: isExpanded ? 1 : 0,
        }}
      >
        <div className="flex flex-col p-4 gap-2">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className={`flex flex-col gap-2 rounded-md p-2`}
            >
              <div className="flex w-full gap-2 border-2 border-gray-400
                  focus-within:border-sky-500 p-1 rounded-md">
                <label htmlFor="schoolName">School Name:</label>
                <input
                  id="schoolName"
                  type="text"
                  placeholder="Massachusetts Institute of Technology"
                  className="outline-none flex-grow"
                  onChange={(e) => handleChange(idx, e)}
                  value={edu.schoolName}
                />
              </div>
              <div className="flex w-full gap-2 border-2 border-gray-400
                  focus-within:border-sky-500 p-1 rounded-md">
                <label htmlFor="level">Level:</label>
                <input
                  id="level"
                  type="text"
                  placeholder="Highschool"
                  className="outline-none flex-grow"
                  onChange={(e) => handleChange(idx, e)}
                  value={edu.level}
                />
              </div>
              <div className="flex w-full gap-2 border-2 border-gray-400
                  focus-within:border-sky-500 p-1 rounded-md">
                <label htmlFor="duration">Duration:</label>
                <input
                  id="duration"
                  type="text"
                  placeholder=""
                  className="outline-none flex-grow"
                  onChange={(e) => handleChange(idx, e)}
                  value={edu.duration}
                />
              </div>
              <div className="flex w-full gap-2 border-2 border-gray-400
                  focus-within:border-sky-500 p-1 rounded-md">
                <label htmlFor="location">Location:</label>
                <input
                  id="location"
                  type="text"
                  className="outline-none flex-grow"
                  onChange={(e) => handleChange(idx, e)}
                  value={edu.location}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center p-2">
          <AddEducationButton onClick={handleAddEducationField} />
        </div>
      </div>
    </div>
  );
}
