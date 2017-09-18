// react dep
import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../../actions/user.js";

// component dep
import { Col, Row, Button, Modal } from "react-bootstrap";

// style dep
import "../../css/Login.css";

class Login extends Component {
    constructor(props){
        super(props); 
        this.state = {
            email: "", 
            password: ""
        };
    }

    render() {
        let user = { email: this.state.email, password: this.state.password };
        return (
            <Modal.Dialog id="Account" draggable="false">
                <Modal.Body>
                    <Row>
                        <Col md={4} mdOffset={3}>
                            <h3>Login</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={2} mdOffset={3} >
                            <h4>Email</h4>
                        </Col>
                        <Col md={4}>
                            <input type="text" value={user.email} onChange={e => this.setState({ email: e.target.value}) }/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={2} mdOffset={3} >
                            <h4>Password</h4>
                        </Col>
                        <Col md={4}>
                            <input type="password" value={user.password} onChange={e => this.setState({password: e.target.value}) }/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} mdOffset={3} className="AccountButton">
                            <Button id="AccountSub" onClick={() => this.props.login(user)} >Submit</Button>
                        </Col>
                    </Row>
                    <br />
                </Modal.Body>
                <Modal.Footer>
                    <Row>
                        <Col md={1} mdOffset={10}>
                            <Button onClick={() => this.props.close()}>Close</Button>
                        </Col>
                    </Row>
                </Modal.Footer>
            </Modal.Dialog>
        );
    }
};

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        login: (user) => {
            dispatch(login(user));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
