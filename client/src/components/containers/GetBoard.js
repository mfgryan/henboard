// redux dep
import { connect } from "react-redux";

// component dep
import Board from "../Board";

const mapStateToProps = (state) => {
    const currentProject = state.projects.find(project => project.current === true);
    return {
        lanes: state.lanes.filter((lane) =>
            lane.project === currentProject.project
        )
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {};
};

const GetBoard = connect(  
    mapStateToProps,
    mapDispatchToProps
)(Board);

export default GetBoard;
