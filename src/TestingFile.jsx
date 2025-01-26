import React from "react";
import CartPage from "./Pages/Cart/Cart";

function TestingFile() {
  // useEffect(() => {
  //   fetch(`https://678e5109a64c82aeb11ff2d4.mockapi.io/Ecospot/airfreshener`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);

  // const handleClick = (id) => {
  //   console.log("id;", id);
  //   navigate(`/airfreshener/${id}`);
  // };
  return (
    <div className="contianer mt-5 px-4">
      <CartPage />
    </div>
  );
}

export default TestingFile;
