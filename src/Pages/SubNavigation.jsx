import Dropdown from "../Components/Dropdown/Dropdown";

function SubNavigation() {
  return (
    <>
      <div
        className=" container-fluid bg-light d-flex justify-content-center position-sticky"
        style={{ top: "54px", zIndex: 1, marginBottom: "0.5rem" }}
      >
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
    </>
  );
}

export default SubNavigation;
