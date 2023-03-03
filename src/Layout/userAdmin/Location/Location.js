import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { homeIcon } from "../../../Components/icons/svgIcons";
import Navbar from "../../../Components/Navbar";
import { getAllLocation } from "../../../Redux/Actions/AdminAction";
import AddLocationModal from "../Modals/AddLocationModal";

const Location = () => {
  const [visibleModal, setVisibleModal] = useState("d-none");

  const [refresh, setRefresh] = useState("");

  const dispatch = useDispatch();

  const getLocations = useSelector((state) => state.locations);
  const { locationData } = getLocations;

  useEffect(() => {
    dispatch(getAllLocation());
  }, [refresh]);

  return (
    <div className="flex">
      <Navbar />
      <div className="locationPage  container">
        <div className="main-header-pages  ">
          <h1>All Locations</h1>
          <button onClick={() => setVisibleModal("d-block")}>Create</button>
        </div>
        <div className="main">
          <div className="items">
            {locationData?.map((item) => (
                <div className="item" key={item.location}>
                  {homeIcon}
                  <p>{item.location}</p>
                </div>
              ))
              .reverse()}
          </div>

          <AddLocationModal
            visibleModal={visibleModal}
            setVisibleModal={setVisibleModal}
            setRefresh={setRefresh}
          />
        </div>
      </div>
    </div>
  );
};

export default Location;
