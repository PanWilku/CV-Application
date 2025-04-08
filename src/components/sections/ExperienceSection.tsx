import { ExperienceItem } from "../../types";
import { useState } from "react";
import PlusButton from "../ui/PlusButton";
import AddExperienceButton from "../ui/AddEducationButton";


type ExperienceProps = {
    experience: ExperienceItem[],
    setExperience: React.Dispatch<React.SetStateAction<ExperienceItem[]>>
}

export default function ExperienceSection({
    experience,
    setExperience,
  }: ExperienceProps){
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => setIsExpanded((prev) => !prev);
  
    // now takes an index
    function handleChange(
      idx: number,
      event: React.ChangeEvent<HTMLInputElement>
    ) {
      const { id, value } = event.target;
      setExperience((prev) =>
        prev.map((item, i) =>
          i === idx ? { ...item, [id]: value } : item
        )
      );
    }
  
    // pushes a new blank entry
    function handleAddExperienceField() {
      setExperience((prev) => [
        ...prev,
        { company: "", position: "", duration: "", location: "", description: "" },
      ]);
    }
  
    return (
      <div className="flex flex-col border-2 rounded-md h-fit">
        <div className="flex justify-between gap-2 w-full p-2">
          <div className="flex justify-center items-center">Experience</div>
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
            {experience.map((exp, idx) => (
              <div
                key={idx}
                className={`flex flex-col gap-2 rounded-md p-2`}
              >
                <div className="flex w-full gap-2 border-2 border-gray-400
                    focus-within:border-sky-500 p-1 rounded-md ">
                  <label htmlFor="company">Company:</label>
                  <input
                    id="company"
                    type="text"
                    placeholder="Google"
                    className="outline-none flex-grow w-full"
                    onChange={(e) => handleChange(idx, e)}
                    value={exp.company}
                  />
                </div>
                <div className="flex w-full gap-2 border-2 border-gray-400
                    focus-within:border-sky-500 p-1 rounded-md">
                  <label htmlFor="position">Position:</label>
                  <input
                    id="position"
                    type="text"
                    placeholder="Intern"
                    className="outline-none flex-grow w-full"
                    onChange={(e) => handleChange(idx, e)}
                    value={exp.position}
                  />
                </div>
                <div className="flex w-full gap-2 border-2 border-gray-400
                    focus-within:border-sky-500 p-1 rounded-md">
                  <label htmlFor="duration">Duration:</label>
                  <input
                    id="duration"
                    type="text"
                    placeholder=""
                    className="outline-none flex-grow w-full"
                    onChange={(e) => handleChange(idx, e)}
                    value={exp.duration}
                  />
                </div>
                <div className="flex w-full gap-2 border-2 border-gray-400
                    focus-within:border-sky-500 p-1 rounded-md">
                  <label htmlFor="location">Location:</label>
                  <input
                    id="location"
                    type="text"
                    className="outline-none flex-grow w-full"
                    onChange={(e) => handleChange(idx, e)}
                    value={exp.location}
                  />
                </div>
                <div className="flex w-full gap-2 border-2 border-gray-400
                    focus-within:border-sky-500 p-1 rounded-md">
                  <label htmlFor="description">Description:</label>
                  <input
                    id="description"
                    type="text"
                    className="outline-none flex-grow w-full"
                    onChange={(e) => handleChange(idx, e)}
                    value={exp.description}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center p-2">
            <AddExperienceButton onClick={handleAddExperienceField} />
          </div>
        </div>
      </div>
    );
}