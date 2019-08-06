import React from "react";
import Modal from 'react-modal';
import "./style.css";
import ReactDOM from 'react-dom';
import Background from './donate.jpg';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: '50%',
    bottom: '50%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: '70%',
    backgroundImage: `url(${Background})`,
    backgroundSize: "100% 100%",


  }
};


const styleLogIn = {
  "marginLeft": "1px"
}

Modal.setAppElement('#main')

class Navbar extends React.Component {

  // state={
    
  // }

  printConsole() {
    console.log("loff");
  }
 state = {
      email:"",
      uname:"",
      password:"",
      modalIsOpen: false,
    };

    // this.openModal = this.openModal.bind(this);
    // this.afterOpenModal = this.afterOpenModal.bind(this);
    // this.closeModal = this.closeModal.bind(this);
 

  openModal =(e) => {
    e.preventDefault();
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal =() =>{
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = 'blue';
    this.subtitle.style.textAlign = "center";
    this.subBtn.style.backgroundColor = "blue";
    this.subBtn.style.color = "white";
    this.subBtn.style.marginLeft = "40%"
  }

  closeModal =() => {
    this.setState({ modalIsOpen: false });
  }
  postData =(e)  =>{
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

  render() {


    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand logo" href="#">
            Second time around
        </a>
          {/* <img src="../assets/img/secondtimearound(1).png" height="60" class="d-inline-block align-top" alt="secondtime"/> */}
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
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Donate
              </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Profile
              </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    Sign out
                </a>
                </div>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                Search
            </button>

              <button className="btn btn-outline-success my-2 my-sm-0" style={styleLogIn} onClick={this.openModal} >

                Log In
            </button>

              <Modal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
              >


                <h2 ref={subtitle => this.subtitle = subtitle}>Register</h2>
                {/* <button onClick={this.closeModal} style={closeButton} ><i class="fa fa-close"></i></button> */}
                {/* <div>I am a modal</div> */}
                <form>
                  <div className="form-group">
                    <label >Email address:</label>
                    <input type="email" className="form-control" id="email" name="email" value={this.state.email} onChange={this.handleInputChange} />
                  </div>
                  <div className="form-group">
                    <label >User Name:</label>
                    <input type="text" className="form-control" id="uname" name="uname" value={this.state.uname} onChange={this.handleInputChange}/>
                  </div>
                  <div className="form-group">
                    <label>Password:</label>
                    <input type="password" className="form-control" id="pwd" name="password" value={this.state.password} onChange={this.handleInputChange}/>
                  </div>

                  <button type="submit" className="btn btn-default" ref={subBtn => this.subBtn = subBtn} onClick={this.postData}>Submit</button>
                </form>


              </Modal>




            </form>
          </div>

        </nav>

      </div>

    );

  }
}
export default Navbar;