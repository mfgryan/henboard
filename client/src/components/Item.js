// react dep
import React from "react";
import { Row, Col } from "react-bootstrap";

// style dep
import "../css/Item.css";

const Item = ({
    draggable,
    item,
    children,
    dragItem,
    itemClicked,
    removeItem
}) => {
    return (
        <Row
            className="Item"
            draggable={draggable}
            onDragStart={event => dragItem(event, item)}>
            <Col md={10}>
                <p onClick={event => itemClicked(event, item)}>
                    {item.name}
                </p>
            </Col>
            <Col md={2}>
                <p className="removeItem" onClick={() => removeItem(item)}>
                    {item.check ? "✔" : "X"}
                </p>
            </Col>
            {children}
        </Row>
    );
};

export default Item;
