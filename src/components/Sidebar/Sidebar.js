/*!

=========================================================
* Paper Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { NavLink } from "react-router-dom";
import { ListGroup, ListGroupItem,ListGroupItemHeading } from 'reactstrap';
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import services from "../../services"

var ps;

class Sidebar extends React.Component {
  services= new services();
  constructor(props) {
    super(props);
    this.state = {
      section: [],
      apiError: "",
    }
    this.activeRoute.bind(this);
    this.sidebar = React.createRef();
  }
  
  // verifies if routeName is the one active (in browser input)
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }

 handleItemClick= async (value)=>{
    console.log("value:",value);
    await this.props.callbackFromNews(value)
  }
componentDidMount() {
  
  this.services.getNewsSection().then((resp)=>{
    console.log("resppp:",resp);
    this.setState({section:resp.results})
  })

    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.sidebar.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
    }
  }
  render() {
    return (
      <div
        className="sidebar"
      >
        <div className="logo">
          <a
            href="/user/news"
            className="simple-text logo-mini"
          >
            <div className="logo-img">
              <i className="nc-icon nc-globe" />
            </div>
          </a>
          <a
            href="/user/news"
            className="simple-text logo-normal"
          >
            News Portal
          </a>
        </div>
        <div className="sidebar-wrapper" >
          <ListGroup> 
            <ListGroupItemHeading className="simple-text">Filter</ListGroupItemHeading>       
            {this.state.section.map((prop, key) => {
              return (
                <ListGroupItem action clickable="true" onClick={() => this.handleItemClick(prop.section)} variant="dark" className="simple-text text-black"            
                  key={prop.section}
                >
                 {prop.display_name} 
                </ListGroupItem>
              );
            })}
            </ListGroup>  
        </div>
      </div>
    );
  }
}

export default Sidebar;
