import React from 'react'

const ExcursionPickerList = (props) => {
    const nameList = props.list.map(
        item => {
            return (
                <p className="f5 ba pa2" key={item.mainId} id={item.mainId} onClick={() => props.handleClick(item)}>{item.excTitle}</p>
            );
        }
    )
    return nameList;
}

export default ExcursionPickerList;