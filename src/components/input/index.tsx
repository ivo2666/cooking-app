import { ChangeEventHandler } from "react";

interface InputProps {
  value: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  label: string;
  error?: boolean;
  onFocus?: () => void;
}

const Input: React.FC<InputProps> = ({ value, handleChange, label, error, onFocus }) => {
  
  return (
    <div className="relative z-0   group  text-content-primary">
      <input
        type="text"
        onFocus={onFocus}
        name={label}
        placeholder=" "
        value={value}
        onChange={handleChange}
        className={`block  invalid:z-10 disabled:z-10 disabled:bg-[#f7f7f7] disabled:border-black/[0.12]
         border border-gainsboro rounded  h-input w-input p-input autofill:bg-transparent text-lg text-black/80 bg-transparent  appearance-none
          focus:outline-none focus:ring-0  peer focus:border focus:border-[#3593e9]
          invalid:border-[#f60257] focus:invalid:border-[#f60257] ${error ? "border-[#f60257] focus:border-[#f60257]" : ""}`}
      />
      <label
        htmlFor={label}
        className={` absolute text-lg text-black/50 peer-invalid:z-10  duration-300 left-4 peer-disabled:text-black/30
          peer-disabled:bg-inherit peer-disabled:border-none  transform -translate-y-7 scale-75 top-3 z-10
           origin-[0]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75
         bg-white border-x-3 border-white peer-focus:-translate-y-7 peer-focus:z-10 peer-placeholder-shown:-z-10
          peer-invalid:bg-white peer-invalid:text-[#f60257] ${error ? "text-[#f60257] peer-focus:text-[#f60257]" : ""}`}
      >
        {label}
      </label>
      {/* <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
        Please type something.
      </p> */}
    </div>
  );
};

export default Input;