// react dep
import React from "react";

// style dep
import "../css/AddItem.css";

const AddItem = ( { title, value, showAddItem, item, toggleAddItem, changeValue, addItem } ) => {
    const style = { visibility: showAddItem ? "visible" : "hidden" }
    return (
        <div className="AddItem">
            <h2 onClick={() => toggleAddItem(title)} >{title}</h2>
            <div className="AddItemInput" style={style}>
                <input type="text" onChange={(event) => changeValue(event,title)} value={value} />
                <button onClick={() => addItem(item)}>Add</button>
            </div>
        </div>
    );
};

export default AddItem; 
