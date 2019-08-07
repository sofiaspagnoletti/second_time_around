import React,{Component} from 'react';
import PostForm from './components/PostForm';
import ItemsDonated from "./components/ItemsDonated";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar" ;
import Jumbotron from "./components/Jumbotron";
import SignIn from "./SignIn/SignIn"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
    <Navbar />
      <Jumbotron/>
      <Wrapper>
        <PostForm />
        <ItemsDonated />
      </Wrapper>
    </div>
  </Router>
  );
}



  


export default App;

