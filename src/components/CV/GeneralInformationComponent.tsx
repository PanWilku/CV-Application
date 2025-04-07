import { PersonalInformationItem } from "../../types"


type GeneralInformationComponentProps = {
    personalInformation: PersonalInformationItem;
  };


function GeneralInformationComponent({personalInformation}: GeneralInformationComponentProps) {
    return (
        <>
            <h1 className=" pb-2 text-[12px] font-bold underline">Personal Information</h1>
            <div className="flex flex-col text-[8px]">
                <div>
                    Name: {personalInformation.name}
                </div>
                <div>
                    Surname: {personalInformation.surname}
                </div>
                <div>
                    Email: {personalInformation.email}
                </div>
                <div>
                    Phone Number: {personalInformation.phoneNumber}
                </div>
            </div>
        </>
    )
}

export default GeneralInformationComponent