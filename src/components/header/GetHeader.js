// redux dep
import { connect } from "react-redux";

// component dep
import Header from "./Header";

const mapStateToProps = (state, ownProps) => {
    return {
        project: state.projects.find((project) =>
           project.current === true
        ).project
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {}
}

const GetHeader = connect(  
    mapStateToProps,
    mapDispatchToProps
)(Header)

export default GetHeader;
