import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const [activeSpec, setActiveSpec] = useState(null);

  const navigate = useNavigate();

  const { doctors } = useContext(AppContext);

  const applyFilter = (spec = null) => {
    if (spec) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === spec));
      setActiveSpec(spec);
    } else {
      setFilterDoc(doctors);
      setActiveSpec(null);
    }
  };

  useEffect(() => {
    if (speciality) {
      applyFilter(speciality);
    } else {
      setFilterDoc(doctors);
    }
  }, [doctors, speciality]);

  return (
    <div className="px-4 sm:px-8 lg:px-16">
      <p className="text-lg font-medium mb-6">
        Browse through the doctors specialist.
      </p>

      <div className="grid grid-cols-[200px_1fr] gap-8">
        {/* Sidebar Filter */}
        <div className="flex flex-col gap-3">
          {[
            "General physician",
            "Gynecologist",
            "Dermatologist",
            "Pediatricians",
            "Neurologist",
            "Gastroenterologist",
          ].map((spec, i) => (
            <button
              key={i}
              // onClick={() => Navigate()}
              onClick={() => {
                navigate(`/doctors/${spec}`)
                applyFilter(spec)}}
              className={`px-4 py-2 rounded-lg border text-left transition ${activeSpec === spec
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
            >
              {spec}
              
            </button>
          ))}

          {/* Show All doctors */}
          <button
            onClick={() =>{ 
              applyFilter(null)}}
            className={`px-4 py-2 rounded-lg border text-left transition ${activeSpec === null
                ? "bg-primary text-white border-primary"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
          >
            All
          </button>
        </div>

        {/* Doctor cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filterDoc.map((item, index) => (
            <div
              key={index}
              className="bg-blue-50 border border-gray-200 rounded-xl overflow-hidden shadow-sm cursor-pointer hover:-translate-y-2 transition-transform duration-300"
            >
              <img
                onClick={() => navigate(`/appointment/${item._id}`)}
                className="w-full h-56 object-contain"
                src={item.image}
                alt={item.name}
              />
              <div className="w-full p-4 text-center">
                <div className="flex items-center justify-center gap-2 text-sm text-green-500 mb-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Available</span>
                </div>
                <p className="font-semibold text-gray-800">{item.name}</p>
                <p className="text-gray-500 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
