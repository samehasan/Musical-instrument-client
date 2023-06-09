
// import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Instructorscard from "../../Shared/Instructorscard/Instructorscard";
import useInstructors from "../../../hooks/useInstructors";

const PopularInstructors = () => {
  const [menu] = useInstructors();

  return (

    
    <section className="mb-12 text-center ">
        <h1 className="mb-5 text-xl font-bold">Popular Instructors</h1>
      <div className="grid md:grid-cols-2 gap-10">
        {
          menu.slice(0, 6).map(item => (
            <Instructorscard
              key={item._id}
              item={item}
            />
          ))
        }
      </div>
     
    </section>
  );
};

export default PopularInstructors;
