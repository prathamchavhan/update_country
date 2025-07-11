import { Headers } from "../ui/Headers.jsx";
import { Footers } from "../ui/Footers.jsx";
import { Outlet, useLocation } from "react-router-dom";

export const Applayout = () => {
  const location = useLocation();
  const hideLayout = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {!hideLayout && <Headers />}
      <Outlet />
      {!hideLayout && <Footers />}
    </>
  );
};
