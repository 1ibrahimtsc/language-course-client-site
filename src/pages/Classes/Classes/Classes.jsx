import { useContext } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useClasses from "../../../hooks/useClasses";
import { AuthContext } from "../../../providers/AuthProvider";
import useAdmin from "../../../hooks/useAdmin";
import useInstructor from "../../../hooks/useInstructor";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "../../../hooks/useCart";

const Classes = () => {
  const [cart, refetch] = useCart();
  const [classes, ,] = useClasses();
  const [axiosSecure] = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  const handleAddToCart = (classItem) => {
    const classesExist = cart.filter(
      (cartItem) => cartItem.classId === classItem._id
    );

    if (user && user.email) {
      const cartItem = {
        classId: classItem._id,
        name: classItem.name,
        instructorEmail: classItem.instructorEmail,
        image: classItem.image,
        price: classItem.price,
        email: user.email,
      };

      if (classItem.availableSeats === 0) {
        // alert("This class is full");
      } else if (isAdmin || isInstructor) {
        alert("You cannot select this class");
      } else if (classesExist.length > 0) {
        Swal.fire("This class already selected!");
      } else {
        // TODO: Select class

        axiosSecure
          .post(`/carts?email=${user?.email}`, cartItem)
          .then((data) => {
            if (data.data.insertedId) {
              refetch();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Class selected successfully.",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      }
    } else {
      Swal.fire({
        title: "Please login to select the class",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          Navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="grid md:grid-cols-3 gap-10">
      {classes
        .filter((classItem) => classItem.status === "approved")
        .map((classItem, index) => (
          <div
            key={index}
            className={`card bg-base-400 w-96 shadow-xl ${
              classItem.availableSeats === 0 ? "bg-red-400" : ""
            }`}
          >
            <figure>
              <img
                className="w-5/6 h-5/6"
                src={classItem.image}
                alt="Class Image"
              />
            </figure>

            <div className="card-body">
              <h2 className="card-title">{classItem.name}</h2>
              <p>Instructor: {classItem.instructor}</p>
              <p>Available Seats: {classItem.availableSeats}</p>
              <p>Price: {classItem.price}</p>
              {!user && <p>Please log in to select this class</p>}

              {user && (
                <div className="card-actions justify-end">
                  <button
                    className="btn btn-primary"
                    disabled={
                      classItem.availableSeats === 0 || isAdmin || isInstructor
                    }
                    onClick={() => handleAddToCart(classItem)}
                  >
                    Select Class
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Classes;
