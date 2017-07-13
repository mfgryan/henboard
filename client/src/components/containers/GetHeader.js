// redux dep
import { connect } from "react-redux";

// component dep
import Header from "../Header";

// action dep
import { removeMessages } from "../../actions/messages.js";

const mapStateToProps = (state, ownProps) => {
    return {
        project: state.projects.find((project) =>
           project.current === true
        ).project,
        messages: state.messages
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        removeMessages: () => {
            dispatch(removeMessages()); 
        } 
    };
};

const GetHeader = connect(  
    mapStateToProps,
    mapDispatchToProps
)(Header);

export default GetHeader;
