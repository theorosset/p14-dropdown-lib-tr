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
    onSelectedValue: (value: {id: number, value: string}) => void;
    size?: "small" | "medium" | "large"
    id: number
    onOpened: (id: number) => void
    idOfDropdownOpened?: number
}

const DropDown: FC<Props> = ({ options, id, onSelectedValue, onOpened, size, idOfDropdownOpened} ) => {
    const [dropdownValue, setDropDownValue] = useState('')
    const [isOpen, setIsOpen] = useState(false)

    // at update of component check if another dropdown are open and closed it 
    useEffect(() => {
        if(idOfDropdownOpened !== id) {
            setIsOpen(false)
        }
    }, [idOfDropdownOpened])
    
    //toggle the dropdown
    const toggle = () => {
        setIsOpen((prevState) => {
            const newState = !prevState
            if(newState === true) {
                //send ID of dropdown opened
                onOpened(id)
            }
            return newState
        })
    }

    //send the selected value of dropdown
    const handlerSelectDropDown = (event: React.MouseEvent<HTMLLIElement>) => {
        const valueChoose = event.currentTarget.textContent;
        if (valueChoose) {
            onSelectedValue({id, value: valueChoose})
            setDropDownValue(valueChoose)
            toggle()
        }
    };

    return (
        <div className={`dropDown__container ${size ? size : ""}`}>
            <div className={`dropDown__container__input ${isOpen ? 'borderBottomNone' : ''}`} onClick={toggle}>
                <div className="dropDown__container__input--value" id={`${id}`}>
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