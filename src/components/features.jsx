import React from "react";

export const Features = (props) => {
  const data = props.data || {};
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>{data.title ? data.title : "Features"}</h2>
        </div>
        <div className="row">
          {data.features
            ? data.features.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-6 col-md-3">
                  {" "}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
