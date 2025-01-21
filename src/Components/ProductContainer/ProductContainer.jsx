import "./ProductContainer.css";

import {
  FavoriteBorderOutlinedIcon,
  StarOutlinedIcon,
} from "../../Utils/Icons";

function ProductContainer() {
  return (
    <div className="container product-container">
      <div className="row row-cols-3 justify-content-around gx-1">
        <div
          className=" col col-md-4 card mt-5"
          style={{ width: "30rem", padding: "2rem 2.4rem" }}
        >
          <p className="card-text">
            <FavoriteBorderOutlinedIcon className="product--icon wishlist" />
          </p>
          <img src="/TestImage.png" className="card-img-top" alt="test" />

          <div className="card-body">
            <div className="d-flex flex-row justify-content-between">
              <div>
                <p className="card-text product--type text-lighttext">
                  Reed Diffuser
                </p>
              </div>
              <div className="d-flex flex-row align-items-center">
                <div>
                  <p className="product--rating card-text">4.5</p>
                </div>
                <div>
                  <StarOutlinedIcon className="product--icon" />
                </div>
              </div>
            </div>
            <h5 className="card-title product--name text-textcolor">
              French Rose
            </h5>
            <h5 className="card-title product--pricing text-secondary">$450</h5>

            <a href="#" className="btn btn-primary custom-link text-white">
              add to cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductContainer;
