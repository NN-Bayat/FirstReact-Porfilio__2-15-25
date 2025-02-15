import React from "react";

const Project = () => {
  return (
    <div
      id="projects"
      className="min-h-screen w-full flex flex-col items-center justify-center gap-20 p-5 sm:p-10 md:p-20"
    >
      <h1 className=" text-center text-5xl font-light">Projects</h1>

      <div className=" grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        <div className=" text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-6 border-teal-500 rounded-lg hover:bg-teal-50">
          <h1 className="text-3xl font-semibold">Project 1</h1>
          <h3 className="text-xl text-gray-700">Tech Stack</h3>
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            blanditiis nesciunt. Fugiat sapiente reiciendis quos accusantium
            velit?
          </p>
        </div>
        <div className=" text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-6 border-teal-500 rounded-lg hover:bg-teal-50">
          <h1 className="text-3xl font-semibold">Project 2</h1>
          <h3 className="text-xl text-gray-700">Tech Stack</h3>
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            repudiandae. Fugiat sapiente reiciendis quos accusantium velit?
          </p>
        </div>
        <div className=" text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-6 border-teal-500 rounded-lg hover:bg-teal-50">
          <h1 className="text-3xl font-semibold">Project 3</h1>
          <h3 className="text-xl text-gray-700">Tech Stack</h3>
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor consectetur adipisicing elit. Optio blanditiis
            nesciunt repudiandae. Fugiat sapiente reiciendis quos accusantium
            velit?
          </p>
        </div>
        <div className=" text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-6 border-teal-500 rounded-lg hover:bg-teal-50">
          <h1 className="text-3xl font-semibold">Project 4</h1>
          <h3 className="text-xl text-gray-700">Tech Stack</h3>
          <p className="text-sm text-gray-600">
            Lorem ipsum sit amet consectetur adipisicing elit. Optio blanditiis
            nesciunt repudiandae. Fugiat sapiente reiciendis quos velit?
          </p>
        </div>
        <div className=" text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-6 border-teal-500 rounded-lg hover:bg-teal-50">
          <h1 className="text-3xl font-semibold">Project 5</h1>
          <h3 className="text-xl text-gray-700">Tech Stack</h3>
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet adipisicing elit. Optio blanditiis
            nesciunt repudiandae. Fugiat sapiente reiciendis quos accusantium
            velit?
          </p>
        </div>
        <div className=" text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-6 border-teal-500 rounded-lg hover:bg-teal-50">
          <h1 className="text-3xl font-semibold">Project 6</h1>
          <h3 className="text-xl text-gray-700">Tech Stack</h3>
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing blanditiis
            nesciunt repudiandae. Fugiat sapiente reiciendis quos accusantium
            velit?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
