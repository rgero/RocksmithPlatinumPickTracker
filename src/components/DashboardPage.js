import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import PickListFilter from './PickListFilters';
import PickList from './PickList';




const DashboardPage = () => (
    (
        <div>
            <div className='content-container'>
                <div className='content-navbar'>
                    <Link className='button' to='/import'>Import Data</Link>
                    <Link className='button' to='/create'>Log New Pick</Link>
                </div>
                <PickListFilter />
                <PickList />
            </div>
        </div>
    )
);

export default DashboardPage;