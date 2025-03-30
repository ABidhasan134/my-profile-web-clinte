import React from "react";

const TitleAndSub = ({ title, subtitle }) => {
  return (
    <div className="grid justify-center text-center my-6 py-5">
      <h1 className="text-5xl font-bold text-blue-400">{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

export default TitleAndSub;
