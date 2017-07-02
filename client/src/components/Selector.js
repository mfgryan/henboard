// react dep
import React from "react";

// bootstrap dep
import { Col, Row, DropdownButton, MenuItem } from "react-bootstrap";

const Selector = ( { project, sprints, currentSprint, setSprint, addSprint } ) => {
    const title = <span>Sprint Week {currentSprint.week}</span>
    return (
        <Row>
            <Col md={12}>
                <DropdownButton noCaret onSelect={(event) => setSprint(event,project)} id={project} title={title}>
                    {sprints.map((sprint) =>
                        <MenuItem key={sprint.week} eventKey={sprint.week}>{sprint.week}</MenuItem>
                    )}
                    <MenuItem divider />
                    <MenuItem eventKey={"add"}>New Sprint + </MenuItem>
                </DropdownButton>
            </Col>
        </Row>
    )
}

export default Selector; 
