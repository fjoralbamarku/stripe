import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";

const Submenu = () => {
  const {
    isSubmenuOpen,
    page: { page, links },
    location,
  } = useGlobalContext();
  const divContainer = useRef(null);
  useEffect(() => {
    const submenu = divContainer.current;
    console.log("refiii", submenu);
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
  }, [page, location, links]);

  return (
    <div className="submenuPosition" ref={divContainer}>
      {isSubmenuOpen && (
        <div className="submenuDiv">
          <h1 className="pageTitle">{page}</h1>
          {links.map((link, index) => {
            return (
              <a href={link.url} className="inline sublinks" key={index}>
                {link.icon}
                {link.label}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Submenu;
