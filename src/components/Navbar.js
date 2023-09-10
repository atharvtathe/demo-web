import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="bg-[#5e6ab0] py-2 fixed top-0 w-full lg:hidden">
        <div className="flex flex-row justify-between px-3">
          <div className="flex justify-center items-center text-3xl text-white">
            ≡
          </div>
          <div className="flex justify-center items-center">
            <button className="border border-[#39429b] bg-[#39429b] text-white px-6 w-24 h-8 flex justify-center items-center rounded-sm shadow">
              मराठी
            </button>
          </div>
        </div>
      </nav>

      <nav className="bg-[#5e6ab0] text-white py-5 sticky hidden lg:block top-16 z-50">
        <ul className="flex flex-row mx-36 justify-between ">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li className="opacity-70">
            <Link href={"/"}>Reports</Link>
          </li>

          <li className="opacity-70">
            <Link href={"/"}>Tell Us About</Link>
          </li>
          <li className="opacity-70">
            <Link href={"/"}>Citizens Corner</Link>
          </li>
          <li className="opacity-70">
            <Link href={"/"}>Police Corner</Link>
          </li>
          <li className="opacity-70">
            <Link href={"/"}>About Us</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
