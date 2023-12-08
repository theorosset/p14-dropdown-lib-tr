import { FC } from 'react';

type DropdownData = {
    id: number;
    name: string;
    abbreviation?: string;
};
interface Props {
    options: DropdownData[];
    SelectedValue: (value: {
        id: string;
        value: string;
    }) => void;
    size?: "small" | "medium" | "large";
    id: string;
    dropDownOpenId: (id: string) => void;
    forceCloseDropdown: string;
}
declare const DropDown: FC<Props>;

export { DropDown };
