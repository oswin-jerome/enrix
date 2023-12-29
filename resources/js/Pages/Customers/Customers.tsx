import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Customer } from "@/types";

const Customers = ({ customers }: { customers: Customer[] }) => {
    return (
        <Authenticated>
            <section className="card">
                <header className="flex justify-between items-center">
                    <div>
                        <h2 className="text-lg  font-bold text-gray-900">
                            Customers
                        </h2>

                        <p className="mt-1 text-sm text-gray-600">
                            List of all customers
                        </p>
                    </div>
                    <div>
                        <button disabled className="button">
                            Add Customer
                        </button>
                    </div>
                </header>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((customer: Customer) => {
                            return (
                                <tr key={customer.id}>
                                    <td>{customer.id}</td>
                                    <td>{customer.name}</td>
                                    <td>{customer.email}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </section>
        </Authenticated>
    );
};

export default Customers;
