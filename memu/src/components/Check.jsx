import React, { Component } from 'react';
//import Total from './Total'

  
/* Product */
class Check extends Component {
constructor(props) {
    super(props);
    this.state = {
        num: 0,
        total:0,
    };
    this.add = this.add.bind(this);
    this.decriment = this.decriment.bind(this);
}

handleTotal(){
    this.setState({total: this.state.total /* + price */});
}

add() {
    this.setState({
    num: this.state.num + 1
    });
    //this.props.handleTotal(this.props.price);
}

decriment() {
    this.setState({
    num: this.state.num - 1
    });
    //this.props.handleTotal(-this.props.price);
}

render() {
    
    return (
        <section>
            <div className="row form-group">
                <div className="col-sm-10">
                    <h4>{this.props.name} : {this.props.price}:{this.props.count} : {this.props.total}</h4>
                </div>
            </div>

            <div className="row btn-toolbar">
                <div className="col-6 text-right">
                    
                    <div className="text-right">{this.props.dataBox}<h4>数: {this.state.num}</h4></div>
                        <button className="btn btn-outline-primary" onClick={this.add}>
                        +1
                        </button>
                        <button className="btn btn-outline-primary" onClick={this.decriment} disabled={this.state.num < 1}>
                        -1
                        </button>
                    </div>
            </div>
            <hr /> 
        </section>
    );
}
}
export default Check;