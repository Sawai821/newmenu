import React, { Component } from 'react';
import DrinkMenu from './DrinkMenu';
import Title from '../Title'
import { drinkMenus2 } from '../../drinkMenuData';
// import CheckList from '../CheckBox/CheckList';


export class DrinkMenuList extends Component {
    constructor(props){
        super(props);
        this.state ={
            dataBox3: [],
            drinkMenus2: drinkMenus2,
        }
    }
    
    render() {
        const drinkMenus = this.state.drinkMenus2.map(drinkMenus2 => {
            return <DrinkMenu key={drinkMenus2.id}
                drinkMenus2={drinkMenus2}
                onSubmit={(id,selectValue,inputValue)=>{
                 if(selectValue !== '' && inputValue >= 0){
                     const find = this.state.drinkMenus2.find(data=>data.id===id);
                     const item = find.items;
                     const find2 = item.find(item => item.name === selectValue);
                     let datas = find2;
                     datas.count = inputValue;
                     datas.checked = true;
                     datas.total = datas.price * inputValue;
                     console.log('onsubmit:::'+selectValue,inputValue);
                     this.setState(
                         {
                            dataBox3: datas
                         },
                         ()=>{console.log(this.state.dataBox3)})
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
                        <Title name='ドリンク'/>
                        <div className="row">
                            {drinkMenus}       
                        </div>
                    </div>
                </div>
                {/* <CheckList dataBox3={this.state.dataBox3}/> */}
            </div>
                
        )
    }
}

export default DrinkMenuList
