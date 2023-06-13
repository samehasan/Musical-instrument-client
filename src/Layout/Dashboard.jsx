import { NavLink, Outlet } from "react-router-dom";
import { FaUsers,  FaShoppingCart, FaWallet,  FaHome, FaSchool } from 'react-icons/fa';
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import { motion } from 'framer-motion';
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
              <motion.h1
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="bg-green-700"
              >
                Welcome As Admin
              </motion.h1>
            </li>
            <li>
              <h1>You can <br /> Manage Class and Users <br /> as an Admin</h1>
            </li>
            <li>
              <NavLink to="/dashboard/manageclass">
                <FaWallet />
                Manage Class
              </NavLink>
            </li>
            <li>
             
            </li>
            <li>
              <NavLink to="/dashboard/allusers">
                <FaUsers />
                Manage Users
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
              <motion.h1
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="bg-green-700"
              >
                Welcome As Instructor
              </motion.h1>
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
              <motion.h1
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="bg-green-700"
              >
                Welcome As User
              </motion.h1>
            </li>
            <li>
             
            </li>
            <li>
              <h1>below ..choose class and pay fees</h1>
            </li>
            <li >
              <NavLink to="/dashboard/mycart">
                <FaShoppingCart />
                My Selected Class
              </NavLink>
            </li>
            <div className="divider"></div>
           
            <li>
              <NavLink to="/classes">
                <FaSchool />
                Choose from All Classes
              </NavLink>
            </li>
            <li></li>
            <li>
              <NavLink to="/">
                <FaHome />
                Home
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
};

export default Dashboard;
