// react dep
import React from "react";

// component dep
import AddItemLane from "./containers/AddItemLane.js";
import GetItem from "./containers/GetItem";

// style dep
import "../css/Swimlane.css";

const Swimlane = ( { project, column, week, items, allowDrop, dropItem } ) => {
    return (
        <div className="swimlane">
            <AddItemLane project={project} column={column} /> 
            <div className="itemsArea" onDrop={(event) => dropItem(event,project,column,week)} onDragOver={allowDrop} >
                {items.map((item,index) =>
                    <GetItem key={index} column={column} name={item.name} openInfo={item.openInfo} value={item.value} />
                )}
            </div>
        </div>
    );
};

export default Swimlane; 
