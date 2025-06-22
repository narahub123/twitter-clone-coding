import InputContainer from "./InputContainer";
import InputExtra from "./InputExtra";
import InputField from "./InputField";
import InputHeader from "./InputHeader";
import InputMain from "./InputMain";
import InputLabel from "./InputLabel";
import InputCounter from "./InputCounter";
import InputText from "./InputText";

const Input = Object.assign(InputContainer, {
  Main: InputMain,
  Header: InputHeader,
  Field: InputField,
  Extra: InputExtra,
  Text: InputText,
});

export default Input;

export { InputLabel, InputCounter };
