import React from "react";

function card({ item }) {
  console.log(item);
  return (
    <>
      <div className="m-3 card bg-base-100 shadow-xl gap-4 hover:scale-105 duration-300 dark:border">
        <figure>
          <img
            src={item.image}
            alt={item.name}
          />
        </figure>
        <div className="card-body bg-white dark:bg-slate-900 dark:text-white ">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.Title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline p-4">{item.price}</div>
            <div className="badge badge-outline hover:bg-pink-500 hover:text-white duration-200 p-4">Buy now</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default card;
