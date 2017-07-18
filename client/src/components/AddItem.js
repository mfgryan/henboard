// react dep
import React from "react";
import { FormGroup, InputGroup, FormControl, Button } from "react-bootstrap";

// style dep
import "../css/AddItem.css";

const AddItem = ( { title, value, showAddItem, item, toggleAddItem, changeValue, addItem } ) => {
    const style = { visibility: showAddItem ? "visible" : "hidden" }
    return (
        <div className="AddItem">
            <h2 onClick={() => toggleAddItem(title)} >{title}</h2>
            <div className="AddItemInput" style={style}>
                <FormGroup>
                    <InputGroup bsSize="sm">
                        <FormControl type="text" value={value} onChange={(event) => changeValue(event,title)} />
                        <InputGroup.Button type="text">
                            <Button onClick={() => addItem(item)} >Add</Button>
                        </InputGroup.Button>
                    </InputGroup>
                </FormGroup>
            </div>
        </div>
    );
};

export default AddItem; 
