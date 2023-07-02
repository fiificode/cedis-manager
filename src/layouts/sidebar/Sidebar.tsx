import { useState } from "react";
import { motion } from "framer-motion";
import Logo from "../../assets/cediLogo.png";

//React icons
import { IoIosArrowBack } from "react-icons/io";
import { AiFillSetting } from "react-icons/ai";
import { CgLogOut } from "react-icons/cg";
import { RxAvatar } from "react-icons/rx";

import { sideNavigationItems } from "../sidebar/subMenu";
import { classNames } from "../../components/classNames";
import { Link, Outlet, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { pathname } = useLocation();

  const Sidebar_animation = {
    open: {
      width: "16rem",
      transition: {
        damping: 40,
      },
    },
    closed: {
      width: "4rem",
      transition: {
        damping: 40,
      },
    },
  };

  return (
    <div>
      <motion.div
        variants={Sidebar_animation}
        animate={isOpen ? "open" : "closed"}
        className="bg-white text-gray shadow-xl z-[999] w-[16rem] max-w-[16rem] h-screen overflow-hidden md:relative fixed"
      >
        {/* Logo */}
        <div className="flex items-center gap-[11px] font-medium border-b border-slate-300 py-3 mx-3">
          <img alt="logo" src={Logo} width={40} height={40} />
          <span className="text-xl whitespace-pre">Cedis Manager</span>
        </div>

        {/* sidebar menus  */}
        <div className="flex flex-col h-full">
          <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1 font-medium overflow-x-hidden">
            <li>
              {sideNavigationItems?.map((item) => {
                const isMenuActive =
                  item.href === pathname ||
                  (pathname.includes(item?.href) &&
                    item?.subNavigation &&
                    item?.subNavigation?.length > 0 &&
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    item.subNavigation.some(({ href }: any) =>
                      href.includes(item?.href)
                    ));
                return (
                  <>
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        isMenuActive ? "active" : "link",
                        "group hover:bg-gray-900 hover:text-gray-200 flex items-center px-5 py-1 text-sm font-normal rounded-md"
                      )}
                    >
                      <span className={isMenuActive ? "active" : ""}>
                        <item.icon />
                      </span>
                      <span className="ml-3 text-base pt-0.5">{item.name}</span>
                    </Link>

                    {pathname.includes(item?.href) &&
                    item?.subNavigation &&
                    item?.subNavigation?.length > 0
                      ? item?.subNavigation?.map((innerItem) => {
                          return (
                            <Link
                              key={innerItem?.name}
                              to={innerItem.href}
                              className={classNames(
                                innerItem.href === pathname && isMenuActive
                                  ? "text-gray-400 font-normal"
                                  : "text-black",
                                "group flex items-center px-5 py-1.5 text-sm font-normal rounded-md"
                              )}
                            >
                              <span className="ml-10 text-base pt-0.5 font-lato border-l-2 border-blue-300 border-dashed pl-2">
                                {innerItem?.name}
                              </span>
                            </Link>
                          );
                        })
                      : ""}
                    <Outlet />
                  </>
                );
              })}
            </li>
            <li>
              <div className="border-y py-2 mt-10 text-gray-600 flex gap-5 ml-3 font-normal text-base border-slate-300">
                <AiFillSetting size={24} className="min-w-max" />
                <span>Settings</span>
              </div>
            </li>

            <li>
              <div className="border-y py-2 mt-10 text-gray-600 flex gap-5 ml-3 font-bold text-xl border-slate-300">
                <CgLogOut size={24} className="min-w-max" />
                <small>Log out</small>
              </div>
            </li>
          </ul>
        </div>

        {/* settings and Logout */}
        {/* <div className="whitespace-pre px-2.5 text-[0.9rem] ml-3 items-center flex gap-1 font-medium overflow-x-hidden border-y py-2 border-slate-300 absolute right-2 bottom-[200px] w-full">
          <AiFillSetting size={24} className="min-w-max" />
          <small className="text-black ">Settings</small>
        </div> */}

        {/* control button-open & close sidebar */}
        <motion.div
          animate={
            isOpen ? { x: 0, y: 0, rotate: 0 } : { x: -10, y: 0, rotate: 180 }
          }
          transition={{
            duration: 1,
          }}
          role="button"
          onClick={() => setIsOpen(!isOpen)}
          className="absolute w-fit h-fit z-50 right-2 bottom-5 cursor-pointer md:block hidden"
        >
          <IoIosArrowBack size={25} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Sidebar;
