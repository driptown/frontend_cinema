import React from 'react';
import IconLogo from '../../assets/img/icon-logo.svg';

function Footer() {
    return (
        <>
            <footer>
                <img className="ft-lg" src={IconLogo} alt="" />
                <p>Cinema Paradiso is the world’s leading community for creators to share, grow, and get hired.</p>
                <h2>Contact</h2>
                <p>E-mail :Boose565@gmail.com</p>
                <p>Number:832-219-4304</p>
                <hr />
                <p>CINEMA PARADISO - © 2023. ALL RIGHTS RESERVED.</p>
            </footer>
        </>
    );
}

export default Footer;
