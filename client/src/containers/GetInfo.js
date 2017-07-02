// redux dep
import { connect } from "react-redux";

// component dep
import Info from "../components/Info";

// action dep
import { addInfo, removeInfo } from "../actions/info";
import { closeInfo, changeItemValue } from "../actions/items";

const mapStateToProps = (state, ownProps) => {
    const currentProject = state.projects.find(project => project.current === true);
    return {
        info: state.info.filter((info) =>
            info.project === currentProject.project && info.name === ownProps.name 
        ),
        item: {
            project: currentProject.project, 
            name: ownProps.name,
            value: ownProps.value
        }
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addInfo: (item) => { 
            //only add info item if non blank
            if(item.value !== ""){
                dispatch(addInfo({
                    project: item.project, 
                    name: item.name, 
                    value: item.value
                }));
            }
            // clear the input field after adding info item
            dispatch(changeItemValue({
                project: item.project,  
                name: item.name,
                value: ""
            }));
        },
        removeInfo: (info) => {
            dispatch(removeInfo({
                project: info.project, 
                name: info.name, 
                value: info.value
            }));
        },
        changeItemValue: (event,item) => {
            dispatch(changeItemValue({
                project: item.project, 
                name: item.name, 
                value: event.target.value
            }));
        },
        closeInfo: (event,item) =>{
            dispatch(closeInfo({
                project: item.project, 
                name: item.name
            }));    
        }
    }
};

const GetInfo = connect(  
    mapStateToProps,
    mapDispatchToProps
)(Info);

export default GetInfo;
