// src/components/ui/AddEducationButton.tsx

type AddEducationButtonProps = {
    onClick: () => void;
  };
  
  export default function AddEducationButton({
    onClick,
  }: AddEducationButtonProps) {
    return (
      <button
        onClick={onClick}
        className="flex items-center p-2 pl-4 pr-4
                   border-2 border-black rounded-md bg-white"
      >
        +
      </button>
    );
  }
  