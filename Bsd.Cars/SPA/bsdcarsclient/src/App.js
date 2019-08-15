import React, { Component } from "react";
import "./App.css";
import { OrderItem } from "./OrderItem";
//import api from "./services/api";
import axios from "axios";

const orders = [
  {
    id: 1,
    carFrame: "I359432144761400U",
    model: "Viddalba",
    licensePlate: "59786VQ",
    deliveryDate: "2019-08-15T00:00:00"
  },
  {
    id: 2,
    carFrame: "dsadjasdjisadjki",
    model: "Viddalba",
    licensePlate: "59786VQ",
    deliveryDate: "2019-08-15T00:00:00"
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentWillMount() {
    axios
      .post("http://localhost:59329/api/Orders/all", {
        skip: 0,
        take: 3,
        dataType: "json"
      })
      .then(res => {
        this.setState({ data: res.data.data });
      })
      .catch(function(error) {
        console.log(error);
      })
      .then(function() {});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.data.map(order => (
            <OrderItem key={order.toString()} order={order} />
          ))}
        </header>
      </div>
    );
  }
}

export default App;
