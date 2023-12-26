import Authenticated from "@/Layouts/AuthenticatedLayout";
import RegionSettings from "./Partials/RegionSettings";

const Settings = ({ regions, users }: { regions: any; users: any }) => {
    console.log(regions);
    return (
        <Authenticated>
            <div className="grid gap-4">
                <RegionSettings regions={regions} users={users} />
            </div>
        </Authenticated>
    );
};

export default Settings;
