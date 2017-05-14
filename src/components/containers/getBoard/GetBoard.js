import { connect } from "react-redux";
import Board from "../../presenters/board/Board";

const mapStateToProps = (state, ownProps) => {
    return {
        lanes: state.lanes.filter((lane) =>
            lane.project === ownProps.project
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const GetBoard = connect(  
    mapStateToProps,
    mapDispatchToProps
)(Board)

export default GetBoard;
