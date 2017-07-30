// react dep
import React from "react";
import { Row, Col } from "react-bootstrap";

// component dep
import InfoItem from "./containers/InfoItem.js";

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
                <p onClick={() => removeItem(item)}>
                    {item.check ? "✔" : "X"}
                </p>
            </Col>
            {children}
        </Row>
    );
};

export default Item;
