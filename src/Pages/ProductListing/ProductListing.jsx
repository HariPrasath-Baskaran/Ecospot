import { useEffect, useState } from "react";
import ProductContainer from "../../Components/ProductContainer/ProductContainer";

function ProductListing() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`/data/homeDecorAirFreshener.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div className="container" style={{ padding: "0 10rem" }}>
      <div>
        <img
          src="/CoverImage/AirFreshener Cover.png"
          style={{ width: "95%", marginTop: "8rem" }}
        />
      </div>
      <div className="row row-cols-3">
        {data.map((airFreshner) => (
          <ProductContainer productData={airFreshner} />
        ))}
      </div>
    </div>
  );
}

export default ProductListing;
