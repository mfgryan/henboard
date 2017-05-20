// react dep
import React from "react";

// style dep
import "./AddItem.css";

const AddItem = ( { item, lane, toggleAddItem, changeValue, addItem } ) => {
    const style = { visibility: lane.addItem ? "visible" : "hidden" }
    return (
        <div>
            <h2 onClick={() => toggleAddItem(lane)} >{lane.column}</h2>
            <div style={style}>
                <input type="text" onChange={(event) => changeValue(event,lane)} value={lane.value} />
                <button onClick={() => addItem(item)}>Add</button>
            </div>
        </div>
    )
}

export default AddItem; 
