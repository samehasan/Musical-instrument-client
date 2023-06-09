import React from 'react';
import useClasses from '../../hooks/useClasses';

const Classes = () => {
  const [classes] = useClasses();

  return (
    <div className="grid grid-cols-2 gap-4">
      {classes.map(classData => (
        <div key={classData._id} className="p-4 border rounded-lg">
          <div className="flex">
            <div>
              <img className="w-20 h-20 rounded-full" src={classData.image} alt={classData.name} />
            </div>
            <div className="ml-4">
              <h2 className="text-xl font-bold">{classData.name}</h2>
              <p className="text-gray-600">Instructor: {classData.instructor}</p>
              <p className="text-gray-600">Available Seats: {classData.availableSeats}</p>
              <p className="text-gray-600">Price: {classData.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Classes;
