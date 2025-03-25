import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Link } from "react-router";
import { links } from "./Mylinks";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  console.log(links);

  return (
    <>
      {links?.map((link) => (
        <div>
          <div className="px-3 text-left md:cursor-pointer group ">
            <h1
              className="py-4 flex justify-between items-center md:pr-0 pr-5 group nav-font"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              {link?.submenu && <> <span className="text-xl md:hidden inline">
                {heading === link.name ? <FiChevronUp /> : <FiChevronDown />}
              </span>
                <span className="text-xl md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                  <FiChevronDown />
                </span></>}
            </h1>
            {link?.submenu && (
              <div >
                <div className="absolute top-12 left-70 right-70 hidden group-hover:md:block hover:md:block" >
                  <div className="py-1">
                    <div
                      className="w-4 h-4 left-3 absolute
                    mt-1 bg-white rotate-45"
                    ></div>
                  </div>
                  <div className="bg-gray-50 p-5 pt-10 grid grid-cols-3 gap-10">
                    {link.sublinks.map((mysublinks) => (
                      <div>
                        <h1 className="text-lg font-semibold">
                          {mysublinks.Head}
                        </h1>
                        {mysublinks.sublink.map((slink) => (
                          <li className="text-sm text-gray-600 my-2.5">
                            <Link
                              to={slink.link}
                              className="hover:text-primary"
                            >
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks) => (
              <div>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center md:pr-0 pr-5"
                  >
                    {slinks.Head}

                    <span className="text-xl md:mt-1 md:ml-2 inline">
                      {subHeading === slinks.Head ? <FiChevronUp /> : <FiChevronDown />}
                    </span>
                  </h1>
                  <div
                    className={`${subHeading === slinks.Head ? "md:hidden" : "hidden"
                      }`}
                  >
                    {slinks.sublink.map((slink) => (
                      <li className="py-3 pl-14">
                        <Link to={slink.link}>{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
