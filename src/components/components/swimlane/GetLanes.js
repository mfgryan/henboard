import { connect } from "react-redux";

import Board from "../presenters/board/Board";

const mapStateToProps = (state) => {
    return {
        lanes: state.lanes  
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}
