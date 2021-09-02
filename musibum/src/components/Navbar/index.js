import React from 'react';

import './style.css';

function NavBar() {
    return (
        <div className="navBar">
            <img alt="Log" src="../../assets/logo.svg"/>
            <h3>GoLedger Challenge</h3>
        </div>
    );
}

export default NavBar;

// const Navbar = () => (
//     <NavBar>
//         <Navbar.Brand>
//             <img
//                 alt="Logo"
//                 src="../../assets/logo"
//             />
//             <h2>GoLedger Challenge</h2>
//         </Navbar.Brand>

//         <Nav.Toggle />

//         <Navbar.Collapse id="">
//             <Nav.Link href="/">Cadastrar</Nav.Link>
//         </Navbar.Collapse>
//     </NavBar>
// );
