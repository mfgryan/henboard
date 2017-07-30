// redux dep
import { connect } from "react-redux";
import { removeInfo } from "../../actions/info";
import { closeInfo } from "../../actions/items";
import projects from "../../models/projects.js";
import info from "../../models/info.js";

// component dep
import Info from "../Info";

const mapStateToProps = (state, ownProps) => {
    let project = projects.getCurrentProject(state);
    return {
        project: project.project,
        info: info.getInfoArray(state, project.project, ownProps.name),
        title: ownProps.name
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        removeInfo: info => {
            dispatch(
                removeInfo({
                    project: info.project,
                    name: info.name,
                    value: info.value
                })
            );
        },
        closeInfo: (event, title) => {
            dispatch(
                closeInfo({
                    project: ownProps.project,
                    name: title
                })
            );
        }
    };
};

const InfoItem = connect(mapStateToProps, mapDispatchToProps)(Info);

export default InfoItem;
