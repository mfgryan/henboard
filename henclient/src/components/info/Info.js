// react dep
import React from "react";

// bootstrap dep
import { Modal, Col, Row, Button } from "react-bootstrap";

// url dep
import { urlUtil } from "../../util/Util";

const Info = ( { info, item, addInfo, removeInfo, changeItemValue, closeInfo } ) => {
    return (
        <Modal.Dialog draggable="false">
            <Modal.Header>
                <h2>{item.name}</h2>
                <input type="text" onChange={(event) =>changeItemValue(event,item)} value={item.value}/>
                <button onClick={() => addInfo(item)}>Add</button>
            </Modal.Header>
            {info.length > 0 && <Modal.Body>
                {info.map((info,index) =>
                <Row key={index} >
                    <Col md={10}>
                        {!urlUtil().isUrl(info.value) ? info.value :
                        <a href={urlUtil().checkProtocol(info.value)}>{info.value}</a>
                        }
                    </Col>
                    <Col md={2}>
                        <p onClick={() => removeInfo(info)}>X</p>
                    </Col>
                </Row>
                )}
            </Modal.Body>}
            <Modal.Footer>
                <Button onClick={(event) => closeInfo(event,item)}>Close</Button>
            </Modal.Footer>
        </Modal.Dialog>
    );
};

export default Info; 
