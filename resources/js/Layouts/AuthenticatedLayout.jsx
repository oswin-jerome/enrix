import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";
import NavBar from "@/Layouts/partials/NavBar";
import AppHeader from "@/Layouts/partials/AppHeader";

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <section className="h-screen flex">
            <NavBar />
            <section className="flex-1 bg-slate-100 flex flex-col">
                <AppHeader />
                <main className="p-4 flex-1 overflow-scroll">{children}</main>
            </section>
        </section>
    );
}
