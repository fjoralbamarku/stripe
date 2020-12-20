import React from "react";
import logo from "./images/logo.svg";
import sublinks from "./data";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const {
    openSidebar,
    openSubmenu,
    closeSubmenu,
    setIsSubmenuOpen,
  } = useGlobalContext();
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    console.log("pagi pas target", page);
    const tempBtn = e.target.getBoundingClientRect();
    const center = tempBtn.left - (tempBtn.right - tempBtn.left) / 3;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };

  return (
    <div>
      <div className="logo">
        <img src={logo} alt="logo" onMouseOver={closeSubmenu} />
      </div>

      <div
        className="productsDiv hideDiv"
        onMouseOver={() => setIsSubmenuOpen(true)}
      >
        <button className="inline products" onMouseOver={displaySubmenu}>
          products
        </button>
        <button className="inline products" onMouseOver={displaySubmenu}>
          developers
        </button>
        <button className="inline products" onMouseOver={displaySubmenu}>
          company
        </button>
      </div>
      <div className="inline hideDiv" onMouseOver={closeSubmenu}>
        <button className=" signBtn " onMouseOver={closeSubmenu}>
          Sign in{" "}
        </button>
      </div>

      <img
        onClick={openSidebar}
        src="menu.png"
        className="menuImg"
        id="my-img"
      />
    </div>
  );
};

export default Navbar;
