import React, { useState } from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse,
    MDBIcon
} from 'mdb-react-ui-kit';

import { FaCartShopping } from "react-icons/fa6";
import { Badge} from 'react-bootstrap';
import { NavLink } from 'react-router';

const NaviBar = ({cart}) => {
     const [openNav, setOpenNav] = useState(false);

    return (
        <>
            <MDBNavbar expand='lg' light bgColor='light' style={{position:'sticky',top:'0',zIndex:'2'}}>
                <MDBContainer fluid>
                    <MDBNavbarBrand href='#'>GoShopify.com</MDBNavbarBrand>
                    <MDBNavbarToggler
                        type='button'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setOpenNav(!openNav)}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>
                    <MDBCollapse navbar open={openNav}>
                        <MDBNavbarNav>
                            <MDBNavbarItem>
                                <MDBNavbarLink active aria-current='page' href='#'>
                                    Home
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <NavLink to={`/cart`}>
                                    <MDBNavbarLink><FaCartShopping /><sup><Badge bg="secondary">{cart.length}</Badge></sup></MDBNavbarLink>
                                </NavLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='#'>Pricing</MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
                                    Disabled
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </>
    )
}

export default NaviBar
