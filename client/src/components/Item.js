// react dep
import React from "react";

// bootstrap dep
import { Row, Col } from "react-bootstrap";

// component dep
import InfoItem from "./containers/InfoItem.js";

const Item = ( { draggable, item, dragItem, itemClicked, removeItem } ) => {
    return (
        <Row draggable={draggable} onDragStart={(event) => dragItem(event,item)}>
            <Col md={10}> 
                <p onClick={(event) => itemClicked(event,item)}>{item.name}</p>
            </Col>
            <Col md={2}>
                <p onClick={() => removeItem(item)}>{item.column === "Done" ? "✔": "X"}</p>
            </Col>
            {item.openInfo && <InfoItem project="henboard" name={item.name} value={item.value} />}
        </Row>
    );
};

export default Item; 
