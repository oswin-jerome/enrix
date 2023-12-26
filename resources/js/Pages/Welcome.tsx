import { Link, Head } from "@inertiajs/react";

export default function Welcome() {
    return (
        <>
            <Head title="Welcome" />
            <h1>Welcome to Enrix Portal</h1>
            <Link href="/login">Login</Link>
        </>
    );
}
