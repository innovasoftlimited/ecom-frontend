import React, { useEffect, useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Link } from "react-router";
import useAxiosRequest from "../../hooks/useAxiosRequest";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const { execute } = useAxiosRequest();
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await execute("GET", "/categories");
        const data = response?.data || [];

        const categoryLink = {
          name: "Category",
          submenu: true,
          sublinks: data.map((category) => ({
            Head: category.parent,
            sublink: category.child.map((c) => ({
              name: c.name,
              link: `/category/${category.parent.toLowerCase()}/${c.name.toLowerCase()}`,
              subchild: c.sub_child?.map((sc) => ({
                name: sc.name,
                link: `/category/${category.parent.toLowerCase()}/${c.name.toLowerCase()}/${sc.name.toLowerCase()}`
              })) || []
            }))
          }))
        };

        setLinks([categoryLink]);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <>
      {links?.map((link) => (
        <div key={link.name}>
          <div className="px-3 text-left md:cursor-pointer group">
            <h1
              className="flex justify-between items-center md:pr-0 pr-5 group nav-font text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              {link?.submenu && (
                <>
                  <span className="text-xl md:hidden inline">
                    {heading === link.name ? <FiChevronUp /> : <FiChevronDown />}
                  </span>
                  <span className="text-xl md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                    <FiChevronDown />
                  </span>
                </>
              )}
            </h1>

            {link?.submenu && (
              <div className="absolute top-16 left-70 right-70 hidden group-hover:md:block hover:md:block shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] shadow-gray-400 ">
                <div className="py-1 relative">
                  <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45"></div>
                </div>
                <div className="bg-gray-50 p-5 pt-10 grid grid-cols-3 gap-10">
                  {link.sublinks.map((mysublinks) => (
                    <div key={mysublinks.Head}>
                      <h1 className="text-lg font-semibold">{mysublinks.Head}</h1>
                      <ul>
                        {mysublinks.sublink.map((slink) => (
                          <li key={slink.name} className="text-sm text-gray-600 my-2.5">
                            <Link to={slink.link} className={`hover:text-primary ${slink.subchild?.length > 0 ? "font-bold" : ""} `}>
                              {slink.name}
                            </Link>
                            {slink.subchild?.length > 0 && (
                              <ul className="ml-4 mt-1 list-disc">
                                {slink.subchild.map((sub) => (
                                  <li key={sub.name}>
                                    <Link to={sub.link} className="text-sm text-gray-500 hover:text-primary ">
                                      {sub.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Mobile View */}
          <div className={`${heading === link.name ? "md:hidden" : "hidden"}`}>
            {link.sublinks.map((slinks) => (
              <div key={slinks.Head}>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head ? setSubHeading(slinks.Head) : setSubHeading("")
                    }
                    className="py-4 pl-7 font-semibold pr-5 flex justify-between items-center "
                  >
                    {slinks.Head}
                    <span className="text-xl md:mt-1 md:ml-2 inline">
                      {subHeading === slinks.Head ? <FiChevronUp /> : <FiChevronDown />}
                    </span>
                  </h1>
                  <div className={`${subHeading === slinks.Head ? "" : "hidden"}`}>
                    {slinks.sublink.map((slink) => (
                      <div key={slink.name} className="pl-10">
                        <li className="py-1">
                          <Link to={slink.link}>{slink.name}</Link>
                        </li>
                        {slink.subchild?.length > 0 && (
                          <ul className="pl-5 list-disc">
                            {slink.subchild.map((sub) => (
                              <li key={sub.name} className="py-0.5">
                                <Link to={sub.link}>{sub.name}</Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
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
