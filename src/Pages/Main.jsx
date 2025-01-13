import Button from "../Components/Buttons/Button";
import Dropdown from "../Components/Dropdown/Dropdown";
import MaterialCard from "../Components/MaterialCard/MaterialCard";
import "./Main.css";

function Main() {
  return (
    <div className="main">
      {/* DropDown Menu */}
      <div className=" container-fluid bg-light d-flex justify-content-center">
        <Dropdown
          MainMenu={"All products"}
          SubMenu={["airfreshener", "mirror", "glass"]}
        />
        <Dropdown
          MainMenu={"Home Decor"}
          SubMenu={["airfreshener", "mirror", "glass"]}
        />
        <Dropdown
          MainMenu={"Daily Essentials"}
          SubMenu={["airfreshener", "mirror", "glass"]}
        />
        <Dropdown
          MainMenu={"cleaning Supplies"}
          SubMenu={["airfreshener", "mirror", "glass"]}
        />
        <Dropdown
          MainMenu={"Kitchen"}
          SubMenu={["airfreshener", "mirror", "glass"]}
        />
        <Dropdown
          MainMenu={"Makeup"}
          SubMenu={["airfreshener", "mirror", "glass"]}
        />{" "}
        <Dropdown
          MainMenu={"Gifts"}
          SubMenu={["airfreshener", "mirror", "glass"]}
        />
      </div>

      {/* Top container */}
      <div className="container-fluid p-0">
        <img
          src="/MainPage/mainimage.png"
          alt="main image"
          width="100%"
          height="50%"
        />
        <div className="carusol-content text-primary">
          <p>
            There is no <span>planet B,</span>
          </p>
          <p>
            let save & hand over to the <span>next generation</span>
          </p>
          <Button
            label={"Shop now"}
            addOnClasses={"btn-lg btn-primary text-white px-4"}
          />
        </div>
      </div>

      {/* our Story */}
      <div className="container-fluid px-0 padding-top bg-altlight">
        <div className="container">
          <div className="row align-items-center">
            <div className="col mt-5">
              <img
                src="/MainPage/Storyimage.png"
                alt="storyimage"
                style={{ width: "50%" }}
              />
            </div>

            <div className="col mt-5 story--leftalign">
              <h2 className="fw-bolder fs-1">Our Story</h2>
              <p>
                The app is the one-stop solution to buy the best Eco-friendly
                product. We made the research to find the best combination of
                product as user-friendly for customer and planet{" "}
                <a href="#" className="text-decoration-none">
                  Read More..
                </a>
              </p>
              <h3 className="mt-4 fs-2 text-primary">Our Mission</h3>
              <p>
                The make an environment clean and other life more better with
                our product.
              </p>
              <h3 className="mt-4 fs-2 text-primary">Our Vision</h3>
              <p>
                To create our next-Generation as plastic free environment and
                make greenish our earth.
              </p>
            </div>
          </div>
        </div>

        {/*Browse by material  */}

        <div className="container padding-top">
          <h3 className="padding-bottom material--heading">
            Browse by Materials
          </h3>
          <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
            <div style={{ width: "30rem" }}>
              <MaterialCard
                imgPath={"/MainPage/Bamboo.png"}
                imgTitle={"Bamboo"}
              />
            </div>
            <div style={{ width: "30rem" }}>
              <MaterialCard
                imgPath={"/MainPage/CoconutShell.png"}
                imgTitle={"Coconut Shell"}
              />
            </div>
            <div style={{ width: "30rem" }}>
              <MaterialCard
                imgPath={"/MainPage/Wooden.png"}
                imgTitle={"Wooden"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
