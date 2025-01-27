import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Accordian from "./Pages/OrderDetailedPage/OrderDetailed";

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
      <Accordian />
    </div>
  );
}

export default TestingFile;
