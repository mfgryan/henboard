// redux dep
import { connect } from "react-redux";
import sprints from "../../models/sprints.js";
import { closeInfo } from "../../actions/items";
import { moveItem } from "../../actions/items.js";

// component dep
import Selector from "../Selector";

const mapStateToProps = (state, ownProps) => {
    return {
        title: "Send To",
        items: sprints.getSprintArray(state, ownProps.project),
        itemKey: "week"
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        itemClicked: key => {
            dispatch(moveItem({
                project: ownProps.project, 
                name: ownProps.title,
                week: key,
                column: "Todo"
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
