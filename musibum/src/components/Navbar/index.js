import { FiMusic } from 'react-icons/fi';
import React from 'react';

import './style.css';

function NavBar() {
    return (
        <div className="navBar">
            <div className="logoNavBar">
                <FiMusic className="iconNavBar" />
                <h2 bolder > GoLedger Challenge</h2>
            </div>
            <button className="buttonNavBar">
                Cadastrar
            </button>
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
