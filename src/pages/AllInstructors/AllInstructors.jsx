
import useInstructors from "../../hooks/useInstructors";
import Instructorscard from "../Shared/Instructorscard/Instructorscard";

const AllInstructors = () => {
  const [menu] = useInstructors();

  return (
    <section className="mb-12 text-center">
      <h1 className="mb-5 text-xl font-bold">All Instructors</h1>
      <div className="grid md:grid-cols-2 gap-10">
        {menu.map(item => (
          <Instructorscard
            key={item._id}
            item={item}
          />
        ))}
      </div>
     
    </section>
  );
};

export default AllInstructors;
