import { useState } from "react";
import { Helmet } from "react-helmet-async";
import SliderHome from "../Slider/SliderHome";
import Popularclasses from "../Popularclasses/Popularclasses";
import Popularinstructors from "../Popularinstructors/Popularinstructors";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <div className={isDarkTheme ? "bg-gray-200" : ""}>
      <Helmet>
        <title>Summer Camp School | Home</title>
      </Helmet>
      <button
        className="mx-auto flex justify-center my-10"
        onClick={toggleTheme}
      >
        {isDarkTheme ? "Switch to Light Theme" : "Switch to Dark Theme"}
      </button>
      <SliderHome />
      <Popularclasses />
      <Popularinstructors />
      <Testimonials />
    </div>
  );
};

export default Home;
