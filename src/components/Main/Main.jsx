import React from 'react';
import { Link } from 'react-router-dom';

const Main = (props) => (
  <div className="MainWrapper">
    <h1>Main Landing Page</h1>
    <Link to="/redux-list">Redux List</Link>
    <Link to="/context-list">Context List</Link>
    <Link to="/styled"> styled</Link>
    
  </div>
);

export default Main;
