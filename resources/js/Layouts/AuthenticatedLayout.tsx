import { PropsWithChildren, ReactElement, ReactNode, useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";
import NavBar from "@/Layouts/partials/NavBar";
import AppHeader from "@/Layouts/partials/AppHeader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Authenticated({
    user,
    header,
    children,
}: PropsWithChildren<{ user?: any; header?: ReactNode }>) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <section className="h-screen  w-screen grid grid-cols-[auto,1fr]">
            <ToastContainer />
            <div className="col-start-1 row-start-1">
                <NavBar />
            </div>
            <section className=" w-full  bg-slate-100 flex flex-col  col-start-2 row-start-1  overflow-hidden">
                <AppHeader />
                <main className="p-4 flex-1 overflow-scroll ">{children}</main>
            </section>
        </section>
    );
}
