import React, { useState } from 'react';
import useClasses from '../../hooks/useClasses';
import ClassCard from '../Shared/ClassCard/ClassCard';

const Classes = () => {
  const [clas] = useClasses();
  

  return (
    <section className="mb-12 text-center">
      <h1 className="mb-5 text-xl font-bold">All Instructors</h1>
      <div className="grid md:grid-cols-2 gap-10">
        {clas.map(clas => (
          <ClassCard
            key={clas._id}
            clas={clas}
          />
        ))}
      </div>
     
    </section>
  );
};

export default Classes;
