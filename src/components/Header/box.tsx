import { memo } from "react";
import "./box.scss";

type Props = {
  type: string;
  boxColor: string;
  onBoxClick: (type: string) => void;
};

const Box = (props: Props) => {
  return (
    <button
      className="box"
      style={{ backgroundColor: `${props.boxColor}` }}
      onClick={() => props.onBoxClick(props.type)}
    />
  );
};

export default memo(Box);
