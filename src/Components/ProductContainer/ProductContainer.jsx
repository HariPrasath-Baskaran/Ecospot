import { useEffect, useState } from "react";
import "./ProductContainer.css";

import {
  FavoriteBorderOutlinedIcon,
  FavoriteIcon,
  StarOutlinedIcon,
} from "../../Utils/Icons";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";
import axios from "axios";

function ProductContainer({ coverImage, url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch(`${url}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [url]);

  const handleProductClick = (id, imgPath) => {
    const pathName = imgPath.slice(17, -13);
    navigate(`/${pathName}/${id}`, {
      state: { url: url, data: data.find((item) => item.id === id) },
    });
  };
  const clickCartHandler = (id) => {
    const cartSelected = data.find((item) => item.id === id);
    axios
      .post(
        "https://679502dfaad755a134eafb70.mockapi.io/Project/cart",
        cartSelected
      )
      .then((response) =>
        console.log("Order submitted successfully:", response.data)
      )
      .catch((error) => console.error("Error in adding cart:", error));
  };

  return (
    <div className="container">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div style={{ padding: "0 9.5rem" }}>
            <img
              src={`/CoverImage/${coverImage}`}
              alt="coverimage"
              style={{ width: "100%", marginTop: "8rem" }}
            />
          </div>
          <div className="product-container">
            <div className="row row-cols-3 justify-content-between gx-3">
              {data.map((productData) => (
                <div
                  key={productData.id}
                  className="col col-md-4 card mt-5"
                  style={{ width: "30rem", padding: "2rem 2.4rem" }}
                >
                  <div>
                    <FavoriteIcon
                      className="productIcon wishlist"
                      style={{ color: "yellow" }}
                    />

                    <FavoriteBorderOutlinedIcon className="productIcon wishlist" />
                    <div
                      onClick={() =>
                        handleProductClick(productData.id, productData.imgPath)
                      }
                    >
                      <img
                        src={productData.imgPath}
                        className="card-img-top"
                        alt="test"
                      />
                      <div className="card-body">
                        <div className="d-flex flex-row justify-content-between">
                          <p className="card-text product--type text-lighttext">
                            {productData.Type}
                          </p>
                          <div className="d-flex flex-row align-items-center">
                            <p className="product--rating card-text">
                              {productData.Rating}
                            </p>
                            <StarOutlinedIcon className="productIcon" />
                          </div>
                        </div>
                        <h5 className="card-title product--name text-textcolor">
                          {productData.Name}
                        </h5>
                        <h5 className="card-title product--pricing text-secondary">
                          ${productData.Price}
                        </h5>
                      </div>
                    </div>
                    {productData.Stock ? (
                      <button
                        className="btn btn-primary custom-button text-white"
                        onClick={() => clickCartHandler(productData.id)}
                      >
                        Add to Cart
                      </button>
                    ) : (
                      <button className="btn btn-primary disabled custom-button text-white">
                        Out of Stock
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductContainer;
