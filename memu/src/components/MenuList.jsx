import React, { Component } from 'react';
import Menu from './Menu';
import {MenuConsumer} from '../Context';
import Title from './Title'

export class MenuList extends Component {
    constructor(props){
        super(props);
        this.state ={ 
            // data: {
            // name: '',
            // qty: '',
            // price: ''
            // }
        }

        // this.handleChange = this.handleChange.bind(this);
        // this.addataoCheck = this.addataoCheck.bind(this);
        // this.resetValue = this.resetValue.bind(this);
    }
    // handleChange(event){
    //     const data = this.state.data;
    //     switch (event.target.name) {
    //         case 'name':
    //             data.name = event.target.value;
    //             break;
    //         case 'qty':
    //             data.qty = event.target.value;
    //             break;
    //         case 'price':
    //             data.price = event.target.value;
    //             break;
    //     }
    //    this.setState({
    //     data: data,
       
    //     });
    // }

    render() {
       
        return (
            
            <div>
                <React.Fragment>
                    <div className=" py-5 container">
                        <div className="row d-flex justify-content-center">
                            <Title name='メインメニュー'/>
                            <div className="row">
                            </div>
                        </div>
                    </div>
                    
                    <Menu/>
                    {/* <MenuConsumer>
                        {value => {
                            // const {name} = value.beerMenu;
                            // const obkey1 = Object.keys(value.allMenus);

                            const ob = Object.values(value.allMenus);
                            // console.log(ob);
                            return ob.map(data => {
                                // console.log(data)
                                return <Menu key={data.id} menu={data}></Menu>
                            })
                        }}
                    </MenuConsumer> */}

                    {/* <MenuConsumer>
                        {value => (
                            return()
                        )}
                    </MenuConsumer> */}

                    <div className="container d-flex justify-content-center">
                        <h3><span className="fa fa-glass mb-4 px-5 p-2 bg-primary text-light rounded-circle">ドリンク</span></h3>
                    </div>
                    
                    <div className="container">
                    <div className="row">

                    <MenuConsumer>
                        {value => {
                            const {id} = value.HighBallMenu;
                            // value.HighBallMenu.forEach(idMap => {
                                // console.log(idMap);
                                // console.log({id});
                                return(
                                    <div  className="col-lg-3 col-md-4 col-sm-6 mb-4 px-5 px-sm-2">
                                    <div className="img-thumbnail">
                                        <label className="text-primary font-weight-bold">ウイスキー類</label>
                                        <form className="form-inline" /* onClick={()=> value.addTo(id)} */>                           
                                            <select name="selectValue"/* onChange={()=>value.handleChange(id)} */ 
                                            onChange={value.change} value={value.selectValue}
                                            className="form-control custom-select my-1 mr-sm-2 col-xl col-lg col-md col-sm" >
                                                <option defaultValue="">商品名</option>
                                                <MenuConsumer> 
                                                    {value　=> {
                                                        return value.HighBallMenu.map(menu => {
                                                            return <option
                                                            key={menu.id}
                                                            
                                                            >
                                                                {menu.name}
                                                            </option>
                                                        })
                                                    }}
                                                </MenuConsumer>
                                                {/* {HighBallMenus} */}
                                            </select>
                                            <div className="col col-xl col-lg col-md col-sm my-1 mr-sm-2">
                                                <input name="inputValue" value={value.inputValue} onChange={value.change}
                                                type="text" className="form-control" placeholder="個数"/>
                                            </div>
                                            <button type="submit" onClick={()=> value.addTo(id)} className="btn btn-info my-1 btn-md btn-block">追加</button>
                                        </form>
                                    </div>
                                    </div> 

                                    )
                            // })
                        }}
                    </MenuConsumer>
                        

                        <div className="col-lg-3 col-md-4 col-sm-6 mb-4 px-5 px-sm-2">
                            <div className="img-thumbnail">
                            <label className="text-primary font-weight-bold" >ビール</label>
                                <form className="form-inline">

                                    <select name='name' value={this.state.name} onChange={this.handleChange}
                                     className="form-control custom-select my-1 mr-sm-2 col-xl col-lg col-md col-sm">
                                        <option defaultValue="">商品名</option>
                                        <MenuConsumer> 
                                            {value　=> {
                                            return value.beerMenu.map(menu => {
                                                return <option key={menu.id}>{menu.name}</option>
                                                })
                                            }}
                                        </MenuConsumer>
                                        {/* {beerMenus} */}
                                    </select>    

                                    <div className="col   col-xl col-lg col-md col-sm my-1 mr-sm-2">
                                        <MenuConsumer>
                                            {value => {
                                                return <input name="qty"  value={value.qty} onChange={this.handleChange} 
                                                type="text" className="form-control" placeholder="個数"/>
                                            }}
                                        </MenuConsumer>
                                    </div>

                                    <button type="submit" className="btn btn-info my-1 btn-md btn-block">追加</button>
                                </form>
                            </div>
                        </div>

                        
                            <div className="col-lg-3 col-md-4 col-sm-6 mb-4 px-5 px-sm-2">
                            <div className="img-thumbnail">
                            <label className="text-primary font-weight-bold">日本酒</label>
                                <form className="form-inline">
                                    
                                    <select name='name' value={this.name} onChange={this.handleChange} className="custom-select my-1 mr-sm-2 ol-xl col-lg col-md col-sm">
                                        <option defaultValue="">商品名</option>
                                        <MenuConsumer> 
                                            {value　=> {
                                            return value.SakeMenu.map(menu => {
                                                return <option  key={menu.id}>{menu.name}</option>
                                                })
                                            }}
                                        </MenuConsumer>
                                       {/* {SakeMenus} */}
                                    </select>

                                    <div className="col   col-xl col-lg col-md col-sm my-1 mr-sm-2">
                                            <MenuConsumer>
                                            {value => {
                                                return <input name="qty"  value={value.qty} onChange={this.handleChange} 
                                                type="text" className="form-control" placeholder="個数"/>
                                            }}
                                        </MenuConsumer>
                                    </div>

                                    <button type="submit" className="btn btn-info my-1 btn-md btn-block">追加</button>
                                </form>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6 mb-4 px-5 px-sm-2 ol-xl col-lg col-md col-sm">
                            <div className="img-thumbnail">
                            <label className="text-primary font-weight-bold" >焼酎</label>
                                <form className="form-inline">
                                    
                                    <select name='name' value={this.state.name} onChange={this.handleChange} className="custom-select my-1 mr-sm-2 ol-xl col-lg col-md col-sm">
                                        <option defaultValue="">商品名</option>
                                        <MenuConsumer> 
                                            {value　=> {
                                            return value.ShoChuMenu.map(menu => {
                                                return <option  key={menu.id}>{menu.name}</option>
                                                })
                                            }}
                                        </MenuConsumer>
                                        {/* {ShoChuMenus} */}
                                    </select>
                                    <div className="col   col-xl col-lg col-md col-sm my-1 mr-sm-2">
                                        <MenuConsumer>
                                            {value => {
                                                return <input name="qty"  value={value.qty} onChange={this.handleChange} 
                                                type="text" className="form-control" placeholder="個数"/>
                                            }}
                                        </MenuConsumer>
                                    </div>

                                    <button type="submit" className="btn btn-info my-1 btn-md btn-block">追加</button>
                                </form>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6 mb-4 px-5 px-sm-2">
                            <div className="img-thumbnail">
                            <label className="text-primary font-weight-bold">キープボトル</label>
                                <form className="form-inline">
                                    
                                    <select name='name' value={this.state.name} onChange={this.handleChange} className="custom-select my-1 mr-sm-2 ol-xl col-lg col-md col-sm">
                                        <option defaultValue="">商品名</option>
                                        <MenuConsumer> 
                                            {value　=> {
                                            return value.KeepMenu.map(menu => {
                                                return <option  key={menu.id}>{menu.name}</option>
                                                })
                                            }}
                                        </MenuConsumer>
                                        {/* {KeepMenus} */}
                                    </select>
                                    <div className="col   col-xl col-lg col-md col-sm my-1 mr-sm-2">
                                        <MenuConsumer>
                                            {value => {
                                                return <input name="qty"  value={value.qty} onChange={this.handleChange} 
                                                type="text" className="form-control" placeholder="個数"/>
                                            }}
                                        </MenuConsumer>
                                    </div>

                                    <button type="submit" className="btn btn-info my-1 btn-md btn-block">追加</button>
                                </form>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6 mb-4 px-5 px-sm-2">
                            <div className="img-thumbnail">
                            <label className="text-primary font-weight-bold">サワー</label>
                                <form className="form-inline">
                                    
                                    <select name='name' value={this.state.name} onChange={this.handleChange} className="custom-select my-1 mr-sm-2 ol-xl col-lg col-md col-sm">
                                        <option defaultValue="">商品名</option>
                                        <MenuConsumer> 
                                            {value　=> {
                                            return value.ChuHaiMenu.map(menu => {
                                                return <option  key={menu.id}>{menu.name}</option>
                                                })
                                            }}
                                        </MenuConsumer>
                                        {/* {ChuHaiMenus} */}
                                    </select>

                                    <div className="col   col-xl col-lg col-md col-sm my-1 mr-sm-2">
                                        <MenuConsumer>
                                            {value => {
                                                return <input name="qty"  value={value.qty} onChange={this.handleChange} 
                                                type="text" className="form-control" placeholder="個数"/>
                                            }}
                                        </MenuConsumer>
                                    </div>

                                    <button type="submit" className="btn btn-info my-1 btn-md btn-block">追加</button>
                                </form>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6 mb-4 px-5 px-sm-2">
                            <div className="img-thumbnail">
                                <label className="text-primary font-weight-bold">ワイン</label>
                                    <form className="form-inline">
                                    
                                    <select name='name' value={this.state.name} onChange={this.handleChange} className="custom-select my-1 mr-sm-2 ol-xl col-lg col-md col-sm">
                                        <option defaultValue="">商品名</option>
                                        <MenuConsumer> 
                                            {value　=> {
                                            return value.WineMenu.map(menu => {
                                                return <option  key={menu.id}>{menu.name}</option>
                                                })
                                            }}
                                        </MenuConsumer>
                                        {/* {WineMenus} */}
                                    </select>
                                    <div className="col   col-xl col-lg col-md col-sm my-1 mr-sm-2">
                                        <MenuConsumer>
                                            {value => {
                                                return <input name="qty"  value={value.qty} onChange={this.handleChange} 
                                                type="text" className="form-control" placeholder="個数"/>
                                            }}
                                        </MenuConsumer>
                                    </div>

                                    <button type="submit" className="btn btn-info my-1 btn-md btn-block">追加</button>
                                </form>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6 mb-4 px-5 px-sm-2">
                            <div className="img-thumbnail">
                                <label className="text-primary font-weight-bold">カクテル</label>
                                    <form className="form-inline">
                                    
                                    <select name='name' value={this.state.name} onChange={this.handleChange} className="custom-select my-1 mr-sm-2 ol-xl col-lg col-md col-sm">
                                        <option defaultValue="">商品名</option>
                                        <MenuConsumer> 
                                            {value　=> {
                                            return value.CooktailMenu.map(menu => {
                                                return <option  key={menu.id}>{menu.name}</option>
                                                })
                                            }}
                                        </MenuConsumer>
                                        {/* {CooktailMenus} */}
                                    </select>
                                    <div className="col   col-xl col-lg col-md col-sm my-1 mr-sm-2">
                                        <MenuConsumer>
                                            {value => {
                                                return <input name="qty"  value={value.qty} onChange={this.handleChange} 
                                                type="text" className="form-control" placeholder="個数"/>
                                            }}
                                        </MenuConsumer>
                                    </div>

                                    <button type="submit" className="btn btn-info my-1 btn-md btn-block">追加</button>
                                </form>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6 mb-4 px-5 px-sm-2">
                            <div className="img-thumbnail">
                                <label className="text-primary font-weight-bold">リキュール類</label>
                                    <form className="form-inline">
                                    
                                    <select name='name' value={this.state.name} onChange={this.handleChange} className="custom-select my-1 mr-sm-2 ol-xl col-lg col-md col-sm">
                                        <option defaultValue="">商品名</option>
                                        <MenuConsumer> 
                                            {value　=> {
                                            return value.RikyuruMenu.map(menu => {
                                                return <option  key={menu.id}>{menu.name}</option>
                                                })
                                            }}
                                        </MenuConsumer>
                                        {/* {RikyuruMenus} */}
                                    </select>
                                    <div className="col   col-xl col-lg col-md col-sm my-1 mr-sm-2">
                                        <MenuConsumer>
                                            {value => {
                                                return <input name="qty"  value={value.qty} onChange={this.handleChange} 
                                                type="text" className="form-control" placeholder="個数"/>
                                            }}
                                        </MenuConsumer>
                                    </div>

                                    <button type="submit" className="btn btn-info my-1 btn-md btn-block">追加</button>
                                </form>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6 mb-4 px-5 px-sm-2">
                            <div className="img-thumbnail">
                                <label className="text-primary font-weight-bold">梅酒＆泡盛</label>
                                    <form className="form-inline">
                                    
                                    <select name='name' value={this.state.name} onChange={this.handleChange} className="custom-select my-1 mr-sm-2 ol-xl col-lg col-md col-sm">
                                        <option defaultValue="">商品名</option>
                                        <MenuConsumer> 
                                            {value　=> {
                                            return value.UmeAwamoriMenu.map(menu => {
                                                return <option  key={menu.id}>{menu.name}</option>
                                                })
                                            }}
                                        </MenuConsumer>
                                        {/* {UmeAwamoriMenus} */}
                                    </select>
                                    <div className="col   col-xl col-lg col-md col-sm my-1 mr-sm-2">
                                        <MenuConsumer>
                                            {value => {
                                                return <input name="qty"  value={value.qty} onChange={this.handleChange} 
                                                type="text" className="form-control" placeholder="個数"/>
                                            }}
                                        </MenuConsumer>
                                    </div>

                                    <button type="submit" className="btn btn-info my-1 btn-md btn-block">追加</button>
                                </form>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6 mb-4 px-5 px-sm-2">
                            <div className="img-thumbnail">
                            <label className="text-primary font-weight-bold">ソフトドリンク</label>
                                <form className="form-inline">
                                    
                                    <select name='name' value={this.state.name} onChange={this.handleChange} className="custom-select my-1 mr-sm-2 ol-xl col-lg col-md col-sm">
                                        <option defaultValue="">商品名</option>
                                        <MenuConsumer> 
                                            {value　=> {
                                            return value.SoftMenu.map(menu => {
                                                return <option  key={menu.id}>{menu.name}</option>
                                                })
                                            }}
                                        </MenuConsumer>
                                        {/* {SoftMenus} */}
                                    </select>
                                    <div className="col   col-xl col-lg col-md col-sm my-1 mr-sm-2">
                                        <MenuConsumer>
                                            {value => {
                                                return <input name="qty"  value={value.qty} onChange={this.handleChange} 
                                                type="text" className="form-control" placeholder="個数"/>
                                            }}
                                        </MenuConsumer>
                                    </div>

                                    <button type="submit" className="btn btn-info my-1 btn-md btn-block">追加</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                    
{/* ______________________________________________________________________________________________________________________________________ */}
                <div className="container d-flex justify-content-center">
                    <h3><span className=" fa fa-cutlery mb-4 px-5 p-2 bg-primary  text-light rounded-circle">食事</span></h3>
                </div>

                    <div className="container img-gallery">
                        <div className="row">
                            <div className="col-lg-3 col-md-4 col-sm-6 mb-4 px-5 px-sm-2 ol-xl col-lg col-md col-sm">
                                <div className="img-thumbnail">
                                <label className="text-primary font-weight-bold" >刺身</label>
                                    <form className="form-inline">
                                        
                                        <select name='name' value={this.state.name} onChange={this.handleChange} className="custom-select my-1 mr-sm-2 ol-xl col-lg col-md col-sm">
                                            <option defaultValue="">商品名</option>
                                            <MenuConsumer> 
                                                {value　=> {
                                                return value.sasimiMenu.map(menu => {
                                                    return <option  key={menu.id}>{menu.name}</option>
                                                    })
                                                }}
                                            </MenuConsumer>
                                            {/* {sasimiMenus} */}
                                        </select>
                                        <div className="col   col-xl col-lg col-md col-sm my-1 mr-sm-2">
                                            <MenuConsumer>
                                                {value => {
                                                    return <input name="qty"  value={value.qty} onChange={this.handleChange} 
                                                    type="text" className="form-control" placeholder="個数"/>
                                                }}
                                            </MenuConsumer>
                                        </div>

                                        <button type="submit" className="btn btn-info my-1 btn-md btn-block">追加</button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 mb-4 px-5 px-sm-2">
                                <div className="img-thumbnail">
                                <label className="text-primary font-weight-bold" >サラダ</label>
                                    <form className="form-inline">
                                        
                                        <select name='name' value={this.state.name} onChange={this.handleChange} className="custom-select my-1 mr-sm-2 ol-xl col-lg col-md col-sm">
                                            <option defaultValue="">商品名</option>
                                                <MenuConsumer> 
                                                    {value　=> {
                                                    return value.saladMenu.map(menu => {
                                                        return <option  key={menu.id}>{menu.name}</option>
                                                        })
                                                    }}
                                                </MenuConsumer>
                                            {/* {saladMenus} */}
                                        </select>
                                        <div className="col   col-xl col-lg col-md col-sm my-1 mr-sm-2">
                                            <MenuConsumer>
                                                {value => {
                                                    return <input name="qty"  value={value.qty} onChange={this.handleChange} 
                                                    type="text" className="form-control" placeholder="個数"/>
                                                }}
                                            </MenuConsumer>
                                        </div>

                                        <button type="submit" className="btn btn-info my-1 btn-md btn-block">追加</button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 mb-4 px-5 px-sm-2">
                                <div className="img-thumbnail">
                                <label className="text-primary font-weight-bold" >焼き物＆朴葉＆煮物＆グラタン</label>
                                    <form className="form-inline">
                                        
                                        <select name='name' value={this.state.name} onChange={this.handleChange} className="custom-select my-1 mr-sm-2 ol-xl col-lg col-md col-sm">
                                            <option defaultValue="">商品名</option>
                                            <MenuConsumer> 
                                            {value　=> {
                                            return value.someMenu.map(menu => {
                                                return <option  key={menu.id}>{menu.name}</option>
                                                })
                                            }}
                                            </MenuConsumer>
                                            {/* {someMenus} */}
                                        </select>
                                        <div className="col   col-xl col-lg col-md col-sm my-1 mr-sm-2">
                                            <MenuConsumer>
                                                {value => {
                                                    return <input name="qty"  value={value.qty} onChange={this.handleChange} 
                                                    type="text" className="form-control" placeholder="個数"/>
                                                }}
                                            </MenuConsumer>
                                        </div>

                                        <button type="submit" className="btn btn-info my-1 btn-md btn-block">追加</button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 mb-4 px-5 px-sm-2">
                                <div className="img-thumbnail">
                                <label className="text-primary font-weight-bold" >揚げ物</label>
                                    <form className="form-inline">
                                        
                                        <select name='name' value={this.state.name} onChange={this.handleChange} className="custom-select my-1 mr-sm-2 ol-xl col-lg col-md col-sm">
                                            <option defaultValue="">商品名</option>
                                            <MenuConsumer> 
                                            {value　=> {
                                            return value.fryMenu.map(menu => {
                                                return <option  key={menu.id}>{menu.name}</option>
                                                })
                                            }}
                                            </MenuConsumer>
                                            {/* {fryMenus} */}
                                        </select>
                                        <div className="col   col-xl col-lg col-md col-sm my-1 mr-sm-2">
                                            <MenuConsumer>
                                                {value => {
                                                    return <input name="qty"  value={value.qty} onChange={this.handleChange} 
                                                    type="text" className="form-control" placeholder="個数"/>
                                                }}
                                            </MenuConsumer>
                                        </div>

                                        <button type="submit" className="btn btn-info my-1 btn-md btn-block">追加</button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 mb-4 px-5 px-sm-2">
                                <div className="img-thumbnail">
                                <label className="text-primary font-weight-bold" >釜飯</label>
                                    <form className="form-inline">
                                        
                                        <select name='name' value={this.state.name} onChange={this.handleChange} className="custom-select my-1 mr-sm-2 ol-xl col-lg col-md col-sm">
                                            <option defaultValue="">商品名</option>
                                            <MenuConsumer> 
                                            {value　=> {
                                            return value.riceMenu.map(menu => {
                                                return <option  key={menu.id}>{menu.name}</option>
                                                })
                                            }}
                                            </MenuConsumer>
                                            {/* {riceMenus} */}
                                        </select>
                                        <div className="col   col-xl col-lg col-md col-sm my-1 mr-sm-2">
                                            <MenuConsumer>
                                                {value => {
                                                    return <input name="qty"  value={value.qty} onChange={this.handleChange} 
                                                    type="text" className="form-control" placeholder="個数"/>
                                                }}
                                            </MenuConsumer>
                                        </div>

                                        <button type="submit" className="btn btn-info my-1 btn-md btn-block">追加</button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 mb-4 px-5 px-sm-2">
                                <div className="img-thumbnail">
                                <label className="text-primary font-weight-bold" >お肉料理</label>
                                    <form className="form-inline">
                                        
                                        <select name='name' value={this.state.name} onChange={this.handleChange} className="custom-select my-1 mr-sm-2 ol-xl col-lg col-md col-sm">
                                            <option defaultValue="">商品名</option>
                                            <MenuConsumer> 
                                            {value　=> {
                                            return value.meatMenu.map(menu => {
                                                return <option  key={menu.id}>{menu.name}</option>
                                                })
                                            }}
                                            </MenuConsumer>
                                            {/* {meatMenus} */}
                                        </select>
                                        <div className="col   col-xl col-lg col-md col-sm my-1 mr-sm-2">
                                            <MenuConsumer>
                                                {value => {
                                                    return <input name="qty"  value={value.qty} onChange={this.handleChange} 
                                                    type="text" className="form-control" placeholder="個数"/>
                                                }}
                                            </MenuConsumer>
                                        </div>

                                        <button type="submit" className="btn btn-info my-1 btn-md btn-block">追加</button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 mb-4 px-5 px-sm-2">
                                <div className="img-thumbnail">
                                <label className="text-primary font-weight-bold" >酢の物</label>
                                    <form className="form-inline">
                                        
                                        <select name='name' value={this.state.name} onChange={this.handleChange} className="custom-select my-1 mr-sm-2 ol-xl col-lg col-md col-sm">
                                            <option defaultValue="">商品名</option>
                                            <MenuConsumer> 
                                            {value　=> {
                                            return value.osuMenu.map(menu => {
                                                return <option  key={menu.id}>{menu.name}</option>
                                                })
                                            }}
                                            </MenuConsumer>
                                            {/* {osuMenus} */}
                                        </select>
                                        <div className="col   col-xl col-lg col-md col-sm my-1 mr-sm-2">
                                            <MenuConsumer>
                                                {value => {
                                                    return <input name="qty"  value={value.qty} onChange={this.handleChange} 
                                                    type="text" className="form-control" placeholder="個数"/>
                                                }}
                                            </MenuConsumer>
                                        </div>

                                        <button type="submit" className="btn btn-info my-1 btn-md btn-block">追加</button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 mb-4 px-5 px-sm-2">
                                <div className="img-thumbnail">
                                <label className="text-primary font-weight-bold">一品料理</label>
                                    <form className="form-inline">
                                        
                                        <select name='name' value={this.state.name} onChange={this.handleChange} className="custom-select my-1 mr-sm-2 ol-xl col-lg col-md col-sm">
                                            <option defaultValue="">商品名</option>
                                            <MenuConsumer> 
                                            {value　=> {
                                            return value.oneMenu.map(menu => {
                                                return <option  key={menu.id}>{menu.name}</option>
                                                })
                                            }}
                                            </MenuConsumer>
                                            {/* {oneMenus} */}
                                        </select>
                                        <div className="col   col-xl col-lg col-md col-sm my-1 mr-sm-2">
                                            <MenuConsumer>
                                                {value => {
                                                    return <input name="qty"  value={value.qty} onChange={this.handleChange} 
                                                    type="text" className="form-control" placeholder="個数"/>
                                                }}
                                            </MenuConsumer>
                                        </div>

                                        <button type="submit" className="btn btn-info my-1 btn-md btn-block">追加</button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 mb-4 px-5 px-sm-2">
                                <div className="img-thumbnail">
                                <label className="text-primary font-weight-bold" >デザート</label>
                                    <form className="form-inline">
                                        
                                        <select name='name' value={this.state.name} onChange={this.handleChange} className="custom-select my-1 mr-sm-2 ol-xl col-lg col-md col-sm">
                                            <option defaultValue="">商品名</option>
                                            <MenuConsumer> 
                                            {value　=> {
                                            return value.desertMenu.map(menu => {
                                                return <option  key={menu.id}>{menu.name}</option>
                                                })
                                            }}
                                            </MenuConsumer>
                                            {/* {desertMenus} */}
                                        </select>
                                        <div className="col   col-xl col-lg col-md col-sm my-1 mr-sm-2">
                                            <MenuConsumer>
                                                {value => {
                                                    return <input name="qty"  value={value.qty} onChange={this.handleChange} 
                                                    type="text" className="form-control" placeholder="個数"/>
                                                }}
                                            </MenuConsumer>
                                        </div>

                                        <button type="submit" className="btn btn-info my-1 btn-md btn-block">追加</button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 mb-4 px-5 px-sm-2">
                                <div className="img-thumbnail">
                                    <label className="text-primary font-weight-bold" >値段選択</label>
                                    <form onSubmit={this.addataoCheck}>
                                        <div className="form">
                                            
                                            <div className="col　col-xl col-lg col-md col-sm　mb-2 ">
                                                <MenuConsumer>
                                                    {value => {
                                                        return <input name="name" value={value.name} onChange={this.handleChange} type="text" className="form-control" placeholder="料理名"/>
                                                    }}
                                                </MenuConsumer>
                                                {/* <input>{value.name}</input> */}
                                            </div>
                                            <div className="col　col-xl col-lg col-md col-sm　my-1 mr-sm-2">
                                                <MenuConsumer>
                                                    {value => {
                                                        return <input name="qty" value={value.qty} onChange={this.handleChange} type="text" className="form-control" placeholder="個数"/>
                                                    }}
                                                </MenuConsumer>
                                            </div>
                                            <div className="col　col-xl col-lg col-md col-sm　my-1 mr-sm-2">
                                                <MenuConsumer>
                                                    {value => {
                                                        return <input name="price" value={value.price} onChange={this.handleChange} type="text" className="form-control" placeholder="値段"/>
                                                    }}
                                                </MenuConsumer>
                                            </div>
                                            
                                        </div>
                                        <button type="submit" className="btn btn-info my-1 btn-md btn-block">追加</button>
                                    </form>

                                </div>
                            </div>
                    </div>
                </div>
                
                
                </React.Fragment>
            </div>
        )
    }
}

export default MenuList
