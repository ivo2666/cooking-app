import CheckboxFalse from "../../svgs/checkbox-false";
import CheckboxTrue from "../../svgs/checkbox-true";

interface DropdownItemProps {
  value: string;
  isChecked: boolean;
  onChange: (isChecked: boolean) => void;
}

const DropdownItem: React.FC<DropdownItemProps> = ({
  value,
  isChecked,
  onChange,
}) => {
  const handleClick = () => {
    onChange(!isChecked);
  };
  return (
    <div
      onClick={handleClick}
      className="flex justify-start items-center flex-grow-0 cursor-pointer flex-shrink-0 w-[328px] relative gap-2 p-4 bg-white"
    >
      {isChecked ? <CheckboxTrue /> : <CheckboxFalse />}
      <p className="flex-grow-0 flex-shrink-0 text-base text-left text-black/[0.87]">
        {value}
      </p>
    </div>
  );
};

export default DropdownItem;
