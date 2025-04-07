import { EducationItem } from "../../types"

type EducationComponentProps = {
    education: EducationItem
}


function EducationComponent({education}: EducationComponentProps) {
    return (
        <>
            <div className="flex flex-col w-full">
                <h1 className="pb-2 text-[12px] font-bold underline">Education</h1>
                <div className="flex text-[10px] w-full">
                    <div className="flex w-3/4 flex-col text-[10px]">
                        <div>
                            {education.schoolName}
                        </div>
                        <div className="flex text-[8px] italic">
                            {education.level}
                        </div>
                    </div>
                    <div className="flex w-full gap-4">
                        <div className="flex w-full justify-end">
                            {education.duration}
                        </div>
                        <div className="flex w-fit justify-end">
                            {education.location}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default EducationComponent