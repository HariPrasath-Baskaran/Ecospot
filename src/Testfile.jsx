import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Testfile() {
  const { id } = useParams();
  const [singleUser, setSingleUser] = useState({});

  console.log("Testfile:", id);
  useEffect(() => {
    fetch(`https://678e5109a64c82aeb11ff2d4.mockapi.io/Ecospot/airfreshener/`)
      .then((res) => res.json())
      .then((data) => {
        const productData = data.find((item) => item.id === Number(id));
        console.log("produc", productData);
      });
  }, [id]);
  return <div></div>;
}

export default Testfile;
