import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 bg-opacity-50 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-4">Summer Camp School</h3>
          </div>
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Contact Information</h3>
            <p>
              <i className="fa fa-phone mr-2"></i> Phone: +123456789
            </p>
            <p>
              <i className="fa fa-envelope mr-2"></i> Email: contact@example.com
            </p>
            <p>
              <i className="fa fa-map-marker mr-2"></i> Address: 123 Street,
              City, Country
            </p>
          </div>
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="list-none">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/instructors">Instructors</Link>
              </li>
              <li>
                <Link to="/Classes">Classes</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-2">
              <a
                href="#"
                className="text-white hover:text-gray-400 transition-colors duration-300"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-400 transition-colors duration-300"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-400 transition-colors duration-300"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-400 transition-colors duration-300"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-700" />
        <div className="text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Summer Camp School. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
