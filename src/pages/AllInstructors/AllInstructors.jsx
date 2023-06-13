import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AllInstructors = () => {
  const [axiosSecure] = useAxiosSecure();
  const [isLoading, setIsLoading] = useState(true);

  const { data: instructors = [], refetch } = useQuery(["instructors"], async () => {
    const res = await axiosSecure.get("/users");
    const filteredInstructors = res.data.filter((user) => user.role === "instructor");
    setIsLoading(false);
    return filteredInstructors;
  });

  return (
    <div className="w-full">
      <h3 className="text-3xl font-semibold my-4">Total Instructors: {instructors.length}</h3>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {instructors.map((instructor, index) => (
                <tr key={instructor._id}>
                  <th>{index + 1}</th>
                  <td>{instructor.name}</td>
                  <td>{instructor.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllInstructors;
