import { FC } from "react";
import "./DropDown.css";
import '@fortawesome/fontawesome-free/css/all.css';
type DropdownData = {
    id: number;
    name: string;
    abbreviation?: string;
};
interface Props {
    options: DropdownData[];
    onSelectedValue: (value: {
        id: number;
        value: string;
    }) => void;
    size?: "small" | "medium" | "large";
    id: number;
    onOpened: (id: number) => void;
    idOfDropdownOpened?: number;
}
declare const DropDown: FC<Props>;
export default DropDown;
