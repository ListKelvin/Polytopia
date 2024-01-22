import { Outlet } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <>
      <div className="">{children ? children : <Outlet />}</div>
    </>
  );
}

export default Layout;
