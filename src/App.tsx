import { useState, useEffect } from 'react'
import BackgroundSectionContainer from './components/sections/BackgroundSectionContainer'
import CV from './components/CV/CV'
import { backgrounds } from './assets';
import GeneralInformationContainer from './components/sections/GeneralInformationContainer';
import { PersonalInformationItem } from './types';
import { EducationItem, ExperienceItem } from './types';
import EducationSection from './components/sections/EducationSection';
import ExperienceSection from './components/sections/ExperienceSection';
import MyDropzone from './components/sections/FileUploadSection';


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
    company: "",
    duration: "",
    position: "",
    location: "",
    description: "",
  }])

  const [image, setImage] = useState<File[]>([]);
  const [imageUrl, setImageUrl] = useState<string>("");

  useEffect(() => {
    if (image.length > 0) {
      const url = URL.createObjectURL(image[0]);
      setImageUrl(url);

      // Clean up the created URL when the component unmounts or the image changes
      return () => {
        URL.revokeObjectURL(url);
        setImageUrl("");
      };
    }
  }, [image]);

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
      <div className='flex w-full justify-center'>
        <div className='flex flex-col bg-blue-100
         w-50 m-6 p-4 rounded-md justify-center h-fit transition delay-100 duration-300 ease-in-out hover:bg-blue-400'>
          <MyDropzone setImage={setImage}/>
        </div>
      </div>
      <div className=' w-full h-full p-12'>
          <CV pickedBackground={pickedBackground} hex={hex} personalInformation={personalInformation} education={education} experience={experience} img={imageUrl}></CV>
      </div>
    </div>
    </>

  )
}

export default App
