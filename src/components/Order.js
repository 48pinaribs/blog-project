import React, { Component } from 'react';
import '../App.css';


 class Order extends Component {

    constructor(props){
      super(props);
      this.state = {
        showTable: false,
        selectedOrder: null,
      
      orders : [

        {
          siparişNo: "12345",
          description: "Açıklama 3",
          amount: "500",
          unit: "kg",
          unitPrice: "34"

        },
        
        {
          siparişNo: "23456",
          description: "Açıklama 4",
          amount: "600",
          unit: "pkg",
          unitPrice: "23"
        }

      ]

    }
  }


  handleShowOrders = () => {
    this.setState({ showTable: true});
  };


  render() {
    const { showTable, orders} =this.state;

    return(
      <div>
       <form>
      <div className="content1"  >
        

      <a onClick={this.handleShowOrders} className="link">ORDERS</a>
      
    </div>

        </form>

        {showTable && (
          <table>
            <thead>
              <tr>
                <th>OrderNo</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Unit</th>
                <th>UnitPrice</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((orders, index) => (
                <tr key={index} >
                  <td>{orders.siparişNo}</td>
                  <td>{orders.description}</td>
                  <td>{orders.amount}</td>
                  <td>{orders.unit}</td>
                  <td>{orders.unitPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

      </div>
    )

  }
}

export default Order;


