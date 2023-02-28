import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Navbar from "../../../Components/Navbar";
import userImg from "../../../images/navbar-img/userImg.png";
import { getOneGroup } from "../../../Redux/Actions/AdminAction";
import AddGroupTimeModal from "../Modals/AddGroupTimeModal";
import AddStudentToGroupModal from "../Modals/AddStudentToGroupModal";

function GroupStudents() {
  const [visibleModal, setVisibleModal] = useState("d-none");
  const [visibleModalTwo, setVisibleModalTwo] = useState("d-none");
  const [refresh, setRefresh] = useState("");
  const { name } = useParams();
  // const { goBack } = useHistory;
  const { token } = useParams();

  const dispatch = useDispatch();

  const getGroup = useSelector((state) => state.groupStudents);
  const { data } = getGroup;

  

  useEffect(() => {
    dispatch(getOneGroup(token));
  }, [refresh]);

  return (
    <div className="flex">
      <Navbar />
      <div className="studentsPage main-box container">
        <div className="main-header-pages ">
          <h1>All Students </h1>
          <button onClick={() => setVisibleModalTwo('d-block')}>Add Group Time</button>
          <button onClick={() => setVisibleModal("d-block")}>
            Add Student
          </button>
        </div>
        <div className="main">
          <div className="items">
            {data?.group?.students?.length == 0 && <h1>Not Students</h1>}

            {data ? (
              data?.group?.students
                .map((item) => (
                  <div className="item" key={item._id}>
                    <div className="title">
                      <img src={userImg} alt="" />
                      <div className="text-box">
                        <h3>{`${item.student?.surname} ${" "} ${
                          item.student.name
                        }`}</h3>

                        <p>
                          <span>Student</span> <span>Points 20993</span>
                        </p>
                      </div>
                    </div>
                    <div className="item-content">
                      <p>
                        <span>Email:</span>
                        <span>{item.student?.email}</span>
                      </p>
                    </div>
                  </div>
                ))
                .reverse()
            ) : (
              <h1>LOADING . . .</h1>
            )}
          </div>
        </div>
        <AddStudentToGroupModal
          visibleModal={visibleModal}
          setVisibleModal={setVisibleModal}
          setRefresh={setRefresh}
          refresh={refresh}
          token={token}
        />

        <AddGroupTimeModal
          visibleModal={visibleModalTwo}
          setVisibleModal={setVisibleModalTwo}
          setRefresh={setRefresh}
          refresh={refresh}
        />
      </div>
    </div>
  );
}

export default GroupStudents;
