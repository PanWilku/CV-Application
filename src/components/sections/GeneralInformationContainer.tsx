import { PersonalInformationItem } from "../../types"
import PlusButton from "../ui/PlusButton";
import { useState } from "react";


type PersonalInformationProps = {
    info: PersonalInformationItem;
    setInfo: React.Dispatch<React.SetStateAction<PersonalInformationItem>>
}

function GeneralInformationContainer({info, setInfo}: PersonalInformationProps) {
    
const [isExpanded, setIsExpanded] = useState(false);

const handleToggle = () => setIsExpanded((prev) => !prev);

function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { id, value} = event.target
    if(id === "name") {
        setInfo((prev) => ({
            ...prev,
            name: value
        }))
    } else if(id === "surname") {
        setInfo((prev) => ({
            ...prev,
            surname: value
        }))
    } else if(id === "email") {
        setInfo((prev) => ({
            ...prev,
            email: value
        }))
    } else if(id === "phoneNumber") {
        setInfo((prev) => ({
            ...prev,
            phoneNumber: value
        }))
    }
}



  return (
    <>
      <div className="flex flex-col border-2 rounded-md h-fit">
        <div className="flex justify-between gap-2 w-full p-2">
          <div className="flex justify-center items-center">General Information</div>
          <div className="flex">
            <PlusButton onClick={handleToggle} isExpanded={isExpanded} />
          </div>
        </div>

        <div
          className={`transition-all duration-500 ease-in-out overflow-y-auto`}
          style={{
            maxHeight: isExpanded ? "300px" : "0px",
            opacity: isExpanded ? 1 : 0,
          }}
        >
          <div className="flex flex-col p-4 gap-2">
            <div className={`flex w-full gap-2 border-2 rounded-md p-2 border-gray-400
                focus-within:border-sky-500`}>
                <label htmlFor="name">Name:</label>
                <input 
                id="name" type="text" placeholder="John" className="flex outline-none flex-grow w-full"
                onChange={handleChange} value={info.name}></input>
            </div>
            <div className={`flex w-full gap-2 border-2 rounded-md p-2 border-gray-400
                focus-within:border-sky-500`}>
                <label htmlFor="name">Surname:</label>
                <input 
                id="surname" type="text" placeholder="Wick" className="flex outline-none flex-grow w-full"
                onChange={handleChange} value={info.surname}></input>
            </div>
            <div className={`flex w-full gap-2 border-2 rounded-md p-2 border-gray-400
                focus-within:border-sky-500`}>
                <label htmlFor="name">Email:</label>
                <input
                id="email" type="text" placeholder="john.wick@gmail.com" className="flex outline-none flex-grow w-full"
                onChange={handleChange} value={info.email}></input>
            </div>
            <div className={`flex w-full gap-2 border-2 rounded-md p-2 border-gray-400
                focus-within:border-sky-500`}>
                <label className="flex shrink-0 pr-2" htmlFor="name">Phone Number:</label>
                <input
                id="phoneNumber" type="text" className="flex outline-none flex-grow w-full"
                onChange={handleChange} value={info.phoneNumber}></input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
    

}
export default GeneralInformationContainer