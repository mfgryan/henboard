// react dep
import React from "react";
import { Modal, Col, Row, Button } from "react-bootstrap";

// component dep
import AddItemInfo from "./containers/AddItemInfo.js";

// utilities
import { url } from "../util/util.js";

// style
import "../css/Info.css";

const Info = ({ project, info, title, removeInfo, closeInfo }) => {
    return (
        <Modal.Dialog draggable="false">
            <Modal.Header>
                <AddItemInfo project={project} title={title} />
            </Modal.Header>
            {info.length > 0 &&
                <Modal.Body>
                    {info.map((info, index) =>
                        <Row key={index}>
                            <Col md={10}>
                                {!url().isUrl(info.value)
                                    ? info.value
                                    : <a href={url().checkProtocol(info.value)}>
                                          {info.value}
                                      </a>}
                            </Col>
                            <Col md={2}>
                                <p onClick={() => removeInfo(info)}>X</p>
                            </Col>
                        </Row>
                    )}
                </Modal.Body>}
            <Modal.Footer>
                <Button onClick={event => closeInfo(event, title)}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal.Dialog>
    );
};

export default Info;
