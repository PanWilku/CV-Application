import { PersonalInformationItem } from "../../types"


type GeneralInformationComponentProps = {
    personalInformation: PersonalInformationItem;
  };


function GeneralInformationComponent({personalInformation}: GeneralInformationComponentProps) {
    return (
        <>
            <div className="flex flex-col">
                <h1 className=" pb-2 text-[12px] font-bold underline">Personal Information</h1>
                <div className="flex flex-col text-xs">
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
            </div>
        </>
    )
}

export default GeneralInformationComponent