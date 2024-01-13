import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default  function HostLayout()  {
  return (
    <>
      <nav className='host-nav'>
        <Link to="dashboard">Dashboard</Link>
        <Link to="reviews">Reviews</Link>
        <Link to="income">Income</Link>
      </nav>
      <Outlet />
    </>
  );
}

// export default HostLayout