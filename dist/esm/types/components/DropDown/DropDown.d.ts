import { FC } from "react";
import "./DropDown.css";
type stateData = {
    id: number;
    name: string;
    abbreviation: string;
};
type departmentData = {
    id: number;
    name: string;
};
interface Props {
    options: stateData[] | departmentData[];
    SelectedValue: (value: {
        id: string;
        value: string;
    }) => void;
    size?: "small" | "medium" | "large";
    id: string;
}
declare const DropDown: FC<Props>;
export default DropDown;
