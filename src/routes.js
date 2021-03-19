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
import UserProfile from "views/UserProfile.js";
import NewsPage from "views/NewsPage";
import Login from "views/Login";
import Register from "views/Register";
import ReadLater from "views/ReadLater"

var routes = [
  {
    path: "/news",
    name: "News",
    icon: "nc-icon nc-bank",
    component: NewsPage,
    layout: "/user",
  },
  {
    path: "/saved",
    name: "Saved News",
    icon: "nc-icon nc-bank",
    component: ReadLater,
    layout: "/user",
  },
  {
    path: "/profile",
    name: "User Profile",
    icon: "nc-icon nc-single-02",
    component: UserProfile,
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  },
  {
    path: "/register",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Register,
    layout: "/auth"
  }
];
export default routes;
