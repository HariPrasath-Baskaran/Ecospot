import React from "react";
import MaterialCard from "./Components/MaterialCard/MaterialCard";
import SpecContainer from "./Components/SpecContainer/SpecContainer";

function TestingFile() {
  return (
    <div className="container">
      {/* <div className="row row-cols-1 row-cols-md-3 g-4 ">
        <MaterialCard imgPath={"/MainPage/Bamboo.png"} imgTitle={"Bamboo"} />

        <MaterialCard imgPath={"/MainPage/Bamboo.png"} imgTitle={"Bamboo"} />
        <MaterialCard imgPath={"/MainPage/Bamboo.png"} imgTitle={"Bamboo"} />
        <MaterialCard imgPath={"/MainPage/Bamboo.png"} imgTitle={"Bamboo"} />
      </div> */}
      {/* <div className="container"> */}
      <div className="row row-cols-1 ro-col-md-3 g-5">
        <SpecContainer />
        <SpecContainer />
        <SpecContainer />
        <SpecContainer />

        {/* </div> */}
      </div>
    </div>
  );
}

export default TestingFile;
