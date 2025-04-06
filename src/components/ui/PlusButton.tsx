type ButtonProps = {
    onClick?: () => void;
    isExpanded?: boolean;
}



function PlusButton(props: ButtonProps) {
    return (
        <button className="flex items-center p-2 pl-4 pr-4
        border-2 border-black rounded-md bg-white
    " onClick={props.onClick}>
            {props.isExpanded ? "-" : "+"}
        </button>
    )
}
export default PlusButton;