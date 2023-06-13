import { NavLink, Outlet } from "react-router-dom";
import { FaUsers, FaBook, FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaSchool } from 'react-icons/fa';
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  if (isAdmin) {
    return (
      <div className="drawer drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet />
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
            Open drawer
          </label>
        </div>
        <div className="drawer-side bg-base-300">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80">
            <li>
              <NavLink to="/dashboard/home">
                <FaHome />
                Admin Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/manageclass">
                <FaWallet />
                Manage Class
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/history">
                <FaBook />
                Manage Booked Class
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/allusers">
                <FaUsers />
                All Users
              </NavLink>
            </li>
            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <FaHome />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/classes">
                <FaSchool />
                Our Class
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  } else if (isInstructor) {
    return (
      <div className="drawer drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet />
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
            Open drawer
          </label>
        </div>
        <div className="drawer-side bg-base-300">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80">
            <li>
              <NavLink to="/dashboard/home">
                <FaHome />
                Instructor Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/addclass">
                <FaSchool />
                Add Class
              </NavLink>
            </li>
            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <FaHome />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/classes">
                <FaSchool />
                Our Class
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div className="drawer drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet />
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
            Open drawer
          </label>
        </div>
        <div className="drawer-side bg-base-300">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80">
            <li>
              <NavLink to="/dashboard/home">
                <FaHome />
                User Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/reservations">
                <FaCalendarAlt />
                Reservations
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/history">
                <FaWallet />
                Payment History
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/mycart">
                <FaShoppingCart />
                My Cart
              </NavLink>
            </li>
            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <FaHome />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/classes">
                <FaSchool />
                Our Class
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
};

export default Dashboard;
