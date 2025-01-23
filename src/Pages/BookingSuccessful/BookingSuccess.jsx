import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from "react-router-dom";
import "./BookingSuccess.css";

const BookingSuccess = () => {
  const location = useLocation();
  const { product, deliveryDate } = location.state || {};

  return (
    <div className="container mt-5 bookingsuccess-container">
      <div className="alert alert-success" role="alert">
        ✅ Booking Done Successfully
      </div>
      <div className="card shadow-lg p-3 mb-5 bg-white rounded">
        <div className="row g-2">
          {/* Product Image */}
          <div className="col-md-4">
            <img
              src={product.imgPath}
              alt={product.Name}
              className="img-fluid rounded-start"
            />
          </div>

          {/* Product Details */}
          <div className="col-md-5">
            <div className="card-body">
              <h5 className="card-title">{product.Name}</h5>
              <p className="card-text">
                <small className="text-muted">{product.Type}</small>
              </p>
              <p className="card-text">
                100% soy wax sachets perfumed with non-toxic essence Simply hang
                one of our lavender sachets with flower petals to your bathroom,
                room and let this work its magic.
              </p>
              <p className="card-text fs-5 text-danger">₹{product.Price}</p>
            </div>
          </div>

          {/* Delivery Details */}
          <div className="col-md-3 d-flex flex-column justify-content-center align-items-center">
            <h6 className="fw-bold">Delivery Detail:</h6>
            <p>Delivery On {deliveryDate}</p>
            <button className="btn btn-warning mb-2 w-75">
              Add delivery instructions
            </button>
            <button className="btn btn-outline-danger w-75">
              Cancel order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSuccess;
