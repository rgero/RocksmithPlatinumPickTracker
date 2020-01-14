import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const NotFoundPage = () => (
  <div>
    <Header/>
    <div className="content-container">404 - <Link to="/">Go Home</Link></div>
  </div>
);

export default NotFoundPage;
