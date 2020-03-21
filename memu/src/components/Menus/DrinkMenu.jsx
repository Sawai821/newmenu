import React, { Component } from 'react';
// import {MenuConsumer} from '../Context';
// import styled from 'styled-components';
// import { Title } from './Title';
import { drinkMenus2 } from '../../drinkMenuData';

export class DrinkMenu extends Component {
    constructor(props){
        super(props);
        this.state ={
            addBox: [],
            inputValue: 0,
            selectValue: '',
            drinkMenus2: drinkMenus2,
        };
        this.onChange = this.onChange.bind(this);
        this.handleChange = this.handleChange.bind(this);

    };
    handleChange(event){
        this.setState({ 
            selectValue: event.target.value,
        } ,()=> {
            console.log(this.state.selectValue);
        });
    };

    onChange(event){
        const inputNum = Number(event.target.value);
        if(isNaN(inputNum)){
            return;
        }
        this.setState({
            inputValue: inputNum
        },()=> {
            console.log(this.state.inputValue);
        })
    }

    // addBox(){

    //     const selectValue = this.state.selectValue;
    //     const inputValue = this.state.inputValue;
    //     if(selectValue !== '' && inputValue > 0){
    //         const selectValue = this.state.selectValue;
    //         const inputValue = this.state.inputValue;
    //         const find = this.state.drinkMenus2.find(data=>data.id === id);
    //         const item = find.items;
    //         const find2 = item.find(item => item.name === selectValue);
    //         // const data = [find2];
    //         find2.count = inputValue;
    //         find2.checked = true;
    //         find2.total = find2.pricre * inputValue;
    //         this.setState(
    //             {
    //                 addBox: find2
    //             },()=>{console.log(this.state.addBox)}
    //         )
    //     }else {
    //         alert('メニュー、又は、個数を選択して下さい');
    //     }
       
    // }
    
    
    render() {
       
        const {id, title, items} = this.props.drinkMenus2;
        const { onSubmit } = this.props;
        const inputValue = this.state.inputValue;
        const selectValue = this.state.selectValue;

        const drinkMenu = items.map(menu => {
            return <option key={menu.id}>{menu.name}</option>
        });
        return(
          
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4 px-5 px-sm-2">
            <div className="img-thumbnail" >
            <label className="text-primary font-weight-bold">{title}</label>
            <form className="form-inline" onSubmit={(event)=>{ event.preventDefault(); onSubmit(id,selectValue,inputValue); }}>                           
                <select name="selectValue"/* onChange={()=>value.change(id)} */ value={selectValue} onChange={this.handleChange}
                    className="form-control custom-select my-1 mr-sm-2 col-xl col-lg col-md col-sm" >
                    <option defaultValue="">商品名</option>
                    {drinkMenu}
                </select>
                <div className="col col-xl col-lg col-md col-sm my-1 mr-sm-2">
                    <input name="inputValue"
                        /* value={} */
                        onChange={this.onChange}
                    type="text" className="form-control" placeholder="個数"
                    />
                </div>
                <button /* onSubmit={()=>this.addBox} */ type="submit"className="btn btn-info my-1 btn-md btn-block">追加</button>
            </form>
            </div>
            </div>
                          
        )
    }
}
export default DrinkMenu;
