import axios from "axios";
import { useEffect, useState } from "react";

function Wishlist() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://679ae1b0747b09cdcccfe2c6.mockapi.io/project/wishlist")
      .then((res) => {
        setData(res.data);
      });
  }, []);
  console.log("data", data);
  return <div>hello</div>;
}

export default Wishlist;
