import Link from "next/link";
import React from "react";
 
const Blogcard = (data) => {
  const { id, title, image } = data;
  return (
    <>
      <div className="col-sm-4 mb-3 mb-sm-0 mt-3">
        <div className="card">
          <img
            src={`https://www.carlelo.com/laravel/public/uploads/${image}`}
            className="card-img-top"
            alt="..."
          ></img>
          <div className="card-body">
            <h5 className="card-title">{data.brands.name}</h5>
            <p className="card-text">
            {title}
            </p>
            <Link href={`${data.brands.slug}-cars/${data.slug}`} className="btn btn-primary">
            Details Page
            </Link>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogcard;
