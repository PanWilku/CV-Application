import { useState } from 'react'
import BackgroundSectionContainer from './components/sections/BackgroundSectionContainer'
import CV from './components/CV/CV'
import { backgrounds } from './assets';
import GeneralInformationContainer from './components/sections/GeneralInformationContainer';
import { PersonalInformationItem } from './types';
import { EducationItem, ExperienceItem } from './types';
import EducationSection from './components/sections/EducationSection';
import ExperienceSection from './components/sections/ExperienceSection';


function App() {

  const [pickedBackground, setPickedBackground] = useState(backgrounds[0]);
  const [hex, setHex] = useState("");
  const [personalInformation, setPersonalInformation] = useState<PersonalInformationItem>({
    name: "",
    surname: "",
    email: "",
    phoneNumber: ""
  })
  const [education, setEducation] = useState<EducationItem[]>([{
    schoolName: "",
    duration: "",
    level: "",
    location: ""
  }])
  const [experience, setExperience] = useState<ExperienceItem[]>([{
    Company: "",
    duration: "",
    Position: "",
    location: "",
    description: "",
  }])

  return (

    <>
    <div className='flex h-screen border-2 flex-col overflow-y-auto min-w-sm'>
      <div className='flex flex-col bg-blue-100
       w-full p-6 justify-center h-fit'>
        <BackgroundSectionContainer pickedBackground={pickedBackground} setPickedBackground={setPickedBackground} hex={hex} setHex={setHex}/>
      </div>
      <div className='flex flex-col bg-blue-100
       w-full p-6 justify-center h-fit'>
        <GeneralInformationContainer info={personalInformation} setInfo={setPersonalInformation}/>
      </div>
      <div className='flex flex-col bg-blue-100
       w-full p-6 justify-center h-fit'>
        <EducationSection education={education} setEducation={setEducation}/>
      </div>
      <div className='flex flex-col bg-blue-100
       w-full p-6 justify-center h-fit'>
        <ExperienceSection experience={experience} setExperience={setExperience}/>
      </div>
      <div className=' w-full h-full p-12'>
          <CV pickedBackground={pickedBackground} hex={hex} personalInformation={personalInformation} education={education} experience={experience}></CV>
      </div>
    </div>
    </>

  )
}

export default App
