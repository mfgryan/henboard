// react dep
import React from "react";

// style dep
import "../css/AddItem.css";

const AddItem = ( { item, lane, toggleAddItem, changeValue, addItem } ) => {
    const style = { visibility: lane.addItem ? "visible" : "hidden" }
    return (
        <div className="AddItem">
            <h2 onClick={() => toggleAddItem(lane)} >{lane.column}</h2>
            <div className="AddItemInput" style={style}>
                <input type="text" onChange={(event) => changeValue(event,lane)} value={lane.value} />
                <button onClick={() => addItem(item)}>Add</button>
            </div>
        </div>
    );
};

export default AddItem; 
