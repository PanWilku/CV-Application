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
      <div className='flex flex-col gap-10 items-center h-full max-h-fit max-w-fit'>
        <Colorful
          color={hex}
          onChange={(color) => {
            setHex(color.hex);
          }}
        />
        <div className='flex aspect-[1/1.414] w-fit max-w-fit max-h-fit max-sm:w-3/4'>
          <div className="flex aspect-[1/1.414] w-fit max-h-fit border-2">
            <PickedBackground style={{ color: hex }} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ColorPicker;
