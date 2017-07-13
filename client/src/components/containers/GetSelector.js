// redux dep
import { connect } from "react-redux";

// component dep
import Selector from "../Selector";

// action dep
import { addSprint, setCurrentSprint } from "../../actions/sprints";

import { date } from "../../util/util.js"; 

const mapStateToProps = (state, ownProps) => {
    const currentProject = state.projects.find(project => project.current === true);
    return {
        project: currentProject.project,
        sprints: state.sprints.filter((sprint) =>
            sprint.project === currentProject.project
        ),
        currentSprint: state.sprints.find(sprint => sprint.current)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSprint: ( week, project ) => {
            if(week === "add"){
                dispatch(addSprint({project: project, week: date().getDateFormat(new Date())}));
            }else{
                dispatch(setCurrentSprint({project: project, week: week}))
            }
        }
    }
}

const GetSelector = connect(  
    mapStateToProps,
    mapDispatchToProps
)(Selector)

export default GetSelector;
