import InputContainer from "./InputContainer";
import InputExtra from "./InputExtra";
import InputField from "./InputField";
import InputHeader from "./InputHeader";
import InputMain from "./InputMain";
import InputLabel from "./InputLabel";
import InputCounter from "./InputCounter";
import InputText from "./InputText";
import InputNumber from "./InputNumber";

const Input = Object.assign(InputContainer, {
  Main: InputMain,
  Header: InputHeader,
  Field: InputField,
  Extra: InputExtra,
  Text: InputText,
  Number: InputNumber,
});

export default Input;

export { InputLabel, InputCounter };
