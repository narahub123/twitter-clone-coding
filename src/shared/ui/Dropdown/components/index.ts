import DropdownContainer from "./DropdownContainer";
import DropdownMenuItem from "./DropdownMenuItem";
import DropdownOption from "./DropdownOption";

const Dropdown = Object.assign(DropdownContainer, {
  Option: DropdownOption,
  MenuItem: DropdownMenuItem,
});

export default Dropdown;
