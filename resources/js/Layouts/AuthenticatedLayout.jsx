import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";
import NavBar from "@/Layouts/partials/NavBar";
import AppHeader from "@/Layouts/partials/AppHeader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Authenticated({ user = "", header = "", children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <section className="h-screen  w-screen flex">
            <ToastContainer />
            <NavBar />
            <section className="flex-1 bg-slate-100 flex flex-col max-w-full ">
                <AppHeader />
                <main className="p-4 flex-1 overflow-scroll ">{children}</main>
            </section>
        </section>
    );
}
