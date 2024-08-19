import React, { useState } from 'react'
import accordionData from './data'
import "./style.css"

function Accordian() {

    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId)
        console.log(getCurrentId)
    }
    function handleMultiSelection(getCurrentId) {
        let cpyMultiple = [...multiple];
        const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId)


        if (findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId);
        else cpyMultiple.splice(findIndexOfCurrentId, 1);
        setMultiple(cpyMultiple)

    }

    return (
        <div className='wrapper'>
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selction</button>
            <div className='accordian'>

                {
                    accordionData && accordionData.length > 0 ?
                        accordionData.map((dataItem) => {
                            return (

                                <div className='item' >

                                    <div onClick={
                                        enableMultiSelection
                                            ? () => handleMultiSelection(dataItem.id)
                                            : () => handleSingleSelection(dataItem.id)
                                    }
                                        className='title'
                                    >
                                        <h3>{dataItem.question}</h3>
                                        <span>+</span>
                                    </div>
                                    {
                                        enableMultiSelection
                                            ? multiple.indexOf(dataItem.id) !== -1 && (
                                                <div className='content'>{dataItem.answer}</div>
                                            ) : selected === dataItem.id && (
                                                <div className='content'>{dataItem.answer}</div>
                                            )
                                    }

                                </div>
                            )
                        })
                        : <div>no data found</div>
                }
            </div>
        </div>
    )
}

export default Accordian