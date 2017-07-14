// redux dep
import { connect } from "react-redux";
import { addSprint, setCurrentSprint } from "../../actions/sprints";
import projects from "../../models/projects.js"
import sprints from "../../models/sprints.js"

// component dep
import Selector from "../Selector";

// utilities
import { date } from "../../util/util.js"; 

const mapStateToProps = (state, ownProps) => {
    let project = projects.getCurrentProject(state);
    return {
        project: project.project,
        sprints: sprints.getSprintArray(state, project.project),
        currentSprint: sprints.getCurrentSprint(state, project.project)
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
