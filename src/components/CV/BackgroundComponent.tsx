


type BackgroundProps = {
  color: string;
  bgColor?: string;
  Svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
};



function BackgroundComponent(props: BackgroundProps) {
  return (
      <props.Svg style={{color: props.color, backgroundColor: props.bgColor}} className="w-full h-full object-contain" />
  );
}
export default BackgroundComponent;