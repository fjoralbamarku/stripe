import React from "react";
import logo from "./images/logo.svg";
import sublinks from "./data";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    console.log("pagi pas target", page);
    const tempBtn = e.target.getBoundingClientRect();
    const center = tempBtn.left - (tempBtn.right - tempBtn.left) / 3;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  };
  return (
    <div>
      <img src={logo} alt="logo" onMouseOver={closeSubmenu} />

      <div className="productsDiv hideDiv">
        <button className="inline products" onMouseOver={displaySubmenu}>
          products
        </button>
        <button className="inline products" onMouseOver={displaySubmenu}>
          developers
        </button>
        <button className="inline products" onMouseOver={displaySubmenu}>
          company
        </button>

        <div className="inline" onMouseOver={closeSubmenu}>
          <button className=" signBtn ">Sign in </button>
        </div>
      </div>
      <button>
        <img src="menu.png" className="menuImg" id="my-img" />
      </button>
    </div>
  );
};

export default Navbar;
