// redux dep
import { connect } from "react-redux";

// component dep
import Item from "../components/Item";

// action dep
import { openInfo, closeInfo, removeItem } from "../actions/items";

const mapStateToProps = (state, ownProps) => {
    const currentProject = state.projects.find(project => project.current === true);
    const currentSprint = state.sprints.find(sprint => sprint.current === true);
    return {
        item: {
            project: currentProject.project, 
            week: currentSprint.week,
            column: ownProps.column,
            name: ownProps.name,
            openInfo: ownProps.openInfo,
            value: ownProps.value
        }
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dragItem: (event,item) => { 
            event.dataTransfer.setData("text", item.name);
        },
        openInfo: (event,item) => {
            dispatch(openInfo({project: item.project, name: item.name}));
        },
        closeInfo: (event,item) => {
            dispatch(closeInfo({project: item.project, name: item.name}));
        },
        removeItem: (item) => {
            dispatch(removeItem(item))
        },
    };
};

const GetItem = connect(  
    mapStateToProps,
    mapDispatchToProps
)(Item);

export default GetItem;
