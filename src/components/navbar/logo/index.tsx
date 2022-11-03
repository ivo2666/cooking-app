import { memo } from "react";
import Pot from "../../../svgs/pot";

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-1 ">
      <Pot />
      <div className="flex flex-col items-start justify-center py-2 font-normal font-roboto text-content-primary">
        <span className="leading-5 tracking-custom">Cooking App</span>
      </div>
    </div>
  );
};

export default memo(Logo);
