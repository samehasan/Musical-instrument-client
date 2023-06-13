import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PopularInstructors = () => {
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
      <h3 className="text-3xl font-semibold my-4">Popular Instructors</h3>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {instructors.map((instructor, index) => (
            <div key={instructor._id} className="bg-green-200 rounded-lg p-7 m-4 shadow-md">
              <h4 className="text-lg text-gray-500 font-semibold">Instructor Name : {instructor.name}</h4>
              <p className="text-gray-500">Instructor Email : {instructor.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PopularInstructors;