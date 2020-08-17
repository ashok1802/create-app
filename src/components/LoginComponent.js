import React from 'react';
import { Container, Row, CardBody, FormFeedback, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';

const LoginComponent = (props) => {
  const {username, password, setUsername, setPassword, validateData,
    usernameErr, passwordErr, dispatch, state} = props
  // const setUserValue = (e) => {
  //   setUsername(e.target.value)
  // }
  // const setPasswordValue = (e) => {
  //   setPassword(e.target.value)
  // }

  const handleChange = (e) => {
    dispatch({ type: e.target.name, value: e.target.value });
  };

  return (
    <Container>
      <Row>
        <Col sm={{size: 6, offset: 3}}>
          <CardBody className="shadow-lg my-3">
            <Form>
              <FormGroup>
                <Label for="username" sm={2}>Email</Label>
                {/* <Input type="username" name="username" placeholder="Enter Username"
                  value={username} onChange={setUserValue} invalid={usernameErr !== null}/> */}
                  <Input type="email" name="username" placeholder="Enter Username"
                  onChange={handleChange} invalid={state.usernameErr !== null}/>
                <FormFeedback>{state.usernameErr}</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label for="password" sm={2}>Password</Label>
                {/* <Input type="password" name="password" placeholder="password"
                  value={password} onChange={setPasswordValue} invalid={passwordErr !== null}/> */}
                <Input type="password" name="password" placeholder="password"
                  onChange={handleChange} invalid={state.passwordErr !== null}/>
                <FormFeedback>{state.passwordErr}</FormFeedback>
              </FormGroup>
              <FormGroup>
                  <Button onClick={validateData}>Submit</Button>
              </FormGroup>
            </Form>
          </CardBody>
        </Col>
      </Row>
    </Container>
  )
}

export default LoginComponent;


// LoginComponent.propTypes = {
//   username: PropTypes.string.isRequired,
//   password: PropTypes.string.isRequired
// };
