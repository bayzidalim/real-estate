import React from "react";
import { useParams } from "react-router-dom";
import { properties } from "../data";
import { BiBath, BiBed } from "react-icons/bi";
import { FaLandmark } from "react-icons/fa";

const EstateDetails = () => {
  // extract id from the url parameter
  const { id } = useParams();

// Find the house details based on the id from the route
  const house = properties.find((house) => house.id === parseInt(id));

  return (
    <div className="w-4/5 mx-auto mt-8">
      {/* Property name, price and location */}
      <div className="flex justify-between text-emerald-500 text-3xl font-bold">
        <h2 >{house.name} </h2>
        <p className="text-gray-600 text-4xl">${house.price} </p>
      </div>
      <h3 className="text-xl text-gray-500 mt-2 mb-4">{house.country} </h3>
      <hr className="border-gray-300 my-4"/>

      {/* Property features */}
      <div className="flex justify-between p-5 text-lg font-semibold text-black">
        <p className="flex items-center">
          <BiBed className="mr-2"/> {house.beds}{" "}Beds
        </p>
        <p className="flex items-center">
          <BiBath className="mr-2"/> {house.baths}{" "}Baths
        </p>
        <p className="flex items-center">
          <FaLandmark className="mr-2"/> {house.property}{" "}
        </p>
      </div>
      <hr className="border-gray-300 my-4"/>

      {/* Propety image */}
      <img src={house.image} alt="" className="w-full h-[500px] mt-4 object-cover rounded-lg"/>

      <h2 className="text-2xl font-semibold mt-6">Property Description</h2>

      <div className="grid grid-cols-2 gap-6 mt-8 mb-6">
        <div>
          <p className="text-gray-600">PROPERTY TYPE</p>
          <h4 className="text-lg font-medium">{house.property} </h4>
        </div>

        <div>
          <p className="text-gray-600">STATUS</p>
          <h4 className="text-lg font-medium">Available</h4>
        </div>

        <div>
          <p className="text-gray-600">YEAR BUILT</p>
          <h4 className="text-lg font-medium">2022</h4>
        </div>

        <div>
          <p className="text-gray-600">PROPERTY ID</p>
          <h4 className="text-lg font-medium">GJKHKGYKSGVJ467</h4>
        </div>
      </div>
      <hr />

      {/* Property long description */}
      <p className="text-gray-700 leading-relaxed mb-4">{house.description} </p>
      <p className="text-gray-700 leading-relaxed mb-4">{house.description} </p>
      <p className="text-gray-700 leading-relaxed mb-4">{house.description} </p>
      <p className="text-gray-700 leading-relaxed mb-4">{house.description} </p>

      {/* Contact Form */}
      <div className="max-w-3xl p-6 border border-gray-300 rounded-lg shadow-md mt-8">
        <p className="text-center text-gray-600 mb-4">Please fill the form for property inspection</p>
        <form >
          <h2 className="text-center text-2xl font-semibold mb-6">Book An Inspection</h2>
          <div className="mb-4">
            <label className="block font-semibold"> Full Name *</label>
            <div className="flex gap-4">
              <input type="text" className="w-1/2 p-2 border border-gray-300 rounded-md" placeholder="First Name" required/>
              <input type="text" className="w-1/2 p-2 border border-gray-300 rounded-md" placeholder="Last Name" required/>
            </div>
          </div>

          <div className="mb-4">
            <label className="block font-semibold"> E-mail *</label>
            <input type="email" className="w-full p-2 border border-gray-300 rounded-md" placeholder="example@gmail.com"/>
          </div>

          <div className="mb-4">
            <label className="block font-semibold"> Messages</label>
            <textarea name="message" placeholder="Hi, I'm intrested in this property" className="w-full p-2 border border-gray-300 rounded-md h-24 resize-none"></textarea>
          </div>

          <button className="w-full p-3 bg-emerald-500 text-white font-semibold rounded-md hover:bg-cyan-600 transition"> Submit</button>
        </form>
      </div>
    </div>
  );
};

export default EstateDetails;
