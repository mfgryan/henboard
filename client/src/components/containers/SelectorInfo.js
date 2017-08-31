// redux dep
import { connect } from "react-redux";
import sprints from "../../models/sprints.js";
import { closeInfo } from "../../actions/items";
import { moveItem } from "../../actions/items.js";

// component dep
import Selector from "../Selector";

const mapStateToProps = (state, ownProps) => {
    var items = sprints.getSprintArray(state, ownProps.project);
    items.unshift({week: "Backlog"});
    return {
        title: "Send To",
        items: items, 
        itemKey: "week"
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        itemClicked: key => {
            dispatch(moveItem({
                project: ownProps.project, 
                name: ownProps.title,
                week: key === "Backlog" ? "" : key,
                column: key === "Backlog" ? "Backlog" : "Todo"
            }));  
            dispatch(
                closeInfo({
                    project: ownProps.project, 
                    name: ownProps.title
                }) 
            );
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Selector);
