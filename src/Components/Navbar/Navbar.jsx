import React, { useContext, useState } from "react";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <div
      className={
        color
          ? " bg-gradient-to-b from-orange-300 to-white bg-current sticky top-0 z-20 justify-around p-5  shadow-xl hidden lg:flex"
          : "hidden sticky top-0 z-20 lg:flex justify-around p-5 bg-white shadow-xl"
      }
    >
      <div className="nav_logo flex items-center gap-[10px]">
        <img className="w-16 h-16" src={logo} alt="" />
        <p
          className={
            color
              ? " text-black text-4xl font-semibold"
              : "text-4xl font-semibold text-orange-500 "
          }
        >
          WATCHES
        </p>
      </div>
      <ul className="nav_menu gap-[50px]  items-center text-[#626262] font-medium group-focus:text-red-300 flex">
        <li
          className="hover:text-orange-500 hover:cursor-pointer"
          onClick={() => {
            setMenu("shop");
          }}
        >
          {" "}
          <Link to="/">WATCHES</Link>
          {menu === "shop" ? (
            <hr className="w-[100%] h-1 rounded-xl bg-orange-500 " />
          ) : (
            <></>
          )}
        </li>
        <li
          className="hover:text-orange-500 hover:cursor-pointer"
          onClick={() => {
            setMenu("mens");
          }}
        >
          {" "}
          <Link to="/mens">MENS</Link>
          {menu === "mens" ? (
            <hr className="w-[100%] h-1 rounded-xl bg-orange-500 " />
          ) : (
            <></>
          )}
        </li>
        
        <li
          className="hover:text-orange-500 hover:cursor-pointer"
          onClick={() => {
            setMenu("womens");
          }}
        >
          
          {" "}
          <Link to="/womens">WOMENS</Link>
          {menu === "womens" ? (
            <hr className="w-[100%] h-1 rounded-xl bg-orange-500 " />
          ) : (
            <></>
          )}
        </li>
        
        <li
          className="hover:text-orange-500 hover:cursor-pointer"
          onClick={() => {
            setMenu("kids");
          }}
        >
          {" "}
          <Link to="/kids">KIDS</Link>
          {menu === "kids" ? (
            <hr className="w-[100%] h-1 rounded-xl bg-orange-500 " />
          ) : (
            <></>
          )}
        </li>
      </ul>
      <div className="flex items-center nav_login_cart gap-11">
        <Link to="/signup">
          <button
            className={
              color
                ? " w-40 h-14 border-2 border-[#7a7a7a] rounded-full text-[white] text-xl font-medium bg-black cursor-pointer active:bg-slate-700"
                : " w-40 h-14 border-2 border-[#7a7a7a] rounded-full text-[#515151] text-xl font-medium bg-white cursor-pointer active:bg-slate-200"
            }
          >
            Login
          </button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav_cart_count w-[22px] h-[22px] flex justify-center items-center -mt-[35px] -ml-[55px] rounded-full text-[14px] bg-orange-600 text-white">
          {getTotalCartItems()}
        </div>
       
      </div>
    </div>
  );
};

export default Navbar;
