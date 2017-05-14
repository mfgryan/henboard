import React from "react";

const AddItem = ( {showAdd, column, toggleAddItem} ) => {
    return (
        <div>
            <h2 onClick={toggleAddItem} >{column}</h2>
            {showAdd &&
                <div>
                    <input type="text" />
                    <button>Add</button>
                </div>
            }
        </div>
    )
}

export default AddItem; 
