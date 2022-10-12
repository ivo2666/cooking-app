import ListDot from "../../svgs/list-dot";

interface RecepiIngrProps {
  ingredient: string;
}

const RecepiIngr: React.FC<RecepiIngrProps> = ({ ingredient }) => {
  return (
    <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-1">
      <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5 py-1">
        <ListDot />
      </div>
      <p className="flex-grow-0 flex-shrink-0 w-[246px] text-base text-left text-black/60">
        {ingredient}
      </p>
    </div>
  );
};

export default RecepiIngr;
