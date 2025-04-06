import PlusButton from "../ui/PlusButton";
import { useState } from "react";
import Button from "../ui/Button";
import ColorPicker from "../ui/ColorPicker";
import BackgroundPicker from "../ui/BackgroundPicker";
import Star from "../../assets/star.svg?react";
import Wave from "../../assets/wave.svg?react";
import star from "../../assets/star.svg";
import wave from "../../assets/wave.svg";

function BackgroundSectionContainer() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [showBackgroundPicker, setShowBackgroundPicker] = useState(false);

  const backgrounds = [{
    id: 1,
    image: star,
    svg: Star,
    name: "Star"
  },
{
    id: 2,
    image: wave,
    svg: Wave,
    name: "Wave"
}];



  const [pickedBackground, setPickedBackground] = useState(backgrounds[0]);

  const handleToggle = () => setIsExpanded((prev) => !prev);
  const handleColorPicker = () => setShowColorPicker((prev) => !prev);
  const handleBackgroundPicker = () => setShowBackgroundPicker((prev) => !prev);
  const closePickers = () => {
    setShowColorPicker(false);
    setShowBackgroundPicker(false);
  };

  return (
    <>
      <div className="flex flex-col border-2 rounded-md h-fit">
        <div className="flex justify-between gap-2 w-full p-2">
          <div className="flex justify-center items-center">Background</div>
          <div className="flex">
            <PlusButton onClick={handleToggle} isExpanded={isExpanded} />
          </div>
        </div>

        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden`}
          style={{
            maxHeight: isExpanded ? "200px" : "0px",
            opacity: isExpanded ? 1 : 0,
          }}
        >
          <ul className="flex justify-center gap-4 pl-4 pr-4 pt-2 pb-2">
            <li>
              <Button value={"Change Background"} onClick={handleBackgroundPicker} />
            </li>
            <li>
              <Button value={"Change Background Color"} onClick={handleColorPicker} />
            </li>
          </ul>
        </div>
      </div>

      {showBackgroundPicker && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-xl shadow-lg relative m-6">
            <button
              onClick={closePickers}
              className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
            >
              ✕
            </button>
            <BackgroundPicker
              backgrounds={backgrounds}
              pickedBackground={pickedBackground}
              setPickedBackground={setPickedBackground}
            />
          </div>
        </div>
      )}

      {showColorPicker && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-8 m-6 rounded-xl shadow-lg relative">
            <button
              onClick={closePickers}
              className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
            >
              ✕
            </button>
            <ColorPicker pickedBackground={pickedBackground.svg} />
          </div>
        </div>
      )}
    </>
  );
}
export default BackgroundSectionContainer;