// react dep
import React from "react";
import { connect } from "react-redux";
import { login } from "../../actions/user.js";

// component dep
import App from "../App.js";
import { Col, Row, Button } from "react-bootstrap";

// style dep
import "../../css/Account.css";

export const Account = ({ login, user }) => {
    return (
        <App>
            <div id="Account">
                <Row>
                    <Col className="AccountField" md={4} mdOffset={4}>
                        <h3>Login</h3>
                    </Col>
                </Row>
                <Row>
                    <Col md={2} mdOffset={4}>
                        <h4>Email</h4>
                    </Col>
                    <Col md={4}>
                        <input type="text" />
                    </Col>
                </Row>
                <Row>
                    <Col md={2} mdOffset={4}>
                        <h4>Password</h4>
                    </Col>
                    <Col md={4}>
                        <input type="password"/>
                    </Col>
                </Row>
                <Row>
                    <Col md={2} mdOffset={6} className="AccountButton" >
                        <Button onClick={(user) => login({email: "bob", password: "123"})} >Submit</Button>
                    </Col>
                </Row>
            </div>
        </App>
    );
};

const mapStateToProps = state => {
    return {
        user: {
            name: "bob", 
            email: "bob@gmail.com"
        } 
    };
};

const mapDispatchToProps = dispatch => {
    return {
        login: (user) => {
            dispatch(login(user));
        }  
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);
