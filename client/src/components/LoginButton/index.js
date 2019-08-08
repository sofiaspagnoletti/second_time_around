import React from 'react'
import Modal from 'react-modal';
import "./style.css";
import ReactDOM from 'react-dom';
// import Background from './donate.jpg';
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
        picture:"",
        password: "",
        modalIsOpen: false,
        facebook: '2334014023351700',
        google:
          '801055399463-0buo8uiukhiial91079gnd8jf5h368p2.apps.googleusercontent.com',
          isLoggedIn : false,
        user_id:""
    
      };
    
      // this.openModal = this.openModal.bind(this);
      // this.afterOpenModal = this.afterOpenModal.bind(this);
      // this.closeModal = this.closeModal.bind(this);
    
    
      openModal = (e) => {
        e.preventDefault();
        this.setState({ modalIsOpen: true });
        this.props.refId(localStorage.getItem("nameId"));
        
      }
    
      afterOpenModal = () => {
        // references are now sync'd and can be accessed.
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
    
      resSucc = () =>{
          var res = this.state.ress;
          this.props.onSignIn(res);
      }

      handleFormSubmit = () => {
        console.log("In handle submit");
       // event.preventDefault();
        if (this.state.email) {
          const newPost = {
            name: this.state.name,
            picture: this.state.picture,
            email: this.state.email
          }
          
    
          console.log("newPost", newPost);
    
    
          API.saveUser(newPost)
            .then(res => {
    
              console.log(res.data);
              localStorage.setItem("nameId",res.data._id);
              this.setState({user_id:res.data._id});
            }
            )
            .catch(err => console.log(err));
          }
      };
     
    render(){
        return (
            <div>
                <button className="navbutton btn btn-warning my-2 btn-sm" style={styleLogIn} onClick={this.openModal} >
                Log In
            </button>

              <Modal
                isOpen={this.state.modalIsOpen}
                // onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                className="Modal"
                overlayClassName="Overlay"
              >
                <div className="divSide">
                  <h1 className="helpSomeone">Help Someone</h1>
                  <ul className="ulHelp">
                    <p><i className="fa fa-camera"></i> Post listings</p>
                    <p><i className='fas fa-comments'></i> Chat with buyers and sellers</p>
                    <p><i className="fa fa-heart"></i> Save listings</p>
                  </ul>
                </div>

                <div className="loginStuff">
                  <h3 className="titleInLOgin">Second Time Around</h3>
                  <p className="subTitle">Take and give quickly, safely and locally. It’s for second time around!</p>
                  <br></br>
                  <p className="socialLoginLine"><span>Quickly Connect with</span></p>
                  <SocialLogin
                    options={{
                      provider: 'facebook',
                      appId: this.state.facebook,
                      onSuccess: res => {
                        console.log('Login Success', res);
                        this.setState({email:res.email,name:res.name,picture:res.picture});
                        this.handleFormSubmit();
                        this.closeModal();
                      },
                      onFail: error => {
                        console.log('Login Fail', error);
                      }
                    }}
                    component={<FacebookLoginButton onClick={this.handleFormSubmit}/>}
                  />
                  <br></br>
                  <SocialLogin
                    options={{
                      provider: 'google',
                      appId: this.state.google,
                      onSuccess: res => {
                        console.log('Login Success', res);
                        this.setState({email:res.email,name:res.first_name+" "+res.last_name,picture:res.picture});
                        this.handleFormSubmit();
                        this.closeModal();
                      },
                      onFail: error => {
                        console.log('Login Fail', error);
                      }
                    }}
                    component={<GoogleLoginButton onClick={this.handleFormSubmit}/>}
                  />
                  <br></br>
                  <p className="socialLoginLine"><span>Or USE YOUR EMAIl</span></p>

                      <div className="footerSign">
                      <a href="#nav-home" className=" " >Sign In </a>
                     
                      <a href="#nav-content1" className="verticalLine contentSignUp" > Sign Up</a>
                      </div>
                      
                </div>
              </Modal>
            </div>
        )
    }
      
    
   
}

export default LoginButton;