// redux dep
import { connect } from "react-redux";
import { changeItemValue  } from "../../actions/items";
import { addInfo } from "../../actions/info";
import items from "../../models/items.js";

// component dep
import AddItem from "../AddItem";

const mapStateToProps = (state, ownProps) => {
    let item = items.getItem(state, ownProps.project, ownProps.title);
    return {
        title: ownProps.title,
        value: item.value,
        showAddItem: ownProps.showAddItem,
        item: {
            project: ownProps.project,
            name: ownProps.title,
            value: item.value
        }
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        toggleAddItem: (title) => {}, 
        changeValue: (event,title) => {
            dispatch(changeItemValue({
                project: ownProps.project,  
                name: title,
                value: event.target.value
            }));
        },
        addItem: (item) => {
            dispatch(addInfo(item));
        }
    };
};

const AddItemLane = connect(  
    mapStateToProps,
    mapDispatchToProps
)(AddItem);

export default AddItemLane;
