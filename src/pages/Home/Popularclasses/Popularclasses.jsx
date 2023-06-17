import React from "react";
import { useEffect, useState } from "react";

const Popularclasses = () => {
  const [classes, setClasses] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://assignment12-zeta.vercel.app/popularclasses")
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching popular classes:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <h1 className="text-center text-3xl mx-auto py-8">Popular Classes</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-10">
          {classes.map((myClass) => (
            <div key={myClass._id} className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src={myClass.image}
                  className="w-5/6 h-5/6"
                  alt={myClass.name}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{myClass.name}</h2>
                <h2 className="card-title">{myClass.instructor}</h2>
                <p>Available Seats: {myClass.availableSeats}</p>
                <p>Total Enrolled Students: {myClass.totalenrolledstudent}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Popularclasses;
