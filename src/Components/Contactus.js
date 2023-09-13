import React from "react";

const Contactus = () => {
  return (
    <div>
      <section className="flex flex-col p-3">
        <h3 className="font-bold text-2xl ">Contact Us</h3>
        <div className=" font-bold text-xl">what did you like about ?<span className="text-green-400 pl-3">Where we can improve</span> </div>
        <input className="border border-black w-4/12 mb-4 p-1" placeholder="name"></input>
        <textarea className="h-4  p-2 border w-4/12 mb-4"  placeholder="Your feedback"></textarea>
        <button className="px-3 w-1/12 bg-primary text-white rounded-xl p-1">Submit</button>
      </section>
    </div>
  );
};
export default Contactus;