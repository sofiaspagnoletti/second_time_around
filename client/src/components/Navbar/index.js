import React from "react";
import "./style.css";
import LoginButton from "../LoginButton";
import SignOutButton from "../SignOutButton";
import {Link } from "react-router-dom"


class Navbar extends React.Component {
  state ={
    login: false
  }

  state={}

  ifLoginClicked = () => {
    this.setState({ isLoggedIn: true });
  }

  ifLogoutClicked = () => {
    this.setState({ isLoggedIn: false });
  }

  logInInfo = (val) => {
    console.log("hurrat  " + val);
  }

  handleRef = (val) => {
    { localStorage.setItem("nameId", val) }
  }

  render() {
    return (

      <div>
        <nav className="navbar navbar-expand-lg navbar-light">

          <Link className="navstylelogo navbar-brand logo" to="/">
            <img className="navstylelogo navbar-brand logo" src={require('./logo.png')} height="80" class="d-inline-block align-top logoimg" alt="secondtime"/>
      </Link>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="navstyle nav-link" href="#">
                </a>
              </li>
              <li className="navstyle nav-item">
                <a className="nav-link" href="#">
                </a>
              </li>
            </ul>

            <a href="/profile"><button className="navbuttonprofile btn btn-warning my-2 btn-sm">Profile</button></a>
              
              {(localStorage.getItem("nameId")!=null)?<SignOutButton />:<LoginButton name={"Log In"} />}

              
          </div>
        </nav>
      </div>
    );

  }
}
export default Navbar;
