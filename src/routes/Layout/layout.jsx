import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import CrwnLogo from "../../assets/crown.svg?component";

const Layout = () => {
  return (
    <Fragment>
      <CrwnLogo />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <div style={{ display: "flex" }}>
        <div>Sidebar</div>
        <div style={{ marginLeft: "20px" }}>
          <Outlet />
        </div>
      </div>
    </Fragment>
  );
};

export default Layout;
