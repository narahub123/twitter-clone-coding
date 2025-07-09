import Progressbar from "@shared/ui/Progressbar";
import DropdownContainer from "./DropdownContainer";
import DropdownMenuItem from "./DropdownMenuItem";
import DropdownOption from "./DropdownOption";

const Dropdown = Object.assign(DropdownContainer, {
  Progressbar: Progressbar,
  Option: DropdownOption,
  MenuItem: DropdownMenuItem,
});

export default Dropdown;
