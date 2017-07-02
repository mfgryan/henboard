// react dep
import React from "react";

// bootstrap dep
import { Row, Col } from "react-bootstrap";

// component dep
import GetInfo from "../containers/GetInfo";

const Item = ( {item, dragItem, openInfo, removeItem } ) => {
    return (
        <Row draggable={!item.openInfo} onDragStart={(event) => dragItem(event,item)}>
            <Col md={10}> 
                <p onClick={(event) => openInfo(event,item)}>{item.name}</p>
            </Col>
            <Col md={2}>
                <p onClick={() => removeItem(item)}>{item.column === "Done" ? "✔": "X"}</p>
            </Col>
            {item.openInfo && <GetInfo name={item.name} value={item.value} />}
        </Row>
    );
};

export default Item; 
