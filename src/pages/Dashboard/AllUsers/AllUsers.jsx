import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const handleMakeAdmin = (user) => {
    setIsButtonDisabled(true);

    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
        setIsButtonDisabled(false);
      });
  };

  const handleMakeInstructor = (user) => {
    setIsButtonDisabled(true);

    fetch(`http://localhost:5000/users/instructor/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an instructor Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
        setIsButtonDisabled(false);
      });
  };

  return (
    <div className="w-full">
      <h3 className="text-3xl font-semibold my-4">Total Users: {users.length}</h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "admin"
                  ) : (
                    <>
                      {user.role === "instructor" ? (
                        "instructor"
                      ) : (
                        <button
                          onClick={() => handleMakeInstructor(user)}
                          className="btn btn-ghost bg-blue-600 text-white"
                          disabled={isButtonDisabled}
                        >
                          Instructor
                        </button>
                      )}
                    </>
                  )}
                </td>
                <td>
                  {user.role !== "admin" && (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-ghost bg-orange-600 text-white"
                      disabled={isButtonDisabled}
                    >
                     Admin
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
