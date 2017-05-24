// react dep
import React from "react";

// component dep
import GetAddItem from "../addItem/GetAddItem";
import GetItem from "../item/GetItem";

// style dep
import "./Swimlane.css";

const Swimlane = ( { project, column, week, items, allowDrop, dropItem } ) => {
    return (
        <div className="swimlane">
            <GetAddItem column={column} /> 
            <div className="itemsArea" onDrop={(event) => dropItem(event,project,column,week)} onDragOver={allowDrop} >
                {items.map((item,index) =>
                    <GetItem key={index} column={column} name={item.name} openInfo={item.openInfo} value={item.value} />
                )}
            </div>
        </div>
    );
};

export default Swimlane; 
