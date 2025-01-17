import React, { Component } from 'react';
import API from "../utils/API"
import "./style.css";

class DeleteItem extends Component {

    state = {
        number: "",
        text: "Delete",
        idtest: ""
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleClick = (id) => {
        console.log("inside click" + id);
        API.deleteData(id).then(res => console.log(res)).catch(err => console.log(err));
        window.location.reload(true);
    };

    updatePost = () => {
        console.log(this.state.claimed_date);
        console.log(this.state.idtest);
        const msg = {
            number: this.state.number,
            message: "Thanks for visiting SecondTimeAround!order confirmed.collect your item within 2 days"
        }

        API.getEmail(msg)
            .then(res => {
                console.log(res.data);
            }
            )
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="col-md-4" >
                <div className="card cardstyle">
                    <img className="card-img-top" src={this.props.item.url} width="100px" height="200px"></img>
                    <div className="card-body">
                        <h5 className="sectiontitle card-title">{this.props.item.itemName}</h5>
                        <hr></hr>
                        <p className="cardcontent card-text">Address: {this.props.item.Address}</p>
                        <p className="cardcontent card-text">Post date: {this.props.item.date}</p>
                    </div>
                    {/*<!-- Button trigger modal -->*/}
                    <div className="col-md-4">
                        <div className="">
                            <button type="button" className="navbutton btn btn-warning my-2 btn-sm" onClick={() => this.handleClick(this.props.item._id)} >{this.state.text}</button>
                        </div>
                    </div>
                    {/*<!-- Modal -->*/}
                    <div className="modal fade" id="exampleModalCenter1" tabIndex="-1" role="dialog"
                        aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalCenterTitle">Pick up information</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="InpuNumber">Number</label>
                                            <input type="text" className="form-control" id="Inputnumber" aria-describedby="Name"
                                                placeholder="Enter Number" name="number" onChange={this.handleInputChange} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="FormControlTextarea">Message | Please specify the ETA of pick up</label>
                                            <textarea className="form-control" id="FormControlTextarea" rows=""
                                                placeholder="Enter optional message to user"></textarea>
                                        </div>
                                    </form>
                                    <div className="modal-footer">
                                        <button type="button" value="Submit" className="navbutton btn btn-warning my-2 btn-sm" data-dismiss="modal" onClick={this.updatePost} >Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default DeleteItem;
