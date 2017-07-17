// react dep
import React from "react";
import { connect } from "react-redux";
import { moveItem } from "../../actions/items";
import sprints from "../../models/sprints.js";
import items from "../../models/items.js";

// component dep
import ItemLane from "./ItemLane";
import AddItemLane from "./AddItemLane.js";
import InfoItem from "./InfoItem.js";
import BacklogButton from "./BacklogButton.js";

// style dep
import "../../css/Swimlane.css";

export const Swimlane = ( { project, column, week, items, allowDrop, dropItem } ) => {
    return (
        <div className="swimlane">
            <AddItemLane project={project} column={column} /> 
            <div className="itemsArea" onDrop={(event) => dropItem(event,project,column,week)} onDragOver={allowDrop} >
                {items.map((item,index) =>
                    <ItemLane key={index} column={column} name={item.name} openInfo={item.openInfo} value={item.value}>
                        {item.openInfo && <InfoItem project={project} name={item.name}/>}
                        {item.column === "Backlog" && <BacklogButton item={item} />}
                    </ItemLane>
                )}
            </div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    let sprint = sprints.getCurrentSprint(state);
    let itemsArray = ownProps.column === "Backlog" ? state.items : items.getItemsBySprint(state, ownProps.project, sprint.week);
    return {
        project: ownProps.project, 
        column: ownProps.column,
        week: sprint.week,
        items: itemsArray.filter((item) =>
            item.column === ownProps.column
        )
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        allowDrop: (event) => {
            event.preventDefault();
        },
        dropItem: (event,project,column,week) => { 
            event.preventDefault();
            const name = event.dataTransfer.getData("text");
            dispatch(moveItem({project: project, name: name, week: week, column: column}))
        } 
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Swimlane);
