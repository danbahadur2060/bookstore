import React from "react";

const Stat = () => {
  return (
    <>
      <div className="flex h-32 w-full shadow-sm  bg-slate-800 flex-col flex-auto  gap-2 sm:flex-row  justify-around">
        <div className="bg-gray-800 flex p-6 gap-3  shadow-lg sm:-mt-7 h-28 items-center border border-gray-700 cursor-pointer hover:outline-2 rounded-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.6}
              stroke="currentColor"
              className="size-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-lg text-gray-300">Quick Delivery</h3>
            <p className="text-sm text-gray-400 sm:w-40 w-64  justify-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="bg-gray-800 flex p-6 gap-3 sm:-mt-7  h-28 items-center border border-gray-700 cursor-pointer hover:outline-2 rounded-lg">
          <div className="">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
</svg>

          </div>
          <div>
            <h3 className="text-lg text-gray-300">Secure Payment</h3>
            <p className="text-sm text-gray-400 sm:w-40 w-64 justify-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="bg-gray-800 flex p-6 gap-3 sm:-mt-7  h-28 items-center border border-gray-700 cursor-pointer hover:outline-2 rounded-lg">
          <div className="">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
</svg>


          </div>
          <div>
            <h3 className="text-lg text-gray-300">Secure Payment</h3>
            <p className="text-sm text-gray-400 sm:w-40 w-64  justify-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        
       
      </div>
    </>
  );
};

export default Stat;
