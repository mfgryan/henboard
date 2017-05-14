import React from "react";
import AddItem from "../addItem/AddItem";

const Swimlane = ( { items, showAdd, project, column, toggleAddItem} ) => {
    return (
        <div className="swimlane">
            <AddItem showAdd={showAdd} column={column} toggleAddItem={toggleAddItem} /> 
            <div className="itemsArea" >
                {items.map((item,index) =>
                    <div key={index}>{item.name}</div>
                )}
            </div>
        </div>
    )
}

export default Swimlane; 
