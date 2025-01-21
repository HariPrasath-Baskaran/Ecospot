import { useEffect, useState } from "react";
import "./ProductContainer.css";

import {
  FavoriteBorderOutlinedIcon,
  StarOutlinedIcon,
} from "../../Utils/Icons";
import { useNavigate } from "react-router-dom";

function ProductContainer({ coverImage, url }) {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${url}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, [url]);

  const handleProductClick = (id, imgPath) => {
    // console.log(url);
    // console.log(imgPath);
    const pathName = imgPath.slice(17, -13);
    // console.log("pathName", pathName);

    navigate(`/${pathName}/${id}`, {
      state: { url: url, data: data[id] },
    });
  };

  return (
    <div className="container">
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
              className=" col col-md-4 card mt-5"
              style={{ width: "30rem", padding: "2rem 2.4rem" }}
              onClick={() => {
                handleProductClick(productData.id, productData.imgPath);
                // console.log(productData.id);
              }}
            >
              <p className="card-text">
                <FavoriteBorderOutlinedIcon className="product--icon wishlist" />
              </p>
              <img
                src={productData.imgPath}
                className="card-img-top"
                alt="test"
              />

              <div className="card-body">
                <div className="d-flex flex-row justify-content-between">
                  <div>
                    <p className="card-text product--type text-lighttext">
                      {productData.Type}
                    </p>
                  </div>
                  <div className="d-flex flex-row align-items-center">
                    <div>
                      <p className="product--rating card-text">
                        {productData.Rating}
                      </p>
                    </div>
                    <div>
                      <StarOutlinedIcon className="product--icon" />
                    </div>
                  </div>
                </div>
                <h5 className="card-title product--name text-textcolor">
                  {productData.Name}
                </h5>
                <h5 className="card-title product--pricing text-secondary">
                  ${productData.Price}
                </h5>
                {productData.Stock ? (
                  <a
                    href="#"
                    className="btn btn-primary custom-link text-white"
                  >
                    add to cart
                  </a>
                ) : (
                  <a
                    href="#"
                    className="btn btn-primary  disabled custom-link text-white"
                  >
                    out of stock
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductContainer;
