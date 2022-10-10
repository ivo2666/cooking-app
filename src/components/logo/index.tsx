import Tomato from "../../svgs/tomato";

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-[15px] ">
      <Tomato />
      <div className="flex flex-col items-start justify-center py-2  font-roboto font-normal text-content-primary">
        <span className="leading-5 tracking-custom">CookWell</span>
        <span className="leading-4 text-xs italic">by Devexperts</span>
      </div>
    </div>
  );
};

export default Logo;
