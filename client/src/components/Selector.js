// react dep
import React from "react";
import { Col, Row, DropdownButton, MenuItem } from "react-bootstrap";

// style dep
import "../css/Selector.css";

const Selector = ( { title, items, itemKey, addItemTitle, itemClicked} ) => {
    return (
        <Row className="Selector">
            <Col md={12}>
                <DropdownButton noCaret onSelect={(event) => itemClicked(event)} id="Selector" title={title}>
                    {items.map((item, index) =>
                        <MenuItem key={item[itemKey]} eventKey={item[itemKey]}>{index+1}&nbsp;&nbsp;<small>{item[itemKey]}</small></MenuItem>
                    )}
                    <MenuItem divider />
                    <MenuItem eventKey={"add"}>{addItemTitle}</MenuItem>
                </DropdownButton>
            </Col>
        </Row>
    )
}

export default Selector; 
