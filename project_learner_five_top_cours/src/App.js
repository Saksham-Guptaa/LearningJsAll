import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { apiUrl, filterData } from './data';
import { toast } from "react-toastify";

const App = () => {
  const [courses, setCourses] = useState(null);
  const [category , setCategory] = useState(filterData[0].title)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(apiUrl);
        const output = await result.json();
        setCourses(output.data);
      } catch (error) {
        toast.error("Something went wrong");
      }
    };

    fetchData(); // Call the fetchData function to initiate the API request
  }, []);

  return (
    <div className="min-h-screen flex flex-col" >
      <div className="bg-bgDark2">
      <div>
        <Navbar />
      </div>
      <div> <Filter filterData={filterData} category = {category} setCategory = {setCategory} /> </div>
      <div className="w-11/12 max-w-[1200px] flex-wrap mx-auto flex justify-center items-center min-h-[50vh]"> <Cards courses={courses} category = {category} /> </div>
      </div>
    </div>
  );
};

export default App;
