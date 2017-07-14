// redux dep
import { connect } from "react-redux";
import projects from "../../models/projects.js";
import lanes from "../../models/lanes.js";

// component dep
import Board from "../Board";

const mapStateToProps = (state) => {
    let project = projects.getCurrentProject(state);
    return {
        lanes: lanes.getLanes(state, project.project)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const BoardHome = connect(  
    mapStateToProps,
    mapDispatchToProps
)(Board);

export default BoardHome;
