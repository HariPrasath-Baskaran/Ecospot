import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function TestingFile() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://678e5109a64c82aeb11ff2d4.mockapi.io/Ecospot/airfreshener`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  const handleClick = (id) => {
    console.log("id;", id);
    navigate(`/airfreshener/${id}`);
  };
  return (
    <div>
      {data.map((product) => (
        <li onClick={() => handleClick(product.id)}>{product.Name}</li>
      ))}
    </div>
  );
}

export default TestingFile;
