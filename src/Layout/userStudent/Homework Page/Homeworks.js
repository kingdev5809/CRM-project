import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getHomework, getOneGroup } from "../../../Redux/Actions/StudentAction";
import HomeworksItem from "./components/HomeworksItem";
function Homeworks({ group_id, teacher }) {
  const [rate, setRate] = useState(false);
  const dispatch = useDispatch();
  const { token } = useParams();

  const getGroup = useSelector((state) => state.oneGroup);
  const { oneGroupData } = getGroup;

  const user = JSON.parse(localStorage.getItem("userInfo"));

  useEffect(() => {
    if (!group_id) {
      dispatch(getHomework(token));
    } else {
      dispatch(getHomework(group_id));
    }
  }, [group_id]);

  // console.log(user);
  const handleCheckRate = (item) => {
    if (Object.values(item.students).includes("Fronted")) {
      console.log(true);
    } else {
      console.log(false);
    }
  };
  return (
    <div className="homework messages-cards">
      <div className="flex">
        <h1>Homeworks</h1>
      </div>
      <div className="items">
        {group_id ? "" : <h1>Choose group</h1>}
        {oneGroupData?.map((item) => (
          <HomeworksItem
            item={item}
            teacher={teacher}
            handleCheckRate={handleCheckRate}
          />
        ))}
      </div>
    </div>
  );
}

export default Homeworks;
