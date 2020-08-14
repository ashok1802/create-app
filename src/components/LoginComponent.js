import React from 'react';
import { Row, FormFeedback, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';

const LoginComponent = ({username, password, setUsername, setPassword, validateData}) => {
  const setUserValue = (e) => {
    setUsername(e.target.value)
  }
  const setPasswordValue = (e) => {
    setPassword(e.target.value)
  }
  return (
    <Row>
      <Col sm={{size: 6, offset: 3}}>
      <Form>
        <FormGroup>
          <Label for="email" sm={2}>Email</Label>
          <Input type="email" name="email" placeholder="Enter Email" value={username} onChange={setUserValue}/>
          <FormFeedback>Oh noes! Email Invalid</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="password" sm={2}>Password</Label>
          <Input type="password" name="password" placeholder="password" value={password} onChange={setPasswordValue}/>
          <FormFeedback tooltip>Oh noes! Wrong Password</FormFeedback>
        </FormGroup>
        <FormGroup>
            <Button onClick={validateData}>Submit</Button>
        </FormGroup>
      </Form>
      </Col>
    </Row>
  )

}


export default LoginComponent;

LoginComponent.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
};
