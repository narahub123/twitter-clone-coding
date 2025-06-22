import InputContainer from "./InputContainer";
import InputExtra from "./InputExtra";
import InputHeader from "./InputHeader";
import InputMain from "./InputMain";

const Input = Object.assign(InputContainer, {
  Main: InputMain,
  Header: InputHeader,
  Extra: InputExtra,
});

export default Input;
