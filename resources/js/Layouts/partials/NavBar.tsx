import { PageProps } from "@/types";
import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";

const NavBar = () => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const props = usePage<PageProps>().props;

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
            notification: null,
            to: "/dashboard",
            sub_menus: [
                // {
                //     label: "Dashboard",
                //     to: "/dashboard",
                // },
                // {
                //     label: "Properties For Approval",
                //     to: "/properties/approvals",
                //     notification: props.properties_for_approval,
                // },
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
            to: "/users",
            sub_menus: [],
        },
        {
            label: "Customers",
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
            to: "/customers",
            sub_menus: [],
        },
        {
            label: "Properties",
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
                        d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                </svg>
            ),
            to: "/properties",
            sub_menus: [],
            notification: props.properties_for_approval,
        },
        {
            label: "Tasks",
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
                        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                    />
                </svg>
            ),
            to: "/tasks",
            sub_menus: [],
        },
        {
            label: "Pending Requests",
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
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                </svg>
            ),
            to: "/requests",
            sub_menus: [],
        },
    ];

    return (
        <aside className="bg-slate-700 text-white md:min-w-[250px] h-screen flex flex-col">
            <div className="logo  py-4 px-6 flex justify-center items-center gap-3">
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
                        d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                    />
                </svg>

                <p className="font-bold text-2xl hidden md:block">
                    ENRIX PROPS
                </p>
            </div>
            <nav className="mt-5 flex-1 overflow-scroll">
                <ul className="flex flex-col items-center md:items-stretch">
                    {menus.map((menu, index) => {
                        return (
                            <li className="" key={index}>
                                <Link href={menu.to}>
                                    <div
                                        onClick={(e) => {
                                            if (menu.sub_menus.length == 0) {
                                                return;
                                            }
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
                                            <p className="hidden md:block">
                                                {menu.label}
                                            </p>
                                        </div>

                                        <div className="flex items-center">
                                            {/* {menu.notification != null && (
                                                <div className="bg-red-500/50 p-1 aspect-square rounded-full text-xs w-5 h-5 flex justify-center items-center">
                                                    {menu.notification}
                                                </div>
                                            )} */}
                                            {/* {menu.sub_menus.length > 0 ? (
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
                                            )} */}
                                        </div>
                                    </div>
                                </Link>
                                {selectedIndex == index ? (
                                    <div className="flex justify-between items-center my-2">
                                        {/* LEFT */}

                                        <ul className="flex flex-col gap-3 ">
                                            {menu.sub_menus.map((menu) => {
                                                return (
                                                    <div className="left flex gap-3 items-center px-4 ">
                                                        <div className="text-slate-300 w-6 h-6"></div>
                                                        {/* <Link href={menu.to}>
                                                            {menu.label}
                                                        </Link> */}
                                                        {/* {menu.notification !=
                                                            null && (
                                                            <div className="bg-red-500 p-1 aspect-square rounded-full text-xs">
                                                                {
                                                                    menu.notification
                                                                }
                                                            </div>
                                                        )} */}
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

export default NavBar;
