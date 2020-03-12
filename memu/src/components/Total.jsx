// import React, { Component } from 'react'

// /* Total */
//     class Total extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state={
//             total: 0
//         }
        
//     }

//     handleTotal(price){
//         this.setState({total: this.state.total + productList.price
//         });
//     }
//     render() {
//         console.log(this.props.total)
//         let total = this.props.total.toFixed(2);
//         //let tax = (this.props.total * 0.15).toFixed(2);
//         let totalIncTax = (+total /* + +tax */).toFixed(2);
//         let mystyle = {
//         borderTop: "1px solid #ddd",
//         marginTop: "10px"
//         };
//         return (
//         <div style={{"marginTop": "30px", "backgroundColor":"#F6F6F6","padding": "10px"}}>
//             <h3 className="row" style={{ fontWeight: 400 }}>
//             <span className="col-6">total price:</span>
//             <span className="col-6 text-right">${total}</span>
//             </h3>
           
//             <h3 className="row" style={mystyle}>
//             <span className="col-6">tota inc tax:</span>
//             <span className="col-6 text-right">${totalIncTax}</span>
//             </h3>

//         </div>
//         );
//     }
// }

// export default  Total

// {/* <h3 className="row" style={{ fontWeight: 400 }}>
//             <span className="col-6">tax (15%):</span>
//             <span className="col-6 text-right">${tax}</span>
//             </h3> */}