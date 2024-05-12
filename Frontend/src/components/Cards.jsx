import React from "react";

const Cards = ({item}) => {
    // console.log(item);
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-92 bg-base-100 shadow-xl">
          <figure style={{ width: '100%', height: '100%' }}>
            <img
              src={item.image}
              alt="Books"
              style={{ width: '100%', height: '379px', objectFit: 'cover' }}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">₹{item.price}</div>
              <div className="badge badge-outline hover:bg-pink-500 hover:text-white cursor-pointer">Buy now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;