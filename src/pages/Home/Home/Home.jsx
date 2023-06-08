import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularInstructors from "../PopularInstructors/PopularInstructors";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularInstructors></PopularInstructors>
        </div>
    );
};

export default Home;