import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, usePage } from "@inertiajs/react";
import { PropsWithChildren } from "react";

const PropertyLayout = ({ children }: PropsWithChildren) => {
    const page: any = usePage().props;

    return (
        <Authenticated>
            <div className="grid gap-4">
                <section className="card flex gap-3">
                    <Link
                        href={`/properties/${page.property.id}/`}
                        className="button"
                    >
                        General
                    </Link>
                    <Link href="#" className="button">
                        Finance
                    </Link>
                    <Link
                        href={`/properties/${page.property.id}/activity_logs`}
                        className="button"
                    >
                        Activities
                    </Link>
                </section>
                <div>{children}</div>
            </div>
        </Authenticated>
    );
};

export default PropertyLayout;
