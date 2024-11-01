import React from 'react';

const Cards = (props) => {
  return (
    <div className="card bg-base-100 w-96 h-96 shadow-xl mx-auto">
      <figure className=" h-48">
        <img
          src={props.img}
          alt={props.name}
          className="  object-cover"
        />
      </figure>
      <div className="card-body text-center p-4">
        <h2 className="card-title text-lg font-semibold">{props.name}</h2>
        <p>{props.title}</p>
        <div className="card-actions justify-center mt-4">
          <button className="btn btn-primary">{props.video}</button>
          <button className="btn btn-secondary ml-2">{props.source}</button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
