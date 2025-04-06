import { useState } from 'react';
import Colorful from '@uiw/react-color-colorful';
import { FunctionComponent, SVGProps } from "react";

type BackgroundComponent = FunctionComponent<SVGProps<SVGSVGElement>>;

type ColorPickerProps = {
  pickedBackground: BackgroundComponent;
};

function ColorPicker({ pickedBackground: PickedBackground }: ColorPickerProps) {
  const [hex, setHex] = useState("");

  return (
    <>
      <div className='flex  flex-col gap-10 items-center'>
        <Colorful
          color={hex}
          onChange={(color) => {
            setHex(color.hex);
            console.log(color.hex);
          }}
        />
        <div className='flex border-2 w-full aspect-[1/1.414]'>
          <div className="flex w-full items-end">
            <PickedBackground className="flex w-full" style={{ color: hex }} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ColorPicker;
