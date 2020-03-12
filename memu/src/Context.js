import React, { Component } from 'react'

// drink menu
import {beerMenu,ChuHaiMenu,CooktailMenu,HighBallMenu,RikyuruMenu,
    SakeMenu,ShoChuMenu,SoftMenu,UmeAwamoriMenu,WineMenu,KeepMenu} 
from './drinkMenuData';

// food menu
import {desertMenu,fryMenu,meatMenu,oneMenu,osuMenu,riceMenu,saladMenu,someMenu,sasimiMenu} 
from './foodMenuData';
// import e from 'express';

const MenuContext = React.createContext();
//provider
//consumer
class MenuProvider extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            box: [],
            inputValue: "",
            selectValue: "",

            allMenus: {
                // Drink Menu
                beerMenu: beerMenu,
                ChuHaiMenu: ChuHaiMenu,
                CooktailMenu: CooktailMenu,
                HighBallMenu: HighBallMenu,
                RikyuruMenu: RikyuruMenu,
                SakeMenu: SakeMenu,
                ShoChuMenu: ShoChuMenu,
                SoftMenu: SoftMenu,
                UmeAwamoriMenu: UmeAwamoriMenu,
                WineMenu: WineMenu,
                KeepMenu: KeepMenu,
                // Food Menu
                desertMenu: desertMenu,
                fryMenu: fryMenu,
                meatMenu: meatMenu,
                oneMenu: oneMenu,
                osuMenu: osuMenu,
                riceMenu: riceMenu,
                saladMenu: saladMenu,
                someMenu: someMenu,
                sasimiMenu: sasimiMenu, 
            }
            
        };
        this.change = this.change.bind(this);
        this.addTo = this.addTo.bind(this);
        // this.handleChange = this.handleChange.bind(this);

        
    }

    
    
    // handleChange(id,event){
    //     const dataFind = this.state.data.find(item => item.id === id);
        
    //     // const dataFind = this.getItem(id);
    //     const allMenu = Object.values(this.state.allMenus);
    //     allMenu.map(menu => {
    //         menu.forEach(fordata => {
    //             return fordata
    //         });
    //         return menu;
    //     });
    //     this.setState({
    //         data: dataFind,
    //         // inputValue: event.target.value
    //     });

    //     /* const allMenu2 = Object.values(this.state.allMenus);
    //     allMenu2.map(menu => {
    //         menu.forEach(fordata => {
    //             const dataName = fordata.find(item => item.name === name);
    //             return dataName;
    //         });
    //         return menu;
    //     });
    //     const dataName = this.getName(name);
    //     this.setState({selectValue: dataName});
    //     console.log(this.state); */
       
    // } 
    
    addTo(id){
        let datas = [...this.state.data];
        const index = datas.indexOf(this.getItem(id));
        const data = datas[index];
        data.checked = true;
        data.count = this.state.inputValue;
        const count = data.count;
        const price = data.price;
        data.total = price * count;
        this.setState({
            data: datas,box:[...this.state.box,data],
            // inputValue: event.target.value
        },()=> {
            console.log(this.state);
        }
        );
    }

    change(event){
    //    {[event.target.name]: event.target.value}
    //    const selectValue = {selectValue: event.target.value};
    //    const inputValue = {inputValue: event.target.value};
    //    console.log(selectValue);
    //    console.log(inputValue);
       switch(event.target.name){
           case 'selectValue':
            const selectValue = {selectValue: event.target.value};
            console.log(selectValue);
               break;
            case 'inputValue':
                const inputValue = {inputValue: event.target.value};
                console.log(inputValue);
               break;
            default:
                alert('again');   
       };
       console.log('  was selected  :' + event.target.name);
   
       const allMenu = Object.values(this.state.allMenus);
       allMenu.forEach(all => {
           const find = all.find(data => data.name === event.target.value);
           console.log(find);
           this.setState({
               [event.target.name]: event.target.value,
               selectValue: find,
            });
        });
        // ()=> {
        //     console.log(this.state.selectValue);
        //     // console.log(this.state.inputValue);
        // });
            
          
    };
    
    // handleChange=(event)=>{
    //     const inputValue = this.state.inputValue;
    //     const selectValue =this.state.selectValue;
    //     const allMenu = Object.values(this.state.allMenus);
    //     // allMenu.map(menu => {
    //     //     menu.map(item => {
    //     //         const name = item.name;
    //     //         console.log(name);
    //     //         return item
    //     //     });
    //     // })
    //     this.setState({ 
    //         inputValue: event.target.value,
    //         selectValue: event.target.value
    //     });
    //     console.log(this.state.inputValue);
    //     console.log(this.state.selectValue);
    // } 

    render() {
        // console.log(this.state.data)
        return (
            <MenuContext.Provider value={{
                ...this.state,...this.state.allMenus,
                handleChange: this.handleChange,
                change: this.change,
                addTo: this.addTo
                }}>
                {this.props.children}
            </MenuContext.Provider>
        )
    }
}

const MenuConsumer = MenuContext.Consumer;

export { MenuProvider,MenuConsumer };