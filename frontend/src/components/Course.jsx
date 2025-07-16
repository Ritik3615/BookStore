// import { list } from "postcss";
import React from "react";
import List from "../../public/List.json";
import Card from "./Card";
import { Link } from "react-router-dom";

function Course() {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto md:px-20 px-4 container">
        <div className="mt-10 items-center justify-center text-center">
          <h1 className="text-2xl font-bold">
            We are Delighted to have you{" "}
            <span className="text-pink-500"> Here :)</span>
          </h1>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
            corrupti! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Deleniti facere iste, consequatur, magnam ea perspiciatis reiciendis
            quis vitae non repellendus perferendis labore beatae fuga earum
            aperiam assumenda maiores esse fugiat.
          </p>
          <Link to="/">
            <button className="bg-pink-500 px-2 mt-5 rounded-10 text-white rounded-lg hover:bg-pink-800 duration-300">
              back
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 w-full mt-10">
          {List.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
