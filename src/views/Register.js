
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  // CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  // Row,
  Col
} from "reactstrap";
import UserService from "../user.service"
class Register extends React.Component {
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
  createUser = () => {
    this.UserService.register(this.state)
      .then((data, err) => {
        console.log('data ::', data);
        if (data) {
          this.props.history.push('/news');
        } else {
          this.toggle();
        }
      })
      .catch((err) => {
        console.log(err, "messagess");
        this.toggle();
      });
  }
  inputChange (data, type) {
    this.setState({ [type]: data.target.value })
  }
  render() {
    return (
      <>
        <Col lg="6" md="8">
          <Card className="bg-secondary shadow border-0">            
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small><h3>Welcome!</h3></small>
                <small>Please sign-in to your account.</small>
              </div>
              <Form role="form">
              <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input onChange={(e => this.inputChange(e, "userName"))}placeholder="User Name" type="email" autoComplete="new-email" />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input onChange={(e => this.inputChange(e, "password"))}placeholder="Password" type="password" autoComplete="new-password" />
                  </InputGroup>
                </FormGroup>
                 <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input onChange={(e => this.inputChange(e, "email"))}placeholder="Email" type="email" autoComplete="new-email" />
                  </InputGroup>
                </FormGroup>
                
                <div className="text-center">
                  <Button onClick={this.createUser} className="mt-4" color="primary" type="button">
                    Create account
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </>
    );
  }
}

export default Register;
