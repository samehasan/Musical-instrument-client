import { NavLink, Outlet } from "react-router-dom";
import { FaUsers,FaBook,FaShoppingCart, FaWallet, FaCalendarAlt, FaHome,FaSchool } from 'react-icons/fa';
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {
   const [isAdmin]=useAdmin() ;
    return (
        <div className="drawer drawer-open ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-base-300">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80">
                {
                        isAdmin ? <>
                            <li><NavLink to="/dashboard/home"><FaHome></FaHome> Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/addclass"> <FaSchool></FaSchool>Add Class</NavLink></li>
                            <li><NavLink to="/dashboard/history"><FaWallet></FaWallet> Manage Class</NavLink></li>
                            <li><NavLink to="/dashboard/history"><FaBook></FaBook> Manage Booked Class</NavLink></li>
                            <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> All Users</NavLink></li>
                            
                        </> : <>
                    <li><NavLink to="/dashboard/home"><FaHome></FaHome> User Home</NavLink></li>
                    <li><NavLink to="/dashboard/reservations"><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink></li>
                    <li><NavLink to="/dashboard/history"><FaWallet></FaWallet> Payment History</NavLink></li>
                    <li>
                        <NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Cart
                        </NavLink>

                    </li>
                    </>}
                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                    <li><NavLink to="/classes"><FaSchool></FaSchool> Our Class</NavLink></li>
                    {/* <li><NavLink to="/order/salad">Order Food</NavLink></li> */}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;