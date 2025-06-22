import InputContainer from "./InputContainer";
import InputExtra from "./InputExtra";
import InputField from "./InputField";
import InputHeader from "./InputHeader";
import InputMain from "./InputMain";
import InputLabel from "./InputLabel";
import InputCounter from "./InputCounter";

const Input = Object.assign(InputContainer, {
  Main: InputMain,
  Header: InputHeader,
  Field: InputField,
  Extra: InputExtra,
});

export default Input;

export { InputLabel, InputCounter };
