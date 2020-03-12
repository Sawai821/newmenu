import React, { Component } from 'react';
// import styled from 'styled-components';
import {MenuConsumer} from '../Context';

export class Menu extends Component {
    render() {
        return(
             <MenuConsumer>
                {value => {
                    // return(
                //     <div>
                //      <div className="col-lg-3 col-md-4 col-sm-6 mb-4 px-5 px-sm-2">
                //             <div className="img-thumbnail">
                //             <label className="text-primary font-weight-bold">日本酒</label>
                //                 <form className="form-inline">
                                    
                //                     <select className="custom-select my-1 mr-sm-2 ol-xl col-lg col-md col-sm">
                //                         <option defaultValue="">商品名</option>
                //                         <MenuConsumer> 
                //                             {value　=> {
                //                                 const ob = Object.values(value.allMenus)
                //                                 // const obkeys = Object.keys(value.allMenus);

                //                                 // ob.map(data2 => {
                //                                 //     console.log(data2)
                //                                 //     return <option key={data2.id}>{data2}</option>
                //                                 // });

                //                                 ob.map(data => {
                //                                     // console.log(data);
                //                                     return <option key={data.id}>{data.name}</option>
                //                                     // return data.map(data2 => {
                //                                     //     console.log(data2)
                //                                     //     return <option key={data2.id}>{data2.name}</option> 
                //                                     // });
                //                                     // return data;
                //                                 });
                //                             }}
                //                         </MenuConsumer>
                //                     </select>
                //                     <div className="col   col-xl col-lg col-md col-sm my-1 mr-sm-2">
                //                         <input type="text" className="form-control" placeholder="個数"/>
                //                     </div>
                //                     <button type="submit" className="btn btn-info my-1 btn-md btn-block">追加</button>
                //                 </form>
                //             </div>
                //         </div>
                    
                //       <h3>menu</h3>}
                //   </div>
                    // )
                }}
            </MenuConsumer> 
        )
    }
}
export default Menu;
