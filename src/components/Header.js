import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout} from '../actions/auth';

export const Header = ({ startLogout }) => (
    <header className="header">
        <div className="header__content">
            <Link className="header__title" to="/practices" exact="true"><h1>Rocksmith Pick Tracker</h1></Link>
            <button className="button button--link" onClick={startLogout}>Log out</button>
        </div>
    </header>
);

const mapDispatchToProps = (dispatch) => ({

    startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header);