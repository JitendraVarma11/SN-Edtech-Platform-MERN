import React, { useEffect, useState } from "react";
import logo from "../../assets/Logo/Logo-Full-Light.png";
import { Link, matchPath } from "react-router-dom";
import { NavbarLinks } from "../../data/navbar-links";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { apiConnector } from "../../services/apiconnector";
import { categories } from "../../services/apis";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { ProfileDropDown } from "../core/Auth/ProfileDropDown";
import { RiMenu2Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);

  const location = useLocation();

  const [sublinks, setSubLinks] = useState([]); //Catalog

  const fetchSublinks = async () => {
    try {
      const result = await apiConnector("GET", categories.CATEGORIES_API);
      setSubLinks(result.data.allCategories);
    } catch (error) {
      console.log("Could not fetch the categori list");
    }
  };
  useEffect(() => {
    fetchSublinks();
  }, []);

  const matchRout = (route) => {
    return matchPath({ path: route }, location.pathname);
  };
  return (
    <div className="flex h-14 items-center justify-center border-b-[1px] border-richblack-700 ">
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            width={160}
            height={42}
            loading="lazy"
            className="hidden lg:block"
          />
        </Link>
        <nav>
          <ul
            className={`hidden lg:flex lg:gap-x-6 lg:flex-row md:gap-x-3 text-richblack-25` }
          >
            {NavbarLinks.map((link, index) => (
              <li key={index} >
                {link.title === "Catalog" ? (
                  <div
                    className={`relative flex gap-2 items-center group cursor-pointer`}
                  >
                    <p>{link.title}</p>
                    <IoIosArrowDropdownCircle />

                    <div
                      className={`invisible absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[9%] flex flex-col rounded-md bg-richblack-5 p-4 text-richblack-900 transition-all duration-200 lg:w-[250px] lg:group-hover:visible lg:group-hover:opacity-100 lg:group-hover:cursor-pointer z-50`}
                    >
                      <div className="absolute left-[50%] top-0 h-6 w-6 translate-x-[80%] rotate-45 rounded-md bg-richblack-5 translate-y-[-45%]"></div>
                      {sublinks.length ? (
                        sublinks.map((subLink, index) => (
                          <Link
                            to={`/catalog/${subLink.name
                              .replaceAll(" ", "-")
                              .toLowerCase()}`}
                            key={index}
                            className="py-2 font-semibold"
                          >
                            <p>{subLink.name}</p>
                          </Link>
                        ))
                      ) : (
                        <div>Loading...</div>
                      )}
                    </div>
                  </div>
                ) : (
                  <Link to={link?.path}>
                    <p
                      className={`${
                        matchRout(link?.path)
                          ? "text-yellow-25"
                          : "text-richblack-25"
                      }`}
                    >
                      {link.title}
                    </p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <button
            onClick={toggleMobileMenu}
            className="absolute text-3xl text-richblack-25 lg:hidden focus:outline-none left-3 top-3 z-50"
          >
            {isMobileMenuOpen ? <IoMdClose /> : <RiMenu2Line />}
          </button>
          {isMobileMenuOpen && (
            <nav className={`fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm z-40` }> 
              <ul
                className={`flex flex-col gap-6 text-richblack-25`}
              >
                {NavbarLinks.map((link, index) => (
                  <li key={index}>
                    {link.title === "Catalog" ? (
                      <div
                        className={`relative flex gap-2 items-center group cursor-pointer`}
                      >
                        <p>{link.title}</p>
                        <IoIosArrowDropdownCircle />

                        <div
                          className={`invisible absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[30%] flex flex-col rounded-md bg-richblack-5 p-4 text-richblack-900 transition-all duration-200 lg:w-[250px] lg:group-hover:visible lg:group-hover:opacity-100 lg:group-hover:cursor-pointer z-50`}
                        >
                          <div className="absolute left-[50%] top-0 h-6 w-6 translate-x-[80%] rotate-45 rounded-md bg-richblack-5 translate-y-[-45%]"></div>
                          {sublinks.length ? (
                            sublinks.map((subLink, index) => (
                              <Link
                                to={`/catalog/${subLink.name
                                  .replaceAll(" ", "-")
                                  .toLowerCase()}`}
                                key={index}
                                className="py-1 font-semibold"
                              >
                                <p>{subLink.name}</p>
                              </Link>
                            ))
                          ) : (
                            <div>Loading...</div>
                          )}
                        </div>
                      </div>
                    ) : (
                      <Link to={link?.path} >
                        <p
                          className={`${
                            matchRout(link?.path)
                              ? "text-yellow-25"
                              : "text-richblack-25"
                          }`}
                        >
                          {link.title}
                        </p>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </nav>

        {/* login/signup/dashboard */}
        <div className="flex gap-x-4 items-center order-1">
          {user && user?.accountType != "Instructor" && (
            <Link to="/dashboard/cart" className="relative">
              <AiOutlineShoppingCart className="text-2xl text-white mr-3" />
              {totalItems > 0 && <span className="absolute text-richblack-5 w-4 h-4 text-[11px] -mt-8 ml-4 rounded-full bg-caribbeangreen-700 text-center animate-bounce">{totalItems}</span>}
            </Link>
          )}
          {token === null && (
            <Link to="/login">
              <button className="border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md ">
                Log in
              </button>
            </Link>
          )}
          {token === null && (
            <Link to="/signup">
              <button className="border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md sm:w-[100px] ">
                Sign Up
              </button>
            </Link>
          )}
          {token != null && <ProfileDropDown />}
        </div>
      </div>
    </div>
  );
};
