import { Link } from "@inertiajs/react";
import { useState } from "react";

const NavBar = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const menus = [
        {
            label: "Dashboard",
            logo: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
                    />
                </svg>
            ),
            to: "#",
            sub_menus: [
                {
                    label: "Dashboard",
                    to: "/dashboard",
                },
            ],
        },
        {
            label: "Users",
            logo: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                    />
                </svg>
            ),
            to: "users",
            sub_menus: [],
        },
    ];

    return (
        <aside className="bg-slate-700 text-white min-w-[250px] h-screen flex flex-col">
            <div className="logo  py-4 px-6">
                <p className="font-bold text-2xl">ENRIX PROPS</p>
            </div>
            <nav className="mt-5 flex-1 overflow-scroll">
                <ul className="flex flex-col ">
                    {menus.map((menu, index) => {
                        return (
                            <li className="">
                                <Link href={menu.to}>
                                    <div
                                        onClick={(e) => {
                                            if (selectedIndex == index) {
                                                setSelectedIndex(null);
                                            } else {
                                                setSelectedIndex(index);
                                            }

                                            if (menu.sub_menus.length > 0) {
                                                e.preventDefault();
                                            }
                                        }}
                                        className="px-4  py-3 flex justify-between items-center  cursor-pointer hover:bg-slate-500 group "
                                    >
                                        {/* LEFT */}

                                        <div className="left flex gap-3 items-center  ">
                                            <div className="text-slate-300">
                                                {menu.logo}
                                            </div>
                                            <p>{menu.label}</p>
                                        </div>

                                        <div>
                                            {menu.sub_menus.length > 0 ? (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="w-5 h-5 group-hover:-rotate-[90deg] transition-all"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                                    />
                                                </svg>
                                            ) : (
                                                <div></div>
                                            )}
                                        </div>
                                    </div>
                                </Link>
                                {selectedIndex == index ? (
                                    <div className="flex justify-between items-center my-2">
                                        {/* LEFT */}

                                        <ul className="flex flex-col ">
                                            {menu.sub_menus.map((menu) => {
                                                return (
                                                    <div className="left flex gap-3 items-center px-4 ">
                                                        <div className="text-slate-300 w-6 h-6"></div>
                                                        <Link href={menu.to}>
                                                            {menu.label}
                                                        </Link>
                                                    </div>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                ) : (
                                    <p></p>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </aside>
    );
};

const MenuItem = ({ menu }) => {};

export default NavBar;
