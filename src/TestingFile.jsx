import React from "react";
import MaterialCard from "./Components/MaterialCard/MaterialCard";
import SpecContainer from "./Components/SpecContainer/SpecContainer";
import Testimonial from "./Components/Testimonial/Testimonial";

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
      {/* <div className="row row-cols-1 ro-col-md-3 g-5">
        <SpecContainer />
        <SpecContainer />
        <SpecContainer />
        <SpecContainer />

      </div> */}
      <div class="d-flex flex-row mb-3">
        <div className="pe-3">
          <Testimonial
            reviewerImg={"/MainPage/Jennifer.png"}
            reviewerAltText={"customer-jnnifer"}
            reviewerName={"Jennfer"}
            reviewerPlace={"chennai"}
            reviewContent={
              "Product were very nice and quality. On time delivered and good quality of packaging."
            }
          />
        </div>
        <div className="pe-3">
          <Testimonial
            reviewerImg={"/MainPage/JohnSmith.png"}
            reviewerAltText={"customer-johnsmith"}
            reviewerName={"JohnSmith"}
            reviewerPlace={"Coimbatore"}
            reviewContent={
              "Product were very nice and quality. On time delivered and good quality of packaging."
            }
          />
        </div>
      </div>
    </div>
  );
}

export default TestingFile;
