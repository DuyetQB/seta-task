import "./Input.scss";
import { IprosInput } from "../../types/Type";

const Input = ({
  placeholder,
  value,
  onChange,
  defaultValue,
  type,
  passwordSuffix,
  iconSearch
}:IprosInput) => {
  return (
    <div className={iconSearch ? "wrap-input" : ""}>
      {iconSearch}
      <input
        placeholder={placeholder}
        value={value}
        className="input"
        onChange={onChange}
        defaultValue={defaultValue}
        type={type}
      />

      {passwordSuffix && <span></span>}
    </div>
  );
};

export default Input;
