import Colorful from '@uiw/react-color-colorful';
import { FunctionComponent, SVGProps } from "react";

type BackgroundComponent = FunctionComponent<SVGProps<SVGSVGElement>>;

type ColorPickerProps = {
  pickedBackground: BackgroundComponent;
  hex: string;
  setHex: (color: string) => void
};

function ColorPicker({ pickedBackground: PickedBackground, hex, setHex }: ColorPickerProps) {


  return (
    <>
      <div className='flex flex-col gap-10 items-center'>
        <Colorful
          color={hex}
          onChange={(color) => {
            setHex(color.hex);
          }}
        />
        <div className='flex border-2 aspect-[1/1.414] w-1/2'>
          <div className="flex aspect-[1/1.414] w-full">
            <PickedBackground style={{ color: hex }} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ColorPicker;
