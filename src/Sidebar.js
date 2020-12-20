import React, { useState, useEffect } from "react";

import { useGlobalContext } from "./context";
import sublinks from "./data";
const Sidebar = () => {
  const {
    isSidebarOpen,
    setIsSidebarOpen,
    closeSidebar,
    closeSubmenu,
  } = useGlobalContext();
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const checkSize = () => {
    closeSubmenu();
    if (window.innerWidth > 910) {
      setIsSidebarOpen(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
  }, []);

  return (
    <div>
      {isSidebarOpen && (
        <div className="sidebarDiv">
          <button onClick={closeSidebar} className={"xBtn"}>
            X
          </button>
          <br></br>
          <br></br>
          {sublinks.map((sublink) => {
            return (
              <div>
                <h1 className="sidebarTitles">{sublink.page}</h1>
                <div className="col2">
                  {sublink.links.map((link) => {
                    return (
                      <a className="sidebarSubs " href={link.url}>
                        {link.icon}
                        {link.label}
                      </a>
                    );
                  })}
                  <br></br>
                  <br></br>
                  <br></br>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
