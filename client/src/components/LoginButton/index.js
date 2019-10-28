import React from 'react'
import Modal from 'react-modal';
import "./style.css";
import SocialLogin from '@majac/react-social-login';
import { FacebookLoginButton } from "react-social-login-buttons";
import { GoogleLoginButton } from "react-social-login-buttons";
import API from "../../utils/API";
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: '50%',
    bottom: '50%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: '100%',
    width: '70%',
  }
};

const styleLogIn = {
  "marginLeft": "1px"
}
Modal.setAppElement('#main')
class LoginButton extends React.Component {
  printConsole() {
    console.log("loff");
  }
  state = {
    email: "",
    name: "",
    picture: "",
    password: "",
    modalIsOpen: false,
    facebook: '2334014023351700',
    google:
      '801055399463-0buo8uiukhiial91079gnd8jf5h368p2.apps.googleusercontent.com',
    isLoggedIn: false,
    user_id: ""

  };

  openModal = (e) => {
    e.preventDefault();
    this.setState({ modalIsOpen: true });
  }
  afterOpenModal = () => {
    this.subtitle.style.color = 'blue';
    this.subtitle.style.textAlign = "center";
    this.subBtn.style.backgroundColor = "blue";
    this.subBtn.style.color = "white";
    this.subBtn.style.marginLeft = "40%";

  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });

  }
  postData = (e) => {
    e.preventDefault();
    console.log(this.state);
  }
  handleInputChange = event => {
    const { name, value } = event.target;
    console.log(event.target);
    this.setState({
      [name]: value
    });
  };

  resSucc = () => {
    var res = this.state.ress;
    this.props.onSignIn(res);
  }

  handleFormSubmit = () => {
    const newPost = {
          name: this.state.name,
          picture: this.state.picture,
          email: this.state.email
        }
    console.log("In handle submit");
    API.findUser(this.state.email).then(res=>{
      console.log('test',res.data);
        if (res.data.length === 0) {
          console.log("not there");
          API.saveUser(newPost)
            .then(res2 => {
              localStorage.clear();
              localStorage.setItem("nameId", res2.data._id);
              this.setState({ user_id: res2.data._id });
            }
            )
            .catch(err => console.log(err));
        } else {
          console.log(res);
          localStorage.clear();
          localStorage.setItem("nameId", res.data[0]._id);
        }

    }).catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <button className="navbutton btn btn-warning my-2 btn-sm" style={styleLogIn} onClick={this.openModal} >
          {this.props.name}
        </button>

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          className="Modal"
          overlayClassName="Overlay"
        >
          <div className="divSide">
            <div class="container">
              <div class="vertical-center">
              </div>
            </div>
          </div>

          <div className="loginStuff">
            <div class="container">
              <div class="vertical-center">
                <p className="socialLoginLine"><span>Quickly Connect with</span></p>
                <SocialLogin
                  options={{
                    provider: 'facebook',
                    appId: this.state.facebook,
                    onSuccess: res => {
                      this.setState({ email: res.email, name: res.name, picture: res.picture });
                      this.handleFormSubmit();
                      this.closeModal();
                      { window.location.reload("true") }
                    },
                    onFail: error => {
                      console.log('Login Fail', error);
                    }
                  }}
                  component={<FacebookLoginButton onClick={this.handleFormSubmit} />}
                />
                <br></br>
                <SocialLogin
                  options={{
                    provider: 'google',
                    appId: this.state.google,
                    onSuccess: res => {
                      this.setState({ email: res.email, name: res.first_name + " " + res.last_name, picture: res.picture });
                      this.handleFormSubmit();
                      this.closeModal();
                       { window.location.reload("true") }
                    },
                    onFail: error => {
                      console.log('Login Fail', error);
                    }
                  }}
                  component={<GoogleLoginButton onClick={this.handleFormSubmit} />}
                />
                <br></br>

                <div className="footerSign">
                  <a href="#nav-home" className=" " > </a>
                </div>
              </div>
            </div>

          </div>
        </Modal>
      </div>
    )
  }
}

export default LoginButton;