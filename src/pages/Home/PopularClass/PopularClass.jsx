
// import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ClassCard from "../../Shared/ClassCard/ClassCard";
import useClasses from "../../../hooks/useClasses";

const PopularClass = () => {
  const [classes] = useClasses();

  return (

    
    <section className="mb-12 text-center ">
        <h1 className="mb-5 text-xl font-bold">Popular Class</h1>
      <div className="grid md:grid-cols-2 gap-10">
        {
          classes.slice(0, 6).map(clas => (
            <ClassCard
              key={clas._id}
              clas={clas}
            />
          ))
        }
      </div>
     
    </section>
  );
};

export default PopularClass;
