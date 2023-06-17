const Testimonials = () => {
  return (
    <div>
      <h1 className="text-center text-3xl mx-auto py-12">Testimonials</h1>
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-4">
          <p className="text-gray-700 mb-2">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
            odio sed turpis varius tincidunt nec ac ex."
          </p>
          <p className="text-gray-600 font-medium">John Doe</p>
          <p className="text-gray-500">Web Developer</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <p className="text-gray-700 mb-2">
            "Suspendisse potenti. Cras nec lectus consectetur, maximus lorem ac,
            fermentum nulla."
          </p>
          <p className="text-gray-600 font-medium">Jane Smith</p>
          <p className="text-gray-500">Designer</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <p className="text-gray-700 mb-2">
            "Pellentesque non ipsum vitae nunc rhoncus finibus at vitae nisl.
            Nunc interdum elit ac sapien aliquet, id consectetur nisl
            imperdiet."
          </p>
          <p className="text-gray-600 font-medium">Mark Johnson</p>
          <p className="text-gray-500">Marketing Specialist</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
