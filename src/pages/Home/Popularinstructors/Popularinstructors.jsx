import { useEffect, useState } from "react";

const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/popularinstructors")
      .then((res) => res.json())
      .then((data) => {
        setInstructors(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching popular instructors:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <h1 className="text-center text-3xl mx-auto py-8">Popular Instructors</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {instructors.map((instructor) => (
            <div
              key={instructor._id}
              className="card w-full md:w-96 bg-base-100 shadow-xl"
            >
              <figure>
                <img
                  src={instructor.photoURL}
                  className="w-full h-auto"
                  alt={instructor.name}
                />
              </figure>
              <div className="card-body p-4">
                <h2 className="card-title text-lg font-semibold">
                  Instructor Name: {instructor.name}
                </h2>
                <h3 className="card-title">Email: {instructor.email}</h3>
                <p>Enrolled Students: {instructor.enrolledstudent}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PopularInstructors;
