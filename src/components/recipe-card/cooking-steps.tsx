import Circle from "../../svgs/circle";

interface CookingStepsProps {
  preparationMethod: { step: number; text: string }[];
}

const CookingSteps: React.FC<CookingStepsProps> = ({ preparationMethod }) => {
  return (
    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-5 px-6 pb-6 bg-white">
      {preparationMethod.map(({ step, text }, index) => (
        <div
          key={index}
          className="flex justify-start items-start relative gap-4"
        >
          <div className="w-8 h-8 relative">
            <Circle />
            <p className="absolute left-[11px] text-lg text-center text-white">
              {step}
            </p>
          </div>
          <p className="flex-grow-0 flex-shrink-0 w-[80%] ml-5 sm:ml-0 sm:w-[515px] text-base text-left text-black/[0.87]">
            {text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CookingSteps;
