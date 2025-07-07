import styles from "./DropdownMenuItem.module.css";
import { joinClassNames } from "@shared";

interface DropdownMenuItemProps {
  className?: string;
}

const DropdownMenuItem = ({ className }: DropdownMenuItemProps) => {
  const classNames = joinClassNames([
    styles["dropdown__menu__item"],
    className,
  ]);

  return <div className={classNames}>DropdownMenuItem</div>;
};

export default DropdownMenuItem;
