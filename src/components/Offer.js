import React, { Component } from 'react';
import '../App.css';


class Offer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTable: false,
      selectedOffer: null,
    
      offers: [
        { 
          companyName: 'Şirket A', 
          offerDate: '2023-07-01', 
          description: 'Açıklama 1', 
          status: 'Beklemede', 
          details: [
            { product: 'Ürün 1', quantity: 10, price: 100, description: 'Detay Açıklama 1' },
            { product: 'Ürün 2', quantity: 5, price: 50, description: 'Detay Açıklama 2' },
          ] 
        },
        { 
          companyName: 'Şirket B', 
          offerDate: '2023-07-02', 
          description: 'Açıklama 2', 
          status: 'Onaylandı', 
          details: [
            { product: 'Ürün 3', quantity: 20, price: 200, description: 'Detay Açıklama 3' },
            { product: 'Ürün 4', quantity: 8, price: 80, description: 'Detay Açıklama 4' },
          ] 
        },
        // Daha fazla teklif ekleyebilirsiniz
      ],

     
    };
  }

  handleShowOffers = () => {
    this.setState({ showTable: true });
  };
  

  handleRowClick = (offer) => {
    this.setState({ selectedOffer: offer });
  };

  render() {
    const { showTable, selectedOffer, offers } = this.state;

    return (
      <div>
        <form>
        <div className="content1" >
      
          
        <a  className="link"  onClick={this.handleShowOffers}  >OFFERS</a>

        
       </div> 
        </form>
        
        {showTable && (
          <table>
            <thead>
              <tr>
                <th>Company Name</th>
                <th>Offer Date</th>
                <th>Description</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {offers.map((offer, index) => (
                <tr key={index} onClick={() => this.handleRowClick(offer)}>
                  <td>{offer.companyName}</td>
                  <td>{offer.offerDate}</td>
                  <td>{offer.description}</td>
                  <td>{offer.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {selectedOffer && (
          <div>
            <h3>Offer Details</h3>
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Amount</th>
                  <th>Price</th>
                  <th>Description</th>
                  <th>Update</th>
                </tr>
              </thead>
              <tbody>
                {selectedOffer.details.map((detail, index) => (
                  <tr key={index}>
                    
                    <td>{detail.product}</td>
                    <td>{detail.quantity}</td>
                    <td>{detail.price}</td>
                    <td>{detail.description}</td>
                    <td><button>Update</button></td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>
    );
  }
}

export default Offer;
