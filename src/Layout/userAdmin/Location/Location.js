import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteIcon, homeIcon } from "../../../Components/icons/svgIcons";
import Navbar from "../../../Components/Navbar";
import {
  deleteLocation,
  getAllLocation,
} from "../../../Redux/Actions/AdminAction";
import AddLocationModal from "../Modals/AddLocationModal";
import DeleteModal from "../Modals/DeleteModal";

const Location = () => {
  const [visibleModal, setVisibleModal] = useState("d-none");
  const [deleteModalVisible, setDeleteModalVisible] = useState("d-none");
  const [location_id, setLocation_id] = useState();
  const [refresh, setRefresh] = useState("");

  const dispatch = useDispatch();

  const getLocations = useSelector((state) => state.locations);
  const { locationData } = getLocations;

  useEffect(() => {
    dispatch(getAllLocation());
  }, [refresh]);

  // handle set item for delete modal
  const handleSetItem = (item) => {
    setDeleteModalVisible("d-block");
    setLocation_id(item._id);
  };

  function handleDelete() {
    dispatch(deleteLocation(location_id, setRefresh));
    setDeleteModalVisible("d-none");
    setLocation_id();
  }
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
            {locationData
              ?.map((item) => (
                <div className="item" key={item._id}>
                  <span className="homeIcon"> {homeIcon}</span>
                  <p>{item.location}</p>
                  <div className="itemBtn" onClick={() => handleSetItem(item)}>
                    <span className="deleteBtn">
                      <i className="svg3">{deleteIcon}</i> Delete
                    </span>
                  </div>
                </div>
              ))
              .reverse()}
          </div>

          <AddLocationModal
            visibleModal={visibleModal}
            setVisibleModal={setVisibleModal}
            setRefresh={setRefresh}
          />
          <DeleteModal
            deleteModalVisible={deleteModalVisible}
            setDeleteModalVisible={setDeleteModalVisible}
            handleDelete={handleDelete}
            deletedName="location"
          />
        </div>
      </div>
    </div>
  );
};

export default Location;
