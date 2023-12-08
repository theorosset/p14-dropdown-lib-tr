import { FC, useEffect, useState } from "react"
import "./DropDown.css"
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.css';


type DropdownData = {
    id: number,
    name: string,
    abbreviation?: string
}

interface Props {
    options: DropdownData[]
    SelectedValue: (value: {id: string, value: string}) => void;
    size?: "small" | "medium" | "large"
    id: string
    dropDownOpenId: (id: string) => void
    forceCloseDropdown: string
}

const DropDown: FC<Props> = ({ options, id, SelectedValue, dropDownOpenId, size, forceCloseDropdown} ) => {
    const [dropdownValue, setDropDownValue] = useState('')
    const [isOpen, setIsOpen] = useState(false)

    
    useEffect(() => {
        if(forceCloseDropdown !== id) {
            setIsOpen(false)
        }
    }, [forceCloseDropdown])

    const toggle = () => {
        setIsOpen((prevState) => {
            const newState = !prevState
            if(newState === true) {
                dropDownOpenId(id)
            }
            return newState
        })
    }

    const handlerSelectDropDown = (event: React.MouseEvent<HTMLLIElement>) => {
        const valueChoose = event.currentTarget.textContent;
        if (valueChoose) {
            SelectedValue({id, value: valueChoose})
            setDropDownValue(valueChoose)
            toggle()
        }
    };

    return (
        <div className={`dropDown__container ${size ? size : ""}`}>
            <div className={`dropDown__container__input ${isOpen ? 'borderBottomNone' : ''}`} onClick={toggle}>
                <div className="dropDown__container__input--value" id={id}>
                <p>{dropdownValue}</p>
                <FontAwesomeIcon icon={isOpen ? faChevronDown : faChevronUp} />
                </div>
            </div>
            <div className={`dropDown__container__options ${isOpen ? 'supperposition' : 'displayNone'}`}>
                <ul className="dropDown__container__options--list">
                    { options.map(({id, name}) => <li 
                    onClick={handlerSelectDropDown} 
                    key={ id }
                    >{ name }</li>) }
                </ul>
            </div>
        </div>
    )
}


export default DropDown