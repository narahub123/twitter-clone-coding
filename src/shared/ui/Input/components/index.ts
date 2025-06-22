import InputContainer from "./InputContainer";
import InputExtra from "./InputExtra";
import InputField from "./InputField";
import InputHeader from "./InputHeader";
import InputMain from "./InputMain";
import InputLabel from "./InputLabel";

const Input = Object.assign(InputContainer, {
  Main: InputMain,
  Header: InputHeader,
  Extra: InputExtra,
  Field: InputField,
});

export default Input;

export { InputLabel };
