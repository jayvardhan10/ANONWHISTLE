import React from "react";

const insex = () => {
  return (
    <div
      className="mt-[7vh] mb-11 w-[60%] h-[80vh] p-[4vh] flex flex-col justify-center items-center
     bg-[rgba(225,225,225,0.3)] shadow-[0px_19px_38px_rgba(0,0,0,0.944),0px_10px_12px_rgba(0,0,0,0.939)]"
    >
      <h1 className="sm:text-2.5xl text-wrap md:text-3.5xl text-3xl font-serif font-bold">
        Welcom to Submit Proposal
      </h1>
      <div className="h-full flex flex-col justify-evenly items-center">
        <label
          for="image-upload"
          class="w-[80%] p-2 rounded-3xl border-2 border-solid border-gray-300 bg-gray-100 flex justify-center items-center cursor-pointer transition-all hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <span class="text-gray-700 font-medium">Upload a photo</span>
          <input
            id="image-upload"
            class="hidden"
            type="file"
            name="image"
            accept="image/*"
            placeholder="Upload a photo"
          />
        </label>
        <input
          className="text-center p-2 w-[80%] rounded-3xl border-2px border-solid border-black"
          type="text"
          placeholder="Enter your local Pincode"
        />
        <input
          className=" p-2 text-center rounded-2xl border-2px border-solid border-black"
          type="number"
          placeholder="Registration Date"
        />
        <textarea
          className="text-center rounded-2xl border-2px border-solid border-black"
          name="comment"
          rows="3"
          cols="50"
          placeholder="Describe the problem"
        ></textarea>

        <button
          className="w-lg hover:bg-zinc-100 font-serif  text-black  rounded-3xl pl-4 pt-1 pb-1 pr-4 bg-[rgba(225,225,225,0.3)] shadow-[0px_19px_38px_rgba(0,0,0,0.944),0px_10px_12px_rgba(0,0,0,0.939)]"
        >
          Verify Anon Aadhar for locality
        </button>
        <button
          className="w-lg hover:bg-zinc-100 font-serif  text-black  rounded-3xl pl-4 pt-1 pb-1 pr-4 bg-[rgba(225,225,225,0.3)] shadow-[0px_19px_38px_rgba(0,0,0,0.944),0px_10px_12px_rgba(0,0,0,0.939)]"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default insex;
