import Button from "../../Components/Buttons/Button";
import "./OrderSummary.css";

export const OrderSummary = ({ product, onConfirm }) => {
  const calculateDeliveryDate = (daysToAdd) => {
    const today = new Date();
    today.setDate(today.getDate() + daysToAdd);
    return today.toDateString(); // Format: "Wed Jan 24 2025"
  };

  const deliveryDate = calculateDeliveryDate(3);
  return (
    <div className="order-summary">
      <div className="d-flex justify-content-between align-items-center border p-3 rounded">
        {/* Product Image */}

        <img
          src={product.imgPath}
          alt={product.Name}
          className="img-fluid"
          style={{ maxWidth: "150px", borderRadius: "8px" }}
        />

        {/* Product Details */}
        <div className="flex-grow-1 mx-3  ">
          <h5 className="fw-bold">{product.Name}</h5>
          <p className="text-muted mb-1">{product.Type}</p>
          <p className="mb-1 fw-bold text-secondary">${product.Price}</p>
        </div>

        {/* Delivery Detail */}
        <div className="text-end">
          <h6>
            <strong>Delivery Detail:</strong>
          </h6>
          <p>{deliveryDate}</p>
        </div>
      </div>

      {/* Confirmation Button */}
      <Button
        addOnClasses="btn btn-primary mt-3 text-white btn-alignment"
        eventHandler={onConfirm}
        label={"Proceed to checkout"}
      ></Button>
    </div>
  );
};
