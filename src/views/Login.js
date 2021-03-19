import React from "react";
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  UncontrolledAlert
} from "reactstrap";
import { Link } from "react-router-dom";
import UserService from "../user.service"

class Login extends React.Component {
  state = {};
  UserService = new UserService();
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      userName: "",
      password: "",
      showVerfication: false,
      visible: false,
      errorMessage: "",
      resetFlag: false,
      errorLogin: false
    };
  }
  inputChange (data, type) {
    this.setState({ [type]: data.target.value })
  }
  register () {
    this.props.history.push('/register')
  }
  loginSubmit = () => {
    this.UserService.authenticate(this.state)
      .then((data, err) => {
        console.log('data ::', data);
        if (data) {
          localStorage.setItem('logged', true)
          this.props.history.push('/user/news');
        } else {
          localStorage.setItem('logged', false)
          this.toggle();
        }
      })
      .catch((err) => {
        console.log(err, "messagess");
        this.toggle();
      });
  }
  toggle = () => {
    this.setState({ errorLogin: !this.state.errorLogin });
  }
  render () {
    return (
      <>
        <Col lg="5" md="7">

          <Card className="bg-secondary shadow border-0">

            <UncontrolledAlert color="danger" fade={false} isOpen={this.state.errorLogin} toggle={this.toggle}>
              <span className="alert-inner--text">
                <strong>User does not exist.</strong>
              </span>
            </UncontrolledAlert>            
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small><h3>Welcome!</h3></small>
                <small>Please sign-in to your account.</small>
              </div>
              <Form role="form">
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-mobile-button" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input onChange={(e => this.inputChange(e, "email"))} placeholder="Email" type="mobile" autoComplete="new-mobile" />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input onChange={(e => this.inputChange(e, "password"))} placeholder="Password" type="password" autoComplete="new-password" />
                  </InputGroup>
                </FormGroup>
                
                <div className="text-center">
                  <Button onClick={this.loginSubmit} className="my-4" color="primary" type="button">
                    Log in
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
          <Row className="mt-3">
            <Col xs="6">
              <a
                className="text-light"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                {/* <small>Forgot password?</small> */}
              </a>
            </Col>
            <Col className="text-right" xs="6">
              <a
                className="text-light"
                href="/auth/register"
                onClick={() => this.register()}
                tag={Link}
              >
                <big>Create new account</big>
              </a>
            </Col>
          </Row>
        </Col>
      </>
    );
  }
}

export default Login;
