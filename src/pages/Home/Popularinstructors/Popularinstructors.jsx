import { useEffect, useState } from "react";

const Popularinstructors = () => {
  const [instructors, setInstructors] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://assignment12-zeta.vercel.app/popularinstructors")
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
        <div className="grid md:grid-cols-3 gap-10">
          {instructors.map((instructor) => (
            <div
              key={instructor._id}
              className="card w-96 bg-base-100 shadow-xl"
            >
              <figure>
                <img
                  src={instructor.photoURL}
                  className="w-5/6 h-5/6"
                  alt={instructor.name}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Instructor Name :{instructor.name}
                </h2>
                <h3 className="card-title">Email :{instructor.email}</h3>
                <h3 className="card-title">{instructor.instructor}</h3>

                <p>Enrolled Students: {instructor.enrolledstudent}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Popularinstructors;
