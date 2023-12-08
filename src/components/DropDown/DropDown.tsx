import { FC, useEffect, useState } from "react"
import "./DropDown.css"
import React from "react"


type stateData = {
    id: number,
    name: string,
    abbreviation: string
}

 type departmentData = {
    id: number,
    name: string,
}

interface Props {
    options: stateData[] | departmentData[]
    SelectedValue: (value: {id: string, value: string}) => void;
    size?: "small" | "medium" | "large"
    id: string
    dropDownOpenId?: (id: string) => void
    forceClose?: boolean
}

const DropDown: FC<Props> = ({ options, id, SelectedValue, dropDownOpenId, size, forceClose} ) => {
    const [dropdownValue, setDropDownValue] = useState('')
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        if(isOpen === true && dropDownOpenId) {
            dropDownOpenId(id)
        }

        if(forceClose === true) {
            setIsOpen(false)
        }
    }, [forceClose])
    const toggle = () => {
        setIsOpen(!isOpen)
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
                <i className={`fas fa-chevron-${isOpen ? 'down' : 'up'}`}></i>
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