import { EducationItem } from "../../types"
import { useState } from "react";
import PlusButton from "../ui/PlusButton";
import AddEducationButton from "../ui/AddEducationButton";



type EducationProps = {
    education: EducationItem,
    setEducation: React.Dispatch<React.SetStateAction<EducationItem>>
}

function EducationSection({education, setEducation}: EducationProps) {
    
    const [isExpanded, setIsExpanded] = useState(false);
    
    const handleToggle = () => setIsExpanded((prev) => !prev);
    
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { id, value} = event.target
        if(id === "schoolName") {
            setEducation((prev) => ({
                ...prev,
                schoolName: value
            }))
        } else if(id === "level") {
            setEducation((prev) => ({
                ...prev,
                level: value
            }))
        } else if(id === "duration") {
            setEducation((prev) => ({
                ...prev,
                duration: value
            }))
        } else if(id === "location") {
            setEducation((prev) => ({
                ...prev,
                location: value
            }))
        }
    }
    
    
    
      return (
        <>
          <div className="flex flex-col border-2 rounded-md h-fit">
            <div className="flex justify-between gap-2 w-full p-2">
              <div className="flex justify-center items-center">Education</div>
              <div className="flex">
                <PlusButton onClick={handleToggle} isExpanded={isExpanded} />
              </div>
            </div>
    
            <div
              className={`transition-all duration-500 ease-in-out overflow-y-auto`}
              style={{
                maxHeight: isExpanded ? "200px" : "0px",
                opacity: isExpanded ? 1 : 0,
              }}
            >
              <div className="flex flex-col p-4 gap-2">
                <div className={`flex w-full gap-2 border-2 rounded-md p-2 border-gray-400
                    focus-within:border-sky-500`}>
                    <label htmlFor="schoolName" className="">School Name:</label>
                    <input 
                    id="schoolName" type="text" placeholder="Massachusetts Institute of Technology" className="outline-none flex-grow"
                    onChange={handleChange} value={education.schoolName}></input>
                </div>
                <div className={`flex w-full gap-2 border-2 rounded-md p-2 border-gray-400
                    focus-within:border-sky-500`}>
                    <label htmlFor="level">Level:</label>
                    <input 
                    id="level" type="text" placeholder="Highschool" className="outline-none"
                    onChange={handleChange} value={education.level}></input>
                </div>
                <div className={`flex w-full gap-2 border-2 rounded-md p-2 border-gray-400
                    focus-within:border-sky-500`}>
                    <label htmlFor="duration">Duration:</label>
                    <input
                    id="duration" type="text" placeholder="" className="outline-none"
                    onChange={handleChange} value={education.duration}></input>
                </div>
                <div className={`flex w-full gap-2 border-2 rounded-md p-2 border-gray-400
                    focus-within:border-sky-500`}>
                    <label htmlFor="location">Location:</label>
                    <input
                    id="location" type="text" className="outline-none"
                    onChange={handleChange} value={education.location}></input>
                </div>
              </div>
              <div className="flex justify-center">
                <AddEducationButton />
              </div>
            </div>

          </div>
        </>
      );
        
    
    }
export default EducationSection