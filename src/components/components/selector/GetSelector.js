// redux dep
import { connect } from "react-redux";

// component dep
import Selector from "./Selector";

const mapStateToProps = (state, ownProps) => {
    let curDate = new Date(); 
    //let latestDate
    //logic here saying sprint needs to be updated
    //with new sprint 
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    //logic here for dispatching a new sprint to add
    return {}
}

const GetSelector = connect(  
    mapStateToProps,
    mapDispatchToProps
)(Selector)

export default GetSelector;
