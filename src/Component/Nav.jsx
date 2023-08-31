import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Nav = () => {
    const navigate = useNavigate();
    let total = useSelector((state) => state.totalCart);  
  return (
    <>
        <nav
      className="navbar navbar-expand-lg p-4 align-items-center"
      style={style.nav}
    >
      <div className="container-fluid">
        <img width={50} style={{borderRadius:"70%"}} src="https://static.vecteezy.com/system/resources/thumbnails/023/177/445/small/mall-logo-is-marketing-shopping-sales-business-and-company-logo-on-white-background-illustration-vector.jpg" alt="" />
        <a className="navbar-brand fs-3" href="#" style={{color:"floralwhite"}}>
          <h2 className="mt-3">Central Super Mall</h2> 
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item mx-5">
            <Link to="/" className="nav-link active text-light">
                Products
            </Link>

            </li>
            <li className="nav-item">
              <Link to="/addproducts" className="nav-link active text-light">
                Add a product
              </Link>
            </li>
          </ul>
          <div className="d-flex gap-5 position-relative">
            <img
              src="https://cdn.pixabay.com/photo/2014/04/02/10/53/shopping-cart-304843_1280.png"
              alt="error"
              width={"40rem"}
            onClick={() => navigate("/cart")}
            style={{cursor:"pointer"}}
            />
            {total ? (
              <p
                className="bg-white rounded-circle position-absolute d-flex align-items-center justify-content-center"
                style={{
                  width: "1.5rem",
                  height: "1.5rem",
                  top: "21%",
                  left: "20%",
                }}
              >
                {total}
              </p>
            ) : (
              ""
            )}
            <img
              src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=1024x1024&w=is&k=20&c=-mUWsTSENkugJ3qs5covpaj-bhYpxXY-v9RDpzsw504="
              alt="error"
              width={"40rem"}
              style={{filter:"invert(100%)"}}
            />
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}
const style = {
    nav: {
      backgroundColor: "gray",
    },
    navHead: {
      fontFamily: "var(--fontStyle)",
      color: "#f47289",
    },
  };
export default Nav