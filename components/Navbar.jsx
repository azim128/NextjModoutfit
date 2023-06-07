"use client";
import {
  BsCartPlus,
  BsChevronDoubleDown,
  BsChevronDoubleUp,
  BsSearch,
} from "react-icons/bs";
import { BiMenu, BiMenuAltLeft, BiUser } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import Link from "next/link";
import {
  useProductContext,
  ADD_NAME_FILTER,
  REMOVE_NAME_FILTER,
} from "@/context/ProductContex";
// import { AiOutlineDown } from "react-icons/ai";

const menuItem = [
  "About Us",
  "Products",
  "Services",
  "Design Now",
  "Template",
  "Earn",
  "Talk to Experts",
];

const Navbar = () => {
  const { state, dispatch } = useProductContext();
  const [filterName, setFilterName] = useState("");
  const [openCanvas, setOpenCanvas] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const handleFilterName = (e) => {
    const name = e.target.value;
    setFilterName(name);

    if (name) {
      dispatch({ type: ADD_NAME_FILTER, payload: name });
    } else {
      dispatch({ type: REMOVE_NAME_FILTER });
    }
  };

  return (
    <div className="relative">
      <div className="bg-indigo-700 h-10 min-h-10 justify-center flex my-auto">
        <marquee className="text-white text-xl my-auto">
          Promotion bar / offer / discount and more
        </marquee>
      </div>
      <div className="bg-indigo-500 h-20 min-h-20 justify-center flex">
        <div className="w-full mx-8 my-auto lg:hidden flex justify-between items-center">
          <div className="flex gap-4 flex-row-reverse">
            <div>
              <BsCartPlus size={28} color="#fff" />{" "}
            </div>
            <div className="relative group flex text-white space-x-3 items-center border rounded">
              {/* <BiUser size={24} color='#fff'/> */}
              <p className="ml-2">User</p>
              <button onClick={() => setOpenDropdown(!openDropdown)}>
                {openDropdown ? (
                  <BsChevronDoubleDown size={24} color="#fff" />
                ) : (
                  <BsChevronDoubleUp size={24} color="#fff" />
                )}
              </button>
              {openDropdown && (
                <ul className="absolute top-8 right-0 bg-white p-2 rounded shadow z-50">
                  <li
                    className="py-1 px-2 hover:bg-gray-200 cursor-pointer text-black"
                    onClick={() => setOpenDropdown(false)}
                  >
                    Profile
                  </li>
                  <li
                    className="py-1 px-2 hover:bg-gray-200 cursor-pointer text-black"
                    onClick={() => setOpenDropdown(false)}
                  >
                    <Link href={"/signin"}>Sign In</Link>
                  </li>
                  <li
                    className="py-1 px-2 hover:bg-gray-200 cursor-pointer text-black"
                    onClick={() => setOpenDropdown(false)}
                  >
                    <Link href={"/signup"}>Sign Up</Link>
                  </li>
                  <li
                    className="py-1 px-2 hover:bg-gray-200 cursor-pointer text-black"
                    onClick={() => setOpenDropdown(false)}
                  >
                    Orders
                  </li>
                  <li
                    className="py-1 px-2 hover:bg-gray-200 cursor-pointer text-black"
                    onClick={() => setOpenDropdown(false)}
                  >
                    Settings
                  </li>
                  <li
                    className="py-1 px-2 hover:bg-gray-200 cursor-pointer text-black"
                    onClick={() => setOpenDropdown(false)}
                  >
                    Logout
                  </li>
                </ul>
              )}
            </div>
            <div onClick={() => setOpenCanvas(!openCanvas)}>
              {!openCanvas ? (
                <BiMenu size={24} color="#fff" />
              ) : (
                <RxCross1 size={24} color="#fff" />
              )}
            </div>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search Item...."
              value={filterName}
              onChange={handleFilterName}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <div className="absolute top-2 right-4">
              <BsSearch size={24} color="gray" />
            </div>
          </div>
        </div>
        <div className="hidden lg:flex justify-between w-full mx-8 my-auto items-center">
          <div>
            <h1 className="text-3xl text-white">
              <Link href={"/"}>ModOutFit</Link>
            </h1>
          </div>
          <div className="w-full mx-8 my-auto relative">
            <input
              type="text"
              placeholder="Search Item...."
              value={filterName}
              onChange={handleFilterName}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <div className="absolute top-2 right-4">
              <BsSearch size={24} color="gray" />
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <BsCartPlus size={24} color="#fff" />{" "}
            </div>
            <div className="relative group flex text-white space-x-3 items-center border rounded">
              {/* <BiUser size={24} color='#fff'/> */}
              <p className="ml-2">User</p>
              <button onClick={() => setOpenDropdown(!openDropdown)}>
                {openDropdown ? (
                  <BsChevronDoubleDown size={24} color="#fff" />
                ) : (
                  <BsChevronDoubleUp size={24} color="#fff" />
                )}
              </button>
              {openDropdown && (
                <ul className="absolute top-8 right-0 bg-white p-2 rounded shadow z-50">
                  <li
                    className="py-1 px-2 hover:bg-gray-200 cursor-pointer text-black"
                    onClick={() => setOpenDropdown(false)}
                  >
                    Profile
                  </li>
                  <li
                    className="py-1 px-2 hover:bg-gray-200 cursor-pointer text-black"
                    onClick={() => setOpenDropdown(false)}
                  >
                    <Link href={"/signin"}>Sign In</Link>
                  </li>
                  <li
                    className="py-1 px-2 hover:bg-gray-200 cursor-pointer text-black"
                    onClick={() => setOpenDropdown(false)}
                  >
                    <Link href={"/signup"}>Sign Up</Link>
                  </li>
                  <li
                    className="py-1 px-2 hover:bg-gray-200 cursor-pointer text-black"
                    onClick={() => setOpenDropdown(false)}
                  >
                    Orders
                  </li>
                  <li
                    className="py-1 px-2 hover:bg-gray-200 cursor-pointer text-black"
                    onClick={() => setOpenDropdown(false)}
                  >
                    Settings
                  </li>
                  <li
                    className="py-1 px-2 hover:bg-gray-200 cursor-pointer text-black"
                    onClick={() => setOpenDropdown(false)}
                  >
                    Logout
                  </li>
                </ul>
              )}
            </div>
            <div onClick={() => setOpenCanvas(!openCanvas)}>
              {!openCanvas ? (
                <BiMenu size={24} color="#fff" />
              ) : (
                <RxCross1 size={24} color="#fff" />
              )}
            </div>
          </div>
        </div>
      </div>

      <div
        className={`bg-indigo-500 min-h-[calc(100vh-7.5rem)] w-48 z-50 transition-all duration-500 ease-in-out absolute top-30 left-0 lg:left-auto lg:right-0 ${
          openCanvas
            ? "opacity-100 visible animate-slideInRight"
            : "opacity-0 invisible animate-slideOutRight"
        }`}
      >
        <ul className="mt-3">
          {menuItem.map((item) => (
            <li
              key={item}
              className="block text-center mx-2 bg-indigo-400 my-2 py-2 cursor-pointer text-white hover:bg-indigo-700 "
            >
              <Link href={`/${item.toLowerCase().replace(/\s/g, "")}`}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
