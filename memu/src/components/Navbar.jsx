import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

export class Navbar extends Component {
    render() {
        return (
            <div className="navbar navbar-collapsed navbar-expand-lg bg-info navbar-dark px-sm-5">
                <div></div>
                    <NavText>
                    <Link to="/" className="navbar-brand-hover text-light">Home</Link>
                    </NavText>

                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item ml-5">
                            <NavText  >
                            <Link to="/" className="nav-link-hover text-light">メニュー</Link> 
                            </NavText>
                        </li>
                    </ul>
                    
                    <Link to="/check" className="ml-auto">
                        <ButtonCheck>
                        <i className="fa fa-check-square-o btn btn-md btn-outline-light">チェック</i>
                        </ButtonCheck>
                    </Link>  
                
            </div>
        )
    }
}

const ButtonCheck = styled.span`
text-transform: capitalize;
background: transparent;
cursor: pointer;
padding: 5px;
transition: all  ease-in-out;
`
const NavText = styled.span`
font-size: 22px;
margin-left: 10px;
`

export default Navbar;
