import { useState } from 'react';
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularClass from "../PopularClass/PopularClass";
import PopularInstructors from '../PopularInstructors/PopularInstructors';

const Home = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const themeStyles = {
    light: {
      backgroundColor: 'white',
      color: 'black',
    },
    dark: {
      backgroundColor: 'black',
      color: 'white',
    },
  };

  return (
    <div style={themeStyles[theme]}>
      <div className='text-center'>
      <button className='btn btn-warning' onClick={toggleTheme}>
        {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
      </button>
        <Banner></Banner>
        <Category></Category>
        <PopularClass></PopularClass>
        <PopularInstructors></PopularInstructors>
      </div>

    </div>
  );
};

export default Home;
