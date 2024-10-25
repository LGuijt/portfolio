import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header className="App-header">
        <div className="header-links">
        <Link to="/">
          Home
        </Link>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link>
        </div>
      </header>

      <Outlet />
    </>
  );
};

export default Layout;
