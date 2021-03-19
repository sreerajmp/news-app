
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";
import UserService from "../user.service"
class UserProfile extends React.Component {
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
  nameChange=(value)=>{
    console.log("asd:",value);
    this.setState({userName:value.target.value})
    console.log("asdxx:",this.state.userName);
  }
  pwdChange=(value)=>{
    console.log("asd:",value);
    this.setState({password:value.target.value})
    console.log("password:",this.state.password);
  }
  updateProfile=(value)=>{
    console.log("value:",value);
    console.log("state:",this.state);
    localStorage.setItem('user',this.state.userName)
    localStorage.setItem('password',this.state.password)
  }
  deleteProfile=()=>{
    localStorage.clear();
  }
  componentDidMount() {
    if (!localStorage.getItem('logged')) {
      this.props.history.push('/login')
    } 
    this.setState({email:localStorage.getItem("email")})
    this.setState({userName:localStorage.getItem("user")})
    this.setState({password:localStorage.getItem("password")})
  }
  render() {
    return (
      <>
        <div className="content">
          <Row>            
            <Col md="8">
              <Card className="card-user">
                <CardHeader>
                  <CardTitle tag="h5">Edit Profile</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-1" md="5">
                        <FormGroup>
                          <label>Email (disabled)</label>
                          <Input
                            disabled
                            value={this.state.email}
                            placeholder="Email"
                            type="email"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="3">
                        <FormGroup>
                          <label>Username</label>
                          <Input
                            defaultValue={this.state.userName}
                            placeholder="Username"
                            type="text"
                            onChange={(value)=>this.nameChange(value)}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="4">
                        <FormGroup>
                          <label htmlFor="exampleInputpassword1">
                            Password
                          </label>
                          <Input placeholder="Password" onChange={(value)=>this.pwdChange(value)} type="text" defaultValue={this.state.password} />
                        </FormGroup>
                      </Col>
                    </Row>                    
                    
                    
                    <Row>
                      <div className="update ml-auto mr-auto">
                        <Button
                          className="btn-round"
                          color="primary"
                          onClick={(e)=>this.updateProfile(e)}
                        >
                          Update Profile
                        </Button>
                      </div>
                    </Row><Row>
                      <div className="delete ml-auto mr-auto">
                        <Button
                        href='/auth/register'
                          className="btn-round"
                          color="red"
                          onClick={(e)=>this.deleteProfile(e)}
                        >
                          Delete Profile
                        </Button>
                      </div>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default UserProfile;
