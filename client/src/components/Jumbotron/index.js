import React, { Component } from "react";
import "./style.css";

function Jumbotron() {
    return (
        <div className="jumbotron">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img src="https://cdn.dribbble.com/users/470545/screenshots/3607374/moving-drib.gif"alt="jumbotrongif" width="500px" height="430px" />

                    </div>
                    <div className="col">
                        <h2 className="maintext">Reduce, Reuse, Recycle</h2>
                        <hr></hr>
                        <h5 className="sectiontitle">Share items you want to donate or claim products you need for free!</h5>
                        <a href="/donate"><button type="button" className="donatebutton btn btn-warning btn-lg">Donate</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Jumbotron;