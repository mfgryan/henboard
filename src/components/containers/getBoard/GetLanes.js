import { connect } from "react-redux";
//import x from "../../../actions/index";
import Board from "../presenters/board/Board";


const mapStateToProps = (state) => {
    return {
        lanes: state.lanes  
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}
