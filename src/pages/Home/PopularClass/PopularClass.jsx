
import ClassCard from "../../Shared/ClassCard/ClassCard";
import useClasses from "../../../hooks/useClasses";

const PopularClass = () => {
  const [classes] = useClasses();

  return (
    <div className="flex justify-center">
      <section className="w-full max-w-6xl px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Popular Classes</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.slice(0, 6).map(clas => (
            <ClassCard key={clas._id} clas={clas} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default PopularClass;
