import React from "react";
import Button from "../Button/Button";
import ActiveLink from "./ActiveLink";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <ActiveLink to='/courses'>Courses</ActiveLink>
      </li>
      <li>
        <ActiveLink to='/consult'>Consult</ActiveLink>
      </li>
      <li>
        <ActiveLink to='/training'>Personal training</ActiveLink>
      </li>
      <li>
        <ActiveLink to='/discover'>Discover</ActiveLink>
      </li>
      <li>
        <ActiveLink to='/contact'>Contact Us</ActiveLink>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar bg-base-100 md:py-9">
        <div className="navbar-start md:w-1/3">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
              <div>
      <button className="btn bg-[#F78D2F] hover:btn-warning normal-case">Apply</button>
      </div>
            </ul>
            
          </div>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary"></div>
            <span className="text-[32px] font-bold">Learn</span></div>
        </div>
        <div className="navbar-end w-full hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems}
          </ul>
          <div>
      <button className="btn bg-[#F78D2F] hover:btn-warning normal-case">Apply</button>
      </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
