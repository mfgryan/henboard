// redux dep
import { connect } from "react-redux";
import { addSprint, setCurrentSprint } from "../../actions/sprints";
import sprints from "../../models/sprints.js";

// component dep
import Selector from "../Selector";

// utilities
import { date } from "../../util/util.js";

const mapStateToProps = (state, ownProps) => {
    return {
        title: "Send To",
        items: sprints.getSprintArray(state, ownProps.project),
        itemKey: "week",
        addItemTitle: "New Sprint +"
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        itemClicked: key => {
            if (key === "add") {
                dispatch(
                    addSprint({
                        project: ownProps.project,
                        week: date().getDateFormat(new Date())
                    })
                );
            } else {
                dispatch(
                    setCurrentSprint({ project: ownProps.project, week: key })
                );
            }
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Selector);
