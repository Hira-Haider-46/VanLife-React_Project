import React from 'react';
import { Link } from "react-router-dom";
import { Outlet } from 'react-router-dom';
import './HostLayout.css';

function HostLayout() {
  return (
    <>
    <nav className="host-nav">
      <Link to="/host">Dashboard</Link>
      <Link to="/host/income">Income</Link>
      <Link to="/host/reviews">Reviews</Link>
    </nav>
    <Outlet />
    </>
  )
}

export default HostLayout;