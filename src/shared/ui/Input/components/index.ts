import InputContainer from "./InputContainer";
import InputExtra from "./InputExtra";
import InputMain from "./InputMain";

const Input = Object.assign(InputContainer, {
  Main: InputMain,
  Extra: InputExtra,
});

export default Input;
