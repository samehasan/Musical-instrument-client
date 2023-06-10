import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularClass from "../PopularClass/PopularClass";
import PopularInstructors from "../PopularInstructors/PopularInstructors";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularClass></PopularClass>
            <PopularInstructors></PopularInstructors>
        </div>
    );
};

export default Home;