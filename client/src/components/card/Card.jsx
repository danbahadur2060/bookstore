import React from "react";

const Card = () => {
  return (
    <>
      <section className="p-14">
        <div className="w-full shadow-sm border-b-2 border-gray-700 sm:mb-4 mb-2">

        <h4 className="text-2xl cursor-pointer py-3">Books</h4>

        </div>
      <div className="card w-64 shadow-lg cursor-pointer hover:border hover:border-gray-500 hover:shadow-2xl border-gray-700 border">
  <figure className="overflow-hidden">
    <img className="hover:scale-110 transition-all"
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">Popular</div>
    </h2>
    <p className="text-sm">If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline p-4 cursor-pointer  hover:bg-transparent transition-all duration-100  ">View</div>
      <div className="badge badge-outline p-4 cursor-pointer bg-cyan-900 text-white hover:bg-transparent transition-all duration-100 ">Add  &nbsp;
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>

</div>
    </div>
  </div>
</div>


      </section>
    </>
  );
};

export default Card;
