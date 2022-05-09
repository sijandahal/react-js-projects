import React from "react";

export const Joke = ({
  title,
  punchline,
  upvotes,
  downvotes,
  cars,
  isPun,
  numbers,
  names,
}) => {
  return (
    <div className="jokes">
      {title && <h3> {title}</h3>}
      <p>{punchline} </p>
      <div className="votes">
        <span>{upvotes}</span> <span>{downvotes}</span>
      </div>
      <h5>{cars}</h5>
      <h2>{isPun ? "isPun" : "notPun"}</h2>
      <p>{numbers}</p>
      <p>{names}</p>
      <hr />
    </div>
  );
};
