import React, { Component } from "react";
import API from "../../utils/API";
import ItemCard from "../ItemCard";

class ItemsDonated extends Component {
  state = {
    item: "",
    quantity: "",
    category: "",
    stock_id: "",
    img_url: "",
    stocks: [],
    stock_check:[],
    post_date:""
  }

  //Loads all stock
  componentDidMount() {
    this.loadStock();
  }

  loadStock = () => {
    var arr=[];
    API.getData()
      .then(res => {
        
        this.setState({ stock_check: res.data })
         
        res.data.forEach(element => {
            
          if(element.claimed =="false")
          {
            arr.push(element);
          }
        else if(element.claimed=="true")
        {
          var dtcl=new Date(element.claimedDate);
          dtcl.setDate(dtcl.getDate()+2);
          var todays_date=new Date(); 
          if(dtcl<todays_date)
          {
            arr.push(element);
            console.log("no pickup on date +2 so back to stock till 5days starting from posted date");
          }
          else{
           console.log("item pickup success or going to happen");
          } 
        }
        
        console.log("ggggggggg");
        var todays_date=new Date(); 
        this.state.stock_check.map(item=>{
          var post_dt=new Date(item.date);
          post_dt.setDate(post_dt.getDate()+6);
          if(post_dt<todays_date){
        
              API.deleteData(item._id)
                .then(res => {                  
                  console.log("successfully deleted post");
                }
                )
                .catch(err => console.log(err));
          }
          else{
            console.log("no");
          }
        })
        });
        arr.forEach(element => {

          var date=new Date(element.date);
          var date1=date.getDate();
          console.log("date",date1);
        });
        this.setState({ stocks: arr})

        console.log(res.data);
      }

      ) .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="row">
        {this.state.stocks.length > 0 && this.state.stocks.map(stock =>
        
          <ItemCard item={stock} key={stock.stock_id} />)}
      </div>);
  }

}
export default ItemsDonated;