// react dep
import React from "react";

// bootstrap dep
import { Col, Row } from "react-bootstrap";

const Selector = ( { sprints, setSprint } ) => {
    return (
        <select onChange={setSprint} value={sprints.find(sprint => sprint.current).week} >        
            {sprints.map((sprint) => 
                <option value={sprint.week} key={sprint.week} >{sprint.week}</option>
            )}
        </select>
    )
}

export default Selector; 
