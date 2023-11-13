import {  Outlet, NavLink } from "react-router-dom";

export const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
    DASHBOARD: "/dashboard",
  };

function Root() {
    return (
        <>
            <nav>
                <h1>TimyManager</h1>
                <NavLink to={ROUTES.DASHBOARD} >
                Dashboard
                </NavLink>
                <NavLink to={ROUTES.CONTACTS} >
                Contacts
                </NavLink>
                <NavLink to={ROUTES.APPOINTMENTS} >
                Appointments
                </NavLink>
            </nav>
            <Outlet/>
      </>
    );

}

export default Root;