// redux dep
import { connect } from "react-redux";
import { changeItemValue, toggleInfoAdd } from "../../actions/items";
import { addInfo } from "../../actions/info";
import items from "../../models/items.js";

// component dep
import AddItem from "../AddItem";

const mapStateToProps = (state, ownProps) => {
    let item = items.getItem(state, ownProps.project, ownProps.title);
    return {
        title: ownProps.title,
        value: item.value,
        showAddItem: item.addItem,
        item: {
            project: ownProps.project,
            name: ownProps.title,
            value: item.value
        }
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        toggleAddItem: title => {
            dispatch(toggleInfoAdd({ project: ownProps.project, name: title }));
        },
        changeValue: (event, title) => {
            dispatch(
                changeItemValue({
                    project: ownProps.project,
                    name: title,
                    value: event.target.value
                })
            );
        },
        addItem: item => {
            dispatch(addInfo(item));
            //after adding an item clear the input field
            dispatch(
                changeItemValue({
                    project: item.project,
                    name: item.name,
                    value: ""
                })
            );
        }
    };
};

const AddItemLane = connect(mapStateToProps, mapDispatchToProps)(AddItem);

export default AddItemLane;
