export interface Props {
  color: string;
}
const colorPicker = ({ color }: Props) => {
  const style = { color: color };
  return <div style={style}>HI {color}</div>;
};

export default colorPicker;
