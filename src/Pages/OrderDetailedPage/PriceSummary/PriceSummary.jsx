import "./PriceSummary.css";

function PriceSummary({ product }) {
  console.log(product);
  return (
    <div>
      <div className="container border border-1 rounded">
        <h3 className="price--heading">Price Summary</h3>
        <hr />
        <div className="price--detail">
          <p>
            <span>Product Amount:</span>${product.Price}
          </p>
          <p>
            <span>Delivery Charge:</span>${product.deliveryCharge}
          </p>
          <p>
            <span>Total Amount:</span>${product.Price + product.deliveryCharge}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PriceSummary;
