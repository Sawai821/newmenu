import React, { Component } from 'react';
import FoodMenu from './FoodMenu';
import Title from '../Title'
import { foodMenus2 } from '../../foodMenuData';
// import CheckList from '../CheckBox/CheckList';
// import Check from '../Check';

export class FoodMenuList extends Component {
    constructor(props){
        super(props);
        this.state ={
            dataBox: [],
            foodMenus2: foodMenus2,
            total: 0
        }
    }

    plusUltra(){
        const data = this.state.dataBox;
        // if(data.length > 0){
            this.setState({
                total: data + data
            },()=>{console.log(this.state.total)});
        // }
    }
   
    render() {
        const foodMenus =  this.state.foodMenus2.map(foodMenus2 => {
            return <FoodMenu key={foodMenus2.id}
                foodMenus2={foodMenus2}
                onSubmit={(id,selectValue,inputValue)=>{
                 if(selectValue !== '' && inputValue >= 0){
                    const find = this.state.foodMenus2.find(data=>data.id===id);
                    const item = find.items;
                    const find2 = item.find(item => item.name === selectValue);
                    let datas = find2;
                    datas.count = inputValue;
                    datas.checked = true;
                    datas.total = datas.price * inputValue;
                    console.log('onsubmit:::'+selectValue,inputValue);
                    console.log(datas);
                    this.setState(
                        {
                        dataBox: datas.total
                        },
                        ()=>{console.log(this.state.dataBox)
                           /* this.plusUltra() */
                        })
                 }else{
                     alert('メニュー、又は、個数を選択して下さい');
                 };
             }}
             />
         })
        
        return (
            <div>
                <div className=" py-5 container">
                    <div className="row d-flex justify-content-center">
                        <Title name='お食事'/>
                        <div className="row">
                            {foodMenus}   
                        </div>
                    </div>
                </div>
            {/* <CheckList dataBox={this.state.dataBox}　/> */}
            {/* <Check dataBox={this.state.dataBox}　/> */}
            </div>
                
        )
    }
}

export default FoodMenuList
