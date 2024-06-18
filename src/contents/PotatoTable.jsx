import React from "react";
import Navbar from "../common/Navbar";
import "./potatotable.css"
import Footer from "../common/Footer";
const PotatoTable = () => {
  return (
    <>
      <div className="relative">
        <Navbar />
        <div className="relative w-full h-96">
          <img
            src="images/potato/potato-4.avif" // Replace with your image path
            alt="Potato in Uttar Pradesh"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center text-7xl justify-start pl-60 banner-head">
            <h1 className="text-white  font-bold">
              Potato in Uttar Pradesh
            </h1>
          </div>
        </div>
        <div className="max-w-5xl mx-auto bg-white rounded-lg ">
          <div className="p-5 text-gray-700 text-start">
          <h1 className="text-2xl font-bold">
              Potato in Uttar Pradesh
            </h1>
            <p>
              <span className="circular-book">Scientific name:</span>{" "}
              <i>Solanum tuberosum</i>
            </p>
            <p>
              <span className="circular-book">Area:</span> 3.92 lakh ha
            </p>
            <p>
              <span className="circular-book">Production:</span> 84.66 lakh t
            </p>
            <p>
              <span className="circular-book">Productivity:</span> 21.56 t/ha
            </p>
            <p>
              <span className="circular-book">Growing season:</span> Rabi
            </p>
            <p>
              <span className="circular-book">Major growing areas:</span> Agra,
              Aligarh, Allahabad, Badaun, Barabanki, Etawah, Faizabad,
              Farukhabad, Manpuri, Mathura, Moradabad
            </p>
            <p>
              <span className="circular-book">Ideal soil:</span> Well drained,
              sandy & medium loam, good aeration. pH: 5.5-7.5
            </p>
            <p>
              <span className="circular-book">Duration:</span> 90-100 days
            </p>
            <p>
              <span className="circular-book">Nutrition (per 100 g):</span>{" "}
              Carbohydrates-34 g, Protein-3.2 g, Fiber-2.3 g, Calcium-7.8 mg,
              Iron-0.5 mg, Magnesium-39 mg, Potassium-60 mg, Phosphorus-78 mg,
              Vitamin C-19 mg, Niacin-2.17 mg, Folic acid-14.2 mg
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-5xl p-5 mx-auto product-card">
        <div className="flex flex-col gap-2">
          <div>
            <div className="mt-5 flex gap-20 flex-wrap">
              <div className="flex-1 basis-80 h-fit flex flex-col  rounded-2xl bg-blue-50   ">
                <div className="p-6 w-full flex">
                  <div className="flex-1">
                    <div className="">
                      <h3 className="circular text-xl mt-3 text-start">
                        Major varieties -
                      </h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <div className=" w-fit pl-3 pr-3 hover:bg-blue-100 hover:border-blue-300 cursor-pointer text-black flex items-center justify-center rounded-3xl border-1 bg-white border-gray-300 border-2">
                          <h1 className="text-center poppins text-sm">
                            {" "}
                            Early
                          </h1>
                        </div>
                        <div className=" w-fit pl-3 pr-3 hover:bg-blue-100 hover:border-blue-300 cursor-pointer text-black flex items-center justify-center rounded-3xl border-1 bg-white border-gray-300 border-2">
                          <h1 className="text-center poppins text-sm">
                            {" "}
                            Medium
                          </h1>
                        </div>
                        <div className="w-fit pl-3 pr-3 hover:bg-blue-100 hover:border-blue-300 cursor-pointer text-black flex items-center justify-center rounded-3xl border-1 bg-white border-gray-300 border-2">
                          <h1 className="text-center poppins text-sm"> Late</h1>
                        </div>
                        <div className="w-fit pl-3 pr-3 hover:bg-blue-100 hover:border-blue-300 cursor-pointer text-black flex items-center justify-center rounded-3xl border-1 bg-white border-gray-300 border-2">
                          <h1 className="text-center poppins text-sm">
                            {" "}
                            Chips making/processing
                          </h1>
                        </div>
                        <div className="w-fit pl-3 pr-3 hover:bg-blue-100 hover:border-blue-300 cursor-pointer text-black flex items-center justify-center rounded-3xl border-1 bg-white border-gray-300 border-2">
                          <h1 className="text-center poppins text-sm">
                            {" "}
                            Special features
                          </h1>
                        </div>
                        <div className="w-fit pl-3 pr-3 hover:bg-blue-100 hover:border-blue-300 cursor-pointer text-black flex items-center justify-center rounded-3xl border-1 bg-white border-gray-300 border-2">
                          <h1 className="text-center poppins text-sm">
                            {" "}
                            Varietal gallery
                          </h1>
                        </div>
                        <div className="w-fit pl-3 pr-3 hover:bg-blue-100 hover:border-blue-300 cursor-pointer text-black flex items-center justify-center rounded-3xl border-1 bg-white border-gray-300 border-2">
                          <h1 className="text-center poppins text-sm">
                            {" "}
                            Land preparation
                          </h1>
                        </div>
                      </div>
                    </div>
                    <div className="mt-7">
                      <h3 className="circular  text-xl text-start">
                        Seed preparation-
                      </h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <div className="w-fit pl-3 pr-3 hover:bg-blue-100 hover:border-blue-300 cursor-pointer  text-black flex items-center justify-center rounded-3xl border-1 bg-white border-gray-300 border-2">
                          <h1 className="text-center poppins text-sm">
                            {" "}
                            Sowing
                          </h1>
                        </div>
                        <div className="w-fit pl-3 pr-3 hover:bg-blue-100 hover:border-blue-300 cursor-pointer text-black flex items-center justify-center rounded-3xl border-1 bg-white border-gray-300 border-2">
                          <h1 className="text-center poppins text-sm">
                            {" "}
                            Method of planting
                          </h1>
                        </div>
                        <div className="w-fit pl-3 pr-3 hover:bg-blue-100 hover:border-blue-300 cursor-pointer text-black flex items-center justify-center rounded-3xl border-1 bg-white border-gray-300 border-2">
                          <h1 className="text-center poppins text-sm">
                            {" "}
                            Manures & Fertilizers
                          </h1>
                        </div>
                      </div>
                    </div>
                    <div className="mt-7">
                      <h3 className="circular   text-xl  text-start">
                        {" "}
                        Nutrient deficiency-
                      </h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <div className="w-fit pl-3 pr-3 hover:bg-blue-100 hover:border-blue-300 cursor-pointer text-black flex items-center justify-center rounded-3xl border-1 bg-white border-gray-300 border-2">
                          <h1 className="text-center poppins text-sm">
                            {" "}
                            Copper
                          </h1>
                        </div>
                        <div className="w-fit pl-3 pr-3 hover:bg-blue-100 hover:border-blue-300 cursor-pointer text-black flex items-center justify-center rounded-3xl border-1 bg-white border-gray-300 border-2">
                          <h1 className="text-center poppins text-sm">
                            {" "}
                            Boron
                          </h1>
                        </div>
                        <div className="w-fit pl-3 pr-3 hover:bg-blue-100 hover:border-blue-300 cursor-pointer text-black flex items-center justify-center rounded-3xl border-1 bg-white border-gray-300 border-2">
                          <h1 className="text-center poppins text-sm"> Iron</h1>
                        </div>
                        <div className="w-fit pl-3 pr-3 hover:bg-blue-100 hover:border-blue-300 cursor-pointer text-black flex items-center justify-center rounded-3xl border-1 bg-white border-gray-300 border-2">
                          <h1 className="text-center poppins text-sm">
                            {" "}
                            Manganese
                          </h1>
                        </div>
                        <div className="w-fit pl-3 pr-3 hover:bg-blue-100 hover:border-blue-300 cursor-pointer text-black flex items-center justify-center rounded-3xl border-1 bg-white border-gray-300 border-2">
                          <h1 className="text-center poppins text-sm">
                            {" "}
                            Molybdenum
                          </h1>
                        </div>
                      </div>
                    </div>
                    <div className="mt-7">
                      <h3 className="circular   text-xl  text-start">
                        {" "}
                        Micronutrient spray-
                      </h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <div className="w-fit pl-3 pr-3 hover:bg-blue-100 hover:border-blue-300 cursor-pointer text-black flex items-center justify-center rounded-3xl border-1 bg-white border-gray-300 border-2">
                          <h1 className="text-center poppins text-sm">
                            {" "}
                            Earthing up & weed control
                          </h1>
                        </div>
                        <div className="w-fit pl-3 pr-3 hover:bg-blue-100 hover:border-blue-300 cursor-pointer text-black flex items-center justify-center rounded-3xl border-1 bg-white border-gray-300 border-2">
                          <h1 className="text-center poppins text-sm">
                            {" "}
                            Irrigation & intercropping
                          </h1>
                        </div>
                        <div className="w-fit pl-3 pr-3 hover:bg-blue-100 hover:border-blue-300 cursor-pointer text-black flex items-center justify-center rounded-3xl border-1 bg-white border-gray-300 border-2">
                          <h1 className="text-center poppins text-sm">
                            {" "}
                            Harvest
                          </h1>
                        </div>
                        <div className="w-fit pl-3 pr-3 hover:bg-blue-100 hover:border-blue-300 cursor-pointer text-black flex items-center justify-center rounded-3xl border-1 bg-white border-gray-300 border-2">
                          <h1 className="text-center poppins text-sm">
                            {" "}
                            Grading
                          </h1>
                        </div>
                        <div className="w-fit pl-3 pr-3 hover:bg-blue-100 hover:border-blue-300 cursor-pointer text-black flex items-center justify-center rounded-3xl border-1 bg-white border-gray-300 border-2">
                          <h1 className="text-center poppins text-sm">
                            {" "}
                            Storage
                          </h1>
                        </div>
                      </div>
                    </div>
                    <p className="poppins text-sm items-end mt-8 pr-4"></p>
                  </div>

                  {/* <div className="w-72 h-64 bg-gray-100 rounded-2xl flex justify-center items-center">
                  <div
                    className="w-full h-full bg-cover bg-center rounded-2xl"
                    style={{
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default PotatoTable;
