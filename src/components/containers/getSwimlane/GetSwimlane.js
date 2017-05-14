import { connect } from "react-redux";
import Swimlane from "../../presenters/swimlane/Swimlane";
import { toggleAddItem } from "../../../actions/index";

const mapStateToProps = (state, ownProps) => {
    return {
        items: state.items.filter((item) =>
            item.project === ownProps.project && item.column === ownProps.column
        ),
        showAdd: state.lanes.find((lane) =>
            lane.project === ownProps.project && lane.column === ownProps.column
        ).addItem,
        project: ownProps.project,
        column: ownProps.column 
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        toggleAddItem: () => {
            dispatch(toggleAddItem({project: ownProps.project, column: ownProps.column})); 
        } 
    }
}

const GetSwimlane = connect(  
    mapStateToProps,
    mapDispatchToProps
)(Swimlane)

export default GetSwimlane;
