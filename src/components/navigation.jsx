import React from "react";

export const Navigation = (props) => {
  const  data  = props.data ? props.data : {};

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            Pyadev
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                {data.features && data.features.title ? data.features.title : "Features"}
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                {data.about && data.about.title ? data.about.title : "About"}
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                {data.services && data.services.title ? data.services.title : "Services"}
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                {data.portfolio && data.portfolio.title ? data.portfolio.title : "Gallery"}
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                {data.testimonials && data.testimonials.title ? data.testimonials.title : "Testimonials"}
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                {data.team && data.team.title ? data.team.title : "Team"}
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                {data.contact && data.contact.title ? data.contact.title : "Contact"}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
