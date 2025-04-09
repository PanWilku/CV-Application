// BackgroundPicker.tsx
import { useEffect, useState } from "react";
import { FunctionComponent, SVGProps } from "react";

interface BackgroundItem {
  id: number;
  image: string;
  svg: FunctionComponent<SVGProps<SVGSVGElement>>;
  name: string;
}

type BackgroundPickerProps = {
  backgrounds: BackgroundItem[];
  pickedBackground: BackgroundItem;
  setPickedBackground: (background: BackgroundItem) => void;
};

function BackgroundPicker({ backgrounds, pickedBackground, setPickedBackground}: BackgroundPickerProps) {
  useEffect(() => {
  }, [pickedBackground]);

  const [activeId, setActiveId] = useState<number>(pickedBackground.id);

  const handlePick = (background: BackgroundItem) => {
    setPickedBackground(background);
    setActiveId(background.id);
  };

  return (
    <div className="flex">
      <div className="grid grid-cols-2 gap-4 p-2">
        {backgrounds.map((background) => (
          <div key={background.id}>
            <div
              className={`aspect-[1/1.414] border-4 rounded-md cursor-pointer transition-colors duration-200 ${
                activeId === background.id ? "border-blue-500" : "border-gray-300"
              }`}
              onClick={() => handlePick(background)}
            >
              <img
                src={background.image}
                className="w-full h-full object-cover rounded-md"
                alt={background.name}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default BackgroundPicker;
