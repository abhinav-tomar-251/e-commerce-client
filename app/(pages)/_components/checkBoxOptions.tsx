
import { ChangeEventHandler } from "react";

interface CheckboxOptionProps {
  value: string;
  color: string;
  label: string;
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const CheckboxOption: React.FC<CheckboxOptionProps> = ({
  value,
  color,
  label,
  checked,
  onChange,
}) => {
  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <input
        type="checkbox"
        name="colors"
        value={value}
        checked={checked}
        onChange={onChange}
        className="hidden"
      />
      <span
        className={`w-8 h-8 border border-black rounded-full flex items-center justify-center ${
          checked ? `bg-${color}-500` : ""
        }`}
      >
        {checked && <span className="text-white">&#10003;</span>}
      </span>
      <span>{label}</span>
    </label>
  );
};

export default CheckboxOption;
